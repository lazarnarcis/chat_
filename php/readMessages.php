<?php
    require "../database.php";
    session_start();

    $id_message = $_GET['id_message'];
    $id_channel = $_SESSION['id_channel'];
    $string = "SELECT * FROM messages WHERE id_message='$id_message' AND id_channel='$id_channel'";
    $query = mysqli_query($sql, $string);

    if (mysqli_num_rows($query) > 0) {
        $row = mysqli_fetch_assoc($query);
        echo "<div>".$row['username']." - ".$row['message']."</div>";
    }

    mysqli_close($sql);
?>