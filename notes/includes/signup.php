<?php
    session_start();
    require_once 'connect.php';
    

    $login = $_POST['login'];
    $password = $_POST['password'];

    $chech_Login = mysqli_query($connect, "SELECT * FROM `user` WHERE `login` = '$login'");

    if(mysqli_num_rows($chech_Login) > 0){
        $_SESSION['message'] = 'This login is already registered!';
        header('Location: ../register.php');
    }else{
        mysqli_query($connect, "INSERT INTO `user` (`login`, `password`) VALUES ('$login', '$password')");
        mysqli_query($connect, "CREATE TABLE `$login` LIKE primertable");
        $_SESSION['message'] = 'You have successfully registered!';
        header('Location: ../register.php');
    }
