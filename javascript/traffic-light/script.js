
const redCol =  document.getElementById("redId");
const yellowCol =  document.getElementById("yellowId");
const greenCol =  document.getElementById("greenId");
let extraBtn = document.getElementById("extraBtn");

let currentLight = 0;

let intervalId = null; // holding the setInterval ID
let isRunning = false; // check if lights are active

// toggle button to activate active-color
function toggleColor(color) {
    document.getElementById(color + "Id").classList.toggle(color + "-active");
};

// remove active lights
function removeLights() {
    redCol.classList.remove("red-active");
    yellowCol.classList.remove("yellow-active");
    greenCol.classList.remove("green-active");
};

// switching the colors
function switchCol() {
    return setInterval(() => {
        removeLights();

            if (currentLight === 0) {
                redCol.classList.add("red-active");
                    currentLight = 1;
                }else if (currentLight === 1) {
                    yellowCol.classList.add("yellow-active");
                    currentLight = 2;
                } else if (currentLight === 2) {
                    greenCol.classList.add("green-active");
                    currentLight = 0;
                }
        }, 1000);
};

// make the lights go automatically when clicking the button
function autoActive(){
    if (isRunning == false){

        // start the interval
        intervalId = switchCol();
        isRunning = true;

    // stop the interval
    } else {
        clearInterval(intervalId);
        intervalId = null;
        isRunning = false;
        removeLights();
    }
};


