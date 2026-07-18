<?php
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo json_encode(['success' => false, 'message' => 'Invalid request method.']);
    exit;
}

$name    = trim($_POST['name'] ?? '');
$email   = trim($_POST['email'] ?? '');
$subject = trim($_POST['subject'] ?? '');
$message = trim($_POST['message'] ?? '');

$errors = [];
if ($name === '') $errors[] = 'Name is required.';
if ($email === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) $errors[] = 'A valid email is required.';
if ($subject === '') $errors[] = 'Subject is required.';
if ($message === '') $errors[] = 'Message is required.';

if (!empty($errors)) {
    echo json_encode(['success' => false, 'message' => implode(' ', $errors)]);
    exit;
}

$to = 'Shadabbelim008@gmail.com';
$headers = "From: $email\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=UTF-8\r\n";

$body = "
<html>
<body style='font-family: Arial, sans-serif; padding: 20px;'>
    <h2 style='color: #6C63FF;'>Portfolio Contact</h2>
    <table style='width: 100%; border-collapse: collapse;'>
        <tr><td style='padding: 8px; font-weight: bold;'>Name:</td><td style='padding: 8px;'>" . htmlspecialchars($name, ENT_QUOTES, 'UTF-8') . "</td></tr>
        <tr><td style='padding: 8px; font-weight: bold;'>Email:</td><td style='padding: 8px;'>" . htmlspecialchars($email, ENT_QUOTES, 'UTF-8') . "</td></tr>
        <tr><td style='padding: 8px; font-weight: bold;'>Subject:</td><td style='padding: 8px;'>" . htmlspecialchars($subject, ENT_QUOTES, 'UTF-8') . "</td></tr>
    </table>
    <hr style='margin: 20px 0;'>
    <h3>Message:</h3>
    <p style='line-height: 1.6;'>" . nl2br(htmlspecialchars($message, ENT_QUOTES, 'UTF-8')) . "</p>
</body>
</html>";

$success = mail($to, "Portfolio Contact: $subject", $body, $headers);

if ($success) {
    echo json_encode(['success' => true, 'message' => 'Thank you! Your message has been sent successfully.']);
} else {
    echo json_encode(['success' => false, 'message' => 'Failed to send message. Please try again later.']);
}
