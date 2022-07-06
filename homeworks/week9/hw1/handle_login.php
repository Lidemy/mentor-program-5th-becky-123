<?php
  require_once('conn.php');
  session_start();

  if (
    empty($_POST['username']) ||
    empty($_POST['password']))
  {
    header('Location: login.php?errCode=1');
    die();
  }
  
  $username = $_POST['username'];
  $password = $_POST['password'];

  $sql = sprintf(
    "SELECT * FROM becky_users WHERE username='%s'AND
      password='%s'",
    $username,
    $password
  );

  $result = $conn->query($sql);
  if (!$result) {
    die($conn->error);
  }

  if ($result->num_rows > 0) {
    $_SESSION['username'] = $username;
    header('Location: index.php');
  } else {
    header('Location: login.php?errCode=2');
  }
?>

