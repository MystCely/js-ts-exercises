updateView();
function updateView() {
  // .map() function turns each item into a string with <li>
  let liArray = items.map((item) => `<li>${item}</li>`);
  // .join() merges them into a one string
  let liString = liArray.join('');

  let html = /* html */ `
    <h1>Handlevogn</h1>  
    <div class="cart-container center">
        <div class="list-container">
            <ul id="myCart">${liString}</ul>
        </div>
    </div>
    <div class="center">
    <input type="text" onkeyup="saveUserInput(this)">
    <button onclick="addToCart()">Add to cart</button>
    </div>
  `;
  app.innerHTML = html;
}

function showCart() {
  for (i = 0; i < items.length; i++) {
    // creates a new <li> element
    let li = document.createElement('li');
    // puts current item inside <li>
    li.innerText = items[i];
    // adds <li> as a child of cart (the <ul>)
    cart.appendChild(li);
  }
}
