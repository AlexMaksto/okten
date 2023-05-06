/*
    Нам дано масив друзів let friends = ["Ivan", "Slavik", "Grisha", "Lera", "Ira"];
    Потрібно зробити перевірку якщо кількість елементів у масиві більше або дорівнює 3,
    то виводиться повідомлення про те, що це великий масив, в якому  3 і більше елементи.
    Інакше слід вивести на екран повідомлення про те, що це маленький масив, в якому менше 3-х елементів.
*/

let friends = ["Ivan", "Slavik", "Grisha", "Lera", "Ira"];

const arrLength = friends.length
if (arrLength >= 3) {
    console.log("It's big array:", arrLength)
} else console.log("It's little array:", arrLength)