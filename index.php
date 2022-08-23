<?php
    session_start();
    if (!isset($_SESSION['logged']) && $_SESSION['logged'] != true) {
        header("location: login.php");
        exit();
    }
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Home Page</title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <link rel="stylesheet" href="css/index.css">
</head>
<body>
    Hello, <?php echo $_SESSION['username']; ?>!
    <div id="channels"></div>
    <div id="messages"></div>
    <div id="sendMessages">
        <input type="text" id="inputText" placeholder="Write a message...">
        <input type="button" value="Send" onclick="sendMessage();">
    </div>
    <a href="logout.php">Logout</a>
    <script src="js/index.js?v=<?php echo time();?>"></script>
</body>
</html>