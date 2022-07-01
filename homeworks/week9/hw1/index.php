<?php
  require_once('conn.php');
  session_start();

  $sql = 'SELECT * FROM becky_comments ORDER BY id DESC;';
  $result = $conn->query($sql);
  if (!$result){
    die('ERROR:' . $conn->error);
  }

  $username = NULL;
  $nickname = NULL;
  if (!empty($_SESSION['username'])) {
    $sql = sprintf(
      "SELECT * FROM becky_users WHERE username='%s'",
      $_SESSION['username']
    );
    $nickname_result = $conn->query($sql);
    if (!$nickname_result) {
      die('ERROR:' . $conn->error);
    }
    $row = $nickname_result->fetch_assoc();
    $nickname = $row['nickname'];
  }
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>留言板</title>
  <link rel="stylesheet" href="./style.css">
  <link rel="stylesheet" href="./normalize.css">
</head>

<body>
  <header class="waring">
      注意！本站為練習用網站，因教學用途刻意忽略資安的實作，註冊時請勿使用任何真實的帳號或密碼。
  </header>
  <main class="board">
    <div class="user__btn">
      <?php
        if (empty($_SESSION['username'])) {
      ?>
        <a href="login.php">登入</a>
        <a href="register.php">註冊</a>
      <?php } else {?>
        <a href="logout.php">登出</a>
      <?php } ?>
    </div>
    <h1>Comments</h1>
    <?php
      if(!empty($_GET['errCode'])) {
        $code = $_GET['errCode'];
        $msg = 'error';
        if ($code == 1) {
          $msg = '資料不齊全';
        }
        echo '<h2 class="error__msg">錯誤：' . $msg . '</h2>';
      }
    ?>
    <div class="board__nickname">有什麼想說的嗎？ <?php echo $nickname;?></div>
    <form class="board__new-comment-from" method="POST" action="handle_add_comment.php">
      <textarea class="comment__content" name="content" rows="5"></textarea><br/>
      <?php if(!empty($nickname)) { ?>
        <input name="nickname" type="hidden" value=<?php echo $nickname;?> />
        <input class="comment__add__btn" type="submit" value="送出" />
      <?php } else { ?>
         <h3 class="error__msg">請登入發布留言</h3>
      <?php } ?>
    </form>
    <div class="board__hr"></div>
    <section>
      <?php
        while($row = $result->fetch_assoc()) {
      ?>
        <div class="card">
          <div class="card__avatar"></div>
          <div class="card__content">
            <span class="card__nickename">
              <?php echo $row['nickname']; ?>
            </span>
            <span class="card__created">
              <?php echo $row['created_at']; ?>
            </span>
            <p class="card__text">
              <?php echo $row['content']; ?>
            </p>
          </div>
        </div>
      <?php } ?>
    </section>
  </main>
</body>
</html>