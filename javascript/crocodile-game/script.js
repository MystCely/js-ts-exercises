// modell
let firstRandomNum = "";
let secRandomNum = "";
let userPoints = 0;
let gameStart = false;

// view
updateView();
function updateView() {
  if (!gameStart) {
    document.getElementById("app").innerHTML = /*html*/ `
    <div class="center">
    <h1>Krokodillespill</h1>
    <img class="croc" src="img/cute-croc.png" alt="cute cartoon crocodile">
    <div class="btn-container">
    <button id="startBtn" onclick ="startGame()">Start Game</button>
    </div>`;
  } else {
    document.getElementById("app").innerHTML = /*html*/ `
        <div class="instruction center">
        <div>Choose between: </div>
        <div><, > and = </div>
        </div>
        <div class="points-container center">
            <div class="info points">Poeng: ${userPoints}</div>
            <div class="info">${firstRandomNum}</div>
            <input id="userInput" class="info" type="text">
            <div class="info">${secRandomNum}</div>
            <div class="secBtn-container">
                <button class="secBtn" onclick="checkAnswer()">Submit</button>
                <button class="secBtn" onclick="resetProgress()">Reset</button>
            </div>
        </div>
        `;
  }
  return gameOver();
}

// controller

function startGame() {
  gameStart = true; // the game has started
  randomNumber(); // gives a random number and calls updateView()
}

//gives a random number
function randomNumber() {
  // userPoints = Math.max(0, userPoints); // prevents points from going below 0
  firstRandomNum = Math.floor(Math.random() * 10); // chooses a number from 1 - 10
  secRandomNum = Math.floor(Math.random() * 10); // chooses a number from 1 - 10
  updateView();
  return firstRandomNum, secRandomNum;
}

// checks if the answer is correct or not
function checkAnswer() {
  let answer = document.getElementById("userInput").value;

  if (firstRandomNum > secRandomNum && answer == ">") {
    addPoint();
  } else if (firstRandomNum < secRandomNum && answer == "<") {
    addPoint();
  } else if (firstRandomNum == secRandomNum && answer == "=") {
    addPoint();
  } else {
    minusPoint();
    gameOver();
  }
  updateView();
}

// adds and minus points
function addPoint() {
  userPoints++;
  randomNumber();
}
function minusPoint() {
  userPoints--;
  randomNumber();
}

// resets progress when clicking on a button
function resetProgress() {
  userPoints = 0;
  updateView();
}

// show game over screen
function gameOver() {
  if (userPoints < 0) {
    document.getElementById("app").innerHTML = /*html*/ `
    <div class="gameOver center">Game Over</div>`;
  }
}
