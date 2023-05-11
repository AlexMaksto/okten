function randomNumber(endNumber = 20, startNumber = 1) {
    return Math.round(Math.random() * (endNumber - startNumber + 1)) + startNumber;
}

function makeArrays(size = randomNumber()) {
    const arrays = [];
    for (let i = 0; i < size; i++) {
        arrays.push(randomNumber());
    }
    return arrays;
}

/* Створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!) */
function minNumber(a, b, c) {
    let result = 'Some lazha';
    if (a <= b && a <= c) {
        result = a;
    } else if (b <= a && b <= c) {
        result = b;
    } else if (c <= a && c <= b) {
        result = c;
    }
    return result;
}

{
    const a = randomNumber();
    const b = randomNumber();
    const c = randomNumber();
    console.log(`For min a=${a}, b=${b}, c=${c}: ${minNumber(a, b, c)}`);
}

console.log();

/* Створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!) */
function maxNumber(a, b, c) {
    let result = 'Some lazha';
    if (a >= b && a >= c) {
        result = a;
    } else if (b >= a && b >= c) {
        result = b;
    } else if (c >= a && c >= b) {
        result = c;
    }
    return result;
}

{
    const a = randomNumber();
    const b = randomNumber();
    const c = randomNumber();
    console.log(`For max a=${a}, b=${b}, c=${c}: ${maxNumber(a, b, c)}`);
}

console.log();

/* Створити функцію яка повертає найбільше число з масиву */
function maxArrays(arrays) {
    let result = Number.MIN_VALUE;
    for (const array of arrays) {
        if (array > result) {
            result = array;
        }
    }
    return result;
}

{
    const arrays = makeArrays();
    console.log(`Arrays for search max: ${arrays}`);
    console.log(`Max number: ${maxArrays(arrays)}`);
}

console.log();

/* Створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень */
function averageArrays(arrays) {
    let result = 0;
    for (const array of arrays) {
        result += array;
    }
    return result / arrays.length;
}

{
    const arrays = makeArrays();
    console.log(`Arrays for search average: ${arrays}`);
    console.log(`Average: ${averageArrays(arrays)}`);
}

console.log();

/*  Створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше
    (Math використовувати заборонено) */
function minMax(...numbers) {
    let min = Number.MAX_VALUE;
    let max = Number.MIN_VALUE;
    for (const number of numbers) {
        if (number < min) {
            min = number;
        }
        if (number > max) {
            max = number;
        }
    }
    console.log(`Max number: ${max}`)
    return min;
}

{
    const a = randomNumber();
    const b = randomNumber();
    const c = randomNumber();
    console.log(`Number for search max and min: ${a}, ${b}, ${c}`);
    console.log(`Min: ${minMax(a, b, c)}`);
}

console.log();

/*  Створити функцію яка заповнює масив рандомними числами
    (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) 
    та виводить його. */
function randomNumberArrays(size) {
    const numbers = [];
    for (let i = 0; i < size; i++) {
        numbers[i] = Math.round(Math.random() * 100);
    }
    console.log(`Random number: ${numbers}`);
}

randomNumberArrays(randomNumber());

console.log();

/*  Створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент,
    який характеризує кінцеве значення діапазону. */
function randomNumberArraysLimit(size, limit) {
    const numbers = [];
    for (let i = 0; i < size; i++) {
        numbers[i] = Math.round(Math.random() * limit);
    }
    return numbers;
}

{
    const limit = randomNumber();
    console.log(`Random number with limit ${limit}: ${randomNumberArraysLimit(randomNumber(), limit)}`);
}

console.log();

/* Функція приймає масив та робить з нього новий масив у зворотньому порядку. [1,2,3] -> [3, 2, 1]. */
function reversArray(arrays) {
    const reversArrays = [];
    for (let i = arrays.length - 1; i >= 0; i--) {
        reversArrays.push(arrays[i]);
    }
    return reversArrays;
}

{
    const arrays = makeArrays();
    console.log(`Original arrays: ${arrays}`);
    console.log(`Revers arrays: ${reversArray(arrays)}`);
}

console.log();

/*  Створити функцію, яка якщо приймає один аргумент, просто виводить його,
    якщо два аргументи - складає або конкатенує їх між собою. */
function concatenation(...args) {
    let result = ``;
    if (args.length === 1) {
        console.log(args[0]);
    } else if (args.length > 1) {
        if (typeof args[0] === "number") {
            result = 0;
        }
        for (const arg of args) {
            result += arg;
        }
        console.log(result)
    } else console.log('Some lazha');
}

console.log(`Not argument`);
concatenation();
console.log(`One argument`);
concatenation('One');
console.log(`Number argument`);
concatenation(1, 5, 6);
console.log(`Text argument`);
concatenation('1', '5', '6');

console.log();

/*  Створити функцію яка приймає два масиви та складає значення елементів з однаковими індексами та
    повертає новий результуючий масив.
        EXAMPLE:
        [1,2,3,4]
        [2,3,4,5]
        результат
        [3,5,7,9] */
function sumArrays(arrays1, arrays2) {
    const sumArrays = [];
    for (let i = 0; i < arrays1.length; i++) {
        sumArrays[i] = arrays1[i] + arrays2[i];
    }
    return sumArrays;
}

{
    const sizeArrays = randomNumber();
    const arrays1 = makeArrays(sizeArrays);
    const arrays2 = makeArrays(sizeArrays);
    console.log(`1 arrays: ${arrays1}`);
    console.log(`2 arrays: ${arrays2}`);
    console.log(`Sum arrays: ${sumArrays(arrays1, arrays2)}`);
}

console.log();

/* Створити функцію яка приймає масив будь яких об'єктів, та повертає масив ключів всіх обєктів
  EXAMPLE:
  [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ] */
function keyArrays(arrays) {
    const keys = [];
    for (const array of arrays) {
        for (const arrayElement in array) {
            keys.push(arrayElement)
        }
    }
    return keys;
}

/*  Створити функцію яка приймає масив будь яких об'єктів, та повертає масив значень всіх обєктів
  EXAMPLE:
  [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]
 */
function valueArrays(arrays) {
    const value = [];
    for (const array of arrays) {
        for (const arrayElement in array) {
            value.push(array[arrayElement]);
        }
    }
    return value;
}

{
    const arrays = [{name: 'Dima', age: 13}, {model: 'Camry'}];
    console.log(arrays);
    console.log(`Keys: ${keyArrays(arrays)}`);
    console.log(`Value: ${valueArrays(arrays)}`);
}