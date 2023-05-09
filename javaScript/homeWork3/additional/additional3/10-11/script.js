/*
- Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
- Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
 */

const numbers = [];

for (let i = 0; i < 10; i++) {
    numbers[i] = Math.floor(Math.random() * 10000);
}

/* Вивести в консоль тільки ті елементи, значення яких є парними */
for (const number of numbers) {
    if (number % 2 === 0) {
        console.log(number)
    }
}

/* Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший. */
let newNumbers = [];
for (const number of numbers) {
    newNumbers[newNumbers.length] = number;
}
for (const newNumber of newNumbers) {
    console.log(newNumber);
}