// - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray.
// За допомоги іф перевірити кожен його елемент на тривалість навчання.
// У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

// for (let i = 0; i < coursesAndDurationArray.length; i++) {
//     const cours = coursesAndDurationArray[i];
//     if (cours.monthDuration > 5) {
//         console.log(`${cours.title} Супер`)
//     }
// }

const jsComplex = coursesAndDurationArray[0];
if (jsComplex.monthDuration > 5) {
    console.log(`${jsComplex.title} Супер`)
}
const jacaComplex = coursesAndDurationArray[1];
if (jacaComplex.monthDuration > 5) {
    console.log(`${jacaComplex.title} Супер`)
}
const pythonComplex = coursesAndDurationArray[2];
if (pythonComplex.monthDuration > 5) {
    console.log(`${pythonComplex.title} Супер`)
}
const qaComplex = coursesAndDurationArray[3];
if (qaComplex.monthDuration > 5) {
    console.log(`${qaComplex.title} Супер`)
}
const fullStack = coursesAndDurationArray[4];
if (fullStack.monthDuration > 5) {
    console.log(`${fullStack.title} Супер`)
}
const frontend = coursesAndDurationArray[5];
if (frontend.monthDuration > 5) {
    console.log(`${frontend.title} Супер`)
}