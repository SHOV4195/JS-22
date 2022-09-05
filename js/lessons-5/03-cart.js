// Работаем с корзиной товаров в корзине:
// - getItems()
// - add(product)
// - remove(productName)
// - clear()
// - countTotalPrice()
// - increaseQuantity(productName)
// - decreaseQuantity(productName)
// { name: 'apple', price: 50 }
// { name: 'appleguse', price: 60 }
// { name: 'lime', price: 70 }
// { name: 'wottermelo', price: 80 }

const cart = {
   items: [],
   getItems() { },
   add(product) { },
   remove(productName) { },
   clear() { },
   countTotalPrice() { },
   increaseQuantity(productName) { },
   decreaseQuantity(productName) { },
};

console.log(cart.getItems());

cart.add({ name: 'apple', price: 50 });
cart.add({ name: 'appleguse', price: 60 });
cart.add({ name: 'lime', price: 70 });
cart.add({ name: 'wottermelo', price: 80 });

console.log(cart.getItems());