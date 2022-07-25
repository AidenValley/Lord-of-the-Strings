// First Initial Test
console.log('lord of the strings');

// Initial creation of the variables of each elements in HTML.
const tennisCanvas = document.querySelector('#game');
const tennisContext = tennisCanvas.getContext('2d');
const scoreCourt = document.querySelector('#score-screen');
const resetButton = document.querySelector('#resetButton');

// canvas size
const gameWidth = tennisCanvas.width;
const gameHeight = tennisCanvas.height;
// ideas of CSS color properties
const courtBackground = 'forestgreen';
const racket1Color = 'dark-blue';
const racket2Color = 'dark-orange';
const racketBorder = 'black';
const ballColor = 'yellow';
const ballBorder = 'black';
const ballRadius = 12.5;
const racketSpeed = 50;
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

function gameStart(){
    createTennisBall();
    nextTick();
};
function nextTick(){
    IntervalID = setTimeout(() => {
        clearCourt();
        drawRackets();
        moveTennisBall();
        drawTennisBall(tennisBallX, tennisBallY);
        checkCollision();
        nextTick();
    }, 20)
};
function clearCourt(){
    tennisContext.fillStyle = courtBackground;
    tennisContext.fillRect(0, 0, gameWidth, gameHeight);
};

// function that represents the two player racket icons in the game
function drawRackets(){
    tennisContext.strokeStyle = racketBorder;

    tennisContext.fillStyle = racket1Color;
    tennisContext.fillRect(racketOne.x, racketOne.y, racketOne.width, racketOne.height);
    tennisContext.strokeRect(racketOne.x, racketOne.y, racketOne.width, racketOne.height);

    tennisContext.fillStyle = racket2Color;
    tennisContext.fillRect(racketTwo.x, racketTwo.y, racketTwo.width, racketTwo.height);
    tennisContext.strokeRect(racketTwo.x, racketTwo.y, racketTwo.width, racketTwo.height);
};

function createTennisBall(){};
function moveTennisBall(){};
function drawTennisBall(){};
function checkCollision(){};
function changeDirection(event){
    const keyPress = event.keyCode;
    console.log(keyPress);
 };
function updateScore(){};
function resetGame(){}

tennisCanvas.width = 500;
tennisCanvas.height = 500;





