/*
    За допомогою switch case - реалізувати гру - вікторину, де ми вводимо число від 1 до 5.
    І взалежності від введеного числа нам дається приз (Авто, Мото, Телефон, і т.д ) і
    якщо число не підходить тоді  вивести Повідомлення - що число не вірне ... .
 */

const number = Math.floor(Math.random() * 10);
console.log(number);

switch (number) {
    case 1:
        console.log('Авто')
        break;
    case 2:
        console.log('Мото')
        break;
    case 3:
        console.log('Телефон')
        break;
    case 4:
        console.log('Монітор')
        break;
    case 5:
        console.log('Ноут')
        break;
    default:
        console.log('Спробуйте ще раз')
}