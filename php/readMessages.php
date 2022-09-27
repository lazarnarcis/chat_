<?php
    require "../database.php";
    session_start();

    $id_channel = $_SESSION['id_channel'];
    $start = $_POST['start'];
    $string = "SELECT * FROM messages WHERE id_channel='$id_channel' AND id_message > $start";
    $query = mysqli_query($sql, $string);
    $messages = [];

    if (mysqli_num_rows($query) > 0) {
        while ($row = mysqli_fetch_assoc($query)) {
            $messages['items'][] = $row;
        }
    }
    header('Content-Type: application/json');
    echo json_encode($messages);
    mysqli_close($sql);
?>