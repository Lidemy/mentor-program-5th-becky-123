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
      <a href="login.php">登入</a>
      <a href="index.php">回留言板</a>
    </div>
    <h1>註冊</h1>
    <?php
      if(!empty($_GET['errCode'])) {
        $code = $_GET['errCode'];
        $msg = 'error';
        if ($code == 1) {
          $msg = '資料不齊全';
        } else if ($code == 2) {
          $msg = '帳號已被註冊';
        }
        echo '<h2 class="error__msg">錯誤：' . $msg . '</h2>';
      }
    ?>
    <form class="board__register" method="POST" action="handle_register.php">
      <div class="register__input">
      暱稱：<input type="text" name="nickname"></input></br>
      帳號：<input type="text" name="username"></input></br>
      密碼：<input type="password" name="password"></input></br>
      </div>
      <input class="register__btn" type="submit" value="送出" />
    </form>
  </main>
</body>
</html>