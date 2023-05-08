//  Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

const count = Math.floor(Math.random() * 20) + 1;
let arrays = [];

for (let i = 0; i < count; i++) {
    arrays[i] = Math.floor(Math.random() * 100);
}

console.log(arrays);