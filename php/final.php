<?php

//TASK 1: Retrieve the password from the URL
$password = $_REQUEST[q];

//TASK 2: Create a variable to store the output
$returnValue = "";

//TASK #: Build the output depending on a valid password.
if($password == "1234") {
    $returnValue = "The rice needs tending.";
}
else {
    $returnValue = "invalid";
}

//TASK 4: Return the output to be displayed by javascript
print $returnValue;

?>