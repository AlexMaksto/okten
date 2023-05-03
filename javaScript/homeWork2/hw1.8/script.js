// - Скласти розклад на тиждень за домопоги switch.
// Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день
// (можна замість плану на день, назву дня англійською).

const numberDay = +prompt('Put week day (1-7):')
const message = 'It`s';

switch (numberDay) {
    case 1:
        alert(`${message} Monday.`)
        break;
    case 2:
        alert(`${message} Tuesday.`)
        break;
    case 3:
        alert(`${message} Wednesday.`)
        break;
    case 4:
        alert(`${message} Thursday.`)
        break;
    case 5:
        alert(`${message} Friday.`)
        break;
    case 6:
        alert(`${message} Saturday.`)
        break;
    case 7:
        alert(`${message} Sunday.`)
        break;
    default:
        alert(`${message} not day.`)
        break;
}