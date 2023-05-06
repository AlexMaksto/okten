/*
    Ми маємо змінну number в яку користувач задає числове значення,
    якщо змінна рівна 10 вивести повідомлення ВІРНО,
    якщо змінна не рівна 10 - тоді НЕВІРНО
 */

const number = Math.floor(Math.random() * 3) + 9;
// const number = +prompt();
console.log(number);

console.log(number === 10 ? 'ВІРНО' : 'НЕВІРНО');