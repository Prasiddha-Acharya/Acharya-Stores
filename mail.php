<?php
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        if (empty($_POST['token']) || $_POST['token'] !== 'FsWga4&@f6aw') {
            echo '<span class="notice">Error!</span>';
            exit;
        }

        $name = $_POST['name'];
        $from = $_POST['email'];
        $phone = $_POST['phone'];
        $subject = stripslashes(nl2br($_POST['subject']));
        $message = stripslashes(nl2br($_POST['message']));

        $headers = "From: Form Contact <$from>\n";
        $headers .= "MIME-Version: 1.0\n";
        $headers .= "Content-type: text/html; charset=iso 8859-1";

        ob_start();
        ?>
        Hi imransdesign!<br /><br />
        <?php echo ucfirst($name); ?> has sent you a message via contact form on your website!
        <br /><br />

        Name: <?php echo ucfirst($name); ?><br />
        Email: <?php echo $from; ?><br />
        Phone: <?php echo $phone; ?><br />
        Subject: <?php echo $subject; ?><br />
        Message: <br /><br />
        <?php echo $message; ?>
        <br />
        <br />
        ============================================================
        <?php
        $body = ob_get_contents();
        ob_end_clean();

        $to = 'acharyastores.np@gmail.com';

        $success = mail($to, $subject, $body, $headers, "-t -i -f $from");

        if ($success) {
            echo '<div class="success"><i class="fas fa-check-circle"></i><h3>Thank You!</h3>Your message has been sent successfully.</div>';
        } else {
            echo '<div>Your message sending failed!</div>';
        }
    }


    $success = mail($to, $subject, $body, $headers, "-t -i -f $from");

if ($success) {
    echo '<div class="success"><i class="fas fa-check-circle"></i><h3>Thank You!</h3>Your message has been sent successfully.</div>';
} else {
    echo '<div>Error: Unable to send the email.</div>';
    error_log('Error sending email: ' . error_get_last()['message']);
}

error_reporting(E_ALL);
ini_set('display_errors', 1);

?>


