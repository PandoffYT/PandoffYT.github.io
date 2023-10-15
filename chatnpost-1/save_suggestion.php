<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  if (isset($_POST['suggestion'])) {

    $today = date("F j, Y, g:i a"); 
    
    $suggestion = $_POST['suggestion'] . ' - ' . $today;
    
    $file = fopen('files/suggestion.txt', 'a');
    fwrite($file, $suggestion . PHP_EOL);
    fclose($file);
    echo 'success';
  } else {
    echo 'error';
  }
}
?>
