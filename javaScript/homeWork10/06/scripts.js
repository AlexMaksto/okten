/*
Створити інпут який приймає вік людини та кнопку яка підтверджує дію. При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача.
 */

const button = document.getElementsByTagName('button')[0];

button.onclick = e => {
    const age = document.getElementsByTagName('input')[0].value;
    if (age >= 18) {
        alert('Красавчик, згоняй за пивом')
    } else alert('Вчи уроки, Вам ще не має 18');
}
