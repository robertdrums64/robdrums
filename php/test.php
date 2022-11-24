<?php

$servername = "localhost";
$username = "rdelatorre";
$password = "64Drummer!";

//Create a connection
$connect = new mysqli($servername, $username, $password, 3306);

//Check my connection
if($conn->connect_error) {
    echo "NOT CONNECTED!"
    // die("Connection failed: " . $conn->connect_error);
}
echo "Connected Successfully!"

?>