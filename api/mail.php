<?php
/**
 * Contact form mailer.
 *
 * Receives a JSON POST from the site contact form and sends two
 * HTML formatted emails (via Gmail SMTP) with the brand logo:
 *   1. Admin notification -> mohammad.arbaz001@gmail.com
 *   2. Confirmation       -> the customer's email address
 *
 * Response contract (consumed by src/components/ContactForm.jsx):
 *   { "status": "success"|"error", "message": "..." }
 */

header("Access-Control-Allow-Origin: https://taxaccolega.co.uk");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(["status" => "error", "message" => "Method Not Allowed"]);
    exit();
}

/* ------------------------------------------------------------------ */
/* Configuration                                                       */
/* ------------------------------------------------------------------ */
const ADMIN_EMAIL   = 'mohammad.arbaz001@gmail.com';
const FROM_NAME     = 'Taxaccolega';
const BRAND_URL     = 'https://taxaccolega.co.uk';
const LOGO_URL      = 'https://taxaccolega.co.uk/images/logo/tal-logo.png';
const BRAND_DARK    = '#1d3c45';
const BRAND_ORANGE  = '#d2601a';
const BRAND_PHONE   = '020 8127 0728';
const BRAND_WHATSAPP = '074 7117 0484';
// International (no leading 0) form used by wa.me.
const BRAND_WHATSAPP_LINK = 'https://wa.me/447471170484';
const BRAND_EMAIL   = 'info@taxaccolega.co.uk';
const BRAND_ADDRESS = '187a London Road, Croydon, Surrey, CR0 2RJ';

/* --- SMTP (Gmail) --- */
const SMTP_HOST          = 'smtp.gmail.com';
const SMTP_PORT          = 587;
const SMTP_USERNAME      = 'info@taxaccolega.co.uk';
const SMTP_PASSWORD      = 'bpuvktfgfjqrhxqb';
const SMTP_ENCRYPTION    = 'tls'; // STARTTLS on port 587
const SMTP_FROM_ADDRESS  = 'info@taxaccolega.co.uk';
const SMTP_FROM_NAME     = 'TaxAccolega';
const SMTP_VERIFY_PEER   = false; // shared hosts often lack a CA bundle; set true for stricter TLS
const SMTP_TIMEOUT       = 30;

/* ------------------------------------------------------------------ */
/* Input                                                               */
/* ------------------------------------------------------------------ */
$data    = json_decode(file_get_contents('php://input'), true);
if (!is_array($data)) {
    $data = [];
}

$name    = isset($data['name'])    ? trim((string) $data['name'])    : '';
$email   = isset($data['email'])   ? trim((string) $data['email'])   : '';
$phone   = isset($data['phone'])   ? trim((string) $data['phone'])   : '';
$message = isset($data['message']) ? trim((string) $data['message']) : '';

// Strip tags from free text, then validate the address.
$name    = strip_tags($name);
$phone   = strip_tags($phone);
$message = strip_tags($message);

// Header-injection guard: names/messages never carry CR/LF into headers.
$safeName = str_replace(["\r", "\n"], ' ', $name);

if ($safeName === '' || $message === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(["status" => "error", "message" => "Please fill out all fields correctly."]);
    exit();
}

