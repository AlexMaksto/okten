/*
зробити масив на 100 об'єктів та дві кнопки prev next:
при завантажені сторінки з'являються перші 10 об'єктів.
При натисканні next виводяться настпні 10 об'єктів
При натисканні prev виводяться попередні 10 об'єктів
 */
const array = []
for (let i = 1; i <= 100; i++) {
    array.push(i)
}

const outArray = () => {
    const ul = document.createElement('ul');
    ul.id = 'list';
    const end = position + 10;
    while (position < end) {
        const li = document.createElement('li');
        li.innerText = array[position];
        ul.appendChild(li);
        position++;
    }
    document.body.appendChild(ul);
}

let position = 0;

outArray();

const next = document.getElementById('next');

next.onclick = function (e) {
    if (position < array.length) {
        document.getElementById('list').remove();
        outArray();
    }
}
const prev = document.getElementById('prev');

prev.onclick = function (e) {
    if (position > 10) {
        document.getElementById('list').remove();
        position -= 20;
        outArray();
    }
}