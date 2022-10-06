<?php

$connect = mysqli_connect('mysql-76006-0.cloudclusters.net', 'admin', '99ondgVI', 'menote', '17310', 'utf8');

    if (!$connect) {        
        die('Error connect to DataBase!');
    }