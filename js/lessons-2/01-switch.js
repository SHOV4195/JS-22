// Напиши скрипт выбора стоимости отеля по кол-ву звезд
// 1 - 20$, 2 - 30$, 3 - 50$, 4 - 70$, 5 - 120$

// const stars = 1;
// let price;

// if (stars === 1) {
//    price = 20;
// } else if (stars === 2) {
//    price = 30;
// } else if (stars === 3) {
//    price = 50;
// } else if (stars === 4) {
//    price = 70;
// } else if (stars === 5) {
//    price = 120;
// } else {
//    console.log('Такого количества нет');
// }

// switch (stars) {
//    case 1:
//       price = 20;
//       break;
   
//    case 2:
//       price = 30;
//       break;
   
//    case 3:
//       price = 50;
//       break;
   
//    case 4:
//       price = 70;
//       break;
   
//    case 5:
//       price = 120;
//       break;
   
//    default:
//       console.log('Такого количества зведз нет');
// }

// console.log(price);


// Напиши скрипт выбора стоимости отеля по кол-ву звезд
// 1, 2 - 20$, 3, 4 - 30$, 5 - 120$

// const stars = 1;
// let price;



// if (stars === 1 || start ===2) {
//    price = 20;
// } else if (stars === 3 || start ===4) {
//    price = 30;
// } else if (stars === 5) {
//    price = 120;
// } else {
//    console.log('Такого количества звезд нет');
// }

// console.log(price);


// switch (stars) {
//    case 1:
//    case 2:
//       price = 20;
//       break;
   
//    case 3:
//    case 4:
//       price = 30;
//       break;
   
//    case 5:
//       price = 120;
//       break;
   
//    default:
//       console.log('Такого количества зведз нет');
// }

// console.log(price);


// Напиши скрипт выбора доставки товара
// Опция хранится в переменной option: 1 - самовывоз, 2 - курьер, 3 - почта

const option = 1;
let message = '';

switch (option) {
   case 1:
      message = 'Вы можете забрать товар завтра с 12:00 в нашем офисе';
      break;
   
   case 2:
      message = 'Курьер доставит заказ завтра с 9:00 до 18:00';
      break;

   case 3:
      message = 'Посылка будет отправлена сегодня';
      break;
   
   default:
      message = 'Вам перезвонит менеджер';
}

console.log(message);