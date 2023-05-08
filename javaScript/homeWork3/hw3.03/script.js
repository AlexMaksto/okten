// За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
const words = ['apple',
    'banana',
    'cherry',
    'date',
    'elderberry',
    'fig',
    'grape',
    'honeydew',
    'kiwi',
    'lemon',
    'mango',
    'nectarine',
    'orange',
    'pear',
    'quince',
    'raspberry',
    'strawberry',
    'tangerine',
    'fruit',
    'watermelon'];

let i = 0;
while (i < words.length) {
    document.write(`<h1>${words[i]}</h1>`)
    i++;
}
