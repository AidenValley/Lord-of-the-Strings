// First Initial Test
console.log('lord of the strings');

// ===========
// VARIABLES
//=============

// Initial creation of the variables of each elements in HTML.
const tennisCanvas = document.querySelector('#game');
const tennisContext = tennisCanvas.getContext('2d');
const scoreCourtLeft = document.querySelector('#score-screen-left');
const scoreCourtRight = document.querySelector('#score-screen-right');
const resetButton = document.querySelector('#resetButton');
// canvas size
const gameWidth = tennisCanvas.width;
const gameHeight = tennisCanvas.height;
// ideas of CSS color properties
const courtBackground = '#2e8b57';
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

// Spike Racket images variables
const tennisRacket_image = new Image();
tennisRacket_image.src = "SpikeRacket.png";

const tennisRacketSwing_image = new Image();
tennisRacketSwing_image.src = "SpikeRacket_right.png";

const tennisRacketSwingTwo_image = new Image();
tennisRacketSwingTwo_image.src = "SpikeRacket_swing.png";
//
const timeRacket = 1000;

// racketOne and racketTwo racket sizes
let racketOne = {
    // swingtimer, lastupdated, saves the time, 
    width: 100,
    height: 100,
    x: 5,
    y:0,
    racketImage: tennisRacket_image,
    lastUpdated: new Date().getTime()
};
let racketTwo = {
    width: 100,
    height: 100,
    x: gameWidth - 110,
    y: gameHeight - 150,
    racketImage: tennisRacket_image,
    lastUpdated: new Date().getTime()
};
tennisCanvas.width = 1000;
tennisCanvas.height = 500;
// ===========
//=============

// ===========
// addEventlistener
//=============
window.addEventListener('keydown', changeDirection);


// function 
gameStart();

// ===========
// The game begins with this function gameStart()
// ===========
function gameStart(){ // the game begins with a createTennisBall() and nextTick() function
    createTennisBall();
    nextTick();
};
function nextTick(){
        clearCourt();
        drawCenterLine();
        drawInnerCourtLineTop();
        drawInnerCourtLineBottom();
        drawAcrossCourtLine();
        drawSingleCourtLineOne();
        drawSingleCourtLineTwo();
        drawRackets();
        moveTennisBall();
        drawTennisBall(tennisBallX, tennisBallY);
        checkCollision();
         
};
function clearCourt(){ // initial setup of the tennis court
    tennisContext.fillStyle = courtBackground;
    tennisContext.fillRect(0, 0, gameWidth, gameHeight);
    
};
// ================

// Line drawings for the tennis court functions
function drawCenterLine(){
    tennisContext.strokeStyle = 'Black';
    tennisContext.lineWidth = 7;
    tennisContext.beginPath();
    tennisContext.moveTo(500, 500);
    tennisContext.lineTo(500, 0);
    tennisContext.stroke();
}
function drawInnerCourtLineTop(){
    tennisContext.strokeStyle = 'White';
    tennisContext.lineWidth = 3 ;
    tennisContext.beginPath();
    tennisContext.moveTo(0, 60);
    tennisContext.lineTo(1000, 60);
    tennisContext.stroke();
}
function drawInnerCourtLineBottom(){
    tennisContext.strokeStyle = 'White';
    tennisContext.lineWidth = 3 ;
    tennisContext.beginPath();
    tennisContext.moveTo(0, 440);
    tennisContext.lineTo(1000, 440);
    tennisContext.stroke();
}
function drawAcrossCourtLine(){
    tennisContext.strokeStyle = 'White';
    tennisContext.lineWidth = 3 ;
    tennisContext.beginPath();
    tennisContext.moveTo(250, 250);
    tennisContext.lineTo(300, 250);
    tennisContext.lineTo(740, 250);
    tennisContext.stroke();
}
function drawSingleCourtLineOne(){
    tennisContext.strokeStyle = 'White';
    tennisContext.lineWidth = 3 ;
    tennisContext.beginPath();
    tennisContext.moveTo(250, 60);
    tennisContext.lineTo(250, 440);
    // tennisContext.lineTo(740, 250);
    tennisContext.stroke();
}
function drawSingleCourtLineTwo(){
    tennisContext.strokeStyle = 'White';
    tennisContext.lineWidth = 3 ;
    tennisContext.beginPath();
    tennisContext.moveTo(740, 60);
    tennisContext.lineTo(740, 440);
    // tennisContext.lineTo(740, 250);
    tennisContext.stroke();
}
// =================

// Racket functions
// ===========
// function that represents the two player racket icons in the game
function drawRackets(){
    tennisContext.strokeStyle = racketBorder;
    const gameTime = new Date().getTime();
    // setting time
    if(racketOne.lastUpdated + timeRacket < gameTime) {
        racketOne.racketImage = tennisRacket_image;
    } 
    tennisContext.drawImage(racketOne.racketImage, racketOne.x, racketOne.y, racketOne.width, racketOne.height);
    if(racketTwo.lastUpdated + timeRacket < gameTime) {
        racketTwo.racketImage = tennisRacket_image;
    }
    tennisContext.drawImage(racketTwo.racketImage, racketTwo.x, racketTwo.y, racketTwo.width, racketTwo.height);

    // create another variables, and check in the collision function
// tennisRacket_image.onload = function() {
// left and right rackets are convereted to the Spike Racket.
};
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
};
//=================


