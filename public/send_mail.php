<?php
declare(strict_types=1);

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type, origin");

echo "test";

if ($_SERVER['REQUEST_METHOD'] != "POST")
    return;

$to = "mathis.sema@gmail.com";
$name = $_POST["name"];
$email = $_POST["email"];
$subject = $_POST["subject"];
$message = $_POST["message"];

$content = "
<!DOCTYPE html>
<html lang='fr'>
<head>
    <meta charset='UTF-8'>
    <title>Nouvelle demande de contact</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap');
        table {
            width: 100%;
            max-width: 600px;
            margin: 0 auto;
            background-color: #393939;
        }
        thead {
            text-align: center;
        }
        thead img {
            width: auto;
            max-height: 130px;
            padding-top: 10px;
        }
        thead h1 {
            font-family: 'Open Sans', Arial, sans-serif;
            font-size: 26px;
            font-weight: 700;
            padding: 0 8px;
        }
        thead hr {
            margin: 20px auto;
            width: 90%;
            border: 1px solid white;
        }
        tbody h2, tbody p {
            margin: 8px;
            font-family: 'Roboto', Arial, sans-serif;
            font-size: 16px;
        }
        tbody td {
            padding: 0 10px;
        }
        #p-bottom {
            padding-bottom: 20px;
        }
        tbody td:nth-child(even) {
            font-weight: 400;
        }
        tbody td:nth-child(odd) h2 {
            text-align: right;
            font-weight: 500;
        }
        tbody a {
            color: white;
            text-decoration: none;
        }
        tbody tr:last-of-type {
            background-color: #606060;
        }
        tbody tr:last-of-type p {
            text-align: justify;
            font-size: 15px;
            font-weight: 400;
        }
    </style>
</head>
<body>
    <table cellspacing='0' cellpadding='0' style='margin: 0 auto'>
        <thead>
            <!-- Logo, title and separator -->
            <tr>
                <td colspan='2'>
                    <a href='https://rvandco.fr'>
                        <img src='https://dev.rvandco.fr/static/logo.png' alt='Logo Rv & Co'>
                    </a>
                    <h1 style='color: white'>Nouvelle demande de contact</h1>
                    <hr>
                </td>
            </tr>
        </thead>
        <tbody style='background-color: #393939'>
            <!-- Information -->
            <tr>
                <td valign='top'>
                    <h2 style='color: white; text-align: right'>De :</h2>
                </td>
                <td>
                    <a href='mailto:" . $email . "?subject=" . $subject . "&body=Bonjour " . $name . ",' style='color: white; text-decoration: none'>
                        <p style='color: white'>" . $email . "</p>
                    </a>
                </td>
            </tr>
            <tr>
                <td valign='top'>
                    <h2 style='color: white; text-align: right'>Nom :</h2>
                </td>
                <td>
                    <p style='color: white;'>" . $name . "</p>
                </td>
            </tr>
            <tr>
                <td valign='top'>
                    <h2 style='color: white; text-align: right'>Objet :</h2>
                </td>
                <td>
                    <p id='p-bottom' style='color: white'>" . $subject . "</p>
                </td>
            </tr>
            <!-- Message -->
            <tr style='background-color: #606060'>
                <td colspan='2'>
                    <p style='color: white; text-align: justify; padding: 10px 0'>" . $message . "</p>
                </td>
            </tr>
        </tbody>
    </table>
</body>
</html>
";

$headers[] = "MIME-Version: 1.0";
$headers[] = "Content-type: text/html; charset= UTF-8";
$headers[] = "From: Formulaire de contact | Site web rvandco.fr <postmaster@rvandco.fr>";

mail($to, $subject, $content, implode("\r\n", $headers));
?>