let firstName;
let middleName;
let age;

firstName = prompt('Enter first name:');
middleName = prompt('Enter middle name:');
age = +prompt('Enter age:');

let person = `${firstName} ${middleName} ${age}`;

console.log(person);