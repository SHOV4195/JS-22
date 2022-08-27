// Поиск логина

const logins = ['m4ngoDoge', 'k1widab3st', 'poly1scute', 'aj4xth3m4n'];
const loginToFind = 'poly1scute';
let message = `Пользователь ${loginToFind} не найден.`;

// for (let i = 0; i < logins.length; i += 1) {
//    const login = logins[i];

//    console.log('Login: ', login);

//    console.log(`${login} === ${loginToFind}: `, login === loginToFind);

//    if (login === loginToFind) {
//       message = `Пользователь ${loginToFind} найден.`;
//       break;
//    }

//       message = `Пользователь ${loginToFind} не найден.`;
// }
//   console.log(message);

// for (const login of logins) {
//    console.log('Login: ', login);
//    console.log(`${login} === ${loginToFind}: `, login === loginToFind);

//    if (login === loginToFind) {
//       message = `Пользователь ${loginToFind} найден.`;
//       break;
//    }
// }
//   console.log(message);

console.log(logins.includes(loginToFind));