<?php
    require "../database.php";

    $result = array();
    $start = isset($_GET['start']) ? intval($_GET['start']) : 0;
    $items = mysqli_query($sql, "SELECT * FROM messages WHERE id_message > " . $start);
    while ($row = mysqli_fetch_assoc($items)) {
        $result['items'][] = $row;
    }
    header('Access-Control-Allow-Origin: *');
    header('Content-Type: application/json');
    echo json_encode($result);
?>