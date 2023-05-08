/*
    є масив [2,17,13,6,22,31,45,66,100,-18] :
    1. перебрати його циклом while
    2. перебрати його циклом for
    3. перебрати циклом while та вивести  числа тільки з непарним індексом
    4. перебрати циклом for та вивести  числа тільки з непарним індексом
    5. перебрати циклом while та вивести  числа тільки парні  значення
    6. перебрати циклом for та вивести  числа тільки парні  значення
    7. замінити кожне число кратне 3 на слово "okten"
    8. вивести масив в зворотньому порядку.
    9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
 */

const arrays = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];

/*---------- 1. перебрати його циклом while ----------*/
{
    document.write('<div><b>перебрати його циклом while</b>')
    let i = 0;
    while (i < arrays.length) {
        document.write('<br>' + arrays[i]);
        i++;
    }
    document.write('</div>')
}

/*---------- 2. перебрати його циклом for ----------*/
{
    document.write('<div><b>перебрати його циклом for</b>')
    for (let i = 0; i < arrays.length; i++) {
        document.write('<br>' + arrays[i]);
    }
    document.write('</div>')
}

/*---------- 3. перебрати циклом while та вивести  числа тільки з непарним індексом ----------*/
{
    document.write('<div><b>перебрати циклом while та вивести  числа тільки з непарним індексом</b>')
    let i = 1;
    while (i < arrays.length) {
        document.write('<br>Index: ' + i + ' value: ' + arrays[i]);
        i += 2;
    }
    document.write('</div>')
}

/*---------- 4. перебрати циклом for та вивести  числа тільки з непарним індексом ----------*/
{
    document.write('<div><b>перебрати циклом for та вивести  числа тільки з непарним індексом</b>')
    for (let i = 1; i < arrays.length; i += 2) {
        document.write('<br>Index: ' + i + ' value: ' + arrays[i]);
    }
    document.write('</div>')
}

/*---------- 5. перебрати циклом while та вивести  числа тільки парні  значення ----------*/
{
    document.write('<div><b>перебрати циклом while та вивести  числа тільки парні  значення</b>')
    let i = 0;
    while (i < arrays.length) {
        document.write('<br>Index: ' + i + ' value: ' + arrays[i]);
        i += 2;
    }
    document.write('</div>')
}

/*---------- 6. перебрати циклом for та вивести  числа тільки парні  значення ----------*/
{
    document.write('<div><b>перебрати циклом for та вивести  числа тільки парні  значення</b>')
    for (let i = 0; i < arrays.length; i += 2) {
        document.write('<br>Index: ' + i + ' value: ' + arrays[i]);
    }
    document.write('</div>')
}

/*---------- 7. замінити кожне число кратне 3 на слово "okten" ----------*/
{
    const thisArrays = arrays.slice();
    document.write('<div><b>замінити кожне число кратне 3 на слово "okten"</b>')
    for (let i = 0; i < thisArrays.length; i++) {
        if (thisArrays[i] % 3 === 0) {
            thisArrays[i] = 'okten';
        }
        document.write('<br>' + thisArrays[i]);
    }
    document.write('</div>')
}

/*---------- 8. вивести масив в зворотньому порядку. ----------*/
{
    document.write('<div><b>вивести масив в зворотньому порядку</b>')
    for (let i = arrays.length - 1; i >= 0; i--) {
        document.write('<br>' + arrays[i]);
    }
    document.write('</div>')
}

/*---------- 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед) ----------*/
document.write('<hr>')

/*---------- 1. перебрати його циклом while ----------*/
{
    document.write('<div><b>перебрати його циклом while в зворотньому циклі</b>')
    let i = arrays.length - 1;
    while (i >= 0) {
        document.write('<br>' + arrays[i]);
        i--;
    }
    document.write('</div>')
}

/*---------- 2. перебрати його циклом for ----------*/
{
    document.write('<div><b>перебрати його циклом for в зворотньому циклі</b>')
    for (let i = arrays.length - 1; i >= 0; i--) {
        document.write('<br>' + arrays[i]);
    }
    document.write('</div>')
}

/*---------- 3. перебрати циклом while та вивести  числа тільки з непарним індексом ----------*/
{
    document.write('<div><b>перебрати циклом while та вивести  числа тільки з непарним індексом в зворотньому циклі</b>')
    let i = (arrays.length - 1) % 2 === 0 ? arrays.length - 2 : arrays.length - 1;
    while (i >= 0) {
        document.write('<br>Index: ' + i + ' value: ' + arrays[i]);
        i -= 2;
    }
    document.write('</div>')
}

/*---------- 4. перебрати циклом for та вивести  числа тільки з непарним індексом ----------*/
{
    document.write('<div><b>перебрати циклом for та вивести  числа тільки з непарним індексом в зворотньому циклі</b>')
    for (let i = (arrays.length - 1) % 2 === 0 ? arrays.length - 2 : arrays.length - 1; i >= 0; i -= 2) {
        document.write('<br>Index: ' + i + ' value: ' + arrays[i]);
    }
    document.write('</div>')
}

/*---------- 5. перебрати циклом while та вивести  числа тільки парні  значення ----------*/
{
    document.write('<div><b>перебрати циклом while та вивести  числа тільки парні  значення в зворотньому циклі</b>')
    let i = (arrays.length - 1) % 2 === 0 ? arrays.length - 1 : arrays.length - 2;
    while (i >= 0) {
        document.write('<br>Index: ' + i + ' value: ' + arrays[i]);
        i -= 2;
    }
    document.write('</div>')
}

/*---------- 6. перебрати циклом for та вивести  числа тільки парні  значення ----------*/
{
    document.write('<div><b>перебрати циклом for та вивести  числа тільки парні  значення в зворотньому циклі</b>')
    for (let i = (arrays.length - 1) % 2 === 0 ? arrays.length - 1 : arrays.length - 2; i >= 0; i -= 2) {
        document.write('<br>Index: ' + i + ' value: ' + arrays[i]);
    }
    document.write('</div>')
}

/*---------- 7. замінити кожне число кратне 3 на слово "okten" ----------*/
{
    const thisArrays = arrays.slice();
    document.write('<div><b>замінити кожне число кратне 3 на слово "okten" в зворотньому циклі</b>')
    for (let i = thisArrays.length - 1; i >= 0; i--) {
        if (thisArrays[i] % 3 === 0) {
            thisArrays[i] = 'okten';
        }
        document.write('<br>' + thisArrays[i]);
    }
    document.write('</div>')
}