// modell
let app = document.getElementById("app");

// view
updateView();
function updateView() {
  app.innerHTML = /*html*/ `
  <div class="main-container center">
    <h1>What kind of food are you?</h1>
    <div class="name">Name:</div>
    <input id="username" type="text">
    <br>
    <div class="btn-container">
      <button onclick="chooseMood('happy')" id="happy">Happy</button>
      <button onclick="chooseMood('sad')" id="sad">Sad</button>
      <button onclick="chooseMood('angry')" id="angry">Angry</button>
      <button onclick="chooseMood('tired')" id="tired">Tired</button>
    </div>
  </div>
    `;
}

let happyBtn = document.getElementById("happy");
let sadBtn = document.getElementById("sad");
let angryBtn = document.getElementById("angry");
let tiredBtn = document.getElementById("tired");

// controller

function chooseMood(mood) {
  let name = document.getElementById("username").value;
  if (name === "") {
    alert("Please enter your name first!");
    return;
  }

  userInput();

  if (mood == "happy") {
    happyMood();
  } else if (mood == "sad") {
    sadMood();
  } else if (mood == "angry") {
    angryMood();
  } else if (mood == "tired") {
    tiredMood();
  }
}

function userInput() {
  let userInput = document.getElementById("username").value;
  app.innerHTML += /*html*/ `
    <div>Hello, ${userInput}!</div>
    `;
}

function happyMood() {
  app.innerHTML = /*html*/ `
  <div class="center">
    <h2>You're a milktea!</h2>
    <img src="img/milktea.png" alt="cute milk tea cartoon">
    <div class="p-container">
      <p>Milk tea is tea blended with milk and sweeteners, 
      offering a rich flavor and varying from hot or cold to a diverse range of additions like tapioca pearls. 
      Popular in many Asian countries and gaining global traction, 
      its appeal lies in its sweet, rich taste and customizable options.</p>
    </div>
  </div>
  `;
}
function sadMood() {
  app.innerHTML = /*html*/ `
  <div class="center">
    <h2>You're a lakris!</h2>
    <img src="img/lakris-candy.png" alt="cute licorice candy cartoon">
    <div class="p-container">
      <p>Licorice, derived from the "sweet root" Glycyrrhiza glabra plant, 
      is a natural sweetener 30-50 times sweeter than sugar. 
      It has a rich history of medicinal use dating back to ancient Egypt, 
      where it was found in King Tut's tomb, and was used by 
      Alexander the Great's armies for thirst.</p>
    </div>
  </div>
  `;
}
function angryMood() {
  app.innerHTML = /*html*/ `
  <div class="center">
    <h2>You're a Carolina Reaper!</h2>
    <img src="img/carolina-reaper.png" alt="cute carolina reaper cartoon">
    <div class="p-container">
      <p>A Carolina Reaper fun fact is that it was initially developed to have a sweet flavor, 
      but surprisingly became the world's hottest pepper, holding the Guinness World Record for several years. 
      It was bred by crossing a Pakistani Naga with a red Habanero, and despite its intense heat, 
      it has a surprisingly sweet, fruity taste of cherry and cinnamon before the spice kicks in.</p>
    </div>
  </div>
  `;
}
function tiredMood() {
  app.innerHTML = /*html*/ `
  <div class="center">
    <h2>You're a coffee!</h2>
    <img src="img/coffee.png" alt="cute coffee cartoon">
    <div class="p-container">
      <p>A coffee fact is that coffee "beans" are actually seeds from a fruit resembling a cherry, 
      and according to legend, goats discovered coffee when they ate the berries and became energetic.</p>
    </div>    
  </div> 
  `;
}
