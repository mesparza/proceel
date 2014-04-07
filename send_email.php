<?php

include("phpMail/htmlMimeMail.php");

$name = $_POST['name'];
$company = 'TestCompany';
$email = $_POST['email'];
$phone = $_POST['phone'];
$comment = $_POST['comment'];

$content_text = "Solicitud de contacto \n\n Nombre: $name \n Empresa: $company \n Email: $email \n Tel�fono: $phone \n Comentario:\n $comment" ;

$mail = new htmlMimeMail();


$mail->setText($content_text);
$mail->setSubject("Solicitud de Contacto Proceel");
$mail->setFrom($email);
$mail->setBcc("danielf246@hotmail.com");
$result = $mail->send(array("ventas@proceel.com"));

echo "<script> window.location.href = 'contacto.html?send=true'; </script>"
?>