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
      <a href="register.php">註冊</a>
      <a href="index.php">回留言板</a>
    </div>
    <h1>登入</h1>
    <?php
      if(!empty($_GET['errCode'])) {
        $code = $_GET['errCode'];
        $msg = 'error';
        if ($code == 1) {
          $msg = '資料不齊全';
        } else if ($code == 2) {
          $msg = '帳號或密碼有誤';
        }
        echo '<h2 class="error__msg">錯誤：' . $msg . '</h2>';
      }
    ?>
    <form class="board__login" method="POST" action="handle_login.php">
      <div class="login__input">
      帳號：<input type="text" name="username"></input></br>
      密碼：<input type="text" name="password"></input></br>
      </div>
      <input class="login__btn" type="submit" value="送出" />
    </form>
  </main>
</body>
</html>