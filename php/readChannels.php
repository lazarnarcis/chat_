<?php
    require "../database.php";

    $string = "SELECT * FROM channels";
    $query = mysqli_query($sql, $string);

    if (mysqli_num_rows($query)) {
        while ($row = mysqli_fetch_assoc($query)) {
            ?>
                <p id='select-channel' class="channel<?php echo $row['id_channel']; ?>" onclick="setChannel(<?php echo $row['id_channel']; ?>);">#<?php echo $row['name']; ?></p>
            <?php
        }
    }

    mysqli_close($sql);
?>