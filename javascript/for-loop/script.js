// model
let stopValue = 10;
let num = 2;

// view
updateView();
function updateView() {
  let html = /*html*/ `
    <h1 class="center">For loop</h1>
    <div class="btn-container center">
      <button onclick="addList()">Print numbers</button>
    </div>
  `;
  document.getElementById("app").innerHTML = html;
}

// controller
function addList() {
  // clears the list before adding a new one
  document.getElementById("app").innerHTML = "";

  for (let counter = 0; counter <= stopValue; counter++) {
    document.getElementById("app").innerHTML += /*html*/ `
      <div class="center">
      <li>${num * counter}</li>
      </div>  
      `;
  }
}
