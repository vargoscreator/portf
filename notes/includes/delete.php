<?php
    session_start();
    require_once 'connect.php';
    
    $tablename=$_SESSION['user']["login"];
    $id=$_GET["id"];
    
    $deletenote="DELETE FROM `$tablename` WHERE `id`= '$id'";
    $res = mysqli_query($connect, $deletenote);
    
    $_SESSION['message'] = 'You have successfully deleted the entry!';
    header('Location: ../profile.php');
?>