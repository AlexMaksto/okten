// Створити довільний елемент з id = text та створити кнопку. Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".
const body = document.body;

const element = document.createElement('div');
element.id = 'text';
element.innerText = 'Створити довільний елемент з id = text та створити кнопку. Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".';

const button = document.createElement('button')
button.innerText = 'НЕ НАТИСКАЙ!'

body.append(element, button);

button.onclick = e => {
    document.getElementById('text').remove();
    button.innerText = 'І шо тепер? Все зламав :(';
}