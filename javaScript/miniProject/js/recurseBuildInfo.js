export function info(obj, ul) {
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