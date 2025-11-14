updateView(); //change to drawStart
function updateView() {
  let html = /*html*/ `
  <div class="header-container">
  <progress value=${cool} id="cool" class="barcool" max=100></progress>
  <h1>Cool Car, Brooo</h1>
  <img class="bg" src="img/background.png" alt="sky background drawing">
  </div>
  <div class="road-container">
      <div class="img-container">
        <img onclick="pickUpItem()" class="car" src="img/car.png" alt="pink car drawing">
        <img onclick="pickUpItem()" class="items" src="img/five.png" alt="number five drawing">
        <img onclick="pickUpItem()" class="items" src="img/peeps.png" alt="people drawing">
        <img onclick="pickUpItem()" class="items" src="img/pencil.png" alt="pencil drawing">
        <img onclick="pickUpItem()" class="items" src="img/star.png" alt="star drawing">
        <img onclick="pickUpItem()" class="items" src="img/triangles.png" alt="triangles drawing">
        <hr>
        <div class="green"></div>
      </div>
      <button onclick="startEmil()">aaa</button>
    </div>


    <!-- Lexi -->
    <!-- people -->
    <img id="EmilPic" class="person" src="img/grandma.png" style="right: -120px;">
    <div id="EmilButtons" style="display:none;" class="center">
      <button class="center-btn button" onclick="checkEmil('hello')">heyyyy slayyyyy</button>
      <button class="center-btn button" onclick="checkEmil('gm')">good morning ladies and gentlemen.</button>
      <button class="center-btn button" onclick="checkEmil('wz')">wazzzuuuppp</button>
      <button class="center-btn button" onclick="checkEmil('nw')">nice weather wasn't it?</button>
      <button class="center-btn button" onclick="checkEmil('wag')">wagwan cuz</button>
      <button class="center-btn button" onclick="checkEmil('popo')">hello sir</button>
      <!-- code that works^^ -->
      




    `;
  app.innerHTML = html;
  drawEnd();
}

function drawStart() {
  app.innerHTML = /*html*/ `
    <button onclick="startGame(),updateView()">Start</button>
    `;
}

function drawEnd() {
  if (cool < 1) {
    app.innerHTML = /*html*/ `
      <div>You are not cool</div>
      `;
  } else if (cool > 99) {
    app.innerHTML = `
      <div>You are sick!!!!!!</div>
    `;
  }
}
