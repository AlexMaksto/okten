/*
1. Створити пустий масив та :
       a. заповнити його 50 парними числами за допомоги циклу.
       b. заповнити його 50 непарними числами за допомоги циклу.
       c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
       d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)
 2. Вивести за допомогою console.log кожен третій елемен
 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.
 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив
 5. Вивести кожен елемент масиву, сусід справа якого є парним
  EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56
 */

let arrays = [];

{
    /* заповнити його 50 парними числами за допомоги циклу. */
    document.write(`<div>заповнити його 50 парними числами за допомоги циклу.`);
    for (let i = 0; i < 50; i++) {
        arrays[arrays.length] = i * 2;
        document.write(`<br>${arrays[arrays.length - 1]}`)
    }
    document.write(`</div>`)
}

{
    /* заповнити його 50 непарними числами за допомоги циклу. */
    document.write(`<div>заповнити його 50 парними числами за допомоги циклу.`);
    let count = 1;
    for (let i = 0; i < 50; i++) {
        arrays[arrays.length] = count;
        count += 2;
        document.write(`<br>${arrays[arrays.length - 1]}`)
    }
    document.write(`</div>`)
}

{
    /* Заповнити масив 20ма рандомними числами. (Google: Generate random number JS) */
    document.write(`<div>Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)`);
    for (let i = 0; i < 20; i++) {
        arrays[arrays.length] = Math.floor(Math.random() * 10000);
        document.write(`<br>${arrays[arrays.length - 1]}`)
    }
    document.write(`</div>`)
}

{
    /* Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS) */
    document.write(`<div>Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)`);
    for (let i = 0; i < 20; i++) {
        arrays[arrays.length] = Math.floor(Math.random() * (732 - 8 + 1)) + 8;
        document.write(`<br>${arrays[arrays.length - 1]}`)
    }
    document.write(`</div>`)
}

{
    /* Вивести за допомогою console.log кожен третій елемен */
    console.log('Вивести за допомогою console.log кожен третій елемен');
    for (let i = 3; i < arrays.length; i += 3) {
        console.log(i, arrays[i]);
    }
}

{
    /* Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним */
    console.log('Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним');
    for (let i = 3; i < arrays.length; i += 3) {
        if (i % 2 === 0) {
            console.log(i, arrays[i]);
        }
    }
}

{
    /* Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив */
    console.log('Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив');
    const newArrays = [];
    for (let i = 3; i < arrays.length; i += 3) {
        if (i % 2 === 0) {
            console.log(i, arrays[i]);
            newArrays[newArrays.length] = arrays[i];
        }
    }
}

{
    /* Вивести кожен елемент масиву, сусід справа якого є парним
     EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56 */
    console.log('Вивести кожен елемент масиву, сусід справа якого є парним');
    for (let i = 0; i < arrays.length; i++) {
        if (arrays[i + 1] % 2 === 0) {
            console.log(arrays[i], 'сусід:', arrays[i + 1]);

        }
    }
}