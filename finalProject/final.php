<?php

//TASK 1: MAKE A CONNECTION
$mysqli = new mysqli("127.0.0.1", "rdelatorre", "64Drummer!", "CS222", 3306);
//TASK 2: TEST CONNECTION
if($mysqli->connect_errno) {
    echo "Failed to connect to MySQL: (" . $mysqli->connect_errno . ") " . $mysqli->connect_error;
}
else {
    echo "Connection Successful!";
}


//TASK 3: BUILD CONTAINERS
$email = $_GET['email'];
$password = $_GET['password'];
$sql = "SELECT * FROM `Memberships` WHERE `email`='email'";



?>