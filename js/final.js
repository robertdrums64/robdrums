var pass = "";
var encryptPassword = "";


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

function submitPassword() {
    var myXMLRequest = new XMLHttpRequest();
    
    myXMLRequest.onload = displayPHPresults;
    myXMLRequest.open("POST", "test.php?q=" + pass, true);
    myXMLRequest.send();
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