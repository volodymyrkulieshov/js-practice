// 1)------------------------
// function makePizza() {
//     return "Your pizza is being prepared, please wait.";
// }
// // Change code below this line

// const result = makePizza();
// const pointer = makePizza;

// console.log(result);
// console.log(makePizza);

// 2)----------------------

// function deliverPizza(pizzaName) {
//     return `Delivering ${pizzaName} pizza.`;
// }

// function makePizza(pizzaName) {
//     return `Pizza ${pizzaName} is being prepared, please wait...`;
// }

// // Chande code below this line
// function makeMessage(pizzaName, callback) {
//     return callback(pizzaName);
// }

// console.log(makeMessage("Royal Grand", makePizza));

// 3)-----------------------

// function makePizza(pizzaName, callback) {
//     console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//     callback(pizzaName);
// }

// makePizza("Royal Grand", function deliverPizza(pizzaName) {
//     console.log(`Delivering pizza ${pizzaName}.`);
// });

// makePizza("Ultracheese", function eatPizza(pizzaName) {
//     console.log(`Eating pizza ${pizzaName}`);
// });

// 4)------------------------
// const pizzaPalace = {
//     pizzas: ["Ultracheese", "Smoked", "Four meats"],
//     order(pizzaName, onSuccess, onError) {
//         if (this.pizzas.includes(pizzaName)) {
//             return onSuccess(pizzaName);
//         }
//         return onError(
//             `There is no pizza with a name ${pizzaName} in the assortment.`
//         );
//     },
// };

// // Callback for onSuccess
// function makePizza(pizzaName) {
//     return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// function onOrderError(error) {
//     return `Error! ${error}`;
// }

// // Method calls with callbacks
// console.log(pizzaPalace.order("Smoked", makePizza, onOrderError));
// pizzaPalace.order("Four meats", makePizza, onOrderError);
// pizzaPalace.order("Big Mike", makePizza, onOrderError);
// pizzaPalace.order("Vienna", makePizza, onOrderError);

// 5)--------------------
// function calculateTotalPrice(orderedItems) {
//     let totalPrice = 0;

//     orderedItems.forEach((element) => {
//         totalPrice += element;
//     });

//     return totalPrice;
// }

// 6)---------------------
// function filterArray(numbers, value) {
//     const filteredNumbers = [];
//     // Change code below this line

//     // for (let i = 0; i < numbers.length; i += 1) {
//     //     if (numbers[i] > value) {
//     //         filteredNumbers.push(numbers[i]);
//     //     }
//     // }
//     numbers.forEach((element) => {
//         if (element > value) {
//             filteredNumbers.push(element);
//         }
//     });

//     // Change code above this line
//     return filteredNumbers;
// }

// 7)----------------------
// function getCommonElements(firstArray, secondArray) {
//     const commonElements = [];
//     // Change code below this line

//     // for (let i = 0; i < firstArray.length; i += 1) {
//     //     if (secondArray.includes(firstArray[i])) {
//     //         commonElements.push(firstArray[i]);
//     //     }
//     // }
//     firstArray.forEach((element) => {
//         if (secondArray.includes(element)) {
//             commonElements.push(element);
//         }
//     });

//     return commonElements;
//     // Change code above this line
// }

// 8)--------------------------

// const calculateTotalPrice = (quantity, pricePerItem) => {
//     // Change code above this line
//     return quantity * pricePerItem;
// };

// 9)--------------------------

// const calculateTotalPrice = (quantity, pricePerItem) => quantity * pricePerItem;

// 10)-------------------------

// const calculateTotalPrice = (orderedItems) => {
//     let totalPrice = 0;

//     orderedItems.forEach((element) => {
//         totalPrice += element;
//     });

//     return totalPrice;
// };

// 11)------------------------

// Change code below this line
// const filterArray = (numbers, value) => {
//     const filteredNumbers = [];

