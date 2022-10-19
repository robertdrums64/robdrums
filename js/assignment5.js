$(document).ready(function() {
    var rand = Math.floor(Math.random() * 3) + 1;

    $(".col1").click(function(){
        // alert(rand);
        $("#door1").attr("src", "/images/doorOpen.png");
    });
    $(".col2").click(function(){
        // alert(rand);
        $("#door2").attr("src", "/images/doorOpen.png");
    });
    $(".col3").click(function(){
        // alert(rand);
        $("#door3").attr("src", "/images/doorOpen.png");
    });

});