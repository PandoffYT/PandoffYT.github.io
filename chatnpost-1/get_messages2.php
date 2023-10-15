<?php
  
  $file = file('messages_room1.txt');
  $file2 = file('messages_room2.txt');
  $file3 = file('messages_room3.txt');  

  echo '<h1>ROOM1</h1>';
  foreach ($file as $messageId => $message) {
    echo '<div>'.$message.' <button class="deleteMessage" data-message-id="'.$messageId.'">Supprimer</button></div>';
  }
  echo '<h1>ROOM 2</h1>';
  foreach ($file2 as $messageId2 => $message2) {
    echo '<div>'.$message2.' <button class="deleteMessage" data-message-id="'.$messageId2.'">Supprimer</button></div>';
  }
  echo '<h1>ROOM3</h1>';
  foreach ($file3 as $messageId3 => $message3) {
    echo '<div>'.$message3.' <button class="deleteMessage" data-message-id="'.$messageId3.'">Supprimer</button></div>';
  }
?>