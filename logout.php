<?php
    session_start();
    session_destroy();
    session_reset();
    header("location: login.php");
    exit();
?>