<?php
if (isset($_POST['username']) && isset($_POST['message'])) {
  $username = $_POST['username'];
  $message = $_POST['message'];
  $room = $_POST['room'];
  $avatar = $_POST['avatar'];

  $username = strip_tags($username);
  $message = strip_tags($message);

  $today = date("F j, Y, g:i a"); 

  
  // Formatage du message avec le pseudo
  $formattedMessage = '<img src="images/avatar/avatar'.$avatar.'.png" alt="Avatar" class="avatar"><strong>' . $username . '</strong>: ' . $message . '<span class="timestamp">' . $today . '</span>';;
  
  // Ajout du message formaté dans le fichier
  $file = fopen('messages_'.$room.'.txt', 'a');
  fwrite($file, $formattedMessage . PHP_EOL);
  fclose($file);

}
?>
