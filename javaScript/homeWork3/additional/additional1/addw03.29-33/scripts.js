/*
- Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
- Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
- Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
- Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
- Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
 */

/* Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write */
document.write(`<div>`);
for (let i = 0; i < 10; i++) {
    console.log(i)
    document.write(`${i}<br>`);
}
document.write(`</div>`)

/* Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write */
document.write(`<div>`);
for (let i = 0; i < 100; i++) {
    console.log(i)
    document.write(`${i}<br>`);
}
document.write(`</div>`)

/* Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write */
document.write(`<div>`);
for (let i = 0; i < 100; i += 2) {
    console.log(i)
    document.write(`${i}<br>`);
}
document.write(`</div>`)

/* Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write */
document.write(`<div>`);
for (let i = 0; i < 100; i++) {
    if (i % 2 === 0) {
        console.log(i)
        document.write(`${i}<br>`);
    }
}
document.write(`</div>`)

/* Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write */
document.write(`<div>`);
for (let i = 0; i < 100; i++) {
    if (i % 2 !== 0) {
        console.log(i)
        document.write(`${i}<br>`);
    }
}
document.write(`</div>`)