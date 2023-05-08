// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors.
// Поле "автори" - являється  масивом. Кожен автор має поля name та age.

const book1 = {
    title: "Скіфи",
    pageCount: 100,
    genre: "History",
    authors: [firstAutor = {name: "Історик", age: 50},
        secondAutor = {name: "Hiops", age: 3000}]
};

const book2 = {
    title: "Абетка",
    pageCount: 33,
    genre: "Learn",
    authors: [firstAutor = {name: "Філолог", age: 60}]
};

const book3 = {
    title: "JS for kettle",
    pageCount: 10000,
    genre: "Fantasy",
    authors: [firstAutor = {name: "Okten", age: 10}]
};

console.log(book1);
console.log(book2);
console.log(book3);