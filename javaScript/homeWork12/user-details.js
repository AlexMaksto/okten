const url = new URL(document.URL);

fetch(`https://jsonplaceholder.typicode.com/users/${url.searchParams.get('id')}`)
    .then(response => response.json())
    .then(user => f(user))
    .catch(error => console.log("Error", error));


function f(user) {
    for (const userKey in user) {
        const p = document.createElement('p');
        const userInfo = user[userKey];

        if (typeof userInfo === 'object') {
            p.innerText = userKey;
            document.body.appendChild(p);
            f(userInfo);
        } else {
            p.innerText = userKey + ' : ' + userInfo;
            document.body.appendChild(p);
        }
    }
}