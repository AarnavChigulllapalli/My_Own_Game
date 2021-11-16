var canvas;
var backgroundImage, car1_img, car2_img, track;                     
var database, gameState, fuelImage;
var form, player, playerCount;
var allPlayers, car1, car2, fuels, powerCoins, obstacles; 
var cars = [];
var blastImage;                   
var speed = 10;
var obstacle1Image, obstacle2Image, obstacles;
var teleport_pad, teleport_padImage;
function preload() {
  backgroundImage = loadImage("assets/background.png");
  car1_img = loadImage("assets/car1.png");
  car2_img = loadImage("assets/car2.png");
  track = loadImage("assets/track.jpg");
  blastImage = loadImage("assets/blast.png"); 
  obstacle1Image = loadImage("assets/obstacle1.png");
  obstacle2Image = loadImage("assets/obstacle2.png");
  fuelImage = loadImage("assets/fuel.png");
  teleport_padImage = loadImage("assets/Teleport_pad.png")
}
function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw() {
  background(backgroundImage);
  if (playerCount === 2) {
    game.update(1);
  }

  if (gameState === 1) {
    game.play();
  }

  if (gameState === 2) {
    game.showLeaderboard();
    game.end();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
