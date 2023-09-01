// Задача 1 (МАСИВИ)

/*
 * Посчитать общую сумму покупок в корзине
 */

// const cart = [54, 28, 105, 70, 92, 17, 120, 12, 25, 90];
// 2 сделать переменную total до цикла
// let total = 0;

// 1 перебрать массив
// for (let i = 0; i < cart.length; i += 1) {
//   // console.log(cart[i]);
//   // 3 каждый элемент приплюслвать к total
//   total += cart[i];
//   // total = total + cart[i];
// }

// for (const value of cart) {
//     total += value;
// }

// console.log('Total: ', total);

// Добавить такс

// for (let i = 0; i < cart.length; i += 1) {
//   cart[i] = Math.round(cart[i] * 1.1);
// }

// for (let value of cart) {
//   value = Math.round(value * 1.1);
// }

// console.log(cart);

// ----------------------------------------------------

// Задача 2-----------------------------------
/*
//  * Напиши скрипт который подсчитывает сумму всех чётных чисел в массиве.
 */

const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 14];
let total = 0;

// 1 переменная тотал

// 2 перебрать массив
// for (let i = 0; i < numbers.length; i += 1) {
//   const number = numbers[i];
//   console.log(number);

//   // 3 на каждой итерации проверить элемент на чётность
// if (number % 2 === 0) {
//   console.log('Четное!!!!');

//   // 4 если четный плюсуем к тотал
//   total += number;
// }
// }

for (const number of numbers) {
    // console.log(number);

    if (number % 2 === 0) {
        console.log(`${number} - четное!!!!`);
        total += number;
    }
}

// for (const number of numbers) {
//     if (number % 2 !== 0) {
//         // console.log('Эту итерацию нужно пропустить', number);
//         continue;
//     }

//     // console.log(`${number} - четное!!!!`);
//     total += number;
// }

console.log('Total: ', total);