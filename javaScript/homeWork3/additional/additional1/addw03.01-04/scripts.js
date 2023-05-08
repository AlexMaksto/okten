/*
    --створити масив з:
    - з 5 числових значень
    - з 5 стічкових значень
    - з 5 значень стрічкового, числового та булевого типу
    - та вивести його в консоль
 */
const count = 5;

//-----------------------------------------------------------------------------
let number = [];
document.write('<div><b>5 числових значень</b>')
for (let i = 0; i < count; i++) {
    number[number.length] = Math.floor(Math.random() * 100000);
    document.write('<br>' + number[i]);
}
document.write('</div>')

//-----------------------------------------------------------------------------
const alphabet = 'abcdefghijklmnopqrstuvwxyz ';
let string = [];
document.write('<div><b>5 стічкових значень</b>')
for (let i = 0; i < count; i++) {

    const countLetter = Math.floor(Math.random() * 20) + 1;
    let word = [];
    for (let j = 0; j < countLetter; j++) {
        word[word.length] = alphabet[Math.floor(Math.random() * alphabet.length)];
    }
    string[string.length] = word.join('');

    document.write('<br>' + string[i]);
}
document.write('</div>')

//-----------------------------------------------------------------------------
const lotteries = ['string', 'number', 'boolean'];
let different = [];
document.write('<div><b>5 значень стрічкового, числового та булевого типу</b>')
for (let i = 0; i < count; i++) {

    const lottery = lotteries[Math.floor(Math.random() * lotteries.length)];

    switch (lottery) {
        case 'string':
            const countLetter = Math.floor(Math.random() * 20) + 1;
            let word = [];
            for (let j = 0; j < countLetter; j++) {
                word[word.length] = alphabet[Math.floor(Math.random() * alphabet.length)];
            }
            different[different.length] = word.join('');
            break;
        case 'number':
            different[different.length] = Math.floor(Math.random() * 100000);
            break;
        case 'boolean':
            different[different.length] = Math.floor(Math.random()) < 0.5;
            break;
        default:
            console.error('hm...')
    }

    document.write('<br>' + different[i]);

}
document.write('</div>')