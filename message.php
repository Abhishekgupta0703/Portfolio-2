<?php
if(isset($_POST['btn'])){
    $name="Contact Us";
    $email="Abhishek@Gupta.com";
    $phone=$_POST['phone'];
    $msg=$_POST['message'];
    $data = "Name = ".$_POST['name'] ."\nEmail = ". $_POST['email'] ."\nPhone = ". $_POST['phone'] ."\nMessage = ". $_POST['message'];
    $to="ak19250000@gmail.com";
    $header="from:$email";
    if(mail($to,$name,$data,$header)){
        $msg1 = "Message Send Succesfully";
    }
}
?>