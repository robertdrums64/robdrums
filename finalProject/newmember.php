<?php
//FROM the FORM
$firstName = $_REQUEST['firstName'];
$lastName = $_REQUEST['lastName'];
$email = $_REQUEST['email'];
$password = $_REQUEST['password'];

//TASK 1: MAKE A CONNECTION
$mysqli = new mysqli("127.0.0.1", "rdelatorre", "64Drummer!", "CS222", 3306);
//TASK 2: TEST CONNECTION
if($mysqli->connect_errno) {
    echo "Failed to connect to MySQL: (" . $mysqli->connect_errno . ") " . $mysqli->connect_error;
}
else {
    echo "Connection Successful!";
}

$sqlquery = "INSERT INTO table VALUES
	($firstName, $lastName, $email, $password)"

// CLOSE CONNECTION
$mysqli->close();

?>