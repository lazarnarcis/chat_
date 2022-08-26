<?php
    require "../database.php";
    session_start();

    $result = array();
    $start = isset($_GET['start']) ? intval($_GET['start']) : 0;
    $id_channel = $_SESSION['id_channel'];
    $items = mysqli_query($sql, "SELECT * FROM messages WHERE id_message > ".$start." AND id_channel='$id_channel'");
    while ($row = mysqli_fetch_assoc($items)) {
        $result['items'][] = $row;
    }
    header('Content-Type: application/json');
    echo json_encode($result);
?>