// Напиши функцию findLogin(allLogins, login) для поиска логина

const logins = ['m4ngoDoge', 'k1widab3st', 'poly1scute', 'aj4xth3m4n'];
// const loginToFind = 'aj4xth3m4n';

// const message = logins.includes(loginToFind)
//    ? `Пользователь ${loginToFind} найден.`
//    : `Пользователь ${loginToFind} не найден.`;

// console.log(message);


// 
// const findLogin = function (allLogins, loginToFind) {
//    for (const login of allLogins) {
//       if (login === loginToFind) {
//          return `Пользователь ${loginToFind} найден.`;
//       }
//    }

//    return `Пользователь ${loginToFind} не найден.`;
// };

// 

const findLogin = function (allLogins, loginToFind) {
   return allLogins.includes(loginToFind)
      ? `Пользователь ${loginToFind} найден.`
      : `Пользователь ${loginToFind} не найден.`;
   
   return message;
};


console.log(findLogin(logins, 'avocod3r'));
console.log(findLogin(logins, 'k1widab3st'));
console.log(findLogin(logins, 'jam4l'));
console.log(findLogin(logins, 'poly1scute'));