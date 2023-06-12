/*
    В index.html
    1 отримати масив об'єктів з endpoint`а https://jsonplaceholder.typicode.com/users
    2 Вивести id, name всіх user в index.html. Окремий блок для кожного user.
    3 Додати кожному блоку кнопку/посилання, при кліку на яку відбувається перехід на сторінку user-details.html, котра має детальну інформацію про об'єкт на який клікнули

    Стилізація:
    index.html - всі блоки з user - по 2 в рядок. кнопки/посилання розташувати під інформацією про user.
 */

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
        if (response.ok) {
            return response.json()
        }
    })
    .then(users => {
        const section = document.createElement('section');
        section.className = 'users'
        users.forEach(user => {
            const div = document.createElement('div');
            div.className = 'userList';
            div.innerText = `${user.id}. ${user.name}`;

            const a = document.createElement('a');
            a.href = 'html/user-details.html?id=' + user.id;

            const button = document.createElement('button');
            button.className = 'userDetail'
            button.innerText = 'Info'

            a.appendChild(button);
            div.appendChild(a);
            section.appendChild(div);

        })
        document.body.appendChild(section);
    })
    .catch(error => window.location.assign("html/404.html"));