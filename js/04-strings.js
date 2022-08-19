// Длина строки, свойство length
const message = 'В этой строке 26 символов.';
// console.log(message.length);

// Конкатенация строк
const firstName = 'Chelsy';
const lastName = 'Emerald';
const fullName = firstName + ' ' + lastName;

// console.log(fullName);

// Напиши скрипт который выведет строку в формате:
// "Гость х у поселяется в z номер q"
const room = 716;
const type = 'VIP';
// const welcomeMsg = 'Гость ' + firstName + ' ' + lastName + ' поселяется в ' + type + ' номер ' + room;
const welcomeMsg = `Гость ${firstName} ${lastName} поселяется в ${type} номер ${room}`;

console.log(welcomeMsg);

// Шаблонные строки
const quantity = 5;
const orderMsg = `Вы заказываете ${quantity} холодильников`;

console.log(orderMsg);


// Нормализация 
const brand = 'Samsung';
const normalizedBrand = brand.toLowerCase();

console.log(normalizedBrand);

// Поиск в строке
const blacklistedWord1 = 'спам';
const blacklistedWord2 = 'распродажа';

const string1 = 'Привет, я принц Абдул, это не спам, предлагаю тебе миллион!';
const string2 = 'Самая большая РАСПРОДАЖА этой недели, не пропустите';
const string3 = 'Рекламная кампания #fatlivesmatter';

console.log(string1.includes(blacklistedWord1));
console.log(string1.includes(blacklistedWord2));

console.log(string2.includes(blacklistedWord1));

const normalizedString2 = string2.toLowerCase();
console.log(normalizedString2.includes(blacklistedWord2));

console.log(string3.includes(blacklistedWord1));
console.log(string3.includes(blacklistedWord2));