//     numbers.forEach((number) => {
//         if (number > value) {
//             filteredNumbers.push(number);
//         }
//     });

//     // Change code above this line
//     return filteredNumbers;
// };

// 12)-------------------------

// Change code below this line
// const getCommonElements = (firstArray, secondArray) => {
//     const commonElements = [];

//     firstArray.forEach((element) => {
//         if (secondArray.includes(element)) {
//             commonElements.push(element);
//         }
//     });

//     // Change code above this line
//     return commonElements;
// };

// 13)----------------------
// function changeEven(numbers, value) {
//     const newArray = [];

//     numbers.forEach((element) => {
//         if (element % 2 === 0) {
//             newArray.push(element + value);
//         } else {
//             newArray.push(element);
//         }
//     });
//     return newArray;
// }
// console.log(newArray);

// function changeEven(numbers, value) {
//   const newArray = [];
//   numbers.forEach((number) => {
//     if (number % 2 === 0) {
//       newArray.push(number + value);
//     } else {
//       newArray.push(number);
//     }
//   });
//   return newArray;
// }

// changeEven([17, 24, 68, 31, 42], 100);

// 14)-----------------------
// const planets = ["Earth", "Mars", "Venus", "Jupiter"];
// // Change code below this line
// const planetsLengths = planets.map((planet) => planet.length);

// 15)-----------------------
// const books = [{
//         title: "The Last Kingdom",
//         author: "Bernard Cornwell",
//         rating: 8.38,
//     },
//     {
//         title: "Beside Still Waters",
//         author: "Robert Sheckley",
//         rating: 8.51,
//     },
//     {
//         title: "The Dream of a Ridiculous Man",
//         author: "Fyodor Dostoevsky",
//         rating: 7.75,
//     },
//     { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//     { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];
// const titles = books.map((book) => book.title);

// 16)--------------------
// const books = [{
//         title: "The Last Kingdom",
//         author: "Bernard Cornwell",
//         genres: ["adventure", "history"],
//     },
//     {
//         title: "Beside Still Waters",
//         author: "Robert Sheckley",
//         genres: ["fiction"],
//     },
//     {
//         title: "Redder Than Blood",
//         author: "Tanith Lee",
//         genres: ["horror", "mysticism"],
//     },
// ];
// const genres = books.flatMap((book) => book.genres);

// 17)-------------------------

// Change code below this line
// const getUserNames = (users) => {
//     const newArray = [];
//     users.map((user) => newArray.push(user.name));
//     return newArray;
// };

// 18)----------------------

// const getUserEmails = (users) => {
//    const emailArr= users.map((user) => user.email);
//     return emailArr;
// };

// 19)---------------------

// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// // Change code below this line

// const evenNumbers = numbers.filter((number) => number % 2 === 0);
// const oddNumbers = numbers.filter((number) => number % 2 !== 0);

// 20)-------------------
// const books = [{
//         title: "The Last Kingdom",
//         author: "Bernard Cornwell",
//         genres: ["adventure", "history"],
//     },
//     {
//         title: "Beside Still Waters",
//         author: "Robert Sheckley",
//         genres: ["fiction", "mysticism"],
//     },
//     {
//         title: "Redder Than Blood",
//         author: "Tanith Lee",
//         genres: ["horror", "mysticism", "adventure"],
//     },
// ];

// const allGenres = books.flatMap((book) => book.genres);
// const uniqueGenres = allGenres.filter(
//     (genre, index, array) => array.indexOf(genre) === index
// );

// 21--------------------------------

// const books = [{
//         title: "The Last Kingdom",
//         author: "Bernard Cornwell",
//         rating: 8.38,
//     },
//     {
//         title: "Beside Still Waters",
//         author: "Robert Sheckley",
//         rating: 8.51,
//     },
//     {
//         title: "The Dream of a Ridiculous Man",
//         author: "Fyodor Dostoevsky",
//         rating: 7.75,
//     },
//     { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//     { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];

