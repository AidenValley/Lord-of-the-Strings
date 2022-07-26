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
const courtBackground = 'yellowgreen';
const racket1Color = 'skyblue';
const racket2Color = 'orange';
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
// racketOne and racketTwo racket sizes
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
    intervalID = setTimeout(() => {
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
function drawTennisBall(tennisBallX, tennisBallY){};
function checkCollision(){};

// this function indicates the racket movements of only up and down
function changeDirection(event){
    const keyPress = event.keyCode;
    const racketOneUp = 87;
    const racketOneDown = 83;
    const racketTwoUp = 38;
    const racketTwoDown = 40;
  // console.log(keyPress); able to indicate the numbers for racketOne and racketDown
    switch(keyPress) {
        case(racketOneUp):
            if(racketOne.y > 0){
                racketOne.y -= racketSpeed;
            }
            break;
        case(racketOneDown):
            if(racketOne.y < gameHeight - racketOne.height){
                racketOne.y += racketSpeed;
            }
            break;
        case(racketTwoUp):
            if(racketTwo.y > 0){
                racketTwo.y -= racketSpeed;
            }
            break;
        case(racketTwoDown):
            if(racketTwo.y < gameHeight - racketTwo.height){
                racketTwo.y += racketSpeed;
            }
            break;
    };
}
function updateScore(){};
function resetGame(){}

tennisCanvas.width = 500;
tennisCanvas.height = 500;