// Оператор ветвления if

// if (5 > 3) {
//    // тело
//    console.log('dwddf');
// }

// console.log('дальше');

// Оператор ветвления if...else

// if (5 > 30) {
//    console.log('x > y');
// } else {
//    console.log('x < y');
// }

// Оператор ветвления else...if
// const salary = 1000;
// if (salary <= 500) {
//    console.log('Уровень 1');
// } else if (salary > 500 && salary < 1500) {
//    console.log('Уровень 2');
// } else if (salary > 1500 && salary < 3000) {
//    console.log('Уровень 3');
// } else {
//    console.log('Уровень 4');
// }

// Тернарный оператор
const balance = 1000;
// let message;

// if (balance >= 0) {
//    message = 'Позитивный баланс';
// } else {
//    message = 'Негативный баланст';
// }

const message = balance >= 0 ? 'Позитивный баланс' : 'Негативный баланст';
console.log(message);


// Блочная область видимисти переменных

const b = 10;

if (true) {
   const a = 5;
   console.log(a);
}

console.log(b);

