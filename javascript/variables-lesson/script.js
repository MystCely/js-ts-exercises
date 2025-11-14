const redCol = document.getElementById("redDiv");
const purpleCol = document.getElementById("purpleDiv");
const blueCol = document.getElementById("blueDiv");
const mainDiv = document.getElementById("mainDiv");

// change background color when clicking button
function changeBg() {
    document.body.style.backgroundColor = "#C87B1D";
    removeSetRed();
    removeSetPurple();
    removeSetBlue();
}

// set active color
function setCol() {
    redCol.classList.add("set-color");
    blueCol.classList.add("set-color");
    purpleCol.classList.add("set-color");
}

// remove active color
function removeSetPurple() {
    document.getElementById("purpleDiv").classList.remove("set-color");
}
function removeSetRed() {
    document.getElementById("redDiv").classList.remove("set-color");
}
function removeSetBlue() {
    document.getElementById("blueDiv").classList.remove("set-color");
}


// change background color when clicking on color divs
redCol.addEventListener("click", function() {
    document.body.style.backgroundColor = "#AE0032";
    removeSetPurple();
    removeSetBlue();
});

blueCol.addEventListener("click", function() {
    document.body.style.backgroundColor = "#111d5e";
    removeSetPurple();
    removeSetRed();
});

purpleCol.addEventListener("click", function() {
    document.body.style.backgroundColor = "#650F4D";
    removeSetBlue();
    removeSetRed();
});

