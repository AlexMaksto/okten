/* Створити функцію яка створює параграф з текстом. Текст задати через аргумент */
function makeParagraph(text) {
    document.write(`<p>${text}</p>`);
}

makeParagraph('Створити функцію яка створює параграф з текстом. Текст задати через аргумент');

/* Створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий */
function makeUl(text) {
    document.write(`
        <ul>
            <li>${text}</li>
            <li>${text}</li>
            <li>${text}</li>
        </ul>
                    `);
    document.write(`<ul>`);
    for (let i = 0; i < 3; i++) {
        document.write(`<li>${text}</li>`)
    }
    document.write(`</ul>`);
}

makeUl(`Створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий`);

/*  Створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
    Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл) */
function makeUCount(text, countLi = 3) {
    document.write(`<ul>`);
    for (let i = 0; i < countLi; i++) {
        document.write(`<li>${text}</li>`)
    }
    document.write(`</ul>`);
}

{
    const countLi = 3;
    makeUCount(`Створити функцію яка створює ul з ${countLi} елементами li. Текст li задати через аргумент всім однаковий.
                    Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)`, countLi);
}

/* Створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список */
function ulArrays(arrays) {
    document.write(`<ul>`);
    for (const item of arrays) {
        document.write(`<li>${item}</li>`)
    }
    document.write(`</ul>`);
}

{
    const arrays = [5, "Hello", true, 7, "World"];
    ulArrays(arrays);
}

/*  Створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
    Для кожного об'єкту окремий блок.*/
function userInfo(users) {
    for (const user of users) {
        document.write(`<div>Name: ${user.name}, age: ${user.age}</div>`);
    }
}

{
    let users = [
        {id: 1, name: 'John', age: 25},
        {id: 2, name: 'Jane', age: 30},
        {id: 3, name: 'Bob', age: 40},
        {id: 4, name: 'Alice', age: 20},
        {id: 5, name: 'Tom', age: 35}
    ];
    userInfo(users);
}