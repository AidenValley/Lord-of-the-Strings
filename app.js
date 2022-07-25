// First Initial Test
console.log('lord of the strings');

// Initial creation of the variables of each elements in HTML.
const tennisCanvas = document.getElementById('game');
const tennisContext = tennisCanvas.getContext('2d');
const scoreCourt = document.getElementById('score-screen');
const resetButton = document.getElementById('resetButton');
// canvas size
const gameWidth = tennisCanvas.width;
const gameHeight = tennisCanvas.height;
// ideas of CSS color properties
const tennisCourt = 'forestgreen';
const racket1Color = 'dark-blue';
const racket2Color = 'dark-orange';
const racketBorder = 'black';
const ballColor = 'yellow';
const ballBorder = 'black';
const ballRadius = 12.5;
const paddleSpeed = 50;
let IntervalID;
// slowest speed set
let ballspeed = 1;
// tennis ball size
let tennisBallX = gameWidth / 2;
let tennisBallY = gameHeight / 2;
// Ball direction sets
let tennisBallXDirection = 0;
let tennisBallYDirection = 0;
// Initial score sets of a player one and two.
let playerOneScore = 0;
let playerTwoScore = 0;
let racketOne = {
    width: 25,
    height: 100,
    x:0,
    y:0
};
let racketTwo = {
    width: 25,
    height: 100,
    x: gameWidth - 25,
    y: gameHeight - 100
};

// addEventlistener function goes here
window.addEventListener('keydown', changeDirection);
resetButton.addEventListener('click', resetGame);


// function 
gameStart();

function gameStart(){};
function nextTick(){};
function clearCourt(){};
function drawRackets(){};
function createTennisBall(){};
function moveTennisBall(){};
function drawTennisBall(){};
function checkCollision(){};
function changeDirection(){};
function updateScore(){};
function resetGamer(){}

tennisCanvas.width = 500;
tennisCanvas.height = 500;





