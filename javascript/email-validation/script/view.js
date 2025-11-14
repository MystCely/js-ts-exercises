updateView();
function updateView() {
  let html = /* html */ `
    <h1>Gjenkjenn epostadresse</h1>
    <p id="result"></p>
    <input id="inputField" type="text" onkeyup="saveUserInput(this)">
    <button onclick="checkEmail()">Check</button>
    <ul>
    <li>Epostadresse må inneholde @</li>
    <li>Må ha en punktum etter @</li>
    <li>Mellomrom er ikke tillat</li>
    </ul>
    `;
  app.innerHTML = html;
}
