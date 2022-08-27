// Посчитать общую сумму в корзине

const cart = [54, 28, 105, 70, 92, 17, 120];
// 2. Сделать переменную total до цикла
// let total = 0;

// 1. Перебрать массив
// for (let i = 0; i < cart.length; i += 1) {
//    // console.log(cart[i]);
// // 3. Каждый элемент приплюсовать к тоталу
//    total += cart[i];
// }


// for (const value of cart) {
//    total += value;
// }



// console.log('Total: ', total);

for (let i = 0; i < cart.length; i += 1) {
   cart[i] = Math.round(cart[i] * 1.1);
}

console.log(cart);


   