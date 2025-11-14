// modell
let chooseName;
let chooseSub;
let choosePlace;

// view
updateView();
function updateView() {
  let html = /* html */ `
  <div class="main-container">
    <h1>Story time</h1>
    <div class="text-container">
        <div class="text">Once there was a</div>
        <div class="text" id="firstWord">__</div>
        <div class="text">that took a</div>
        <div class="text" id="secWord">__</div>
        <div class="text">and shared it with others in the</div>
        <div class="text" id="thirdWord">__</div>
        <div class="text"> - everyone was then happy. The End.</div>
    </div>
    <br>
    <div class="btn-container">
      <button onclick="changeName(this.innerHTML)">Panda</button>
      <button onclick="changeName(this.innerHTML)">Cat</button>
      <button onclick="changeName(this.innerHTML)">Dog</button>
    </div>
    <br>
    <div class="btn-container">
      <button onclick="changeSub(this.innerHTML)">cake</button>
      <button onclick="changeSub(this.innerHTML)">cloud</button>
    </div>
    <br>
    <div class="btn-container">
      <button onclick="changePlace(this.innerHTML)">pool</button>
      <button onclick="changePlace(this.innerHTML)">forest</button>
    </div>
  </div>
`;
  document.getElementById("app").innerHTML = html;
}

// controller
function changeName(nameClick) {
  chooseName = nameClick;
  document.getElementById("firstWord").innerHTML = `
  ${chooseName}
  `;
}

function changeSub(subClick) {
  chooseSub = subClick;
  document.getElementById("secWord").innerHTML = `
  ${chooseSub}
  `;
}

function changePlace(placeClick) {
  choosePlace = placeClick;
  document.getElementById("thirdWord").innerHTML = `
  ${choosePlace}
  `;
}
