<?php
    $destinatario = 'dos17.mkt@gmail.com';

    $nombre = $_POST['name'];
    $business = $_POST['business'];
    $phone = $_POST['phone'];
    $service = $_POST['service'];
    $expense = $_POST['money'];

    $header = $nombre . "Me interesan sus servicios";
    $mensajeCompleto = "Hola, mi nombre es " . $nombre . "y mi teléfono es" . $phone . "me interesa el servicio de " . $service . "y mi presupuesto es" . $expense;

    mail($destinatario, $header, $mensajeCompleto, $email);
    echo "<script>alert('Correo enviado exitosamente')</script>";
    echo "<script> setTimeout(\"location.href='index.html'\", 1000) </script>";

?>
