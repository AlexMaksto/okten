/*
    На сторінці post-details.html:
    7 Вивести всю, без виключення, інформацію про об'єкт post на який клікнули.
    8 Нижче інформація про пост, вивести всі коментарі поточного поста (ендпоінт - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)

    Стилізація:
    post-details.html - блок з інфою про пост зверху. Коментарі - по 4 в ряд.
 */

import {info} from "./recurseBuildInfo.js";

const body = document.body;
const post = JSON.parse(localStorage.getItem('postMiniProject'));

if (!!post) {
    // localStorage.removeItem('postMiniProject');
    buildPage();
} else {
    window.location.assign("../html/404.html");
}

function buildPage() {
    infoAboutPost();
    infoComment();
}

function infoAboutPost() {
    const section = document.createElement('section')
    section.className = 'section'

    const ul = document.createElement('ul');
    info(post, ul);
    section.appendChild(ul);
    body.appendChild(section);
}

function infoComment() {
    fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
        .then(response => response.json())
        .then(comments => buildComment(comments))
        .catch(error => console.log(error));
}

function buildComment(comments) {
    const section = document.createElement('section')
    section.className = 'sectionComment';

    comments.forEach(comment => {
        const div = document.createElement('div');
        div.className = 'comment';
        
        const ul = document.createElement('ul');
        info(comment, ul);
        
        div.appendChild(ul)
        section.appendChild(div);
        body.appendChild(section);
    })
}
