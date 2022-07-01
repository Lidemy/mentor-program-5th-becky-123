<?php
  require_once('conn.php');
  session_start();

  if (
    empty($_POST['content']))
  {
    header('Location: index.php?errCode=1');
    die();
  }
  
  $nickname = $_POST['nickname'];
  $content = $_POST['content'];

  $sql=sprintf("INSERT INTO becky_comments(nickname, content)
    VALUES('%s', '%s')",
    $nickname,
    $content
  );

  $result = $conn->query($sql);
  if (!$result) {
    die($conn->error);
  }
  header('Location: index.php');
?>

