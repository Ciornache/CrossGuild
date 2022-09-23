<?php
   $username = $_POST['reg-username']; /// POST function collects data from form after submitting it
   $password = $_POST['reg-password'];
   $s_password = $_POST['reg-nwpassword'];
   
   $conn = new mysqli('localhost','root','','cross_guild_members'); /// Connect to the database
   if($conn->connect_error){
    die('Failed Registration. Check your input');
   }
   else{
    $ins = $conn->prepare("INSERT INTO users VALUES(?,?,?,?,?,?)");
    $ins->bind_param("sss",$username, $password, $s_password);
    $ins->execute();
    echo "Registration Succesfully...";
    $ins->close();  
    $conn->close();
   }
   
?>