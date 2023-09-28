// 1)---------------------
// function checkAge(age) {
//   if (age >= 18) {
//     // Change this line
//     return "You are an adult";
//   }

//   return "You are a minor";
// }
// console.log(checkAge(20));
// console.log(checkAge(8));
// console.log(checkAge(14));
// console.log(checkAge(38));

// 2)------------------------
// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";

//   if (password === ADMIN_PASSWORD) {
//     return "Welcome!";
//   }
//   return "Access denied, wrong password!";
// }
// console.log(checkPassword("mangohackzor"));
// console.log(checkPassword("polyhax"));
// console.log(checkPassword("jqueryismyjam"));

// 3)--------------------------
// function checkStorage(available, ordered) {
//   // Change code below this line

//   if (ordered === 0) {
//     return "Your order is empty!";
//   }
//   if (ordered > available) {
//     return "Your order is too large, not enough goods in stock!";
//   }
//   return "The order is accepted, our manager will contact you";
// }

// console.log(checkStorage(100, 50));
// console.log(checkStorage(100, 130));
// console.log(checkStorage(70, 0));
// console.log(checkStorage(200, 20));
// console.log(checkStorage(200, 250));
// console.log(checkStorage(150, 0));

// 4)--------------------------

// const fruits = ["apple", "plum", "pear", "orange"];
// console.table(fruits);

// 5)-------------------------

// const fruits = ["apple", "plum", "pear", "orange"];
// const firstElement = "apple";
// const secondElement = "plum";
// const lastElement = "orange";
// console.log(firstElement);
// console.log(secondElement);
// console.log(lastElement);

// 6)------------------------
// const fruits = ["apple", "plum", "pear", "orange"];
// fruits[1] = "peach";
// fruits[3] = "banana";
// console.log(fruits);

// 7)------------------------
// const fruits = ["apple", "peach", "pear", "banana"];
// const fruitsArrayLength = fruits.length;
// console.log(fruitsArrayLength);

// 8)------------------------
// const fruits = ["apple", "peach", "pear", "banana"];
// const lastElementIndex = fruits.length - 1;
// const lastElement = fruits[lastElementIndex];
// console.log(lastElementIndex);
// console.log(lastElement);

// 9)----------------------
// function getExtremeElements(array) {
//     const extremeElements = [array[0], array[array.length - 1]];
//     return extremeElements;
// }
// console.log(getExtremeElements([1, 2, 3, 4, 5]));
// console.log(getExtremeElements(["Earth", "Mars", "Venus"]));
// console.log(getExtremeElements(["apple", "peach", "pear", "banana"]));

// 10)--------------------------
// function splitMessage(message, delimeter) {
//     let words = message.split(delimeter);

//     return words;
// }
// console.log(splitMessage("Mango hurries to the train", " "));
// console.log(splitMessage("Mango", ""));
// console.log(splitMessage("best_for_week", "_"));

// 11)---------------------------
// function calculateEngravingPrice(message, pricePerWord) {
//     let words = message.split(" ");
//     let wordsLength = words.length;
//     let totalPrice = wordsLength * pricePerWord;
//     return totalPrice;
// }
// console.log(calculateEngravingPrice("JavaScript is in my blood", 10));
// console.log(calculateEngravingPrice("JavaScript is in my blood", 20));
// console.log(calculateEngravingPrice("Web-development is creative work", 40));
// console.log(calculateEngravingPrice("Web-development is creative work", 20));

// 12)---------------------------------
// function makeStringFromArray(array, delimiter) {
//     let string = array.join(delimiter);

//     return string;
// }
// console.log(
//     makeStringFromArray(["Mango", "hurries", "to", "the", "train"], " ")
// );
// console.log(makeStringFromArray(["M", "a", "n", "g", "o"], ""));
// console.log(makeStringFromArray(["top", "picks", "for", "you"], "_"));

// 13)---------------------------------

// function slugify(title) {
//     // let lowerCase = title.toLowerCase();
//     // let sds = lowerCase.split(" ");
//     // let slug = sds.join("-");
//     // return slug;

//     return title.toLowerCase().split(" ").join("-");
// }
// console.log(slugify("Arrays for begginers"));
// console.log(slugify("English for developer"));
// console.log(slugify("Ten secrets of JavaScript"));
// console.log(slugify("How to become a JUNIOR developer in TWO WEEKS"));

// 14)-------------------------------

// const fruits = ["apple", "plum", "pear", "orange", "banana"];

// // Change code below this line
// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, 4);
// const lastThreeEls = fruits.slice(-3);

// 15)------------------------------
// const oldClients = ["Mango", "Ajax", "Poly", "Kiwi"];
// const newClients = ["Peach", "Houston"];

// const allClients = oldClients.concat(newClients);
// console.log(allClients);

// 16)--------------------------
// function makeArray(firstArray, secondArray, maxLength) {
//     const newArr = firstArray.concat(secondArray);
//     if (newArr.length > maxLength) {
//         return newArr.slice(0, maxLength);
//     }
//     return newArr;
// }

