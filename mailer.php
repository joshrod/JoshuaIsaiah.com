<?php
    $honeypot = FALSE;

    // Only process POST reqeusts.
    if ($_SERVER["REQUEST_METHOD"] == "POST") {

        if (!empty($_REQUEST['phone']) && (bool) $_REQUEST['phone'] == TRUE) {
            $honeypot = TRUE;
            log_spambot($_REQUEST);
            # treat as spambot
            die('Thanks for sending your message!');
        } else {
            // Get the form fields and remove whitespace.
            $firstname = strip_tags(trim($_POST["firstname"]));
                    $firstname = str_replace(array("\r","\n"),array(" "," "),$firstname);
            $lastname = strip_tags(trim($_POST["lastname"]));
                    $lastname = str_replace(array("\r","\n"),array(" "," "),$lastname);
            $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);

            // Check that data was sent to the mailer.
            if ( empty($firstname) OR empty($lastname) OR !filter_var($email, FILTER_VALIDATE_EMAIL)) {
                // Set a 400 (bad request) response code and exit.
                http_response_code(400);
                echo "Oops! There was a problem with your submission. Please complete the form and try again.";
                exit;
            }

            // Set the recipient email address.
            // FIXME: Update this to your desired email address.
            $recipient = "josh@joshuaisaiah.com";

            // Set the email subject.
            $subject = "New contact from $firstname $lastname";

            // Build the email content.
            $email_content = "Name: $firstname $lastname\n";
            $email_content .= "Email: $email\n\n";
            $email_content .= "Message:\n$firstname $lastname has reached out to you via your website. Email them back at $email\n";

            // Build the email headers.
            $email_headers = "From: $firstname $lastname <$email>";

            // Send the email.
            if (mail($recipient, $subject, $email_content, $email_headers)) {
                // Set a 200 (okay) response code.
                http_response_code(200);
                echo "Thank You! Your message has been sent.";
            } else {
                // Set a 500 (internal server error) response code.
                http_response_code(500);
                echo "Oops! Something went wrong and we couldn't send your message.";
            }
        }

    } else {
        // Not a POST request, set a 403 (forbidden) response code.
        http_response_code(403);
        echo "There was a problem with your submission, please try again.";
    }

?>
