<?php
    session_start();
    if (isset($_SESSION['logged']) && $_SESSION['logged'] == true) {
        header("location: index.php");
        exit();
    }
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Register Page</title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
</head>
<body>
    <h1>Register Form</h1>
    <form id="register">
        <div id="form-group">
            <label for="username">Username</label>
            <input type="text" id="username" name="username">
        </div>
        <div id="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" name="email">
        </div>
        <div id="form-group">
            <label for="password">Password</label>
            <input type="password" id="password" name="password">
        </div>
        <p id="error"></p>
        <input type="button" onclick="register();" value="Register">
    </form>
    <p>Have an account? <a href="login.php">Login here</a></p>
    <script src="js/register.js?v=<?php echo time();?>"></script>
</body>
</html>