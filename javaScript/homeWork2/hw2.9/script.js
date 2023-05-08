// - Користувач вводить або має два числа.
//  Потрібно знайти та вивести максимальне число з тих двох .
//  Також потрібно врахувати коли введені рівні числа.

const message = 'Put number'
const a = +prompt(`${message} a:`);
const b = +prompt(`${message} b:`);

// alert(Math.max(a, b));

if (a > b) {
    alert(`a more ${a}`);
} else if (a < b) {
    alert(`b more ${b}`)
} else alert(`Same ${a}`)