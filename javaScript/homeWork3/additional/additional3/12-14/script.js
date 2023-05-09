/*
- Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
- Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
- Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
 */

const arrays = ['a', 'b', 'c'];

{
    /* За допомогою циклу for зібрати всі букви в слово. */
    let wordFor = '';
    for (let i = 0; i < arrays.length; i++) {
        wordFor += arrays[i];
    }
    console.log(wordFor);
}

{
    /* За допомогою циклу while зібрати всі букви в слово. */
    let wordWhile = '';
    let i = 0;
    while (i < arrays.length) {
        wordWhile += arrays[i];
        i++;
    }
    console.log(wordWhile)
}

{
    /* За допомогою циклу for of зібрати всі букви в слово. */
    let wordForOf = '';
    for (const array of arrays) {
        wordForOf += array;
    }
    console.log(wordForOf);
}