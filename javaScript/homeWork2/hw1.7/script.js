// - У змінній day дано якесь число від 1 до 31.
// Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

// const day = 31;
const day = Math.floor(Math.random() * 31) + 1;

console.log(`Day: ${day}`);

switch (Math.floor((day - 1) / 10)) {
    case 0:
        console.log(`Перша декада`);
        break;
    case 1:
        console.log(`Друга декада`);
        break;
    case 2:
    case 3:
        console.log(`Третя декада`);
        break;
    default:
        console.log(`Дивна дата`)
}
