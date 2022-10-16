$(document).ready(function(){

  var rad1 = document.getElementById("radio1");
  var rad2 = document.getElementById("radio2");

    $("#radio1").click(function(){
      $("#selected").text("Inches");
    });
    $("#radio2").click(function(){
      $("#selected").text("Centimeters");
    });

    $("button").click(function(){

      if (rad1.checked==true) {
        alert("Inches was selected");
      }
      else if (rad2.checked==true) {
        alert("Centimeters was selected");
      }

    });

  });
