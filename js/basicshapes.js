function drawIt() {
    var canvas = document.getElementById('canvasElement');
    var canvasContext = canvas.getContext("2d");

    canvas.width = window.innerWidth/2;
    canvas.height = window.innerWidth/2;

    //DRAW ON THE CANVAS
    drawLine(canvasContext, 5, 5, canvas.width/2, canvas.width/2);
}

function drawLine(canvasContext, lineStartX, lineStartY, lineEndX, lineEndY) {
    canvasContext.beginPath();
    canvasContext.moveTo(lineStartX, lineStartY);
    canvasContext.lineTo(lineEndX, lineEndY);
    canvasContext.stroke();
}

//NOT COMPLETE
// function drawCircle(canvasContext, centerX, centerY, radius) {
//     var startAngleRadians = 0;
//     var endAngleRadians = 2 * Math.PI;

//     canvasContext.beginPath();
//     canvasContext.arc();
// }

