
// DECLARE GAME VARIABLES
var canvas;
var context;
var bee;     //IMAGE
var beeObj;  //DATA OBJECT

//CREATE A Bee DATA STRUCTURE
function Bee() {
  this.x = 100;
  this.y = 100;
  this.targetX = this.x;
  this.targetY = this.y;
  this.velocity = 30;
  this.diameter = 50;
}

// LISTEN FOR THE ONLOAD EVENT: GAME WINDOW LOADS
window.onload = init;

function init() {
  canvas = document.getElementById('myCanvas');
  context = canvas.getContext('2d');
  beeObj = new Bee();
  bee = new Image();
  bee.src = '/images/bee.png';
  context.drawImage(bee, beeObj.x, beeObj.y, beeObj.diameter, beeObj.diameter);
  canvas.addEventListener("mousemove", followFinger, false);
  window.requestAnimationFrame(gameLoop);
}


function followFinger( e ) {
  var cursor = {x: e.offsetX,  y: e.offsetY};
  beeObj.targetX = cursor.x;
  beeObj.targetY = cursor.y;
}

function gameLoop() {
  updateBeeLocation();
  draw();
  window.requestAnimationFrame(gameLoop);
}

function updateBeeLocation() {
  var distX = beeObj.targetX - beeObj.x;
  var distY = beeObj.targetY - beeObj.y;
  beeObj.x += distX / beeObj.velocity;
  beeObj.y += distY / beeObj.velocity;
}

function draw() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.drawImage(bee, beeObj.x, beeObj.y, beeObj.diameter, beeObj.diameter);
}