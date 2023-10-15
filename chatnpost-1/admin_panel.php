<!DOCTYPE html>
<html>
<head>
  <title>Panel d'administration</title>
  <link rel="stylesheet" type="text/css" href="css/admin_panel.css">
  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
</head>
<body>
  <div id="adminPanel">
    <h2>Panel d'administration</h2>
    <form id="messageForm">
      <textarea id="messageText" placeholder="Entrez le texte du message"></textarea>
      <button id="sendMessage">Envoyer</button>
      <button id="supAllMessage">Supprimer tout</button>
    </form>
    
    <?php
        $file = file('files/compteur.txt');
        $ligne_room1 = file('messages_room1.txt');
        $ligne_room2 = file('messages_room2.txt');
        $ligne_room3 = file('messages_room3.txt');
        $suggestion = file('files/suggestion.txt');

        echo '<h3><strong>Suggestions:</strong></h3>';
        
        foreach ($suggestion as $sug) {
          echo '<h4>'.$sug.'</h4>';
        }

        echo '<hr>';

        foreach ($file as $message) {
          echo '<h3>View: '.$message.'</h3>';
          echo '<h3>Lenght Room1: '.count($ligne_room1).'</h3>';
          echo '<h3>Lenght Room2: '.count($ligne_room2).'</h3>';
          echo '<h3>Lenght Room3: '.count($ligne_room3).'</h3>';

        }
        
    ?>
    <div id="messageList"></div>
  </div>
  <script>
    $(document).ready(function() {
      function getMessages() {
        $.ajax({
          url: 'get_messages2.php',
          type: 'GET',
          success: function(response) {
            $('#messageList').html(response);
          }
        });
      }

      getMessages(); // Charger les messages au chargement de la page

      $('#sendMessage').click(function(e) {
        e.preventDefault();
        var messageText = $('#messageText').val();
        if (messageText !== '') {
          $.ajax({
            url: 'send_admin_message.php',
            type: 'POST',
            data: { username: 'Admin', message: messageText },
            success: function(response) {
              $('#messageText').val('');
              getMessages(); // Recharger les messages après l'envoi
            }
          });
        }
      });

      $(document).on('click', '.deleteMessage', function() {
        var messageId = $(this).data('message-id');
        if (confirm('Voulez-vous vraiment supprimer ce message ?')) {
          $.ajax({
            url: 'delete_message.php',
            type: 'POST',
            data: { message_id: messageId },
            success: function(response) {
              alert(response);
              getMessages(); // Recharger les messages après la suppression
            }
          });
        }
      });
      $('#supAllMessage').click(function(e) {
        e.preventDefault();
        $.ajax({
          url: 'delete_all_message.php',
          type: 'POST',
          data: { message_id: messageId },
          success: function(response) {
              getMessages(); // Recharger les messages après l'envoi
          }
        });
      });
    });
  </script>
</body>
</html>