// const MIN_RATING = 8;
// const AUTHOR = "Bernard Cornwell";
// // Change code below this line

// const topRatedBooks = books.filter(({ rating }) =>rating >= MIN_RATING);
// const booksByAuthor = books.filter(({author}) =>author === AUTHOR);

// 22--------------------------
// // Change code below this line
// const getUsersWithEyeColor = (users, color) =>
//     users.filter((user) => user.eyeColor === color);

// // Change code above this line

// 23)---------------------
// const getUsersWithAge = (users, minAge, maxAge) =>
//    {return users.filter((user) => user.age > minAge && user.age < maxAge)}

// 24)---------------------

// const getUsersWithFriend = (users, friendName) => {
//    return users.filter((user) => user.friends.includes(friendName));
// };

// 25)----------------------

// Change code below this line
// const getFriends = (users) => {
//   const friendName = users.flatMap((user) => user.friends);
//   const friendArray = friendName.filter(
//     (friend, index, array) => array.indexOf(friend) === index
//   );
//   return friendArray;
// };

// 26)-----------------------

// const getActiveUsers = (users) => users.filter((user) => user.isActive);

// 27)---------------------

// const getInactiveUsers = (users) =>
//     users.filter((user) => user.isActive === false);

// 28)--------------------
// const books = [{
//         title: "The Last Kingdom",
//         author: "Bernard Cornwell",
//         rating: 8.38,
//     },
//     {
//         title: "Beside Still Waters",
//         author: "Robert Sheckley",
//         rating: 8.51,
//     },
//     {
//         title: "The Dream of a Ridiculous Man",
//         author: "Fyodor Dostoevsky",
//         rating: 7.75,
//     },
//     { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
// ];
// const BOOK_TITLE = "The Dream of a Ridiculous Man";
// const AUTHOR = "Robert Sheckley";
// // Change code below this line

// const bookWithTitle = books.find((book) => book.title === BOOK_TITLE);

// const bookByAuthor = books.find((book) => book.author === AUTHOR);

// 29)-------------------------
// const getUserWithEmail = (users, email) =>
//     users.find((user) => user.email === email);

// 30)--------------------------
// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Change code below this line

// const eachElementInFirstIsEven = firstArray.every((number) => number % 2 === 0);
// const eachElementInFirstIsOdd = firstArray.every((number) => number % 2 !== 0);

// const eachElementInSecondIsEven = secondArray.every(
//     (number) => number % 2 === 0
// );
// const eachElementInSecondIsOdd = secondArray.every(
//     (number) => number % 2 !== 0
// );

// const eachElementInThirdIsEven = thirdArray.every((number) => number % 2 === 0);
// const eachElementInThirdIsOdd = thirdArray.every((number) => number % 2 !== 0);

// 31)----------------------------

// const isEveryUserActive = (users) => users.every((user) => user.isActive);

// 32)----------------------------

// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Change below this line

// const anyElementInFirstIsEven = firstArray.some((number) => number % 2 === 0);
// const anyElementInFirstIsOdd = firstArray.some((number) => number % 2 !== 0);

// const anyElementInSecondIsEven = secondArray.some((number) => number % 2 === 0);
// const anyElementInSecondIsOdd = secondArray.some((number) => number % 2 !== 0);

// const anyElementInThirdIsEven = thirdArray.some((number) => number % 2 === 0);
// const anyElementInThirdIsOdd = thirdArray.some((number) => number % 2 !== 0);

// 33)-----------------------------

// Change code below this line
// const isAnyUserActive = (users) => users.some((user) => user.isActive);
// Change code above this line

// 34)-----------------------

// const players = {
//     mango: 1270,
//     poly: 468,
//     ajax: 710,
//     kiwi: 244,
// };
// const playtimes = Object.values(players); // [1270, 468, 710, 244]
// // Change code below this line

// const totalPlayTime = playtimes.reduce((accum, playtime) => {
//     return accum + playtime;
// }, 0);

