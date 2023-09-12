// *******Task-1****** \\
// Необхідно створити клас Rectangle,який представляє прямокутник.
// Клас повинен мати приватні властивості width та height, а також гетери та сетери
// для цих властивостей.Гетери повинні повертати значення властивостей,
//  а сетери повинні дозволяти змінювати значення властивостей з валідацією.

// class Rectangle {
//   #width;
//   #height;
//   constructor({ width, height }) {
//     this.#width = width;
//     this.#height = height;
//   }
//   get width() {
//     return this.#width;
//   }
//   set width(newWidth) {
//     if (typeof newWidth === "number" && newWidth > 0) {
//       this.#width = newWidth;
//     } else {
//       console.log("Ширина повинна бути більша за нуль");
//     }
//   }
//   get height() {
//     return this.#height;
//   }
//   set height(newHeight) {
//     if (typeof newHeight === "number" && newHeight > 0) {
//       this.#height = newHeight;
//     } else {
//       console.log("Висота повинна бути більша за нуль");
//     }
//   }
// }
// const item = new Rectangle({ width: 10, height: 5 });
// console.log(item);

// console.log("Ширина -", item.width); // get
// item.width = 12; // set
// console.log("Нова ширина -", item.width); //get

// console.log("Висота -", item.height); // get
// item.height = 8; // set
// console.log("Нова висота -", item.height); //get

// *******Task-2******* \\
// Реалізуйте клас Student, який успадковуватиметься від класу User.
// Цей клас повинен мати такі властивості:
// name приватна властивість (ім'я, успадковується від User),
// surname приватна властивість (прізвище, успадковується від User),
// year (рік вступу до вузу).

// Клас повинен мати метод getFullName() (успадковується від User),
// за допомогою якого можна вивести одночасно ім'я та прізвище студента.
// Також клас повинен мати метод getCourse(), який виводитиме поточний курс
// студента(від 1 до 5, якщо значення перевищує 5  курс виводити
// що студент являється випускником).

// Курс обчислюється так: потрібно від поточного року відняти рік вступу до вузу.
// Поточний рік отримаєте самостійно(читати документацію!!!).
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getFullYear
// Приклад ініціалізації екземпляру класа:
// const student = new Student('Петрик', 'Пяточкин', 2019);

// class User {
//   #name;
//   #surname;
//   constructor(name, surname) {
//     this.#name = name;
//     this.#surname = surname;
//   }
//   getFullName() {
//     return `${this.#name} ${this.#surname}`;
//   }
// }
// class Student extends User {
//   constructor(name, surname, year) {
//     super(name, surname, year);
//     this.year = year;
//   }
//   getCourse() {
//     const currentYear = new Date().getFullYear();
//     const diff = currentYear - this.year;
//     if (diff > 5) {
//       return "Студент є випускником";
//     }
//     return diff;
//   }
// }

// const student = new Student("Петрик", "Пяточкин", 2019);
// console.log(student);
// console.log(student.getFullName()); //поверне 'Петрик Пяточкин'
// console.log(student.getCourse()); //поверне 4

// *******Task-3******* \\
// Необхідно створити клас Hero, який представляє героя з гри.
// Клас повинен мати публічні властивості name, level та health,
// а також методи attack та heal, що дозволяють герою атакувати
// та відновлювати здоров'я відповідно.
// Також створи функціонал для підрахунку створених героїв

// Властивість name має зберігати ім'я героя.
// Властивість level має зберігати рівень героя.
// Властивість health має зберігати поточний рівень здоров'я героя.
// Метод attack наносить пошкодження в розмір 10 одиниць.
// Метод heal додає до здоров'я героя 10 одиниць.

// class Hero {
//   static #counter = 0;
//   static addHero() {
//     this.#counter += 1;
//     // Hero.#counter+=1
//     console.log(`Кількість героїв ${this.#counter}`);
//   }
//   constructor(name, level, health) {
//     this.name = name;
//     this.level = 1;
//     this.health = 100;
//     Hero.addHero();
//   }
//   attack() {
//     return `Attack with a 10 damage`;
//   }
//   heal() {
//     this.health += 10;
//     return "Додає здоров'я + 10";
//   }
// }

// const bloodseker = new Hero("Bloodseker");
// const bloodseker2 = new Hero("Bloodseker");
// const bloodseker3 = new Hero("Bloodseker");

// console.log(bloodseker);
// console.log(bloodseker.attack());
// console.log(bloodseker.heal());
// console.log(bloodseker);
// // console.log(Hero.#counter);

// Необхідно створити клас BankAccount, який представляє банківський рахунок.
// Клас повинен мати приватну властивість balance, яка представляє баланс рахунку.
// Клас повинен також мати публічні методи deposit та withdraw, які дозволяють
// здійснювати операції з депозитом та зняттям коштів з рахунку.
// При цьому balance повинна бути доступна лише в межах класу BankAccount
// та його приватних методів.

// class BankAccount {
//   #balance;
//   constructor(balance) {
//     this.#balance = 0;
//   }
//   deposit(amount) {
//     if (amount <= 0) {
//       console.log("Сума повинна бути більша за НУЛЬ");
//       return;
//     }
//     this.#changeBalance(amount);
//     console.log(`Здійснено депозит на суму ${amount}`);
//   }
//   withdraw(amount) {
//     if (amount <= 0) {
//       console.log("Сума повинна бути більша за НУЛЬ");
//     } else if (amount > this.balance) {
//       console.log("Не достатньо коштів на рахунку");
//     } else {
//       this.#changeBalance(-amount);
//       console.log(`Знято ${amount}`);
//     }
//   }
//   #changeBalance(amount) {
//     this.#balance += amount;
//   }
// }

// const instance = new BankAccount();
// instance.deposit(100);
// instance.deposit(1200);
// instance.withdraw(100);
// console.log(instance);
