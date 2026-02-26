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

$required = ['name', 'phone', 'direction'];
foreach ($required as $field) {
    if (empty(trim($data[$field]))) {
        http_response_code(400);
        echo json_encode(['success' => false, 'message' => "Поле $field обязательно"]);
        exit;
    }
}

// Проверка тарифа, если выбрана франшиза
if ($data['direction'] === 'Мир Логистики (франшиза)' && (empty(trim($data['tariff'])) || !isset($data['tariff']))) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Тариф обязателен для направления "Мир Логистики (франшиза)"']);
    exit;
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

    // Формируем тело письма
    $tariffInfo = '';
    if (!empty($data['tariff'])) {
        $tariffInfo = "<p><strong>Тариф:</strong> {$data['tariff']}</p>";
    }

    $mail->Subject = 'Новый запрос от инвестора';
    $mail->Body = "
        <h2>Новый запрос от инвестора</h2>
        <p><strong>Имя:</strong> {$data['name']}</p>
        <p><strong>Телефон:</strong> {$data['phone']}</p>
        <p><strong>Направление:</strong> {$data['direction']}</p>
        {$tariffInfo}
    ";

    $mail->send();
    echo json_encode(['success' => true, 'message' => 'Заявка успешно отправлена']);
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Ошибка отправки: ' . $mail->ErrorInfo]);
}