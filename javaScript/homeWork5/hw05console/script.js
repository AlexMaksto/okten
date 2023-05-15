/* ВСЕ ЗРОБИТИ СТРІЛОЧНИМИ ФУНКЦІЯМИ! */
const randomNumber = (endNumber = 10, startNumber = 1) =>
    Math.round(Math.random() * (endNumber - startNumber + 1)) + startNumber;

const makeArrays = (size = randomNumber()) => {
    const arrays = [];
    for (let i = 0; i < size; i++) {
        arrays.push(randomNumber());
    }
    return arrays;
}

/* створити функцію яка обчислює та повертає площу прямокутника зі сторонами, а і б */
const areaRectangle = (a, b) => a * b;

{
    const a = randomNumber();
    const b = randomNumber();
    console.log(`area rectangle a=${a}, b=${b}: ${areaRectangle(a, b)}`);
}

console.log();

/* створити функцію яка обчислює та повертає площу кола з радіусом r */
const areaCircles = r => Math.PI * r ** 2;

{
    const r = randomNumber();
    console.log(`area circles r=${r}: ${areaCircles(r)}`);
}

console.log();

/* створити функцію яка обчислює та повертає площу циліндру висотою h, та радіусом r */
const areaCylinder = (h, r) => 2 * Math.PI * r * (r + h);

{
    const h = randomNumber();
    const r = randomNumber();
    console.log(`area cylinder h=${h}, r=${r}: ${areaCylinder(h, r)}`);
}

console.log();

/* створити функцію яка приймає масив та виводить кожен його елемент */
const consoleArrays = arrays => {
    console.log(`Arrays have ${arrays.length} symbol`)
    for (let i = 0; i < arrays.length; i++) {
        console.log(`index ${i} value: ${arrays[i]}`);
    }
};

{
    consoleArrays(makeArrays());
}

console.log();

/* створити функцію яка повертає найменьше число з масиву */
const minNumber = arrays => {
    let min = arrays[0];
    for (const array of arrays) {
        if (array < min) {
            min = array;
        }
    }
    return min;
};

{
    const arrays = makeArrays();
    console.log(`arrays for search min: ${arrays}`);
    console.log(`min number: ${minNumber(arrays)}`);
}

console.log();

/* Створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його.
    Приклад sum([1,2,10]) //->13 */
const sum = arr => {
    let result = 0;
    for (const arrElement of arr) {
        result += arrElement;
    }
    return result;
};

{
    const arrays = makeArrays();
    console.log(`arrays for sum: ${arrays}`);
    console.log(`sum: ${sum(arrays)}`)
}

console.log();

/*  Створити функцію swap(arr,index1,index2). Функція міняє місцями значення у відповідних індексах
    Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44] */
const swap = (arr, index1, index2) => {
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
    return arr;
};

{
    let arrays = makeArrays(10);
    const index1 = randomNumber(Math.floor(arrays.length / 2));
    const index2 = randomNumber(Math.floor(arrays.length / 2), arrays.length);
    console.log(`index1: ${index1}, index2: ${index2}`);
    console.log(`arrays before swap: ${arrays}`);
    arrays = swap(arrays, index1, index2);
    console.log(`arrays after  swap: ${arrays}`);
}

console.log();

/*  Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
    Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
*/
const exchange = (sumUAH, currencyValues, exchangeCurrency) => {
    let result = 'Not exchange';
    for (const currencyValue of currencyValues) {
        if (currencyValue.currency === exchangeCurrency) {
            result = sumUAH / currencyValue.value;
        }
    }
    return result;
};

{
    const sumUAH = randomNumber(1000000);
    const currencyValues = [{currency: 'USD', value: 40}, {currency: 'EUR', value: 42}];
    const exchangeCurrency = 'USD';
    console.log(`${sumUAH} UAH it's ${exchange(sumUAH, currencyValues, exchangeCurrency)} ${exchangeCurrency}`);
}