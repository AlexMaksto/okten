/*
*** (подібне було вище, але...будьте уважні в другій частині) створити сторінку з довільним блоком, в середині якого є значення "100 грн"
при перезавантаженні сторінки до значення додається по 10 грн, але !!!
 зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
 При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд - нічого не відбувається
 */

const money1 = document.getElementById('money1');
const money2 = document.getElementById('money2');

window.onload = e => {
    const timeLastSession = parseInt(localStorage.getItem('time10.08'));
    const timeThisSession = new Date().getTime();

    console.log(timeThisSession - timeLastSession);

    if ((timeThisSession - timeLastSession) >= 10000) {
        {
            const moneyInfo1 = money1.innerText.split(' ');
            moneyInfo1[0] = parseInt(moneyInfo1[0]) + 10;
            money1.innerText = moneyInfo1.join(' ');
        }

        {
            const moneyInfo2 = money2.innerText.split(' ');
            const money2Storage = parseInt(localStorage.getItem('money2'));

            if (parseInt(moneyInfo2[0]) <= money2Storage) {
                moneyInfo2[0] = money2Storage + 10;
                money2.innerText = moneyInfo2.join(' ');
            } else {
                moneyInfo2[0] = parseInt(moneyInfo2[0]) + 10;
                money2.innerText = moneyInfo2.join(' ');
            }
            localStorage.setItem('money2', money2.innerText);
        }
    }

    localStorage.setItem('time10.08', timeThisSession);
}