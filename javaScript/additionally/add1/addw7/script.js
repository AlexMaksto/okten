/*
    У першому під'їзді квартири з 1 до 20. У другому з 21 по 48. У третьому з 49 по 90.
    Користувач вводить номер квартири просто в змінні або через prompt('') .
    Програма повинна зазначити, в якому під'їзді знаходиться дана квартира.
 */

const numberApartment = Math.floor(Math.random() * 100) + 1;

console.log(numberApartment);

if (numberApartment >= 1 && numberApartment <= 20) {
    console.log('First');
} else if (numberApartment >= 21 && numberApartment <= 48) {
    console.log('Second');
} else if (numberApartment >= 49 && numberApartment <= 90) {
    console.log('Third');
} else console.log('Not apartment');