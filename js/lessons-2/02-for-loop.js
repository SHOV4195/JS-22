// цикл for

// for (let i = 0; i <= 500; i += 1) {
//    console.log(i);
// }

// console.log('swww');


// Pre-increment and Post-increment

// for (let i = 0; i < 10; i++) {
//    console.log(i);
// } 

// Напиши скрипт который подсчитывает общюю сумму зарплат работниковю
// Кол-во работников хранится в переменной employees
// Зарплата каждого работника это случайное число от 500 до 5000
// Записать сумму в переменную totalSalary и вывести в консоль

// 1. сделать вары
// const minSalary = 500;
// const maxSalary = 5000;
// const employees = 3;
// let totalSalary = 0;
// // 2. перебрать работников в цикле
// for (let i = 1; i <= employees; i += 1) {
// // 3. сгенерить случайную зп
//    const salary = Math.round(
//       Math.random() * (maxSalary - minSalary) + minSalary,
//    );
//    console.log(`ЗП работника номер ${i} - ${salary}`);

// // 4. прибавить к тотату
//    totalSalary += salary;
// }
// // 5. лог
// console.log('totalSalary: ', totalSalary);
   

// Напиши скрипт который подсчитывает сумму всех четных чисел
// которые входят в диапазон чисел в переменные от мин до мах


// 1. Вары
const min = 5;
const max = 13;
let total = 0;

// 2. фор от мин до мах с шагом в 1
for (let i = min; i <= max; i += 1) {
   // console.log(i);
// Проверяем от деления
   if (i % 2 !== 0) {
      console.log('Не четное: ', i);
      continue;
   }

//  пишем в сумму
   console.log('четное: ', i);
   total += i;
} 
   
console.log('total: ', total);






   // Остаток от деления

// console.log(11 % 2);