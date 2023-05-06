/*
    Використовуючи конструкцію if..else, напишіть код, який запитуватиме: „Яка «офіційна» назва JavaScript?“
    Якщо користувач вводить «ECMAScript», то показати: «Правильно!», інакше – відобразити: «Не знаєте? ECMAScript!
 */

const question = prompt('Яка «офіційна» назва JavaScript?');

alert(question === 'ECMAScript' ? 'Правильно!' : 'Не знаєте? ECMAScript!');