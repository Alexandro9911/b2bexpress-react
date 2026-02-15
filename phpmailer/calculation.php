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

$required = ['cargo', 'from', 'to', 'weight', 'volume', 'date', 'name', 'phone'];
foreach ($required as $field) {
    if (empty(trim($data[$field])) && $field !== 'date') {
        http_response_code(400);
        echo json_encode(['success' => false, 'message' => "Поле $field обязательно"]);
        exit;
    }
}

if (empty($data['date'])) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Поле date обязательно']);
    exit;
}

$date = date('d.m.Y', strtotime($data['date']));

// Подключаем PHPMailer
require __DIR__ . '/PHPMailer/src/Exception.php';
require __DIR__ . '/PHPMailer/src/PHPMailer.php';
require __DIR__ . '/PHPMailer/src/SMTP.php';

use PHPMailer\PHPMailer\PHPMailer;

// Загружаем .env
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
    $mail->addAddress($env['MAIL_FROM']);

    $mail->Subject = 'Новая заявка на расчёт';
    $mail->Body = "
        <h2>Заявка на расчёт стоимости</h2>
        <p><strong>Груз:</strong> {$data['cargo']}</p>
        <p><strong>Откуда:</strong> {$data['from']}</p>
        <p><strong>Куда:</strong> {$data['to']}</p>
        <p><strong>Вес:</strong> {$data['weight']} кг</p>
        <p><strong>Объём:</strong> {$data['volume']} м³</p>
        <p><strong>Дата загрузки:</strong> $date</p>
        <p><strong>Имя:</strong> {$data['name']}</p>
        <p><strong>Телефон:</strong> {$data['phone']}</p>
    ";

    $mail->send();
    echo json_encode(['success' => true, 'message' => 'Заявка отправлена']);
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Ошибка отправки: ' . $mail->ErrorInfo]);
}