// // Change code above this line
// const averagePlayTime = totalPlayTime / playtimes.length;

// 35)---------------------
// const players = [
//   { name: "Mango", playtime: 1270, gamesPlayed: 4 },
//   { name: "Poly", playtime: 469, gamesPlayed: 2 },
//   { name: "Ajax", playtime: 690, gamesPlayed: 3 },
//   { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
// ];
// // Change code below this line

// const totalAveragePlaytimePerGame = players.reduce((accum, player) => {
//   return accum + player.playtime / player.gamesPlayed;
// }, 0);

// 36)------------------

// Change code below this line
// const calculateTotalBalance = (users) =>
//     users.reduce((accum, user) => {
//         return accum + user.balance;
//     }, 0);

// 37)-------------------

// Change code below this line
// const getTotalFriendCount = (users) => {
//     return users.reduce((accum, user) => [...accum, ...user.friends], []).length;
// };
// Change code above this line

// 38)----------------------
// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// const authors = [
//     "Tanith Lee",
//     "Bernard Cornwell",
//     "Robert Sheckley",
//     "Fyodor Dostoevsky",
// ];
// // Change code below this line

// const ascendingReleaseDates = [...releaseDates].sort();

// const alphabeticalAuthors = [...authors].sort();

// console.log(ascendingReleaseDates);
// console.log(alphabeticalAuthors);

// 39)-------------------------

// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// // Change code below this line

// const ascendingReleaseDates = [...releaseDates].sort((a, b) => a - b);

// const descendingReleaseDates = [...releaseDates].sort((a, b) => b - a);

// console.log(descendingReleaseDates);

// 40)-------------------------
// const authors = [
//     "Tanith Lee",
//     "Bernard Cornwell",
//     "Robert Sheckley",
//     "Fyodor Dostoevsky",
//     "Howard Lovecraft",
// ];
// // Change code below this line

// const authorsInAlphabetOrder = [...authors].sort((a, b) => a.localeCompare(b));

// const authorsInReversedOrder = [...authors].sort((a, b) => b.localeCompare(a));

// console.log(authorsInReversedOrder);

// 41)------------------------
// const books = [{
//         title: "The Last Kingdom",
//         author: "Bernard Cornwell",
//         rating: 8.38,
//     },
//     {
//         title: "Beside Still Waters",
//         author: "Robert Sheckley",
//         rating: 8.51,
//     },
//     {
//         title: "The Dream of a Ridiculous Man",
//         author: "Fyodor Dostoevsky",
//         rating: 7.75,
//     },
//     { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//     { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];
// // Change code below this line

// const sortedByAuthorName = [...books].sort((firstBook, secondBook) =>
//     firstBook.author.localeCompare(secondBook.author)
// );

// const sortedByReversedAuthorName = [...books].sort((firstBook, secondBook) =>
//     secondBook.author.localeCompare(firstBook.author)
// );

// const sortedByAscendingRating = [...books].sort(
//     (firstBook, secondBook) => firstBook.rating - secondBook.rating
// );

// const sortedByDescentingRating = [...books].sort(
//     (firstBook, secondBook) => secondBook.rating - firstBook.rating
// );

// console.log(sortedByDescentingRating);

// 42)-----------------------

