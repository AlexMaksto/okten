/*
- Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
- Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
- Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
- Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
- Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
- Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
- Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
 */

// make arrays numbers
let numbers = [];
for (let i = 0; i < 10; i++) {
    numbers[i] = Math.floor(Math.random() * 10000);
}

/*---------- Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі. ----------*/
{
    console.log('Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.');
    for (const number of numbers) {
        console.log(number);
    }
}

// make arrays string
const alphabet = 'abcdefghijklmnopqrstuvwxyz ';
const strings = [];
for (let i = 0; i < 10; i++) {
    let word = '';
    const countLetter = Math.floor(Math.random() * 20) + 1;
    for (let j = 0; j < countLetter; j++) {
        word += alphabet[Math.floor(Math.random() * alphabet.length)];
    }
    strings[i] = word;
}

/*---------- Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі. ----------*/
{
    console.log('Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.')
    for (const string of strings) {
        console.log(string);
    }
}

// make arrays different
let differents = [];
const types = ['string', 'number', 'boolean'];
for (let i = 0; i < 10; i++) {
    const lotteryType = types[Math.floor(Math.random() * 3)];
    switch (lotteryType) {
        case 'string':
            let word = '';
            const countLetter = Math.floor(Math.random() * 20) + 1;
            for (let j = 0; j < countLetter; j++) {
                word += alphabet[Math.floor(Math.random() * alphabet.length)];
            }
            differents[i] = word;
            break;
        case 'number':
            differents[i] = Math.floor(Math.random() * 10000);
            break;
        case'boolean':
            differents[i] = Math.floor(Math.random()) < 0.5;
            break
        default:
            console.log('hm...')
    }
}

/*---------- Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі. ----------*/
{
    console.log('Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.')
    for (const different of differents) {
        console.log(different)
    }
}

/*---------- Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи ----------*/
{
    console.log('За допомогою if та typeof вивести тільки булеві елементи');
    for (const different of differents) {
        if (typeof different === 'boolean') {
            console.log(different);
        }
    }
}

/*---------- Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи ----------*/
{
    console.log('За допомогою if та typeof вивести тільки числові елементи');
    for (const different of differents) {
        if (typeof different === 'number') {
            console.log(different);
        }
    }
}

/*---------- Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи ----------*/
{
    console.log('За допомогою if та typeof вивести тільки рядкові елементи');
    for (const different of differents) {
        if (typeof different === 'string') {
            console.log(different);
        }
    }
}

/*---------- Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі. ----------*/

{
    let differents1 = [];
    const types1 = ['string', 'number', 'boolean'];
    for (let i = 0; i < 10; i++) {
        const lotteryType1 = types1[Math.floor(Math.random() * 3)];
        switch (lotteryType1) {
            case 'string':
                let word = '';
                const countLetter = Math.floor(Math.random() * 20) + 1;
                for (let j = 0; j < countLetter; j++) {
                    word += alphabet[Math.floor(Math.random() * alphabet.length)];
                }
                differents1[i] = word;
                break;
            case 'number':
                differents1[i] = Math.floor(Math.random() * 10000);
                break;
            case'boolean':
                differents1[i] = Math.floor(Math.random()) < 0.5;
                break
            default:
                console.log('hm...')
        }
        console.log(differents1[i]);
    }
}