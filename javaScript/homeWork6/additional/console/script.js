/* створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100. */
console.log('Створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.')

const randomArrays = (size = 10, min = 0, max = 100) => {
    let arrays = [];
    for (let i = 0; i < size; i++) {
        arrays.push(Math.floor(Math.random() * (max - min + 1)) + min)
    }
    return arrays;
}

console.log(randomArrays());

console.log();

{
    /* Створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort */
    console.log(`Створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort`);
    const numbers = randomArrays();
    console.log(`Before: ${numbers}`);
    console.log(`After: ${numbers.sort((a, b) => a - b)}`);
}

console.log();

{
    /* Створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відфільтрувати його за допомоги filter, залишивши тільки парні числа (без 0!) */
    console.log('Створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відфільтрувати його за допомоги filter, залишивши тільки парні числа (без 0!)');
    const numbers = randomArrays(10, -4, 4);
    console.log(`Before: ${numbers}`);
    console.log(`After: ${numbers.filter(number => number % 2 === 0 && number + ''.includes(0))}`);
}

console.log();

{
    /* Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери. */
    console.log('Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.');

    const capitalize = str => str.split(' ').map(word => word.replace(word[0], word[0].toUpperCase())).join(' ');

    const str = 'lorem ipsum dolor sit amet.';
    console.log(`Before: ${str}`);
    console.log(`After: ${capitalize(str)}`);
}

console.log();

{
    /* Створити функцію-валідатор для адрес електронної пошти. Перевірка повинна містити дані до знака равлика(@), наявність равлика, крапку яка знаходиться не менше ніж на 2 символ далі після равлика, функція не чутлива до регістру (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)
    Протестувати на значеннях
    someemail@gmail.com
    someeMAIL@gmail.com
    someeMAIL@i.ua
    some.email@gmail.com

    Примітка
    Для тих, хто дуже розумний, та почне використовувати регулярні вирази одразу "ні". Своїм мозком подумайте над протоколом, з регулярками будете потім бавитись.*/
    console.log('Створити функцію-валідатор для адрес електронної пошти. Перевірка повинна містити дані до знака равлика(@), наявність равлика, крапку яка знаходиться не менше ніж на 2 символ далі після равлика, функція не чутлива до регістру (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)');
    const validEmail = (email, check) => {
        const emailWord = email.split('@');

        if (!email.includes('@') || emailWord.length !== 2) {
            console.error(`Error '@' in email: ${email}`);
            return false;
        }
        console.log(emailWord[1].length)
        if (emailWord[0].length === 0 || emailWord[1].length === 0) {
            console.error(`Few letters in email: ${email}`);
            return false;
        }

        if (emailWord[1].indexOf('.') < 1) {
            console.error(`Error dot in domain: ${email}`);
            return false;
        }

        if (email.toLowerCase() !== check.toLowerCase()) {
            console.error('Not the same')
            return false;
        }
        return true;

    }
    console.log(validEmail('sss@EMAIL.COM', 'sss@EMAIL.COM'));
}

console.log();

{
    /* є масив відсортувати його в спадному порядку за кількістю елементів в полі modules */
    console.log('Є масив відсортувати його в спадаючому порядку за кількістю елементів в полі modules');
    let coursesArray = [
        {
            title: 'JavaScript Complex',
            monthDuration: 5,
            hourDuration: 909,
            modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
        },
        {
            title: 'Java Complex',
            monthDuration: 6,
            hourDuration: 909,
            modules: ['html',
                'css',
                'js',
                'mysql',
                'mongodb',
                'angular',
                'aws',
                'docker',
                'git',
                'java core',
                'java advanced']
        },
        {
            title: 'Python Complex',
            monthDuration: 6,
            hourDuration: 909,
            modules: ['html',
                'css',
                'js',
                'mysql',
                'mongodb',
                'angular',
                'aws',
                'docker',
                'python core',
                'python advanced']
        },
        {
            title: 'QA Complex',
            monthDuration: 4,
            hourDuration: 909,
            modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
        },
        {
            title: 'FullStack',
            monthDuration: 7,
            hourDuration: 909,
            modules: ['html',
                'css',
                'js',
                'mysql',
                'mongodb',
                'react',
                'angular',
                'aws',
                'docker',
                'git',
                'node.js',
                'python',
                'java']
        },
        {
            title: 'Frontend',
            monthDuration: 4,
            hourDuration: 909,
            modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
        }
    ];

    console.log(coursesArray.sort((a, b) => b.modules.length - a.modules.length));

}

console.log();

{
    /* Стоврити масив книжок (назва, кількість сторінок, автори , жанри). */
    console.log('Створити масив книжок (назва, кількість сторінок, автори , жанри).');
    const books = [
        {
            title: "The Great Gatsby",
            pageCount: 218,
            authors: ["F. Scott Fitzgerald"],
            genres: ["Fiction", "Classic"]
        },
        {
            title: "To Kill a Mockingbird",
            pageCount: 324,
            authors: ["Harper Lee"],
            genres: ["Fiction", "Classic"]
        },
        {
            title: "Harry Potter and the Sorcerer's Stone",
            pageCount: 320,
            authors: ["J.K. Rowling"],
            genres: ["Fantasy"]
        },
        {
            title: "The Hobbit",
            pageCount: 310,
            authors: ["J.R.R. Tolkien"],
            genres: ["Fantasy", "Adventure"]
        },
        {
            title: "The Da Vinci Code",
            pageCount: 454,
            authors: ["Dan Brown", "John Smith"],
            genres: ["Mystery", "Thriller"]
        }
    ];

    console.log();
    {
        /* Знайти найбільшу книжку */
        console.log('Знайти найбільшу книжку');
        console.log(books.sort((page1, page2) => page2.pageCount - page1.pageCount)[0]);
    }

    console.log();
    {
        /* Знайти книжку/ки з найбільшою кількістю жанрів */
        console.log('Знайти книжку/ки з найбільшою кількістю жанрів');
        console.log(books.sort((book1, book2) => book2.genres.length - book1.genres.length)
            .reduce((accum, book) => {
                if (book.genres.length === books[0].genres.length) {
                    accum.bookMaxGenres.push({...book});
                }
                return accum;
            }, {bookMaxGenres: []}));
    }

    console.log();
    {
        /* знайти книжку/ки з найдовшою назвою */
        console.log('Знайти книжку/ки з найдовшою назвою');
        console.log(books.sort((book1, book2) => book2.title.length - book1.title.length)
            .reduce((accum, book) => {
                if (book.title.length === books[0].title.length) {
                    accum.bookMaxTitle.push({...book})
                }
                return accum;
            }, {bookMaxTitle: []}));
    }

    console.log();
    {
        /* Знайти книжку/ки які писали 2 автори */
        console.log('Знайти книжку/ки які писали 2 автори');
        console.log(books.filter(book => book.authors.length === 2));
    }

    console.log();
    {
        /* Знайти книжку/ки які писав 1 автор */
        console.log('Знайти книжку/ки які писав 1 автор');
        console.log(books.filter((book) => book.authors.length === 1));
    }

    console.log();
    {
        /* Відсортувати книжки за кількістю сторінок по зростанню */
        console.log('Відсортувати книжки за кількістю сторінок по зростанню');
        console.log(books.sort((book1, book2) => book1.pageCount - book2.pageCount));
    }
}