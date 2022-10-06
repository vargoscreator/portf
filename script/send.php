<?php
    if(isset($_POST["submit"])){

        $connect = mysqli_connect('mysql-74730-0.cloudclusters.net', 'admin', '2ddai0K9', 'DBase', '18497', 'utf-8');
        if (!$connect) {        
            die('Error connect to DataBase!');
            return;
        }

        // Passing the values ​​entered in the form
        $name=$_POST["name"];
        $surname=$_POST["surname"];
        $email=$_POST["email"];
        $phone=$_POST["phone"];

        $mailTo = "bacahoriyk@gmail.com";
        $headers = "From: ".$email;
        $txt = "You have received an e-mail from".$name.".\n\n".$phone;

        // Adding data to the database
        mail($mailTo, $surname, $txt, $headers);

        // Back to form
        header('Location: index.html');
    }
