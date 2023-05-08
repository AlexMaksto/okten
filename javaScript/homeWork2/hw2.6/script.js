// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

// const time = 59;
 const time = Math.floor(Math.random() * 59);

console.log(`Time: ${time}`);

switch (Math.floor(time / 15)) {
    case 0:
        console.log('Перша частина години')
        break;
    case 1:
        console.log('Друга частина години')
        break;
    case 2:
        console.log('Третя частина години')
        break;
    case 3:
        console.log('Четверта частина години')
        break;
    default:
        console.log('Щось пішло не так :)')
        break;
}