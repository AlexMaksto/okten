/*
 - Перепишіть конструкцію if з використанням умовного оператора '?':
 let result;
 if (a + b < 4) {
    result = 'Мало';
 } else {
    result = 'Багато';
 }
*/

const a = Math.floor(Math.random() * 3);
const b = Math.floor(Math.random() * 3);

let result = a + b < 4 ? 'Мало' : 'Багато';

console.log('a', a, 'b', b, 'a+b', a + b);
console.log(result);
