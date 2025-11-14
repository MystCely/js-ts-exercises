function addItem() {
  const userInput = document.querySelectorAll(".user-input");

  const fields = document.querySelectorAll("[data-field]");
  const addedItem = {};

  fields.forEach(field => {
    const fieldName = field.dataset.field;
    addedItem[fieldName] = field.value;
    addedItem.inStock = true;
    if (fieldName === "price") {
      addedItem.price = Number(field.value);
    }
  });

  model.data.products.push(addedItem);

  userInput.value = "";
  console.log(model.data.products);
  inventoryView();
}