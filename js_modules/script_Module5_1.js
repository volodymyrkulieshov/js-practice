// Task - 1
// Наше завдання написати програмне забезпечення для автомобіля,
// а саме натискання кнопки набору та зниження швидкості в системі круїз контролю.
// Створити об'єкт cruiseСontrol з методами accelerate та decrease,
// властивостями speed та brand.
// ВАРІАНТ 1
// const cruiseControl = {
//   speed: 2,
//   brand: "Audi",
//   accelerate() {
//     this.speed += 10;
//     console.log(
//       `Автомобіль ${this.brand} прискорюється. Поточна швидкість ${this.speed}`
//     );
//   },
//   decrease() {
//     this.speed -= 10;

//     if (this.speed <= 0) {
//       console.log(`Авто зупинилось`);
//       this.speed = 0;
//       return;
//     }

//     console.log(
//       `Автомобіль ${this.brand} гальмує. Поточна швидкість ${this.speed} `
//     );
//   },
// };

// ВАРІАНТ 2
// const cruiseControl = {
//   speed: 10,
//   brand: "Audi",
//   accelerate() {
//     this.speed += 10;
//     console.log(
//       `Автомобіль ${this.brand} прискорюється. Поточна швидкість ${this.speed}`
//     );
//   },
//   decrease() {
//     this.speed -= 10;
//     if (this.speed > 0) {
//       console.log(
//         `Автомобіль ${this.brand} гальмує. Поточна швидкість ${this.speed} `
//       );
//     } else {
//       console.log(`Авто зупинилось`);
//       this.speed = 0;
//       return;
//     }
//   },
// };

// cruiseControl.accelerate();
// cruiseControl.accelerate();
// cruiseControl.accelerate();
// cruiseControl.accelerate();
// cruiseControl.decrease();
// cruiseControl.decrease();
// cruiseControl.decrease();
// cruiseControl.decrease();
// cruiseControl.decrease();

// Task - 2
// Потрібно створити систему для продажу в інтернет-магазині.
// В об'єкті продукту (product) потрібно створити метод discount
// (буде приймати знижку клієнта в %) та повертати вартість товару
// з врахуванням знижки
// В об'єкті клієнта (client) який містить ім'я та індивідуальну знижку,
// потрібно створити метод purchase, який буде викликати метод
// для розрахунку вартості товару та логувати повідомлення про покупку
// Alice придбала товар зі знижкою в 8%, сума до сплати 460грн"

// const product = {
//   name: "Smartphone",
//   price: 500,
//   discount(percent) {
//     return (this.price / 100) * (100 - percent);
//   },
// };

// const client = {
//   name: "Alice",
//   discountPercent: 50,
//   purchase() {
//     const price = product.discount(this.discountPercent);
//     console.log(
//       `${this.name} придбала товар зі знижкою в ${this.discountPercent}%, сума до сплати ${price}грн`
//     );
//   },
// };
// console.log(product.discount(50));
// client.purchase();

// Task - 3
// Потрібно створити функціонал для контролю швидкості прокатних авто.
// Створіть функцію яка буде приймати 1 параметр (максимально дозволену швидкість)
// та виводити повідомлення, чи ми рухаємось з безпечною швидкістю чи перевищуємо,
//  функція має опрацьовувати об'єкт автомобіля як this

// const SAFE_SPEED = 60;

// const tesla = {
//   brand: "Tesla",
//   speed: 30,
// };

// const audi = {
//   brand: "Audi",
//   speed: 70,
// };

// const ford = {
//   brand: "Ford",
//   speed: 90,
// };

// function speedSensor(maxSpeed) {
//   if (this.speed <= maxSpeed) {
//     return `Автомобіль ${this.brand} рухається з дозволеною швидкістю`;
//   }
//   return `${this.brand} - швидкість перевищено!`;
// }

// console.log(speedSensor.call(audi, SAFE_SPEED));
// console.log(speedSensor.call(tesla, SAFE_SPEED));
// console.log(speedSensor.call(ford, SAFE_SPEED));

// Task-4 Калькулятор
// Створіть об'єкт calculator з трьома методами:

// read(a, b)- приймає два значення та зберігає їх як властивості об'єкта.
// add() - повертає суму збережених значень.
// mult() - перемножує збережені значення та повертає результат.
//   ??  => null undefined
//   ||  => 0 '' NaN undefined null false
// const calculator = {
//   read(a, b) {
//     this.a = a;
//     this.b = b;
//   },
//   add() {
//     return (this.a ?? 0) + (this.b ?? 0);
//   },
//   mult() {
//     return (this.a ?? 1) * (this.b ?? 1);
//   },
// };
// calculator.read(3, 7);
// console.log(calculator);
// console.log(calculator.add());
// console.log(calculator.mult());
