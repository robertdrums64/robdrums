$(document).ready(function() {
    var rand = Math.floor(Math.random() * 3) + 1;

    $(".door").click(function(){
        // alert(rand);
        $("img").attr("src", "/images/doorOpen.png");
    });

});