{
    /*
        Знайти та вивести довжину наступних стрінгових значень
        'hello world', 'lorem ipsum', 'javascript is cool'
     */
    console.log(`Знайти та вивести довжину наступних стрінгових значень 'hello world', 'lorem ipsum', 'javascript is cool'`);
    const strs = ['hello world', 'lorem ipsum', 'javascript is cool'];
    strs.forEach(str => console.log(str.length));
}

console.log();

{
    /*
         Перевести до великого регістру наступні стрінгові значення
          'hello world', 'lorem ipsum', 'javascript is cool'
     */
    console.log(`Перевести до великого регістру наступні стрінгові значення 'hello world', 'lorem ipsum', 'javascript is cool'`);
    const strs = ['hello world', 'lorem ipsum', 'javascript is cool'];
    strs.forEach(value => console.log(value.toUpperCase()));
}

console.log();

{
    /*
        Перевести до нижнього регістру наступні стрінгові значення
      'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
     */
    console.log(`Перевести до нижнього регістру наступні стрінгові значення 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'`);
    const strs = ['HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'];
    strs.forEach(value => console.log(value.toLowerCase()))
}

console.log();

{
    /*
        Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
     */
    console.log(`Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.`);
    let str = ' dirty string   ';
    str = str.trim().replaceAll('  ', ' ');
    console.log(str);
}

console.log();

{
    /*
        Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
        let str = 'Ревуть воли як ясла повні';
        let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
     */
    console.log(`Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
        let str = 'Ревуть воли як ясла повні';
        let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']`)
    const stringToarray = str => str.split(' ')

    let str = 'Ревуть воли як ясла повні';
    let arr = stringToarray(str);
    console.log(arr);

}

console.log();
{
    /*
        є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map перетворити всі об'єкти в масиві на стрінгові.
     */
    console.log(`Є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map перетворити всі об'єкти в масиві на стрінгові.`)
    let numbers = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
    let strings = numbers.map(value => value += '');
    console.log(strings);

}

console.log();

{
    /*
        Створити функцію sortNums(direction), яка приймає масив чисел, та сортує його від більшого до меншого,
        або навпаки в залежності від значення аргументу direction.
            let nums = [11,21,3];
            sortNums(nums,'ascending') // [3,11,21]
            sortNums(nums,'descending') // [21,11,3]
     */

    console.log(`Створити функцію sortNums(direction), яка приймає масив чисел, та сортує його від більшого до меншого, або навпаки в залежності від значення аргументу direction.
            let nums = [11,21,3];
            sortNums(nums,'ascending') // [3,11,21]
            sortNums(nums,'descending') // [21,11,3]`)

    const sortNums = (arr, direction) => {
        switch (direction) {
            case 'ascending': {
                return arr.sort((a, b) => a - b);
            }
            case 'descending': {
                return arr.sort((a, b) => b - a);
            }
            default:
                return 'Repeat please';
        }

    }

    let nums = [11, 21, 3];

    console.log(`ascending: ${sortNums(nums, 'ascending')}`);
    console.log(`descending: ${sortNums(nums, 'descending')}`);
}

console.log();

{
    /*
    - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
     */

    console.log(`Є масив:`);
    let coursesAndDurationArray = [
        {title: 'JavaScript Complex', monthDuration: 5},
        {title: 'Java Complex', monthDuration: 6},
        {title: 'Python Complex', monthDuration: 6},
        {title: 'QA Complex', monthDuration: 4},
        {title: 'FullStack', monthDuration: 7},
        {title: 'Frontend', monthDuration: 4}
    ];
    coursesAndDurationArray.forEach(value => console.log(value));

    console.log();
    {
        /*
        відсортувати його за спаданням за monthDuration
         */
        console.log(`Відсортувати його за спаданням за monthDuration`);
        let sort = coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration);
        console.log(sort);
    }

    console.log();
    {
        /*
        відфільтрувати, залишивши тільки курси з тривалістю понад 5 місяців
         */
        console.log(`Відфільтрувати, залишивши тільки курси з тривалістю понад 5 місяців`);
        let filter = coursesAndDurationArray.filter(value => value.monthDuration > 5);
        console.log(filter);
    }

    console.log();
    {
        /*
        за допомогою map перетворити кожен елемент на наступний тип {id,title,monthDuration}
        */
        console.log(`За допомогою map перетворити кожен елемент на наступний тип {id,title,monthDuration}`);
        let map = coursesAndDurationArray.map((value, index) => {
            return {
                id: index + 1,
                title: value.title,
                monthDuration: value.monthDuration
            };
        });
        console.log(map);
    }
}

console.log();

{
    /*
    описати колоду карт (від 6 до туза без джокерів)
     */
    console.log(`Описати колоду карт (від 6 до туза без джокерів)`);
    const cardDesk = [];
    const value = ['6', '7', '8', '9', '10', 'ace', 'jack', 'queen', 'king'];
    const cardSuit = ['spade', 'diamond', 'heart', 'clubs'];
    const color = ['red', 'black'];
    value.forEach(value1 => cardSuit.forEach(cardSuit1 => color.forEach(color1 => {
        cardDesk.push({
            value: value1,
            cardSuit: cardSuit1,
            color: color1
        });
    })));
    console.log(cardDesk);

    console.log();
    {
        /* знайти піковий туз */
        console.log(`Знайти піковий туз`);
        const aceSpade = cardDesk.find(value1 => value1.cardSuit === 'ace');
        console.log(aceSpade);
    }
}


/*

 - всі шістки
 - всі червоні карти
 - всі буби
 - всі трефи від 9 та більше

{
    cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
    value: '', // '6'-'10', 'ace','jack','queen','king','joker'
    color:'', // 'red','black'
}

=========================

Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
{
    spades:[],
    diamonds:[],
    hearts:[],
    clubs:[]
}
=========================
взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
--написати пошук всіх об'єктів, в який в modules є sass
--написати пошук всіх об'єктів, в який в modules є docker
 */