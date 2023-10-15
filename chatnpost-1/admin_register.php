<?php
// Vérifiez si les données POST ont été envoyées
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  // Vérifiez si les champs username et password existent
  if (isset($_POST['username']) && isset($_POST['password'])) {
    $adminUsername = $_POST['username'];
    $adminPassword = $_POST['password'];

    if ($adminUsername === 'admin01' && $adminPassword === '172.31.196.1') {
      // Si les informations d'identification sont valides, définissez un cookie pour marquer l'administrateur comme connecté
      setcookie('admin', 'true', time() + (86400 * 7), '/'); // Le cookie expire dans 30 jours (vous pouvez ajuster cela selon vos besoins)

      echo 'Vous êtes maintenant connecté en tant qu\'administrateur.';
    } else {
      echo 'Identifiant ou mot de passe incorrect.';
    }
  } else {
    echo 'Veuillez fournir un nom d\'utilisateur et un mot de passe.';
  }
}

// Vérifiez si l'administrateur est connecté avant d'afficher les actions d'administration
if (isset($_COOKIE['admin']) && $_COOKIE['admin'] === 'true') {

  $.ajax({
    url: 'admin_panel.php',
    type: 'POST',
    success: function(response) {
      echo `<script>window.location.href = "admin_panel.php"</script>`;

    }
  });
  
}
?>
