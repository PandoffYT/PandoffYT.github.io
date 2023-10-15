<?php
$imagesDir = 'images/all/';
$imageFiles = scandir($imagesDir);
$images = array();
foreach ($imageFiles as $file) {
  if (is_file($imagesDir . $file)) {
    $images[] = $file;
  }
}
echo json_encode($images);
