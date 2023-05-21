{
    /*
        Напишіть функцію cutString(str, n), яка ділить рядок на підрядки, що складаються з символів n.
        document.writeln(cutString('насолода',3)) // [нас,оло,да]
    */
    document.writeln(`Завдання: Напишіть функцію cutString(str, n), яка ділить рядок на підрядки, що складаються з символів n.
        document.writeln(cutString('насолода',3)) // [нас,оло,да] <br>`);

    const cutString = (str, n) => {
        let strs = [];
        for (let i = 0; i < str.length; i += n) {
            strs.push(str.slice(i, i + n));
        }
        return strs;
    };

    document.writeln(`Результат: ${cutString('насолода', 3)}`);

}

document.writeln(`<br><br>`);

{
    /*
    Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
    let str = 'Каждый охотник желает знать';
    document.writeln(delete_characters(str, 7)); // Каждый
     */
    document.writeln(`Завдання: Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
    let str = 'Каждый охотник желает знать';
    
    document.writeln(delete_characters(str, 7)); // Каждый <br>`);
    const delete_characters = (str, length) => str.substr(0, length);

    let str = 'Каждый охотник желает знать';
    document.writeln(`Результат: ${delete_characters(str, 7)}`);
}

document.writeln(`<br><br>`);

{
    /*
    Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
    let str = "HTML JavaScript PHP";
    document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'
     */
    document.writeln(`Завдання: Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
    let str = "HTML JavaScript PHP";
    document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP' <br>`)

    const insert_dash = str => str.replaceAll(' ', '-').toUpperCase();

    let str = "HTML JavaScript PHP";
    document.writeln(`Результат: ${insert_dash(str)}`);
}

document.writeln(`<br><br>`);

{
    /* Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній. */
    document.writeln(`Завдання: Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній. <br>`)

    const foo = (str) => str.replace(str[0], str[0].toUpperCase());

    let str = `перша буква маленька`;
    document.writeln(`Результат: ${foo(str)}`);
}

document.writeln(`<br><br>`);

{
    /*
    Дано список імен.
    let n1 = 'Harry..Potter'
    let n2 = 'Ron---Whisley'
    let n3 = 'Hermione__Granger'
    Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
    let n1 = 'Harry Potter'
    let n2 = 'Ron Whisley'
    let n3 = 'Hermione Granger'
     */
    document.writeln(`Завдання: Дано список імен.
    let n1 = 'Harry..Potter'
    let n2 = 'Ron---Whisley'
    let n3 = 'Hermione__Granger'
    Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
    let n1 = 'Harry Potter'
    let n2 = 'Ron Whisley'
    let n3 = 'Hermione Granger' <br>`);

    const foo = (str) => str.replaceAll('.', ' ')
        .replaceAll('-', ' ')
        .replaceAll('_', ' ')
        .replaceAll('  ', ' ');

    let n1 = 'Harry..Potter';
    let n2 = 'Ron---Whisley';
    let n3 = 'Hermione__Granger';


    document.writeln(`Результат:<br>`);
    document.writeln(`${foo(n1)}<br>`);
    document.writeln(`${foo(n2)}<br>`);
    document.writeln(`${foo(n3)}<br>`);
}

document.writeln(`<br><br>`);

{
    /*
    Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у рядку str.
    let symb = "о", str = "Астрономия это наука о небесных объектах";
    document.writeln(count(str, symb)) // 5
     */
    document.writeln(`Завдання: Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у рядку str.
    let symb = "о", str = "Астрономия это наука о небесных объектах";
    document.writeln(count(str, symb)) // 5 <br>`);
    const count = (str, stringsearch) => str.indexOf(stringsearch) + 1;

    let symb = "о", str = "Астрономия это наука о небесных объектах";
    document.writeln(`Результат: ${count(str, symb)}`);
}

document.writeln(`<br><br>`);

{
    /*
    Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.
    let str = "Сила тяжести приложена к центру масс тела";
    document.writeln(cutString(str, 5)) // 'Сила тяжести приложена к центру'
    */
    document.writeln(`Завдання: Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.
    let str = "Сила тяжести приложена к центру масс тела";
    document.writeln(cutString(str, 5)) // 'Сила тяжести приложена к центру'<br>`);

    const cutString = (str, n) => str.split(' ').slice(0, n).join(' ');

    let str = "Сила тяжести приложена к центру масс тела";
    document.writeln(`Результат: ${cutString(str, 5)}`)
}