// ===========
//Tennis Ball functions 
// ===========
// actual physical tennisball looking structure on the page
function drawTennisBall(tennisBallX, tennisBallY){
    //  ball shadow, bigger than the ball radius, 
    tennisContext.fillStyle = 'grey';
    tennisContext.beginPath();
    const shadowRadius = (ballRadius * 2) - Math.abs((tennisCanvas.width / 2) - tennisBallX) / 20;
    tennisContext.arc(tennisBallX, tennisBallY, shadowRadius, 0, 2 * Math.PI); 
    tennisContext.fill();

    tennisContext.fillStyle = ballColor;
    tennisContext.strokeStyle = ballBorder;
    tennisContext.lineWidth = 2;
    tennisContext.beginPath();
    // arc method that includes BallX and BallY, targeting ballRadius with Math.PI(3.14159) property.
    tennisContext.arc(tennisBallX, tennisBallY, ballRadius, 0, 2 * Math.PI); 
    tennisContext.stroke();
    tennisContext.fill();
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
        tennisBallYDirection = 1;
    }
    tennisBallX = gameWidth / 2;
    tennisBallY = gameHeight / 2;
    drawTennisBall(tennisBallX, tennisBallY);
};
function moveTennisBall(){
    tennisBallX += (ballSpeed * tennisBallXDirection);
    tennisBallY += (ballSpeed * tennisBallYDirection);
};
function checkCollision(){
    // updatedtime, 
    tennisContext.strokeStyle = racketBorder;
    // tennisRacketSwing_image = new Image();
    // tennisRacketSwing_image.src = "SpikeRacket_right.png";

    if(tennisBallY <= 0 + ballRadius) {
        tennisBallYDirection *= -1;
    }
    if(tennisBallY >= gameHeight - ballRadius) {
        tennisBallYDirection *= -1;
    }
    if(tennisBallX >= gameWidth) {
        if(playerOneScore == 0 && playerOneScore <= 15) {
         playerOneScore += 15;
        } else if (playerOneScore == 15 && playerOneScore <= 30) {
         playerOneScore += 15;
        } else if (playerOneScore == 30 && playerOneScore <= 40){
         playerOneScore += 10;
        } else {
         playerOneScore = 1;
        }
         updateScore();
         createTennisBall();
         return;
     }
    if(tennisBallX <= 0) { // this is the scoring logic added/implemented the tennis scoring rule.
        if(playerTwoScore == 0 && playerTwoScore <= 15) {
            playerTwoScore += 15;
           } else if (playerTwoScore == 15 && playerTwoScore <= 30) {
            playerTwoScore += 15;
           } else if (playerTwoScore == 30 && playerTwoScore <= 40){
            playerTwoScore += 10;
           } else {
            playerTwoScore = 1;
           }
        
        updateScore();
        createTennisBall();
        return;
    }
    
    // logic when the ball hits the racket it bounces
    if(tennisBallX <= (racketOne.x + racketOne.width + ballRadius)) {
        if(tennisBallY > racketOne.y && tennisBallY < racketOne.y + racketOne.height) {
            tennisBallX = (racketOne.x + racketOne.width) + ballRadius; // logic to prevent ball getting stuck
            tennisBallXDirection *= -1;
            ballSpeed += 1;
            racketOne.racketImage = tennisRacketSwing_image;
            racketOne.lastUpdated = new Date().getTime();
        }
    }
    if(tennisBallX >= (racketTwo.x - ballRadius)) {
        if(tennisBallY > racketTwo.y && tennisBallY < racketTwo.y + racketTwo.height) {
            tennisBallXDirection *= -1;
            ballSpeed += 1;
            racketTwo.racketImage = tennisRacketSwingTwo_image;
            racketTwo.lastUpdated = new Date().getTime();
        }
    }
};
//==================


// ===========
// Scoring Function context
// ===========
function updateScore(){
    scoreCourtLeft.textContent = `${playerOneScore}`;
    scoreCourtRight.textContent = `${playerTwoScore}`;
};
// ===========

// ===========
// Reset the Game Button function
// ===========
function resetGame(){
    playerOneScore = 0;
    playerTwoScore = 0;
    racketOne = {
        width: 100,
        height: 100,
        x: 5,
        y:0,
        racketImage: tennisRacket_image
        // lastUpdated: new Date().getTime()
    };
    racketTwo = {
        width: 100,
        height: 100,
        x: gameWidth - 110,
        y: gameHeight - 150,
        racketImage: tennisRacket_image
        // lastUpdated: new Date().getTime()
    };
    ballSpeed = 1;
    ballX = 0;
    ballY = 0;
    tennisBallXDirection = 0;
    tennisBallYDirection = 0;
    updateScore();
    // clearInterval(intervalID);
    gameStart();
};


// Reset button eventListener 
resetButton.addEventListener('click', resetGame);
// ===========
setInterval(nextTick, 10);
