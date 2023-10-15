<?php
  $room = $_GET['room'];
  
  $file = file('messages_'.$room.'.txt');

  foreach ($file as $message) {
    echo '<div>'.$message.'</div>';
  }
  
?>