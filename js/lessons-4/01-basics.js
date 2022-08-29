// Функции 
// - Функциональные выражения
// - Аргументы и параметры
// - Возврат значения

// const add = function (a, b) { 
//    console.log(a);
//    console.log(b);
//    console.log('Выполнить функцию add');

//    return a + b;;
// };

// const r1 = add(3, 5);
// console.log('r1: ', r1);

// const r2 = add(10, 25);
// console.log('r2: ', r2);

// const r3 = add(30, 50);
// console.log('r3: ', r3);


// Возврат return

// const fn = function () {
//    console.log(1);

//    console.log(2);

//    console.log(3);

//    return 111;
// };

// console.log('Результат: ', fn());

// Стек вызова
// Stack trace и поиск ошибок


const fnA = function () {
   console.log('Выполняется функция A');

   fnB();
};

const fnB = function () {
   console.log('Выполняется функция B');

   fnC();
};

const fnC = function () {
   console.log('Выполняется функция C');

   
};

// console.log('Лог после вызова функции A');
fnA();
// console.log('Лог после вызова функции A');

// console.log('Лог после вызова функции B');
// fnB();
// console.log('Лог после вызова функции B');

// console.log('Лог после вызова функции C');
// fnC();
// console.log('Лог после вызова функции C');


