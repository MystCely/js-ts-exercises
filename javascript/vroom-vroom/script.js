// modell
let dirty = 0;
let hungry = 0;
let bored = 0;
let app = document.getElementById("app");
let isRunning = false;

// view function
updateView();
function updateView() {
  document.getElementById("app").innerHTML = /*HTML*/ `
  <div class="main-container center">
      <h1>Take care of your car!</h1>
      <img class="panda" src="img/purple-panda.png" alt="cute panda cartoon">
      <div class="status-container">
        <div class="status">Dirty</div> 
      </div>
      <div class="progress-container center-btn">
        <progress class="bar barDirty" id="dirty" max="60"></progress>
        <button onclick="cleanCar()" id="clean">Clean</button>
      </div>
      <br>
      <div class="status-container">
        <div class="status">Hungry</div> 
      </div>
      <div class="progress-container center-btn">
        <progress class="bar barHungry" id="hungry" max="60"></progress>
        <button onclick="refuelCar()" id="hungry">Refuel</button>
      </div>
      <br>
      <div class="status-container">
        <div class="status">Bored</div>
      </div>
      <div class="progress-container center-btn">
        <progress class="bar barBored" id="bored" max="60"></progress>
        <button onclick="driveCar()" id="bored">Drive</button>
      </div>
      <br>
      <button onclick="Start()">start</button>
      <div id="displayedpic"></div>
  </div>
    `;
}

let dirtyCar = document.getElementById("dirty");
let hungryCar = document.getElementById("hungry");
let boredCar = document.getElementById("bored");

//lexi
// setIntervals
function Start() {
  if (isRunning == true) {
    return;
  } else {
    isRunning = true;
    setInterval(updateImage, 1000);
    setInterval(getDirty, 1000);
    setInterval(getHungry, 1000);
    setInterval(getBored, 1000);
    setInterval(carDead, 1000);
  }
}

function updateImage() {
  const pic = document.getElementById("displayedpic");

  if (dirty >= 45) {
    pic.innerHTML =
      '<img src="img/dirty-car.png" alt="dirty car" class="Lambopic">';
  } else if (hungry >= 45) {
    pic.innerHTML =
      '<img src="img/open-car.png" alt="hungry car" class="Lambopic">';
  } else if (bored >= 45) {
    pic.innerHTML =
      '<img src="img/sad-car.png" alt="very sad car" class="Lambopic">';
  } else if (bored >= 28) {
    pic.innerHTML =
      '<img src="img/slight-sad.png" alt="slightly sad car" class="Lambopic">';
  } else {
    pic.innerHTML =
      '<img src="img/shiny-car.png" alt="shiny car" class="Lambopic">';
  }
}

// emil
// increases the progress bars by +1 every 1 sec
function getDirty() {
  dirty++;
  dirtyCar.value = dirty;
}

function getHungry() {
  hungry++;
  hungryCar.value = hungry;
}

function getBored() {
  bored++;
  boredCar.value = bored;
}

// function to show Game Over screen when the progress bar is full
function carDead() {
  if (dirty > 59 || hungry > 59 || bored > 59) {
    gameOverScreen();
  }
}

// Game Over screen
function gameOverScreen() {
  app.innerHTML = /*HTML*/ ` 
  <div class="gameOver-container center">
    <div class="gameOverText">Emil killed the car...</div>
    <img src="img/blood.png" alt="dripping blood">
  </div>
  `;
}

// steph
function cleanCar() {
  // decreases the dirty progress bar
  dirty -= 10;
  dirtyCar.value = dirty;
  // increases hunger and bored when cleaning
  hungry += 3;
  hungryCar.value = hungry;
  bored += 4;
  boredCar.value = value;
  // doesn't let the progress bar go below 0
  dirty = Math.max(dirty, 0);
}
function refuelCar() {
  // decreases the hungry progress bar
  hungry -= 3;
  hungryCar.value = hungry;
  // increases dirt when refueling
  dirty += 2;
  dirtyCar.value = dirty;
  // doesn't let the progress bar go below 0
  hungry = Math.max(hungry, 0);
}
function driveCar() {
  // decreases the bored progress bar
  bored -= 6;
  boredCar.value = bored;
  // increases hunger and dirty when you drive the car
  hungry += 3;
  hungryCar.value = hungry;
  dirty += 5;
  dirtyCar.value = dirty;
  // doesn't let the progress bar go below 0
  bored = Math.max(bored, 0);
}
