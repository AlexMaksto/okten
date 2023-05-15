/* Всі функції повинні бути описані стрілочним типом!!!! */
const randomNumber = (endNumber = 20, startNumber = 1) => Math.round(Math.random() * (endNumber - startNumber + 1)) + startNumber;

const makeArrays = (size = randomNumber(), max, min) => {
    const arrays = [];
    for (let i = 0; i < size; i++) {
        arrays.push(randomNumber(max, min));
    }
    return arrays;
};

{
    /* Створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!) */
    const minNumber = (a, b, c) => {
        let result = 'Some lazha';
        if (a <= b && a <= c) {
            result = a;
        } else if (b <= a && b <= c) {
            result = b;
        } else if (c <= a && c <= b) {
            result = c;
        }
        return result;
    };

    const a = randomNumber();
    const b = randomNumber();
    const c = randomNumber();
    console.log(`For min a=${a}, b=${b}, c=${c}: ${minNumber(a, b, c)}`);
}

console.log();

{
    /* Створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!) */
    const maxNumber = (a, b, c) => {
        let result = 'Some lazha';
        if (a >= b && a >= c) {
            result = a;
        } else if (b >= a && b >= c) {
            result = b;
        } else if (c >= a && c >= b) {
            result = c;
        }
        return result;
    };

    const a = randomNumber();
    const b = randomNumber();
    const c = randomNumber();
    console.log(`For max a=${a}, b=${b}, c=${c}: ${maxNumber(a, b, c)}`);
}

console.log();

{
    /* Створити функцію яка повертає найбільше число з масиву */
    const maxArrays = arrays => {
        let result = arrays[0];
        for (const array of arrays) {
            if (array > result) {
                result = array;
            }
        }
        return result;
    };

    const arrays = makeArrays();
    console.log(`Arrays for search max: ${arrays}`);
    console.log(`Max number: ${maxArrays(arrays)}`);
}

console.log();

{
    /*  Створити функцію яка повертає найменьше число з масиву */
    const minArrays = arrays => {
        let result = arrays[0];
        for (const array of arrays) {
            if (array < result) {
                result = array;
            }
        }
        return result;
    };


    const arrays = makeArrays();
    console.log(`Arrays for search max: ${arrays}`);
    console.log(`Max number: ${minArrays(arrays)}`);
}

console.log();

{
    /* Створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13 */
    const sumArrays = arrays => {
        let result = 0;
        for (const array of arrays) {
            result += array;
        }
        return result;
    }

    const arrays = makeArrays();
    console.log(`Arrays for sum: ${arrays}`);
    console.log(`Sum: ${sumArrays(arrays)}`);
}

console.log();

{
    /* Дано натуральне число n. Вивести всі числа від 1 до n. */
    const numbers = (n) => {
        for (let i = 1; i <= n; i++) {
            console.log(i);
        }
    }
    const n = randomNumber();
    console.log(`Numbers from 1 to ${n}:`);
    numbers(n);
}

console.log();

{
    /* Дано два цілих числа A і В.
       Виведіть усі числа від A до B включно, в порядку зростання, якщо A < B, або за зменшення в іншому випадку. */
    const foo = (A, B) => {
        if (A < B) {
            increase(A, B);
        } else decrease(A, B);
    }
    const increase = (A, B) => {
        console.log(`Numbers from ${A} to ${B}:`);
        for (let i = A; i < B; i++) {
            console.log(i);
        }
    }
    const decrease = (A, B) => {
        console.log(`Numbers from ${A} to ${B}:`);
        for (let i = A; i >= B; i--) {
            console.log(i);
        }
    }

    foo(randomNumber(), randomNumber());
}

console.log();
{
    /*
      Функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
      EXAMPLE:
      foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
      foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
      foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]
     */

    const foo = (arrays, i) => {
        [arrays[i], arrays[i + 1]] = [arrays[i + 1], arrays[i]];
        // const temp = arrays[i];
        // arrays[i] = arrays[i + 1];
        // arrays[i + 1] = temp;
        return arrays;
    }

    let arrays = makeArrays(5);
    const i = randomNumber(arrays.length - 1);
    console.log(`Number: ${i}`)
    console.log(`Arrays before: ${arrays}`);
    arrays = foo(arrays, i);
    console.log(`Arrays after: ${arrays}`);

}

console.log();
{
    /*
    Створити функцію яка буде переносити елементи зі значенням 0 у кінець масиву.
    Зберігаючи при цьому порядок не нульових значень.
    Довжина масиву від 2 до 100
    EXAMPLE:
    [1,0,6,0,3] => [1,6,3,0,0]
    [0,1,2,3,4] => [1,2,3,4,0]
    [0,0,1,0]   => [1,0,0,0]
     */
    function foo(arrays) {
        let arrWithZero = [];
        let arrWithoutZero = [];
        for (const array of arrays) {
            if (array === 0) {
                arrWithZero.push(array)
            } else arrWithoutZero.push(array);
        }
        return arrWithoutZero.concat(arrWithZero);
    }

    let arrays = makeArrays(randomNumber(10, 10), -3, 3);
    console.log(arrays)
    arrays = foo(arrays);
    console.log(arrays)
}