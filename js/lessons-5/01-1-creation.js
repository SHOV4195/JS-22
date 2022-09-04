// Обьекты (делаем плейлист музыки: имя, рейтинг, треки, кол-во треков)
// - Литерал обьекта
// - Свойства, ключи (имя) и значения
// - Как отключить обьект от области видимости



// 
// const x = {};

// const fn = function (myObject) {
//    // myObject = {a: 1, b: 2}
//    console.log(myObject);
// };

// fn({ a: 1, b: 2 });

// // 
// const rtfn = function () {
//    return { a: 5 }
// };

// console.log(rtfn);

// 

const playlist = {
   name: 'Мой супер плейлист',
   rating: 5,
   tracks: ['трек-1', 'трек-2', 'трек-3'],
   trackCount: 3,
};

// console.log(playlist);
// console.log(playlist.tracks);
// console.log(playlist.name);
// console.log(playlist.trackCount);

const propertyName = 'tracks';

// console.log(playlist.rating);
// console.log(playlist['rating']);

// console.log(playlist.propertyName);
// console.log(playlist[propertyName]);

// Короткая запись свойст

// const username = 'Mango';
// const email = 'mango@mail.com';

// const signupData = {
//    username,
//    email,
// };

// console.log(signupData);


// Вычисляемые свойства

// <input name = 'color' value = 'tomato'>

// const inputName = 'color';
// const inputValue = 'tomato';

// const colorPickerData = {
//    [inputName]: inputValue,
// };

// console.log(colorPickerData);


// Ссылочный тип {} === {}

// const a = { x: 1, y: 2 };
// const b = a;

// console.log(b === a);

// a.c = 100;

// console.log(a);
// console.log(b);

// Массивы и функции это обьекты

// const a = [1, 2, 3];

// a.hello = ':)';

// console.log(a);


// 
// const fn = function () {
//    console.log('Hello');
// }
// fn.hello = ':)';

// console.log(fn.hello);
