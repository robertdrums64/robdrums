$(document).ready(function() {
    var rand = Math.floor(Math.random() * 3) + 1;

    // METHODS TO OPEN THE DOOR
    // DOOR ONE
    $(".col1").click(function(){
        // alert(rand);
        if (rand ==1) {
            $("#door1").attr("src", "/images/winningDoor.png");
            alert("You won!");
        }
        else {
            $("#door1").attr("src", "/images/doorOpen.png"); 
        }
    });
    //DOOR TWO
    $(".col2").click(function(){
        // alert(rand);
        if (rand == 2) {
            $("#door2").attr("src", "/images/winningDoor.png");
            alert("You won!");
        }
        else {
            $("#door2").attr("src", "/images/doorOpen.png"); 
        }
    });
    //DOOR THREE
    $(".col3").click(function(){
        // alert(rand);
        if (rand == 3) {
            $("#door3").attr("src", "/images/winningDoor.png");
            alert("You won!");
        }
        else {
            $("#door3").attr("src", "/images/doorOpen.png"); 
        }
    });


});