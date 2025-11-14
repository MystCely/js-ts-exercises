// hide the items
function hideItem(item) {
  item.style.display = "none";
  setTimeout(() => {
    showRandomItems("items");
  }, 1000);
}

function showRandomItems() {
  let elements = document.getElementsByClassName("items");
  if (elements.length === 0) return;

  // hides all items
  for (let i = 0; i < elements.length; i++) {
    elements[i].style.display = "none";
  }

  // pick randome one to show
  let randomIndex = Math.floor(Math.random() * elements.length);
  let chosen = elements[randomIndex];

  // show an item
  chosen.style.display = "block";
  chosen.classList.add("drive");
  // make chosen above others
  chosen.style.zIndex = 1000;

  // making the item clickable
  let autoHide = setTimeout(() => hideItem(chosen), 10000);

  // turning the item clickable and cancels autoHide if clicked
  chosen.onclick = () => {
    clearTimeout(autoHide);
    pickUpItem();
    hideItem(chosen);
  };
}

showRandomItems("items");

// emil
function pickUpItem() {
  cool += 10;
  cool = Math.min(Math.max(cool, 0), 100);
  updateView();
  console.log(cool);
}
document.getElementById("cool").value = cool;

// lexi's code

function startEmil() {
  let pos = -120;
  let move = setInterval(() => {
    pos += 5;
    EmilPic.style.right = pos + "px";
    if (pos >= 650) {
      clearInterval(move);
      EmilButtons.style.display = "block";
    }
  }, 50);
}

function checkEmil(choice) {
  if (choice === "hello") {
    EmilPic.src = "img/grandma-happy.png";
    EmilButtons.style.display = "none";
    cool += 40;
    cool = Math.min(Math.max(cool, 0), 100);
  } else {
    EmilPic.src = "img/grandma-pissed.png";
    cool -= 10;
    cool = Math.min(Math.max(cool, 0), 100);
  }
}
//code that works^^
