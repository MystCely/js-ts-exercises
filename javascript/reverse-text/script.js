// model
let userValue;
let reversedString;
const app = document.getElementById("app");

// view
updateView();
function updateView() {
  let html = /*html*/ `
  <div class="center">
    <h1>Reversed String</h1>
    <input id="userInput" type="text" onkeyup="saveUserInput(this)">
    <br>
    <button onclick="turnReverseStr()">Enter</button>
    <p id="inputValue"></p>
  </div>
    `;
  document.getElementById("app").innerHTML = html;
}

// controller
function saveUserInput(inputElement) {
  userValue = inputElement.value;
  reversedString = userValue.split("").reverse().join("");
}

function turnReverseStr() {
  document.getElementById("inputValue").innerText = reversedString;
  document.getElementById("userInput").value = "";
}