// console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3));
// console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4));
// console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3));
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2));
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4));
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4));

// 17)--------------------------------
// const start = 3;
// const end = 7;

// for (let i = start; i <= end; i += 1) {
//     // Change this line
//     console.log(i);
// }

// 18)--------------------------------
// function calculateTotal(number) {
//     let total = 0;
//     for (let i = 0; i <= number; i += 1) {
//         total += i;
//     }
//     return total;
// }
// console.log(calculateTotal(1));
// console.log(calculateTotal(3));
// console.log(calculateTotal(7));
// console.log(calculateTotal(18));
// console.log(calculateTotal(24));
// console.log(calculateTotal());

// 19)---------------------------
// const fruits = ["apple", "plum", "pear", "orange"];

// for (let i = 0; i < fruits.length; i += 1) {
//     const fruit = fruits[i];
//     console.log(fruit);
// }

// 20)---------------------------
// function calculateTotalPrice(order) {
//     let total = 0;
//     for (let i = 0; i < order.length; i += 1) {
//         total += order[i];
//     }
//     return total;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4]));
// console.log(calculateTotalPrice([164, 48, 291]));
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));

// 21)-----------------------------
// function findLongestWord(string) {
// let words = string.split(" ");
// let longestWord = words[0];
// for (const word of words) {
//     if (word.length > longestWord.length) {
//         longestWord = word;
//     }
// }
// return longestWord;

// ----------2variant-----------

//     let words = string.split(" ");
//     let longestWord = words[0];
//     for (let i = 0; i < words.length; i += 1) {
//         if (words[i].length > longestWord.length) {
//             longestWord = words[i];
//         }
//     }

//     return longestWord;
// }

// console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));

// 22)------------------------------
// function createArrayOfNumbers(min, max) {
//     const numbers = [];
//     for (let i = min; i <= max; i++) numbers.push(i);
//     return numbers;
// }
// console.log(createArrayOfNumbers(1, 3));

// 23)----------------------------
// function filterArray(numbers, value) {
//     const array = [];
//     for (i = 0; i <= numbers.length; i += 1) {
//         if (numbers[i] > value) {
//             array.push(numbers[i]);
//         }
//     }
//     return array;
// }
// console.log(filterArray([1, 2, 3, 4, 5], 3));
// console.log(filterArray([1, 2, 3, 4, 5], 4));

// 24)-------------------------
// function checkFruit(fruit) {
//     const fruits = ["apple", "plum", "pear", "orange"];

//     return (fruit = fruits.includes(fruit));
// }
// console.log(checkFruit("plum"));

// 25)---------------------------
// function getCommonElements(array1, array2) {
//     const arrayNumbers = [];
//     for (let element of array1) {
//         if (array1.includes(element) && array2.includes(element)) {
//             arrayNumbers.push(element);
//         }
//     }
//     return arrayNumbers;
// }
// console.log(getCommonElements([1, 2, 3], [2, 4]));
// 26)---------------------------
// function calculateTotalPrice(order) {
//     let total = 0;
//     // Change code below this line

//     for (let orders of order) {
//         total += orders;
//     }

//     // Change code above this line
//     return total;
// }
// console.log(calculateTotalPrice([12, 85, 37, 4]));
// console.log(calculateTotalPrice([164, 48, 291]));

// 27)----------------------------
// function filterArray(numbers, value) {
//     // Change code below this line
//     const filteredNumbers = [];

//     for (let number of numbers) {
//         if (number > value) {
//             filteredNumbers.push(number);
//         }
//     }

//     return filteredNumbers;
//     // Change code above this line
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3));

// 28)-------------------------
// Change code below this line
// const a = 3 % 3;
// const b = 4 % 3;
// const c = 11 % 8;
// const d = 12 % 7;
// const e = 8 % 6;

// 29)--------------------------
// function getEvenNumbers(start, end) {
//     const number = [];
//     for (i = start; i <= end; i += 1) {
//         if (i % 2 === 0) {
//             number.push(i);
//         }
//     }
//     return number;
// }
// console.log(getEvenNumbers(2, 5));

// 30)-------------------------
// const start = 6;
// const end = 23;
// let number;

// for (let i = start; i < end; i += 1) {
//     if (i % 5 === 0) {
//         number = i;
//         break;
//     }
// }
// console.log(number);

// 31)------------------------
// function findNumber(start, end, divisor) {
//     // Change code below this line
//     let number;

//     for (let i = start; i < end; i += 1) {
//         if (i % divisor === 0) {
//             return (number = i);
//         }
//     }

//     // Change code above this line
// }
// console.log(findNumber(2, 6, 5));

// 32)-------------------------
// function includes(array, value) {
//     for (let item of array) {
//         if (item === value) {
//             return true;
//         }
//     }
//     return false;
// }

// console.log(includes([1, 2, 3, 4, 5], 3));
// console.log(
//     includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Uranus")
// );
