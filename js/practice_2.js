// 1)----------------

// Потрібно написати функцію, яка приймає 1 параметр key, яка буде перебирати об'єкт
// якщо об'єкт має такий ключ - поверне true

// const obj = {
//     name: "Jhon",
//     car: "Audi",
//     carColor: "White",
// };

// const findKey = (key) => {
//     // return Object.keys(obj).includes(key);

//     return key in obj;
// };
// console.log(findKey("name"));

// 2)----------------

// Створіть функцію multiplyNumeric(obj),
//   яка множить всі числові властивості об'єкта obj на 2.

// до  виклику функції
// let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu",
// };

// const multiplyNumeric = (obj) => {
//     for (const key in obj) {
//         if (typeof obj[key] === 'number')
//     }
// };
// console.log(multiplyNumeric(menu));

// // після виклику функції
// menu = {
//     width: 400,
//     height: 600,
//     title: "My menu",
// };

// 3)----------------------

//У нас є об'єкт, в якому зберігаються зарплати
//нашої команди
//Напишіть код для обчислення суми всіх зарплат і
//збережіть його результат у змінній sum.
//Якщо об'єкт salaries порожній, то результат має бути 0

// const salaries = {
//     Mango: 100,
//     Poly: 160,
//     Ajax: 1470,
// };

// const salaries2 = {
//     Mango: 10890,
//     Poly: 16980,
//     Ajax: 147670,
// };

// function calcSum(obj) {

//     return Object.values(obj).reduce((a, b) => a + b, 270);

//     // console.log(Object.values(obj));
//     // let total = 0;
//     // for (const value of Object.values(obj)) {
//     //     total += value;
//     // }
//     // return total;
// }

// console.log(calcSum(salaries));
// calcSum(salaries2);

// 4)----------------------

// Напишіть код JS, щоб видалити всі елементи в заданому масиві
// Функція `deleteElement()` видаляє всі входження елемента з заданого масиву.

// let arr = [23, 56, 4, 78, 5, 63, 45, 210, 56];

// function deleteElement(arr, number) {
//     const newArr = [...arr];
//     for (let index = 0; index < arr.length; index += 1) {
//         if (newArr[index] === number) {
//             newArr.splice(index, 1);
//         }
//     }
//     return newArr;
// }

// const newArr = deleteElement(arr, 56);

// console.log(arr); //[23, 4, 78, 5, 63, 45, 210]
// console.log(newArr);

// 5)--------------------------

// / Напишіть метод, який розбиває масив на частини визначеного розміру

// const data = [1, 2, 3, 4, 5, 6, 7];

// const cutArr = (array, number) => {
//     let i = 0;
//     const newArr = [];
//     while (i < array.length) {
//         newArr.push(array.slice(i, i + number));
//         i += number;
//         // console.log(newArr);
//         // break;
//     }
//     return newArr;
// };

// console.log(cutArr(data, 2)); // [[1, 2], [3, 4], [5, 6], [7]]
// console.log(cutArr(data, 3)); // [[1, 2, 3], [4, 5, 6], [7]]

// 6)--------------------

// Напишіть функцію sumInput(), яка:
//
// Просить користувача ввести значення, використовуючи prompt
//  та зберігає їх у масив.
//   Закінчує запитувати значення, коли користувач введе не числове
// значення, порожній рядок або натисне «Скасувати».
// Підраховує та повертає суму елементів масиву.
//   P.S. Нуль 0 – вважається числом, не зупиняйте введення
//  значень під час введення «0».

// function someInput() {
//     const numberPromt = [];
//     let total = 0;

//     while (true) {
//         let someNumber = prompt("Enter number");
//         if (typeof someNumber === "number") {
//             numberPromt.push(someNumber);
//         } else {
//             break;
//         }
//     }
//     for (const value of numberPromt) {
//         total += value;
//     }
//     return total;
// }
// console.log(someInput());

// 7)--------------

//Напишіть функцію calcTotalPrice(stones, stonesName),
//яка приймає масив об'єктів і
//рядок з назвою каменю.
//Функція повертає загальну вартість каміння
//з таким ім'ям

// const stones = [
//     { name: "Emerald", price: 1300, quantity: 4 },
//     { name: "Diamond", price: 2700, quantity: 6 },
//     { name: "Sapphire", price: 400, quantity: 7 },
//     { name: "Rubble", price: 150, quantity: 100 },
// ];

// function calcTotalPrice(stones, stonesName) {
//     for (const element of stones) {
//         const { name, price, quantity } = element;
//         if (name === stonesName) {
//             return price * quantity;
//         }
//     }
// }
// console.log(calcTotalPrice(stones, "Diamond"));