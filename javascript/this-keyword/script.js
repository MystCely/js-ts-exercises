let textField = document.getElementById("textField");

function typeKey(elem) {
    if (textField.innerText === "Type using the keyboard") {
        textField.innerText = ""; // clear the text
    }
    textField.innerText += elem.innerText; // add text on button click
}