// model
const app = document.getElementById('app');
const pocketStuff = ['Hat', 'Milktea', 'Books', 'Cookie'];

// view
updateView();
function updateView() {
  let html = /*html*/ `
    <h1>Looping of Array</h1>
    <div class="center">
    <p id="result">Pocket</p>
        <button onclick="seePocket()">See contents of my pocket</button>
    </div>
    `;
  app.innerHTML = html;
}

// controller
function seePocket() {
  // clears the element each click
  document.getElementById('result').innerHTML = '';

  for (let i = 0; i < pocketStuff.length; i++) {
    document.getElementById('result').innerHTML += `På runde ${i} i loopen så ser vi: ${pocketStuff[i]} <br>`;
  }
}
