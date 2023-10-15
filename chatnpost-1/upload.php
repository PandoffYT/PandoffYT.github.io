<?php
$targetDir = 'images/all/';
$targetFile = $targetDir . basename($_FILES['image']['name']);
$uploadOk = 1;
$imageFileType = strtolower(pathinfo($targetFile, PATHINFO_EXTENSION));

if (isset($_POST['submit'])) {
  $check = getimagesize($_FILES['image']['tmp_name']);
  if ($check !== false) {
    $uploadOk = 1;
  } else {
    $uploadOk = 0;
  }
}

if (file_exists($targetFile)) {
  $uploadOk = 0;
}

if ($_FILES['image']['size'] > 8 * 1024 * 1024) {
  $uploadOk = 0;
}

$allowedFormats = array('jpg', 'jpeg', 'png', 'gif');
if (!in_array($imageFileType, $allowedFormats)) {
  $uploadOk = 0;
}

if ($uploadOk == 0) {
  echo json_encode(array('success' => false));
  exit();
} else {
  if (move_uploaded_file($_FILES['image']['tmp_name'], $targetFile)) {
    echo json_encode(array('success' => true));
  } else {
    echo json_encode(array('success' => false));
  }
}
