// ПЕРЕБІР МАСИВУ та СОРТУВАННЯ ПО АЛФАВІТУ
// const langs = ['phyton', 'bjavascript', 'c++', 'haskel', 'php', 'aruby'];
// for (let i = 0; i < langs.length; i += 1) {
//   const element = langs[i];
//   if (langs[0] > langs[i]) {
//     const result = langs.splice(i, 1)[0];
//     langs.unshift(result);
//   }
// }
// console.log(langs);

// function createString(name, age) {
//   const result = add(age);
//   return `${name} ${result} years`;
// }
// console.log(createString('Mango', [1, 2, 3]));

// function add(arr) {
//   let sum = 0;
//   for (const item of arr) {
//     sum += item;
//   }
//   return sum;
// }

// function slugify(title) {
//   // let lowerCase = title.toLowerCase();
//   // let sds = lowerCase.split(" ");
//   // let slug = sds.join("-");
//   // return slug;

//   return title.toLowerCase().split(' ').join('-');
// }
// console.log(slugify('Arrays for begginers'));
// console.log(slugify('English for developer'));
// console.log(slugify('Ten secrets of JavaScript'));
// console.log(slugify('How to become a JUNIOR developer in TWO WEEKS'));

// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// // Change code below this line
// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, 4);
// const lastThreeEls = fruits.slice(-3);
// console.log(nonExtremeEls);

const book = {
  title: 'The Last Kingdom',
  author: 'Bernard Cornwell',
  genres: ['historical prose', 'adventure'],
  rating: 8.38,
};

for (const key in book) {
  // Ключ
  console.log(key);
  // Значення властивості з таким ключем
  console.log(book[key]);
}

// піднесення в степінь з виведенням

// let base = prompt("number");
// base = Number(base);
// console.log(base);

// let power = prompt("power");
// power = Number(power);
// console.log(power);

// const result = base ** power;
// console.log(result);

// рандомна зміна кольору

// const colors = ["tomato", "blue", "orange", "green", "pink", "violet"];
// const max = colors.length - 1;
// const min = 0;
// const index = Math.round(Math.random() * (max - min) + min);
// const color = colors[index];
// console.log(color);
// document.body.style.backgroundColor = color;

// цикл

// for (let i = 0; i <= 10; i += 1) {
//     console.log(i);
// }

// вирахування знижки в магазині 2 варіанта

// let totalSpent = 1000;
// let payment = 1100;
// let discout = 0;

// варіант 1

// if (totalSpent < 100) {
//     console.log("знижки немає");
//     discout = 0;
// } else if (totalSpent >= 100 && totalSpent < 1000) {
//     console.log("бронзовий партнер, знижка 2 %");
//     discout = 0.02;
// } else if (totalSpent >= 1000 && totalSpent < 5000) {
//     console.log("срібний партнер, знижка 5 %");
//     discout = 0.05;
// } else {
//     console.log("золотий партнер, знижка 10 %");
//     discout = 0.1;
// }

// console.log(
//     `Оформлюємо замовлення на суму ${payment} зі знижкою ${discout * 100}%`
// );

// варіант 2

// if (totalSpent >= 100 && totalSpent < 1000) {
//     console.log("бронзовий партнер, знижка 2 %");
//     discout = 0.02;
// } else if (totalSpent >= 1000 && totalSpent < 5000) {
//     console.log("срібний партнер, знижка 5 %");
//     discout = 0.05;
// } else if (totalSpent >= 5000) {
//     console.log("золотий партнер, знижка 10 %");
//     discout = 0.1;
// } else {
//     console.log("знижки немає");
// }

// payment -= payment * discout;

// console.log(
//     `Оформлюємо замовлення на суму ${payment} зі знижкою ${discout * 100}%`
// );
// totalSpent += payment;
// console.log(`Загально витрачено в магазині ${totalSpent}`);

// Робота з інпутами

// const btnAdd = document.querySelector(`button[data-add]`);
// const valueInput = document.querySelector('input[data-value]');
// const outputEl = document.querySelector('.js-output span');
// const resetBtn = document.querySelector(`button[data-reset]`);

// let total = 0;
// btnAdd.addEventListener('click', function() {
//     console.log('click hehehe');
//     const value = Number(valueInput.value);
//     console.log(value);
//     total += value;
//     outputEl.textContent = total;
//     console.log('total:', total);
//     valueInput.value = '';
// });
// resetBtn.addEventListener('click', function() {
//     total = 0;
//     outputEl.textContent = total;
// });
