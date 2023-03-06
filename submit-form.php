<?php
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

// Do something with the data (store it in a database, send it via email, etc.)

$to = "Bosire040@gmail.com";
$subject = "New form submission";
$message = "Name: " . $name . "\nEmail: " . $email . "\nMessage: " . $message;
mail($to, $subject, $body);
header("location: thankyou.html");
?>
