function saveUserInput(userInput) {
  userValue = userInput.value;
}

// adds user input to cart
function addToCart() {
  items.push(userValue);
  updateView();
}
