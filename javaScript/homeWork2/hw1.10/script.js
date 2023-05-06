// - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
// за допомоги оператора || буде присвоювати змінній х значення "default" якщо значення змінної х являється falsy
// (хибноподібні, тобто приводиться до false)

// let x = false;
// let x = 0;
// let x = undefined;
// let x = null;
// let x = NaN;
let x = "";

// let x = [false, 0, undefined, null, NaN, ''];

if (x === false || x === 0 || x === undefined || x === null || isNaN(x) || x === '') {
    x = 'default';
}

console.log(x)

// for (let i = 0; i < x.length; i++) {
//     console.log(x[i] || 'default')
// }
