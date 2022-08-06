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
- Welcome To the Game
![image](https://user-images.githubusercontent.com/107300143/183244190-579182ae-3047-4fd1-81ac-adcbc334df4b.png)


- Possible Improvements 
1. Game Details can be improved by adding more features, ball shadows, racket movements, and etc.
2. extending the game by adjusting the scoring functions.
3. Adding more buttons such as play and stop as how the user decides to play the game.
4. TBC...
