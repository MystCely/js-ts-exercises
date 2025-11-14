let closedChest = document.getElementById("closedChest");
let openChest = document.getElementById("openChest");
let invertoryId = document.getElementById("inventoryLocation");

//onclicks
closedChest.addEventListener("click", showOpenChest);
openChest.addEventListener("click", closeOpenChest);

//opens the chest and removes the closed chest
function showOpenChest() {
    openChest.style.display = "block";
    closedChest.style.display = "none";
    return openInventory();
}

// show closed chest
// hiding inventory when closing chest
function closeOpenChest() {
    closedChest.style.display = "block";
    openChest.style.display = "none";
    return closeInventory();
}


// showing inventory when opening chest
function showInvertory() {
    if(openChest == true){
        return openInventory();
    }
}



    // show inventory grid
    function openInventory(){
      // unhide inventory grid
      if(invertoryId.style.visibility == "hidden"){
        invertoryId.style.visibility = "visible";
      }else{
        
        document.getElementById('inventoryLocation').innerHTML = /*HTML*/ `
        <div id="chestslots" class="inventory-grid">
            <div id="slot1" class="inventory center" onclick="chestClick('slot1')"></div>
            <div id="slot2" class="inventory center" onclick="chestClick('slot2')"></div>
            <div id="slot3" class="inventory center" onclick="chestClick('slot3')"></div>
            <div id="slot4" class="inventory center" onclick="chestClick('slot4')"></div>
            <div id="slot5" class="inventory center" onclick="chestClick('slot5')"></div>
            <div id="slot6" class="inventory center" onclick="chestClick('slot6')"></div>
            <div id="slot7" class="inventory center" onclick="chestClick('slot7')"></div>
            <div id="slot8" class="inventory center" onclick="chestClick('slot8')"></div>
            <div id="slot9" class="inventory center" onclick="chestClick('slot9')"></div>
        </div>
    `}
    
  
}

// hide inventory grid
    function closeInventory(){
        invertoryId.style.visibility = "hidden";
    }


    

//goal for tomorrow, give items functions, make invetory be able to recive items down moving part and new item list


// Lexi's code

  // Move from chest to list
  function chestClick(slotId) {
    let slot = document.getElementById(slotId);
    let item = slot.innerHTML;

    if (item !== "") {
      let list = document.getElementById("itemList");
      
      // creates a new div with the item's name and puts it in the list area
      list.innerHTML += "<div class='items center' onclick='itemClick(this)'>" + item + "</div>";
      slot.innerHTML = "";
    }
    return null;
  }
  //problem ^^ can only take items out if chest is full (list is empty),
  // when u take an item from the chest only the last item gets moved fixed

  // move from list to chest
  function itemClick(clickedRow) {
    let item = clickedRow.innerHTML;

    if (item !== "") {
      
      let slot1 = document.getElementById("slot1");
      if (slot1.innerHTML === "") { slot1.innerHTML = item; clickedRow.remove(); return slot1; }

      
      let slot2 = document.getElementById("slot2");
      if (slot2.innerHTML === "") { slot2.innerHTML = item; clickedRow.remove(); return slot2; }

      
      let slot3 = document.getElementById("slot3");
      if (slot3.innerHTML === "") { slot3.innerHTML = item; clickedRow.remove(); return slot3; }

      
      let slot4 = document.getElementById("slot4");
      if (slot4.innerHTML === "") { slot4.innerHTML = item; clickedRow.remove(); return slot4; }

      
      let slot5 = document.getElementById("slot5");
      if (slot5.innerHTML === "") { slot5.innerHTML = item; clickedRow.remove(); return slot5; }

      
      let slot6 = document.getElementById("slot6");
      if (slot6.innerHTML === "") { slot6.innerHTML = item; clickedRow.remove(); return slot6; }

      
      let slot7 = document.getElementById("slot7");
      if (slot7.innerHTML === "") { slot7.innerHTML = item; clickedRow.remove(); return slot7; }

      
      let slot8 = document.getElementById("slot8");
      if (slot8.innerHTML === "") { slot8.innerHTML = item; clickedRow.remove(); return slot8; }

      
      let slot9 = document.getElementById("slot9");
      if (slot9.innerHTML === "") { slot9.innerHTML = item; clickedRow.remove(); return slot9; }
    }

    return null; // chest full or nothing to move
  }



