/*
Є сторінка users.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessions зберігається інформація про дату та час відвідування сторінки. Є ще сторінка sessions.html (назва довільна), при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки users.html. Інфу НЕ виводити в консоль, а побудувати дом структуру під кожну сессію
*/

const task = document.createElement('div');
task.innerText = 'Є сторінка users.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessions зберігається інформація про дату та час відвідування сторінки. Є ще сторінка sessions.html (назва довільна), при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки users.html. Інфу НЕ виводити в консоль, а побудувати дом структуру під кожну сессію'

document.body.appendChild(task);

const title = document.title;

let sessions = JSON.parse(localStorage.getItem('sessions'));

if (title === 'index') {

    if (!sessions) {
        sessions = [];
    }

    sessions.push(new Date());
    localStorage.setItem('sessions', JSON.stringify(sessions))
}

if (title === 'sessions') {
    for (let i = 0; i < sessions.length; i++) {
        const session = sessions[i];
        const div = document.createElement('div');
        div.innerText = `Session ${i + 1}: ${sessions[i]}`;
        document.body.appendChild(div);
    }
}