// const users = [{
//         name: "Moore Hensley",
//         email: "moorehensley@indexia.com",
//         eyeColor: "blue",
//         friends: ["Sharron Pace"],
//         isActive: false,
//         balance: 2811,
//         gender: "male",
//     },
//     {
//         name: "Sharlene Bush",
//         email: "sharlenebush@tubesys.com",
//         eyeColor: "blue",
//         friends: ["Briana Decker", "Sharron Pace"],
//         isActive: true,
//         balance: 3821,
//         gender: "female",
//     },
//     {
//         name: "Ross Vazquez",
//         email: "rossvazquez@xinware.com",
//         eyeColor: "green",
//         friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//         isActive: false,
//         balance: 3793,
//         gender: "male",
//     },
//     {
//         name: "Elma Head",
//         email: "elmahead@omatom.com",
//         eyeColor: "green",
//         friends: ["Goldie Gentry", "Aisha Tran"],
//         isActive: true,
//         balance: 2278,
//         gender: "female",
//     },
//     {
//         name: "Carey Barr",
//         email: "careybarr@nurali.com",
//         eyeColor: "blue",
//         friends: ["Jordan Sampson", "Eddie Strong"],
//         isActive: true,
//         balance: 3951,
//         gender: "male",
//     },
//     {
//         name: "Blackburn Dotson",
//         email: "blackburndotson@furnigeer.com",
//         eyeColor: "brown",
//         friends: ["Jacklyn Lucas", "Linda Chapman"],
//         isActive: false,
//         balance: 1498,
//         gender: "male",
//     },
//     {
//         name: "Sheree Anthony",
//         email: "shereeanthony@kog.com",
//         eyeColor: "brown",
//         friends: ["Goldie Gentry", "Briana Decker"],
//         isActive: true,
//         balance: 2764,
//         gender: "female",
//     },
// ];

// const sortByAscendingBalance = (users) => [...users].sort(
//     (firstUser, secondUser) => firstUser.balance - secondUser.balance
// );

// console.log(sortByAscendingBalance(users));
// // Change code above this line

// 43)----------------------

// Change code below this line
// const sortByDescendingFriendCount = (users) => {
//   return  [...users].sort(
//         (firstUser, secondUser) =>
//         secondUser.friends.length - firstUser.friends.length
//     );
// };

// 44)---------------------

// const sortByName = (users) => [...users].sort((firstUser, secondUser) =>
//     firstUser.name.localeCompare(secondUser.name)
// );

// 45)-----------------------

// const books = [{
//         title: "The Last Kingdom",
//         author: "Bernard Cornwell",
//         rating: 8.38,
//     },
//     {
//         title: "Beside Still Waters",
//         author: "Robert Sheckley",
//         rating: 8.51,
//     },
//     {
//         title: "The Dream of a Ridiculous Man",
//         author: "Fyodor Dostoevsky",
//         rating: 7.75,
//     },
//     { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//     {
//         title: "The Dreams in the Witch House",
//         author: "Howard Lovecraft",
//         rating: 8.67,
//     },
// ];
// const MIN_BOOK_RATING = 8;

// const names = [...books]
//     .filter((book) => book.rating >= MIN_BOOK_RATING)
//     .map((book) => book.author)
//     .sort((firstBook, secondBook) => firstBook.localeCompare(secondBook));

// console.log(names);

// 46)-------------------

// Change code below this line
// const getNamesSortedByFriendCount = (users) => {
//   return [...users]
//     .sort(
//       (firstUser, secondUser) =>
//         firstUser.friends.length - secondUser.friends.length
//     )
//     .map((users) => users.name);
// };

// 47)-------------------------

// Change code below this line
// const getSortedFriends = (users) => {
//     return [...users]
//         .flatMap((user) => user.friends)
//         .filter((course, index, array) => array.indexOf(course) === index)
//         .sort((firstUser, secondUser) => firstUser.localeCompare(secondUser));
// };
// Change code above this line

// 48)-------------------------
// [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female",
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong", "Adrian Cross"],
//     isActive: true,
//     balance: 3951,
//     gender: "male",
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: [
//       "Jacklyn Lucas",
//       "Linda Chapman",
//       "Adrian Cross",
//       "Solomon Fokes",
//     ],
//     isActive: false,
//     balance: 1498,
//     gender: "male",
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female",
//   },
// ];

// const getTotalBalanceByGender = (users, gender) => {
//   return [...users]
//     .filter((user) => user.gender === gender)
//     .reduce((total, user) => total + user.balance, 0);
// };
