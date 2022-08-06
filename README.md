# Lord-of-the-Strings

- Key Concept

Lord of the Strings is a dynamic 2D tennis simulation game that allows the players/users to use the racket to move up or down to hit a moving ball. To win the game, the player/user must hit the tennis ball and pass the player. Scorings will be determined based on the tennis game rule. Here is the below simple tennis game rule logic. 

1. Game starts at 0:0
2. Win One point, 15:0
3. Win Second point, 30:0
4. Win Third point, 40:0
5. Win fourth point, WINS the game and 1:0 

- Installation

Installation is NOT required for its access. Please use either of the following,
Git Clone SSH key: git@github.com:AidenValley/Lord-of-the-Strings.git

- Hosted Website: 

Please see below website.
https://aidenvalley.github.io/Lord-of-the-Strings/

- Technologies

This project was designed to only use HTML, CSS, and JavaScript without any frameworks or external libraries.

-Pseudocode structures-
![lordstring - pseudocode](https://user-images.githubusercontent.com/107300143/182530007-0f3e7e9b-f56a-4de0-abb8-5c6dee7d1c4e.png)


- Game Infrastructure 
  - This game will render in HTML Canvas   
![image](https://user-images.githubusercontent.com/107300143/180627184-ca252742-48d8-4c3e-ab60-db178acf5b88.png)


- MID-Game Building Stage
![lordOfTheString-midst](https://user-images.githubusercontent.com/107300143/182529923-7b2969b0-8aa9-413b-971c-23e91cdfa1fc.png)

- HTML To start the Game
 ```
  <main>
  <div id="canvas-wrap"> Wraps the entire game itself, score screens, and reset button.
    <canvas id="game" width="1000" height="500"></canvas> canvas size decided.
    <div id="score-screen-left">0</div>
    <div id="score-screen-right">0</div>
    <div id="reset-container">
        <button id="resetButton"> Restart </button>
    </div>
  </div>
</main>
 ```
 -JavaScript Some functions to note
  1. Tennis rackets
 ```
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
 ```
 2. Tennis Ball
 ```
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
        } else {
            playerOneScore = 1;
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
        } else {
            playerTwoScore = 1;
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
//=======
 ```
 
- Welcome To the Game
![image](https://user-images.githubusercontent.com/107300143/183244190-579182ae-3047-4fd1-81ac-adcbc334df4b.png)


- Possible Improvements 
1. Game Details can be improved by adding more features, ball shadows, racket movements, and etc.
2. extending the game by adjusting the scoring functions.
3. Adding more buttons such as play and stop as how the user decides to play the game.
4. TBC...
