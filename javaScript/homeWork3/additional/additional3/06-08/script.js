/*
 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.
 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.
 */

{
    /* Обрахувати середній чек. */
    const arrays = [100, 250, 50, 168, 120, 345, 188];
    console.log('Обрахувати середній чек');
    let average = 0;
    for (const array of arrays) {
        average += array;
    }
    console.log(average / arrays.length);
}

{
    /* Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив */
    console.log(`Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив`);
    const number = [];
    const newNumber = [];
    for (let i = 0; i < 10; i++) {
        let temp = Math.floor(Math.random() * 10000);
        number[i] = temp;
        newNumber[i] = temp * 5;
        console.log(`original:`, number[i]);
        console.log(`modify:`, newNumber[i]);
    }
}

{
    /* Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив. */
    const arrays = [1, 'two', true, false, 5.5, 'six', [7, 8], {name: 'John', age: 30}, null, undefined];
    let numberArrays = [];
    for (const arrayElement of arrays) {
        if (typeof arrayElement === "number"){
            numberArrays[numberArrays.length] = arrayElement;
        }
    }
    for (const numberArray of numberArrays) {
        console.log(numberArray)
    }
}
