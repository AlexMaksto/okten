/*
    Маємо 3 числа і між ним  нам потрібно знайти те що посередині.
    Знайти, яке з них є середнім (більше одного, але менше за інше).
    Перевірити, чи знаходиться перше число між двома іншими.
*/
const minRandom = 0;
const maxRandom = 1000;
const a = Math.floor(Math.random() * (maxRandom - minRandom + 1)) + minRandom;
const b = Math.floor(Math.random() * (maxRandom - minRandom + 1)) + minRandom;
const c = Math.floor(Math.random() * (maxRandom - minRandom + 1)) + minRandom;

console.log('a', a, 'b', b, 'c', c);

let medium;

if ((a >= b && a <= c) || (a <= b && a >= c)) {
    medium = a;
} else if ((b >= a && b <= c) || (b <= a && b >= c)) {
    medium = b;
} else if ((c >= a && c <= b) || (c <= a && c >= b))
    medium = c;

console.log('medium', medium);

//test
const arrays = [a, b, c];
arrays.sort((a, b) => a - b);
console.log('test', arrays[1]);

if (medium === arrays[1]) {
    console.log('ok');
} else console.log('not ok');