/* ------------------------------------------------------------------ */
/* Helpers                                                             */
/* ------------------------------------------------------------------ */
function e(string $value): string
{
    return htmlspecialchars($value, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');
}

/**
 * Build a complete HTML email document (logo header + content + footer).
 */
function email_layout(string $preheader, string $content): string
{
    $logo = '<a href="' . BRAND_URL . '" target="_blank">'
          . '<img src="' . LOGO_URL . '" alt="Taxaccolega" width="170" style="'
          . 'display:block;border:0;outline:none;text-decoration:none;height:auto;'
          . 'max-width:170px;width:100%;">'
          . '</a>';

    $footer = '<div style="padding:22px 32px;background:' . BRAND_DARK . ';text-align:center;'
            . 'font-family:Arial,Helvetica,sans-serif;font-size:12px;line-height:1.9;color:#cfd8dc;">'
            . '<div style="margin-bottom:6px;">' . e(BRAND_ADDRESS) . '</div>'
            . '<div style="margin-bottom:6px;">'
            . '<a href="tel:' . preg_replace('/\s+/', '', BRAND_PHONE) . '" style="color:#e8a274;text-decoration:none;">' . e(BRAND_PHONE) . '</a>'
            . ' &nbsp;&bull;&nbsp; '
            . '<a href="mailto:' . BRAND_EMAIL . '" style="color:#e8a274;text-decoration:none;">' . e(BRAND_EMAIL) . '</a>'
            . '</div>'
            . '<div style="color:#8aa0a8;">&copy; ' . date('Y') . ' Taxaccolega Chartered Accountants. All rights reserved.</div>'
            . '</div>';

    return '<!DOCTYPE html>'
        . '<html lang="en-GB"><head><meta charset="UTF-8">'
        . '<meta name="viewport" content="width=device-width,initial-scale=1">'
        . '<meta name="x-app-disable-message-reformatting">'
        . '<title>' . e($preheader) . '</title></head>'
        . '<body style="margin:0;padding:0;background:#eef1f2;'
        . '-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;">'
        // Hidden preheader text shown in inbox previews
        . '<div style="display:none;max-height:0;overflow:hidden;opacity:0;color:transparent;">'
        . e($preheader) . str_repeat('&nbsp;', 60) . '</div>'
        . '<table role="presentation" width="100%" cellpadding="0" cellspacing="0" '
        . 'style="background:#eef1f2;border-collapse:collapse;"><tr>'
        . '<td align="center" style="padding:28px 12px;">'
        . '<table role="presentation" width="600" cellpadding="0" cellspacing="0" '
        . 'style="width:100%;max-width:600px;background:#ffffff;border-radius:12px;'
        . 'overflow:hidden;border:1px solid #e1e7ea;">'
        // Header / logo
        . '<tr><td style="background:#ffffff;padding:26px 32px 20px;'
        . 'border-bottom:3px solid ' . BRAND_ORANGE . ';text-align:center;">'
        . $logo . '</td></tr>'
        // Body
        . '<tr><td style="padding:30px 32px 34px;font-family:Arial,Helvetica,sans-serif;'
        . 'font-size:15px;line-height:1.65;color:#33474d;">'
        . $content . '</td></tr>'
        // Footer
        . '<tr><td>' . $footer . '</td></tr>'
        . '</table></td></tr></table></body></html>';
}

/**
 * Read one (possibly multi-line) SMTP response from the socket.
 *
 * @return array{code:int, text:string}
 */
function smtp_read_response($fp): array
{
    $code  = '';
    $lines = [];

    while (($line = fgets($fp, 512)) !== false) {
        $line    = rtrim($line, "\r\n");
        $lines[] = $line;
        if (strlen($line) < 3) {
            continue;
        }
        $code = substr($line, 0, 3);
        $sep  = isset($line[3]) ? $line[3] : ' ';
        if (strlen($line) === 3 || $sep === ' ') {
            break; // final line: "250 ..."
        }
    }

    if ($code === '') {
        throw new RuntimeException('SMTP server closed the connection unexpectedly.');
    }

    return ['code' => (int) $code, 'text' => implode("\n", $lines)];
}

/**
 * Send one SMTP command and assert the expected response code.
 */
function smtp_command($fp, string $cmd, int $expected): string
{
    $written = fwrite($fp, $cmd . "\r\n");
    if ($written === false) {
        throw new RuntimeException('Failed writing to SMTP server.');
    }

    $r = smtp_read_response($fp);
    if ($r['code'] !== $expected) {
        $label = strtoupper(explode(' ', trim($cmd), 2)[0]);
        throw new RuntimeException(
            "SMTP {$label} failed (expected {$expected}, got {$r['code']}): {$r['text']}"
        );
    }

    return $r['text'];
}

/**
 * Deliver one email over SMTP (AUTH LOGIN, Gmail).
 */
function smtp_send(string $to, string $subject, string $text, string $html, ?string $replyTo = null): void
{
    $crlf     = "\r\n";
    $boundary = 'b_' . md5(uniqid((string) mt_rand(), true));

    // Guard against header injection carried into the Subject line.
    $subject = str_replace(["\r", "\n"], ' ', $subject);

    $headers  = 'From: ' . SMTP_FROM_NAME . ' <' . SMTP_FROM_ADDRESS . '>' . $crlf;
    $headers .= 'To: <' . $to . '>' . $crlf;
    if ($replyTo !== null && filter_var($replyTo, FILTER_VALIDATE_EMAIL)) {
        $headers .= 'Reply-To: ' . $replyTo . $crlf;
    }
    $headers .= 'Subject: =?utf-8?B?' . base64_encode($subject) . '?=' . $crlf;
    $headers .= 'MIME-Version: 1.0' . $crlf;
    $headers .= 'Content-Type: multipart/alternative; boundary="' . $boundary . '"' . $crlf;
    $headers .= 'Content-Transfer-Encoding: 8bit' . $crlf;
    $headers .= 'Date: ' . date('r') . $crlf;
    $headers .= 'Message-ID: <' . md5(uniqid((string) mt_rand(), true)) . '@taxaccolega.local>' . $crlf;
    $headers .= 'X-Mailer: Taxaccolega SMTP Mailer' . $crlf;

    $body  = 'This is a multi-part message in MIME format.' . $crlf . $crlf;
    $body .= '--' . $boundary . $crlf;
    $body .= 'Content-Type: text/plain; charset=UTF-8; format=flowed' . $crlf;
    $body .= 'Content-Transfer-Encoding: 8bit' . $crlf . $crlf;
    $body .= $text . $crlf . $crlf;
    $body .= '--' . $boundary . $crlf;
    $body .= 'Content-Type: text/html; charset=UTF-8' . $crlf;
    $body .= 'Content-Transfer-Encoding: 8bit' . $crlf . $crlf;
    $body .= $html . $crlf . $crlf;
    $body .= '--' . $boundary . '--' . $crlf;

    $raw = $headers . $crlf . $body;

    $ctx = stream_context_create([
        'ssl' => [
            'verify_peer'       => SMTP_VERIFY_PEER,
            'verify_peer_name'  => SMTP_VERIFY_PEER,
            'allow_self_signed' => false,
            'SNI_enabled'       => true,
            'peer_name'         => SMTP_HOST,
        ],
    ]);

    $fp = @stream_socket_client(
        'tcp://' . SMTP_HOST . ':' . SMTP_PORT,
        $errno,
        $errstr,
        SMTP_TIMEOUT,
        STREAM_CLIENT_CONNECT,
        $ctx
    );

    if ($fp === false) {
        throw new RuntimeException(
            'Unable to connect to SMTP server: ' . ($errstr ?: 'unknown error') . " (errno {$errno})"
        );
    }

    stream_set_timeout($fp, SMTP_TIMEOUT);

    try {
        // Consume the server greeting (220) before issuing any commands.
        $greeting = smtp_read_response($fp);
        if ($greeting['code'] !== 220) {
            throw new RuntimeException('Unexpected SMTP greeting: ' . $greeting['text']);
        }

        smtp_command($fp, 'EHLO ' . (gethostname() ?: 'localhost'), 250);

        if (SMTP_ENCRYPTION === 'tls') {
            smtp_command($fp, 'STARTTLS', 220);
            if (!@stream_socket_enable_crypto($fp, true, STREAM_CRYPTO_METHOD_TLS_CLIENT)) {
                throw new RuntimeException('STARTTLS negotiation failed.');
            }
            smtp_command($fp, 'EHLO ' . (gethostname() ?: 'localhost'), 250);
        }

        smtp_command($fp, 'AUTH LOGIN', 334);
        smtp_command($fp, base64_encode(SMTP_USERNAME), 334);
        smtp_command($fp, base64_encode(SMTP_PASSWORD), 235);

        smtp_command($fp, 'MAIL FROM:<' . SMTP_FROM_ADDRESS . '>', 250);
        smtp_command($fp, 'RCPT TO:<' . $to . '>', 250);
        smtp_command($fp, 'DATA', 354);

        // RFC 5321: dot-stuff any line beginning with "." then terminate with a lone dot.
        $data = preg_replace('/(?m)^\./', '..', $raw);
        if (substr($data, -2) !== $crlf) {
            $data .= $crlf;
        }
        fwrite($fp, $data . '.' . $crlf);

        $final = smtp_read_response($fp);
        if ($final['code'] !== 250) {
            throw new RuntimeException('SMTP delivery rejected: ' . $final['text']);
        }

        smtp_command($fp, 'QUIT', 221);
    } finally {
        fclose($fp);
    }
}

/**
 * Send a multi-part (text + HTML) email over SMTP. Returns bool.
 */
function send_email(string $to, string $subject, string $text, string $html, ?string $replyTo = null): bool
{
    try {
        smtp_send($to, $subject, $text, $html, $replyTo);
        return true;
    } catch (Throwable $e) {
        error_log('[ContactFormMailer] Failed to send to ' . $to . ': ' . $e->getMessage());
        return false;
    }
}

/* ------------------------------------------------------------------ */
/* Content                                                             */
/* ------------------------------------------------------------------ */
$subjectAdmin   = 'New Contact Form Enquiry from ' . $safeName;
$subjectCustomer = 'Thank you for contacting Taxaccolega, ' . $safeName;

/* ---- Admin notification ---- */
$row = static function (string $label, string $value, bool $isMessage = false): string {
    $style = 'padding:14px 16px;border-bottom:1px solid #e8edef;vertical-align:top;'
           . 'font-size:14px;';
    $valueStyle = $isMessage
        ? 'padding:14px 16px;border-bottom:1px solid #e8edef;vertical-align:top;'
          . 'font-size:14px;color:#33474d;white-space:pre-wrap;word-break:break-word;'
        : 'padding:14px 16px;border-bottom:1px solid #e8edef;vertical-align:top;'
          . 'font-size:14px;color:#33474d;';

    return '<tr>'
        . '<td style="' . $style . 'background:#f7f9fa;font-weight:bold;width:130px;'
        . 'color:' . BRAND_DARK . ';">' . e($label) . '</td>'
        . '<td style="' . $valueStyle . '">' . e($value) . '</td>'
        . '</tr>';
};

$adminText = "New enquiry received from your website contact form.\n\n"
    . "Name:    {$safeName}\n"
    . "Email:   {$email}\n"
    . "Phone:   " . ($phone !== '' ? $phone : 'Not provided') . "\n\n"
    . "Message:\n{$message}\n\n"
    . "You can reply directly to this email to respond to the customer.\n";

$adminRows = $row('Name', $safeName)
    . $row('Email', $email)
    . $row('Phone', $phone !== '' ? $phone : 'Not provided')
    . $row('Message', $message, true);

$adminContent = '<div style="font-size:20px;font-weight:bold;color:' . BRAND_DARK . ';margin:0 0 6px;">'
    . 'New Enquiry Received</div>'
    . '<div style="font-size:13px;color:#8a9ba1;margin:0 0 22px;">'
    . 'Received on ' . date('d M Y, H:i') . '</div>'
    . '<table role="presentation" width="100%" cellpadding="0" cellspacing="0" '
    . 'style="border-collapse:collapse;border:1px solid #e8edef;border-radius:8px;overflow:hidden;">'
    . $adminRows . '</table>'
    . '<div style="margin-top:20px;padding:14px 16px;background:#fff6f0;'
    . 'border-left:3px solid ' . BRAND_ORANGE . ';border-radius:0 6px 6px 0;'
    . 'font-size:13px;color:#5b6b70;">'
    . '<strong>Reply-to:</strong> replying to this email will go straight to <strong>'
    . e($email) . '</strong>.</div>';

/* ---- Customer confirmation ---- */
$customerText = "Hello {$safeName},\n\n"
    . "Thank you for getting in touch with Taxaccolega. We have received your enquiry and one of "
    . "our chartered accountants will contact you shortly to discuss your requirements.\n\n"
    . "Here is a copy of the details you submitted:\n\n"
    . "Name: {$safeName}\n"
    . "Phone: " . ($phone !== '' ? $phone : 'Not provided') . "\n"
    . "Message: {$message}\n\n"
    . "If your enquiry is urgent, please call us on " . BRAND_PHONE . " or message us on WhatsApp at "
    . BRAND_WHATSAPP . ".\n\n"
    . "Kind regards,\n" . FROM_NAME . "\n" . BRAND_ADDRESS . "\n";

$customerContent = '<div style="font-size:20px;font-weight:bold;color:' . BRAND_DARK . ';margin:0 0 6px;">'
    . 'Thank You, ' . e($safeName) . '</div>'
    . '<div style="font-size:13px;color:#8a9ba1;margin:0 0 20px;">'
    . 'Your enquiry has been received &ndash; we usually reply within one working day.</div>'
    . '<p style="margin:0 0 18px;">Hi ' . e($safeName) . ',</p>'
    . '<p style="margin:0 0 18px;">Thank you for contacting <strong>Taxaccolega</strong>. '
    . 'One of our chartered accountants will review your message and get back to you shortly '
    . 'to discuss your specific requirements. There is no obligation and the initial '
    . 'consultation is free.</p>'
    . '<div style="margin:0 0 20px;padding:16px 18px;background:#f7f9fa;'
    . 'border:1px solid #e8edef;border-radius:8px;">'
    . '<div style="font-weight:bold;color:' . BRAND_DARK . ';font-size:13px;'
    . 'text-transform:uppercase;letter-spacing:.5px;margin-bottom:8px;">A copy of your message</div>'
    . '<div style="font-size:14px;color:#33474d;white-space:pre-wrap;word-break:break-word;">'
    . e($message) . '</div></div>'
    . '<p style="margin:0 0 6px;font-weight:bold;color:' . BRAND_DARK . ';font-size:13px;">'
    . 'Need a faster answer? Reach us directly:</p>'
    . '<table role="presentation" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">'
    . '<tr>'
    . '<td style="padding:6px 14px 6px 0;">'
    . '<a href="tel:' . preg_replace('/\s+/', '', BRAND_PHONE) . '" style="display:inline-block;'
    . 'background:' . BRAND_ORANGE . ';color:#ffffff;text-decoration:none;font-weight:bold;'
    . 'padding:11px 20px;border-radius:6px;font-size:14px;">Call ' . e(BRAND_PHONE) . '</a>'
    . '</td>'
    . '<td style="padding:6px 0;">'
    . '<a href="' . BRAND_WHATSAPP_LINK . '" style="display:inline-block;'
    . 'background:#25a35a;color:#ffffff;text-decoration:none;font-weight:bold;'
    . 'padding:11px 20px;border-radius:6px;font-size:14px;">WhatsApp Us</a>'
    . '</td>'
    . '</tr></table>'
    . '<p style="margin:20px 0 0;font-size:13px;color:#8a9ba1;">'
    . 'Email us any time at <a href="mailto:' . BRAND_EMAIL . '" style="color:' . BRAND_ORANGE . ';">'
    . BRAND_EMAIL . '</a></p>';

/* ------------------------------------------------------------------ */
/* Send                                                                */
/* ------------------------------------------------------------------ */
$adminHtml  = email_layout('New enquiry received from ' . $safeName, $adminContent);
$custHtml   = email_layout('We have received your enquiry', $customerContent);

$adminOk  = send_email(ADMIN_EMAIL, $subjectAdmin, $adminText, $adminHtml, $email);
$custOk   = send_email($email, $subjectCustomer, $customerText, $custHtml, SMTP_FROM_ADDRESS);

if ($adminOk) {
    // Admin notification is the primary outcome; a failed customer copy
    // should not surface as an error to the visitor.
    http_response_code(200);
    echo json_encode([
        "status"  => "success",
        "message" => $custOk
            ? "Email sent successfully!"
            : "Email sent successfully! (confirmation copy not delivered)",
    ]);
} else {
    http_response_code(500);
    echo json_encode(["status" => "error", "message" => "Failed to send email."]);
}
