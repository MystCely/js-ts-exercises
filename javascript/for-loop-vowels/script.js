// model
let vowels = ["a", "e", "o", "u", "y", "æ", "ø", "å"];
let userInput;
let text = "";

// view
updateView();
function updateView() {
  let html = /*html*/ `
  <h1>Find the vowels</h1>
  <div class="main-container center">
    <p id="output"></p>
    <input type="text" onkeyup="saveUserInput(this)">
    <br>
    <button onclick="findVowel(this) ">Enter</button>
  </div>
    `;

  document.getElementById("app").innerHTML = html;
}

// controller

function saveUserInput(inputElement) {
  userInput = inputElement.value;
}

function enterValue() {
  document.getElementById("output").innerHTML = userInput;
}

function findVowel() {
  let count = 0;

  // REGULAR for loop version
  // for (let i = 0; i < userInput.length; i++) {
  //   let letter = userInput[i].toLowerCase();
  //   if (vowels.includes(letter)) {
  //     count++;
  //   }
  // }

  for (let letter of userInput.toLowerCase()) {
    if (vowels.includes(letter)) {
      count++;
    }
  }
  document.getElementById("output").innerHTML =
    "Input: " + userInput + `<br>` + "Vowel: " + count;
}
