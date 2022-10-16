// 1 Centimeter is equal to 0.393701 Inch
// 1 Inch is equal to 2.5400013716 Centimeter

$(document).ready(function(){

  var rad1 = document.getElementById("radio1");
  var rad2 = document.getElementById("radio2");
  var inch = 0.39;
  var cent = 2.54;

    $("#radio1").click(function(){
      $("#selected").text("Inches");
    });
    $("#radio2").click(function(){
      $("#selected").text("Centimeters");
    });

    $("button").click(function(){
      var input = $("#measurement").val();

      // alert(input);

      if (rad1.checked==true) {
        // alert(1 * cent);
        $(".results").text(input + " inches = " + (input * cent) + " centimeters.");
      }
      else if (rad2.checked==true) {
        // alert(1 * inch);
        $(".results").text(input + " centimeters = " + (input * inch) + " inches.");
      }

    });

  });
