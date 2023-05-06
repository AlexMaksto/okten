/*
    У нас є змінна test, якщо дорівнює true, виведіть 'Вірно', інакше виведіть 'Неправильно'.
    Перевірте роботу скрипта при test, що дорівнює true, false.
    Напишіть два варіанти скрипта - з коротким записом(тернаркою)
 */

const test = Math.random() < 0.5;
console.log(test);

const tru = 'Вірно';
const fal = 'Неправильно';

console.log(test ? tru : fal);

if (test) {
    console.log(tru);
} else console.log(fal);

switch (test) {
    case true:
        console.log(tru);
        break;
    case false:
        console.log(fal);
        break;
    default:
        console.error('Шо?');
}