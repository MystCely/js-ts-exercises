// model
const app = document.getElementById('app');
let minNum = 1;
let maxNum = 5;
let randomNumOne = 0;
let randomNumTwo = 1;

// view
updateView();
function updateView() {
  let html = /*html*/ `
    <h1>While-loop</h1>
    <div class="main-container center">
      <p id="equal">?</p>
      <button onclick="getRandomNum()">Generate Number</button>
      <p id="result"></p>
      <p class="note">check console log to see the process...</p>
    </div>
    `;
  app.innerHTML = html;
}

// controller
function getRandomNum() {
  while (randomNumOne !== randomNumTwo) {
    randomNumOne = Math.floor(Math.random() * (maxNum - minNum + 1) + minNum);
    randomNumTwo = Math.floor(Math.random() * (maxNum - minNum + 1) + minNum);
    console.log(randomNumOne, randomNumTwo);
  }
  document.getElementById('equal').innerHTML = `Equal numbers have been found: ${randomNumOne}`;
}
