<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Метод не разрешён']);
    exit;
}

$data = json_decode(file_get_contents('php://input'), true);

$required = ['company', 'name', 'phone', 'review'];
foreach ($required as $field) {
    if (empty(trim($data[$field]))) {
        http_response_code(400);
        echo json_encode(['success' => false, 'message' => "Поле $field обязательно"]);
        exit;
    }
}

// Подключаем PHPMailer вручную
require __DIR__ . '/PHPMailer/src/Exception.php';
require __DIR__ . '/PHPMailer/src/PHPMailer.php';
require __DIR__ . '/PHPMailer/src/SMTP.php';

use PHPMailer\PHPMailer\PHPMailer;

// Загружаем настройки
if (!file_exists(__DIR__ . '/.env')) {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => '.env файл не найден']);
    exit;
}

$env = parse_ini_file(__DIR__ . '/.env');

$mail = new PHPMailer(true);
try {
    $mail->isSMTP();
    $mail->Host       = $env['MAIL_HOST'];
    $mail->SMTPAuth   = true;
    $mail->Username   = $env['MAIL_USERNAME'];
    $mail->Password   = $env['MAIL_PASSWORD'];
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port       = 587;
    $mail->CharSet    = 'UTF-8';
    $mail->isHTML(true);

    $mail->setFrom($env['MAIL_FROM'], $env['MAIL_NAME']);
    $mail->addAddress($env['MAIL_FROM']); // Отправляем себе

    $mail->Subject = 'Новый отзыв';
    $mail->Body = "
        <h2>Новый отзыв</h2>
        <p><strong>Компания:</strong> {$data['company']}</p>
        <p><strong>Имя:</strong> {$data['name']}</p>
        <p><strong>Телефон:</strong> {$data['phone']}</p>
        <p><strong>Отзыв:</strong><br>{$data['review']}</p>
    ";

    $mail->send();
    echo json_encode(['success' => true, 'message' => 'Отзыв отправлен']);
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Ошибка отправки: ' . $mail->ErrorInfo]);
}