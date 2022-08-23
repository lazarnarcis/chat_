<?php
    require "../database.php";
    session_start();
    $error = "";

    $username = "";
    if (!empty($_POST['username'])) {
        $username = $_POST['username'];
    }

    $email = "";
    if (!empty($_POST['email'])) {
        $email = $_POST['email'];
    }

    $password = "";
    if (!empty($_POST['password'])) {
        $password = $_POST['password'];
    }

    $string = "SELECT * FROM users WHERE username='$username' OR email='$email'";
    $query = mysqli_query($sql, $string);
    if (mysqli_num_rows($query) > 0) {
        $error = "There is already an account with this name or email!";
    }

    $string1 = "SELECT * FROM channels";
    $query = mysqli_query($sql, $string1);
    $row = mysqli_fetch_assoc($query);
    $id_channel = $row['id_channel'];

    if (empty($error)) {
        $string = "INSERT INTO users (username, password, email, id_channel) VALUES ('$username', '$password', '$email', '$id_channel')";
        mysqli_query($sql, $string);
        $_SESSION['logged'] = true;
        $_SESSION['username'] = $username;
        $_SESSION['email'] = $email;
        $_SESSION['id_channel'] = $id_channel;
        $id_user = mysqli_insert_id($sql);
        $_SESSION['id_user'] = $id_user;
    } else {
        echo $error;
    }

    mysqli_close($sql);
?>