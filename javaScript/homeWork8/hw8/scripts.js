{
    console.log('Створити функцію конструктор для об\'єктів User з полями id, name, surname , email, phone');

    function User(id, name, surname, email, phone) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
    }

    console.log(`Створити пустий масив, наповнити його 10 об\'єктами new User(....)`);

    const users = [];
    for (let i = 1; i <= 10; i++) {
        const user = new User(i, 'Name' + i, 'Surname' + i, 'email' + i + '@gmail.com', '+38012345678' + i);
        users.push(user);
    }
    console.log(users);

    console.log();

    {
        console.log('Взяти масив з User[] з попереднього завдання, та відфільтрувати, залишивши тільки об\'єкти з парними id (filter)')
        console.log(users.filter(user => user.id % 2 === 0));
    }

    console.log();

    {
        console.log('Взяти масив з User[] з попереднього завдання, та відсортувати його по id. По зростанню (sort)');
        console.log(users.sort((user1, user2) => user1.id - user2.id));
    }
}

console.log();

{
    console.log('Створити класс для об\'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)');

    function Client(id, name, surname, email, phone, orders) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.orders = orders;
    }

    console.log('Створити пустий масив, наповнити його 10 об\'єктами Client');

    const clients = [];
    for (let i = 1; i <= 10; i++) {
        const client = new Client(i, 'Name' + i, 'Surname' + i, 'email' + i + '@gmail.com', '+38012345678' + i, ['Order' + i, 'carrot' + i])
        if (i % 2 === 0) {
            client.orders.push('potato' + i);
        }
        clients.push(client);
    }
    console.log(clients);

    console.log();

    console.log('Взяти масив (Client [] з попереднього завдання). Відсортувати його по кількості товарів в полі order по зростанню. (sort)');
    console.log(clients.sort((client1, client2) => client1.orders.length - client2.orders.length));
}

console.log();

{
    console.log('Створити функцію конструктор яка дозволяє створювати об\'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об\'єм двигуна. Додати в об\'єкт функції:');

    function CarFunction(model, producer, graduationYear, maxSpeed, engineCapacity) {
        this.model = model;
        this.producer = producer;
        this.graduationYear = graduationYear;
        this.maxSpeed = maxSpeed;
        this.engineCapacity = engineCapacity;
        this.drive = function () {
            console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
        }
        this.info = function () {
            for (const key in this) {
                if (typeof this[key] === "object") {
                    console.log(this[key]);
                    continue;
                }
                if (typeof this[key] !== 'function') {
                    console.log(key + ' - ' + this[key])
                }
            }
        }
        this.increaseMaxSpeed = function (newSpeed) {
            if (newSpeed > maxSpeed) {
                this.maxSpeed = newSpeed;
                console.log(`New max speed ${this.maxSpeed}`);
            } else console.log(`New speed ${newSpeed} less max speed. Max speed ${this.maxSpeed}`);
        }
        this.changeYear = function (newValue) {
            console.log(`Old year ${this.graduationYear}`)
            this.graduationYear = newValue;
            console.log(`New yesr ${this.graduationYear}`)
        }
        this.addDriver = function (driver) {
            this.driver = driver;
        }
    }

    const carVolvo = new CarFunction('XC', 'Volvo', 2022, 320, 100);
    console.log(carVolvo);

    console.log();

    console.log('функція конструктор:', 'drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину');
    carVolvo.drive();

    console.log();
    console.log('функція конструктор:', 'info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля');
    carVolvo.info();

    console.log();
    console.log('функція конструктор:', 'increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed');
    carVolvo.increaseMaxSpeed(200);
    carVolvo.increaseMaxSpeed(400);

    console.log();
    console.log('функція конструктор', 'changeYear (newValue) - змінює рік випуску на значення newValue');
    carVolvo.changeYear(1922);

    console.log();
    console.log('функція конструктор:', 'addDriver (driver) - приймає об\'єкт який \"водій\" з довільним набором полів, і додає його в поточний об\'єкт car');

    function Driver(name, internship) {
        this.name = name;
        this.internship = internship;
    }

    carVolvo.addDriver(new Driver('kokos', 10));
    carVolvo.info();
}

