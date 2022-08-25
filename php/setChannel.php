<?php
    require "../database.php";
    session_start();

    $id_user = $_SESSION['id_user'];
    $id_channel = $_POST['id_channel'];
    $string = "UPDATE users SET id_channel='$id_channel' WHERE id_user='$id_user'";
    mysqli_query($sql, $string);
    $_SESSION['id_channel'] = $id_channel;
    echo $id_channel;
    mysqli_close($sql);
?>