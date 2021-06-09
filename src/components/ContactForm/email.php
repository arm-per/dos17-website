<?php
    $destinatario = 'dos17.mkt@gmail.com';

    $nombre = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $msg = $_POST['msg'];
    $exp = $_POST['experiencia'];
    $tiempo = $_POST['tiempo'];
    $city = $_POST['city'];


    $header = $nombre . "quiere ser distribuidor de productos";
    $mensajeCompleto = "Hola, mi nombre es " . $nombre . "y quiero ser distribuidor de productos. \n tengo " . $experiencia . "de experiencia en el rubro de distribución de productos. \n Quisiera distribuir sus productos en " . $city . ". \n Agradezco de antemano su atención y me pongo a sus órdenes al correo electrónico \n" . $email . "\n y al teléfono " . $phone . "\n Como información adicional, les comento que: \n" . $msg;

    mail($destinatario, $header, $mensajeCompleto, $email);
    echo "<script>alert('Correo enviado exitosamente')</script>";
    echo "<script> setTimeout(\"location.href='index.html'\", 1000) </script>";

?>
