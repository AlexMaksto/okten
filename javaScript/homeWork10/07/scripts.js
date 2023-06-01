/*
Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
 */

const button = document.getElementById('button');

button.onclick = e => {
    const body = document.body;
    const infoForTable = document.getElementsByTagName('input');
    const row = parseInt(infoForTable[0].value);
    const col = parseInt(infoForTable[1].value);
    const value = infoForTable[2].value;
    const table = document.createElement('table');

    for (let i = 0; i < row; i++) {
        const tr = document.createElement('tr');
        for (let j = 0; j < col; j++) {
            const td = document.createElement('td');
            td.innerText = value;

            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    body.appendChild(table);
}