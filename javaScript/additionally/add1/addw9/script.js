/*
    Задача-гра "чи ми йдемо сьогодні в OKTEN на навчання?".
    Змінна, яка характеризує температуру. Якщо температура від +10 до +22 вивести повідомлення що ми йдемо ВЧИТИСЯ.
    Якщо інша темпаретура, тоді виводимо повідомлення що сидимо вдома і вчимося ОНЛАЙН
 */

const temperature = Math.floor(Math.random() * 30);
console.log('temperature', temperature);

console.log(temperature >= 10 && temperature <= 22 ? 'ми йдемо ВЧИТИСЯ' : 'сидимо вдома і вчимося ОНЛАЙН')