// modell
const app = document.getElementById("app");
let myString = "panda";

// split the characters
let charArray = myString.split("");
// access the first character in the string
charArray[0] = "P";
// join the characters together
let newString = charArray.join("");

// view
updateView();
function updateView() {
  app.innerHTML = /*html*/ `
  <div class="main-container center">
  <div class="myString">${myString}</div>
  <button onclick="changeChar()">Change to uppercase</button>
  </div>
  `;
}

// controller
function changeChar() {
  app.innerHTML = /*html*/ `
  <div class="main-container center">
  <div class="myString">${newString}</div>
  <button onclick="changeCharBack()">Change to uppercase</button>
  </div>
  `;
}

function changeCharBack() {
  updateView();
}