console.log();

{
    console.log('Те саме, тільки через клас');
    console.log('Створити клас який дозволяє створювати об\'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об\'єм двигуна. додати в об\'єкт функції:')

    class CarClass {
        constructor(model, producer, graduationYear, maxSpeed, engineCapacity) {
            this.model = model;
            this.producer = producer;
            this.graduationYear = graduationYear;
            this.maxSpeed = maxSpeed;
            this.engineCapacity = engineCapacity;
        }

        drive() {
            console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
        }

        info() {
            for (const key in this) {
                if (typeof this[key] === "object") {
                    console.log(this[key]);
                    continue;
                }
                if (typeof this[key] !== 'function') {
                    console.log(key + ' - ' + this[key])
                }
            }
        }

        increaseMaxSpeed(newSpeed) {
            if (newSpeed > this.maxSpeed) {
                this.maxSpeed = newSpeed;
                console.log(`New max speed ${this.maxSpeed}`);
            } else console.log(`New speed ${newSpeed} less max speed. Max speed ${this.maxSpeed}`);
        }

        changeYear(newValue) {
            console.log(`Old year ${this.graduationYear}`)
            this.graduationYear = newValue;
            console.log(`New yesr ${this.graduationYear}`)
        }

        addDriver(driver) {
            this.driver = driver;
        }

    }

    const carFerrari = new CarClass('FF', 'Ferrari', 2015, 400, 200);
    console.log(carFerrari);

    console.log();
    console.log('класс:', 'drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину');
    carFerrari.drive();

    console.log();
    console.log('класс:', 'info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля');
    carFerrari.info();

    console.log();
    console.log('класс:', 'increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed');
    carFerrari.increaseMaxSpeed(200);
    carFerrari.increaseMaxSpeed(500);

    console.log();
    console.log('класс', 'changeYear (newValue) - змінює рік випуску на значення newValue');
    carFerrari.changeYear(1922);

    console.log();
    console.log('класс:', 'addDriver (driver) - приймає об\'єкт який \"водій\" з довільним набором полів, і додає його в поточний об\'єкт car');

    function DriverFerrari(name, internship) {
        this.name = name;
        this.internship = internship;
    }

    const driver = new DriverFerrari('Super kokos', 30);
    carFerrari.addDriver(driver);
    carFerrari.info();
}

console.log();

{
    const randomSize = () => Math.floor(Math.random() * 25) + 20;
    console.log('створити класс/функцію конструктор попелюшка з полями ім\'я, вік, розмір ноги.');

    function Cinderella(name, age, sizeFood) {
        this.name = name;
        this.age = age;
        this.sizeFood = sizeFood;
    }

    console.log('Створити масив з 10 попелюшок');

    const cinderellas = []
    for (let i = 1; i <= 10; i++) {
        const cinderella = new Cinderella('Cinderella' + i, randomSize(), randomSize());
        cinderellas.push(cinderella)
    }
    console.log(cinderellas);

    console.log();
    console.log('Сторити об\'єкт класу "принц" за допомоги класу який має поля ім\'я, вік, туфелька яку він знайшов.');

    function Prince(name, age, sizeFoodFind) {
        this.name = name;
        this.age = age;
        this.sizeFoodFind = sizeFoodFind;
    }

    const prince = new Prince('Prince', randomSize(), randomSize());
    console.log(prince);

    console.log();

    console.log('За допомоги циклу знайти яка попелюшка повинна бути з принцом.');
    for (const cinderellaElement of cinderellas) {
        if(cinderellaElement.sizeFood === prince.sizeFoodFind){
            console.log(cinderellaElement);
            break;
        }
    }

    console.log();

    console.log('Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку');
    console.log(cinderellas.find(cinderellas => cinderellas.sizeFood === prince.sizeFoodFind));
}
