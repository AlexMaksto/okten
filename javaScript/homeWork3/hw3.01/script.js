// За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
const words = ['apple',
    'banana',
    'cherry',
    'date',
    'elderberry',
    'fig',
    'grape',
    'honeydew',
    'kiwi',
    'lemon'];

for (let i = 0; i < words.length; i++) {
    document.write(`<div>${words[i]}</div>`)
}