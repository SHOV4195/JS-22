

// const fnA = function (message, callback) {
//    console.log(message);

//    console.log(callback);
//    callback(100);
// };

// const fnB = function (number) {
//    console.log('Это лог при вызове fnA', number);
// };

// fnA('qwqwwq', fnB);


// 
// const doMath = function (a, b, callback) {
//    const result = callback(a, b);

//    console.log(result);
// };

// doMath(2, 3, function (x, y) {
//    return x + y;
// });

// doMath(10, 8, function (x, y) {
//    return x - y;
// });
// 


// Регистрация событий
// const buttonRef = document.querySelector('.js-button');

// const handBtnClick = function () {
//    console.log('Клик по кнопке' + Date.now());
// };

// buttonRef.addEventListener('click', handBtnClick);

// 
// Геопозиция пользователя

// const onGetPositionSuccess = function (position) {
//    console.log(position);
// }

// const onGetPositionError = function (error) {
//    console.log(error);
// }

// window.navigator.geolocation.getCurrentPosition(onGetPositionSuccess, onGetPositionError);  

// Интервалы

console.log('В коде перед таймаутом');
console.log('Через 3 секунды внутри колбека в таймауте');
console.log('В коде после таймаута');

