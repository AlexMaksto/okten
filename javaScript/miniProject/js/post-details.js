/*
    На сторінці post-details.html:
    7 Вивести всю, без виключення, інформацію про об'єкт post на який клікнули.
    8 Нижче інформація про пост, вивести всі коментарі поточного поста (ендпоінт - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)

    Стилізація:
    post-details.html - блок з інфою про пост зверху. Коментарі - по 4 в ряд.
 */

const body = document.body;
const post = JSON.parse(localStorage.getItem('postMiniProject'));
localStorage.removeItem('postMiniProject');

if (!!post) {
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

function info(obj, ul) {
    for (const objKey in obj) {
        const objValue = obj[objKey];
        if (typeof objValue === 'object') {
            const childUl = document.createElement('ul');
            buildUl(objKey, '', ul)
            info(objValue, childUl);
            ul.appendChild(childUl);
        } else {
            buildUl(objKey, objValue, ul);
        }
    }
}

function buildUl(key, value, ul) {
    const li = document.createElement('li');
    li.innerHTML = value ? `<b>${key}:</b> ${value}` : `<b>${key}:</b>`;
    ul.appendChild(li);
}