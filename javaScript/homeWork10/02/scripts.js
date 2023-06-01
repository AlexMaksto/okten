/*
є сторінка, на якій є блок, я кому знаходиться цифра. Написати код, який при кожному перезавантажені сторінки буде додавати до неї +1
*/

const num1 = document.getElementById('number1');
const num2 = document.getElementById('number2');

window.onload = function (e) {
    {
        num1.innerText = parseInt(num1.innerText) + 1;
    }

    {
        const num2Storage = parseInt(localStorage.getItem('num2'));
        if (num2.innerText < num2Storage) {
            num2.innerText = 1 + num2Storage;
        } else {
            num2.innerText = parseInt(num2.innerText) + 1;
        }
        localStorage.setItem('num2', num2.innerText);
    }
}