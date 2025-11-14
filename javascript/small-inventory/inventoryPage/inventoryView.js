function inventoryView() {
  appDiv.innerHTML = `
    <h1>Inventory</h1>
   
      <div class="center" id="itemListContainer">
        <ul id="itemList"></ul>
      </div>
      
      <div class="center">
          <div id="itemInfo"></div>
      </div>
      
      <div class="center" id="showInStockContainer">
        <button id="showInStockBtn"">Show In Stock</button>
      </div>
      
      <div class="center">
        <input class="user-input" type="text" placeholder="Add Item Name" data-field="name">
        <input class="user-input" type="text" placeholder="Add Category" data-field="category">
        <input class="user-input" type="number" placeholder="Add Price" data-field="price">
        <br>
        <button onclick="addItem()">Add Item</button>
      </div>
  `;


  const itemListDiv = document.getElementById("itemList");
  const itemInfoDiv = document.getElementById("itemInfo");

  // show item list
  let originalList = model.data.products.forEach(product => {
    const li = document.createElement("li");
    li.classList.add("product");
    li.textContent = product.name;

    li.dataset.name = product.name;
    li.dataset.price = product.price;
    li.dataset.category = product.category;
    li.dataset.inStock = product.inStock;

    itemListDiv.appendChild(li);
  });

  // show item info
  itemListDiv.addEventListener("click", event => {
    if (event.target.tagName === "LI") {
      const { price, category } = event.target.dataset;
      itemInfoDiv.innerHTML = `
      <p>Price: ${price}</p>
      <p>Category: ${category}</p>
      `;
    }
  });

  const showInStockBtn = document.getElementById("showInStockBtn");
  const showInStockContainer = document.getElementById("showInStockContainer");

  // show items with inStock = true
  showInStockBtn.addEventListener("click", event => {
    const inStockItems = model.data.products.filter(product => product.inStock === true);
    console.log(inStockItems);

    itemListDiv.innerHTML = ``;

    inStockItems.forEach(productInStock => {
    const li = document.createElement("li");
    li.classList.add("product");
    li.textContent = productInStock.name;

    li.dataset.name = productInStock.name;
    li.dataset.price = productInStock.price;
    li.dataset.category = productInStock.category;
    li.dataset.inStock = productInStock.inStock;

    itemListDiv.appendChild(li);
    });

    showInStockContainer.innerHTML = `
      <div class="center" id="showInStockContainer">
        <button id="showAllItemsBtn"">Show All Items</button>
      </div>
    `;

  });

  // const showAllItemsBtn = document.getElementById("showAllItemsBtn");
  // const itemListContainer = document.getElementById("itemListContainer");
  //
  // showAllItemsBtn.addEventListener("click", event => {
  //   itemListDiv.innerHTML = originalList;
  // });

}

