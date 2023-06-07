/*
    Зробити файл users.html
    З ендпоінту http://jsonplaceholder.typicode.com/users отримати всіх користувачів
    Вивести їх id + name списком та додати посилання з href = user-details.html?id=XXX (замість ХХХ - айді юзера)
    При кліку на посилання перехід на відповідну сторінку, на якій буде вся інформація про користувача (всі 15 полів) отримана через додатковий запит (https://jsonplaceholder.typicode.com/users/XXX   ХХХ - айді користувача)
 */

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        const ul = document.createElement('ul');
        users.forEach(user => {
            const id = user.id;
            const name = user.name;

            const a = document.createElement('a');
            const li = document.createElement('li');

            a.href = 'user-details.html?id=' + id;
            a.innerText = id + ' ' + name;

            li.appendChild(a)
            ul.appendChild(li);
        });
        document.body.appendChild(ul);
    })
    .catch(error => console.log("Error", error));