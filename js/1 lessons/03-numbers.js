
// let elementWidth = '50px';
// elementWidth = Number.parseInt(elementWidth);
// console.log('elementWidth:', elementWidth);


// let elementHeight = '200.74px';
// elementHeight = Number.parseFloat(elementHeight);
// console.log('elementWidth:', elementHeight);



// let salary = 1300.16472;
// salary = Number(salary.toFixed(2));
// // salary = Number(salary);
// console.log(salary);

// console.log(Number(salary.toFixed(2)));


// Приведение к числу с Number(value)

// let quantity = '30';
// let value = 'Эту строку невозможно привести к числу';
// console.log(Number(quantity));
// console.log(Number(value));


// Обьект Math
// -возведение в степень

// const base = 2;
// const power = 5;
// const result = Math.pow(base, power);
// console.log(result);

// console.log(base ** power);


// Напиши скрипт который просит пользователя ввести число и степень, 
// * возводит в эту степень и выводит результат в консоль

// 1. попросить ввести число и сохранить в переменную
// let base = prompt('Давай число');
// base = Number(base);

// console.log(base);

// 2. попросить ввести степень и сохранить в переменную
// let power = prompt('Давай степень');
// power = Number(power);

// console.log(power);

// 3. возвести введение данные в степень и вывести
// const result = base ** power;

// console.log(result);

// Генерим псевдослучайные числа
// Math.random() * (max - min) + min
const max = 50;
const min = 10;

const result = Math.round(Math.random() * (max - min) + min);

console.log(result);



