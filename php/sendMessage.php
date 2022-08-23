<?php
    require "../database.php";
    session_start();

    $username = $_SESSION['username'];
    $message = $_POST['message'];
    $id_channel = $_SESSION['id_channel'];

    $string = "INSERT INTO messages (username, message, id_channel) VALUES ('$username', '$message', '$id_channel')";
    $query = mysqli_query($sql, $string);

    mysqli_close($sql);
?>