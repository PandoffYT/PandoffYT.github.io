<?php
if (isset($_COOKIE['admin']) && $_COOKIE['admin'] === 'true' ) {
  $username = $_POST['username'];
  $message = $_POST['message'];
  
  // Formatage du message avec le pseudo
  $formattedMessage = '<strong><p style="color: red">' . $username . ': ' . $message . '</p></strong>';
  
  // Ajout du message formaté dans le fichier
  $file = fopen('messages_room1.txt', 'a');
  $file2 = fopen('messages_room2.txt', 'a');
  $file3 = fopen('messages_room3.txt', 'a');
  fwrite($file, $formattedMessage . PHP_EOL);
  fwrite($file2, $formattedMessage . PHP_EOL);
  fwrite($file3, $formattedMessage . PHP_EOL);
  fclose($file);
  fclose($file2);
  fclose($file3);
}
?>
