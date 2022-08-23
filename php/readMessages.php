<?php
    require "../database.php";

    $id_channel = $_POST['id_channel'];
    $string = "SELECT * FROM messages WHERE id_channel='$id_channel'";
    $query = mysqli_query($sql, $string);

    if (mysqli_num_rows($query) > 0) {
        while ($row = mysqli_fetch_assoc($query)) {
            echo "<div>".$row['username']." - ".$row['message']."</div>";
        }
    } else {
        echo "No messages!";
    }
?>