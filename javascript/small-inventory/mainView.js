const appDiv = document.getElementById('app');

function updateView() {
  const currentPage = model.app.currentPage;
  if (currentPage === "inventoryPage") {
    inventoryView();
  }
}

window.onload = () => updateView();

function changePage(newPage) {
  model.app.currentPage = newPage;
  updateView();
}