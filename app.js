/** 
 * Aiden (Ha Yoon) Jang, last updated 08/06/2022.
 * 
 * This source code is designed and produced to have 2D Tennis pong game, written in Vanilla Javascript.
 * 
*/

// ===========
// Initial VARIABLES
//=============
// Spike Racket images variables
const tennisRacket_image = new Image();
tennisRacket_image.src = "SpikeRacket.png";

const tennisRacketSwing_image = new Image();
tennisRacketSwing_image.src = "SpikeRacket_right.png";

const tennisRacketSwingTwo_image = new Image();
tennisRacketSwingTwo_image.src = "SpikeRacket_swing.png";

const tennisBall_image = new Image();
tennisBall_image.src = "tennisball-png.jpg";

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
const ballColor = 'rgba(223,255,79)';
const ballBorder = 'black';
const ballRadius = 10.5;
const racketSpeed = 50;
const courtBackground = '#2e8b57';
const racketBorder = 'white';

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
//
const timeRacket = 1000;

// racketOne and racketTwo racket sizes
let racketOne = {
    // swingtimer, lastupdated, saves the time, 
    width: 100,
    height: 100,
    x: 5,
    y: 0,
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
// addEventlistener for racket movements of keydown 
//=============
window.addEventListener('keydown', changeDirection);


// game start function
gameStart();

// ===========
// The game begins with this function gameStart()
// ===========
function gameStart() { // the game begins with a createTennisBall() and nextTick() function
    createTennisBall();
    nextTick();
};
function nextTick() { // nextTick function designs to have all the functions layout in chronological order
    clearCourt();
    drawCenterLine();
    drawInnerCourtLineTop();
    drawInnerCourtLineBottom();
    drawAcrossCourtLine();
    drawSingleCourtLineOne();
    drawSingleCourtLineTwo();
    drawRackets();
    moveTennisBall();
    checkCollision();
    drawTennisBall(tennisBallX, tennisBallY);


};
function clearCourt() { // initial setup of the tennis court
    tennisContext.fillStyle = courtBackground;
    tennisContext.fillRect(0, 0, gameWidth, gameHeight);

};
// ================

// Line drawings for the tennis court functions
function drawCenterLine() {
    tennisContext.strokeStyle = 'Black';
    tennisContext.lineWidth = 7;
    tennisContext.beginPath();
    tennisContext.moveTo(500, 500);
    tennisContext.lineTo(500, 0);
    tennisContext.stroke();
}
function drawInnerCourtLineTop() {
    tennisContext.strokeStyle = 'White';
    tennisContext.lineWidth = 3;
    tennisContext.beginPath();
    tennisContext.moveTo(0, 60);
    tennisContext.lineTo(1000, 60);
    tennisContext.stroke();
}
function drawInnerCourtLineBottom() {
    tennisContext.strokeStyle = 'White';
    tennisContext.lineWidth = 3;
    tennisContext.beginPath();
    tennisContext.moveTo(0, 440);
    tennisContext.lineTo(1000, 440);
    tennisContext.stroke();
}
function drawAcrossCourtLine() {
    tennisContext.strokeStyle = 'White';
    tennisContext.lineWidth = 3;
    tennisContext.beginPath();
    tennisContext.moveTo(250, 250);
    tennisContext.lineTo(300, 250);
    tennisContext.lineTo(740, 250);
    tennisContext.stroke();
}
function drawSingleCourtLineOne() {
    tennisContext.strokeStyle = 'White';
    tennisContext.lineWidth = 3;
    tennisContext.beginPath();
    tennisContext.moveTo(250, 60);
    tennisContext.lineTo(250, 440);
    // tennisContext.lineTo(740, 250);
    tennisContext.stroke();
}
function drawSingleCourtLineTwo() {
    tennisContext.strokeStyle = 'White';
    tennisContext.lineWidth = 3;
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
function drawRackets() {
    tennisContext.strokeStyle = racketBorder;
    const gameTime = new Date().getTime();
    // setting time,
    if (racketOne.lastUpdated + timeRacket < gameTime) {
        racketOne.racketImage = tennisRacket_image;
    }
    tennisContext.drawImage(racketOne.racketImage, racketOne.x, racketOne.y, racketOne.width, racketOne.height);
    if (racketTwo.lastUpdated + timeRacket < gameTime) {
        racketTwo.racketImage = tennisRacket_image;
    }
    tennisContext.drawImage(racketTwo.racketImage, racketTwo.x, racketTwo.y, racketTwo.width, racketTwo.height);

};
function changeDirection(event) {
    // variables that determines the speed of the racket movements
    const keyPress = event.keyCode;
    const racketOneUp = 87;
    const racketOneDown = 83;
    const racketTwoUp = 38;
    const racketTwoDown = 40;
    // switch statement that explains both rackets up and down movements using x and y coordinates
    switch (keyPress) {
        case (racketOneUp):
            if (racketOne.y > 0) {
                racketOne.y -= racketSpeed;
            }
            break;
        case (racketOneDown):
            if (racketOne.y < gameHeight - racketOne.height) {
                racketOne.y += racketSpeed;
            }
            break;
        case (racketTwoUp):
            if (racketTwo.y > 0) {
                racketTwo.y -= racketSpeed;
            }
            break;
        case (racketTwoDown):
            if (racketTwo.y < gameHeight - racketTwo.height) {
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
function drawTennisBall(tennisBallX, tennisBallY) {
    tennisContext.fillStyle = 'rgba(223,255,79)';
    // 'rgba(300,290,79)';
    tennisContext.beginPath();
    // variable of ball spin 
    const spinBall = (ballRadius) - Math.abs((tennisCanvas.width / 2) - (tennisBallY)) / 8; // 
    tennisContext.ellipse(tennisBallX, tennisBallY, 12, 12, spinBall, 29, 3 * Math.PI);
    tennisContext.fill();

    tennisContext.fillStyle = ballColor;
    tennisContext.strokeStyle = ballBorder;
    tennisContext.lineWidth = 2;
    tennisContext.beginPath();
    // arc method that includes BallX and BallY, targeting ballRadius with Math.PI(3.14159) property.
    tennisContext.arc(tennisBallX, tennisBallY, ballRadius, 0, 2 * Math.PI);
    tennisContext.fill();


};
function createTennisBall() {
    // setting the ball speeed to 1
    ballSpeed = 1;
    // tennis ball will move random function based on the canvas width and height, also x and y coordinates of its direction.
    if (Math.round(Math.random()) === 1) {
        tennisBallXDirection = 1;
    } else {
        tennisBallXDirection = -1;
    }
    if (Math.round(Math.random()) === 1) {
        tennisBallYDirection = 1;
    } else {
        tennisBallYDirection = 1;
    }
    tennisBallX = gameWidth / 2;
    tennisBallY = gameHeight / 2;
    drawTennisBall(tennisBallX, tennisBallY);
};
function moveTennisBall() {
    // tennis Ball speed inclement to be faster its movement as per createTennisBall function.
    tennisBallX += (ballSpeed * tennisBallXDirection);
    tennisBallY += (ballSpeed * tennisBallYDirection);
};
function checkCollision() {
    tennisContext.strokeStyle = racketBorder;
    // initial collision statement when the tennis ball Y movement.
    if (tennisBallY <= 0 + ballRadius) {
        tennisBallYDirection *= -1;
    }
    if (tennisBallY >= gameHeight - ballRadius) {
        tennisBallYDirection *= -1;
    }
    // this is the scoring logic added/implemented the tennis scoring rule.
    if (tennisBallX >= gameWidth) { 
        if (playerOneScore == 0 && playerOneScore <= 15) {
            playerOneScore += 15;
        } else if (playerOneScore == 15 && playerOneScore <= 30) {
            playerOneScore += 15;
        } else if (playerOneScore == 30 && playerOneScore <= 40) {
            playerOneScore += 10;
        } else if (playerOneScore == 39 && playerOneScore <= 40){
            playerOneScore = 1;
        } else {
            alert('Player One Wins!');
            clearCourt();
            resetGame();
        }
        updateScore();
        createTennisBall();
        return;
    }
    // this is the scoring logic added/implemented the tennis scoring rule.
    if (tennisBallX <= 0) {
        if (playerTwoScore == 0 && playerTwoScore <= 15) {
            playerTwoScore += 15;
        } else if (playerTwoScore == 15 && playerTwoScore <= 30) {
            playerTwoScore += 15;
        } else if (playerTwoScore == 30 && playerTwoScore <= 40) {
            playerTwoScore += 10;
        } else if (playerTwoScore == 39 && playerTwoScore <= 40){
            playerTwoScore = 1;
        } else {
            alert('Player Two Wins!');
            clearCourt();
            resetGame();
        }
        updateScore();
        createTennisBall();
        return;
    }

    // logic when the ball hits the racket it bounces
    if (tennisBallX <= (racketOne.x + racketOne.width + ballRadius)) {
        if (tennisBallY > racketOne.y && tennisBallY < racketOne.y + racketOne.height) {
            tennisBallX = (racketOne.x + racketOne.width) + ballRadius; // logic to preventing the ball getting stuck
            tennisBallXDirection *= -1;
            ballSpeed += 1;
            racketOne.racketImage = tennisRacketSwing_image;
            racketOne.lastUpdated = new Date().getTime();
        }
    }
    if (tennisBallX >= (racketTwo.x - ballRadius)) {
        if (tennisBallY > racketTwo.y && tennisBallY < racketTwo.y + racketTwo.height) {
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
function updateScore() {
    // This explains and displays the score screens of each side.
    scoreCourtLeft.textContent = `${playerOneScore}`;
    scoreCourtRight.textContent = `${playerTwoScore}`;
};
// ===========

// ===========
// Reset the Game Button function
// ===========
function resetGame() {
    // once the 'Restart' button clicks, the canvas will turn as following below.
    playerOneScore = 0;
    playerTwoScore = 0;
    racketOne = {
        width: 100,
        height: 100,
        x: 5,
        y: 0,
        racketImage: tennisRacket_image
    };
    racketTwo = {
        width: 100,
        height: 100,
        x: gameWidth - 110,
        y: gameHeight - 150,
        racketImage: tennisRacket_image
    };
    ballSpeed = 1;
    ballX = 0;
    ballY = 0;
    tennisBallXDirection = 0;
    tennisBallYDirection = 0;
    updateScore();
    gameStart();
};
// Reset button eventListener 
resetButton.addEventListener('click', resetGame);
// ===========
setInterval(nextTick, 10);
