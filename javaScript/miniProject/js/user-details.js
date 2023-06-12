/*
    На сторінці user-details.html:
    4 Вивести всю, без виключення, інформацію про об'єкт user на який клікнули
    5 Додати кнопку "post of current user", при кліку на яку, з'являються title всіх постів поточного юзера
    (для отримання постів використовуйте ендпоінт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
    6 Кожному посту додати кнопку/посилання, при кліку на яку відбувається перехід на сторінку post-details.html, котра має детальну інфу про поточний пост.

    Стилізація:
    user-details.html - блок з інфою про user зверху сторінки. Кнопка нижчє, на 90% ширини сторінки, по центру.
    блоки з короткою інфою про post - в ряд по 5.
 */

import {info} from "./recurseBuildInfo.js";

const body = document.body;
const id = new URL(document.URL).searchParams.get('id');

fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(response => {
        if (response.ok) {
            return response.json()
        }
    })
    .then(infosUser => buildPage(infosUser))
    .catch(error => window.location.assign("../html/404.html"));


function buildPage(user) {
    const section = document.createElement('section')
    section.className = 'section'

    const ul = document.createElement('ul');
    info(user, ul);

    const button = buildButton(`Post of ${user.username}`);

    section.append(ul, button)
    body.appendChild(section);

    button.onclick = () => {
        listPost();
        button.disabled = true;
    }
}

function buildButton(text) {
    const button = document.createElement('button')
    button.className = 'buttonPost';
    button.innerText = text;
    return button;
}

function listPost() {
   fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
        .then(response => response.json())
        .then(posts => buildPost(posts))
        .catch(error => {
            const div = document.createElement('div');
            div.innerText = `Oh my God, we have problem with posts`
            div.style.textAlign = 'center';

            const button = buildButton('Go to home page');

            button.onclick = () => {
                window.location.assign("../index.html")
            }

            body.append(div, button);
        });
}

function buildPost(posts) {
    const section = document.createElement('section')
    section.className = 'sectionPost'

    posts.forEach(post => {
        const div = document.createElement('div');
        div.className = 'divPosts';
        div.innerText = post.title;

        const button = buildButton('More details')

        button.onclick = () => {
            localStorage.removeItem('postMiniProject');
            localStorage.setItem('postMiniProject', JSON.stringify(post));
            window.location.assign(`../html/post-details.html`)
        }

        div.appendChild(button);
        section.appendChild(div);
    })

    body.appendChild(section);
}