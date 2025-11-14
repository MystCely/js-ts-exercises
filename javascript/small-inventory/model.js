const model = {
  app: {
    currentPage: "inventoryPage"
  },

  viewState: {
    invertoryPage: {
      // addedItem: {},
    },
  },

  data: {
    products: [
      {name: "Cheese", inStock: false, category: "Dairy", price: 120, },
      {name: "Apple", inStock: true, category: "Fruit", price: 30, },
      {name: "Pear", inStock: false, category: "Fruit", price: 35, },
      {name: "Milk", inStock: true, category: "Dairy", price: 70, },
      {name: "Broccoli", inStock: true, category: "Vegetable", price: 80, },
      {name: "Pizza", inStock: true, category: "Frozen", price: 150, },
    ],
  },

}