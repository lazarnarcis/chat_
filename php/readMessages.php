<?php
    require "../database.php";

    $id_message = $_GET['id_message'];
    $string = "SELECT * FROM messages WHERE id_message='$id_message'";
    $query = mysqli_query($sql, $string);

    if (mysqli_num_rows($query) > 0) {
        $row = mysqli_fetch_assoc($query);
        echo "<div>".$row['username']." - ".$row['message']."</div>";
    }

    mysqli_close($sql);
?>