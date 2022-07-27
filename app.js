// First Initial Test
console.log('lord of the strings');

// ===========
// VARIABLES
//=============

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
let ballSpeed = 1;
// tennis ball 
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
// ===========
//=============

// ===========
// addEventlistener
//=============
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

function createTennisBall(){
    ballSpeed = 1;
    if(Math.round(Math.random()) == 1){
        tennisBallXDirection = 1;
    } else {
        tennisBallXDirection = -1;
    }
    if(Math.round(Math.random()) == 1){
        tennisBallYDirection = 1;
    } else {    
        tennisBallYDirection = -1;
    }
    tennisBallX = gameWidth / 2;
    tennisBallY = gameHeight / 2;
    drawTennisBall(tennisBallX, tennisBallY);
};

function moveTennisBall(){
    tennisBallX += (ballSpeed * tennisBallXDirection);
    tennisBallY += (ballSpeed * tennisBallYDirection);
};

// actual physical tennisball looking structure on the page
function drawTennisBall(tennisBallX, tennisBallY){
    tennisContext.fillStyle = ballColor;
    tennisContext.strokeStyle = ballBorder;
    tennisContext.lineWidth = 2;
    tennisContext.beginPath();
    // arc method that includes BallX and BallY, targeting ballRadius with Math.PI(3.14159) property.
    tennisContext.arc(tennisBallX, tennisBallY, ballRadius, 0, 2 * Math.PI); 
    tennisContext.stroke();
    tennisContext.fill();
};
function checkCollision(){
    if(tennisBallY <= 0 + ballRadius) {
        tennisBallYDirection *= -1;
    }
    if(tennisBallY >= gameHeight - ballRadius) {
        tennisBallYDirection *= -1;
    }
    if(tennisBallX <= 0) {
        playerTwoScore *= -1;
        updateScore();
        createTennisBall();
        return;
    }
    if(tennisBallX >= gameWidth) {
        playerOneScore *= -1;
        updateScore();
        createTennisBall();
        return;
    }

    // logic when the ball hits the racket it bounces
    if(tennisBallX <= (racketOne.x + racketOne.width + ballRadius)) {
        if(tennisBallY > racketOne.y && tennisBallY < racketOne.y + racketOne.height) {
            tennisBallXDirection *= -1;
            ballSpeed += 1;
        }
    }
    if(tennisBallX >= (racketTwo.x - ballRadius)) {
        if(tennisBallY > racketTwo.y && tennisBallY < racketTwo.y + racketTwo.height) {
            tennisBallXDirection *= -1;
            ballSpeed += 1;
        }
    }
};

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