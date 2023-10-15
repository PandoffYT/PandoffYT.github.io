<?php
session_start();

// Vérifier si l'utilisateur est un administrateur et s'il a soumis un message ID à supprimer
if (isset($_COOKIE['admin']) && $_COOKIE['admin'] === 'true' ) {
  $messageIdToDelete = $_POST['message_id'];

  $file = file('messages_room1.txt');

  // Supprimer le message avec l'ID spécifié
  if (isset($file[$messageIdToDelete])) {
    unset($file[$messageIdToDelete]);
    file_put_contents('messages_room1.txt', implode('', $file));
    echo "Le message a été supprimé avec succès.";
  } else {
    echo "Le message spécifié n'existe pas.";
  }
} else {
  echo "Vous n'êtes pas autorisé à effectuer cette action.";
}
?>
