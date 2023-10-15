<?php
session_start();

// Vérifier si l'utilisateur est un administrateur et s'il a soumis un message ID à supprimer
if (isset($_COOKIE['admin']) && $_COOKIE['admin'] === 'true' ) {
  $messageIdToDelete = $_POST['message_id'];
  $file = file('messages_room3.txt');
  
  if (isset($file[$messageIdToDelete])) {
    unset($file[$messageIdToDelete]);
    file_put_contents('messages_room3.txt', '');
    echo "Les messages on été supprimés avec succès.";
  } else {
    echo "Les messages spécifiés n'existe pas.";
  }
} else {
  echo "Vous n'êtes pas autorisé à effectuer cette action.";
}
?>
