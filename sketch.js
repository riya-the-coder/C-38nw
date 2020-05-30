var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var Form, Player, Hurdle;

var Players, Player1, Player2, Player3,Player4;

function preload(){
    track = loadImage("images/track.jpg");
    Player1_img = loadImage("images/.png");
    Player2_img = loadImage("images/.png");
    Player3_img = loadImage("images/.png");
    Player_img = loadImage("images/.png");
  
  }

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
}