var pass = "";
var encryptPassword = "";



// KEYPAD FUNCTIONS
function addDigitToPassword(digitalInput) {
    // alert('test');
    pass += digitalInput;
    var enteredPswd = document.getElementById("password");
    encryptPassword += "*";
    enteredPswd.value = encryptPassword;
}

function clearPassword() {
    var enteredPswd = document.getElementById("password");
    encryptPassword = "";
    pass = "";
    enteredPswd.value = encryptPassword;
    document.getElementById("txtHint").innerHTML = "";
}

//LOGIN BUTTON
function logIn() {
    var myXMLRequest = new XMLHttpRequest();
    
    myXMLRequest.onload = displayPHPresults;
    myXMLRequest.open("POST", "final.php?q=" + pass, true);
    myXMLRequest.send();
}

//SIGNUP BUTTON
function signUp() {

}

function displayPHPresults() {
    var output = "";
    var data = this.responseText;

    if(data != "invalid") {
        var newLocation = location + "#pageMessage";
        window.location = newLocation;
        document.getElementById("secret").innerHTML = data;
    }
    else {
        output = "The password in invalid, please try again.";
        document.getElementById("txtHint").innerHTML = output;
    }
}