<?php
    require "../database.php";
    session_start();
    $error = "";

    $username = "";
    if (!empty($_POST['username'])) {
        $username = $_POST['username'];
    }

    $password = "";
    if (!empty($_POST['password'])) {
        $password = $_POST['password'];
    }

    $string = "SELECT * FROM users WHERE username='$username'";
    $query = mysqli_query($sql, $string);
    if (mysqli_num_rows($query) == 0) {
        $error = "This username doesn't exist in our database!";
    } else {
        $row = mysqli_fetch_assoc($query);
        if (md5($password) != $row['password']) {
            $error = "Incorrect password";
        } else {
            $email = $row['email'];
            $id_channel = $row['id_channel'];
            $id_user = $row['id_user'];
        }
    }

    if (empty($error)) {
        $_SESSION['logged'] = true;
        $_SESSION['username'] = $username;
        $_SESSION['email'] = $email;
        $_SESSION['id_channel'] = $id_channel;
        $_SESSION['id_user'] = $id_user;
    } else {
        echo $error;
    }

    mysqli_close($sql);
?>