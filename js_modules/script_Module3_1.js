// TASK#1
// Створи функцію яка буде приймати 3 параметри та формувати об'єкт покупки
// 1 Назва продукту
// 2 Кількість одиниць
// 3 Ціна за 1 одиницю товару
// Функція має повертати сформований об'єкт з ключами name, price, quantity, totalPrice.
// function createBasket(product, quantity, price) {
//     // return {
//     //     name: product,
//     //     quantity,
//     //     price,
//     //     totalPrice: quantity*price
//     // }
//     const basket = {
//         name: product,
//         quantity,
//         price,
//         totalPrice: quantity*price
//     }
//     return basket
// }
// console.log(createBasket('pizza', 3, 120));
// console.log(createBasket('apple', 16, 1200));

// TASK 2
// Створи функцію для ведення статистики комп'ютерного клубу. Функція приймає 1 параметр це об'єкт користувачів де ключ це ім'я користувача, а значення це час оренди у хвилинах.
// Функція повертає рядок з інформацією про те скільки було користувачів та який середній час оренди комп'ютер.
// const players = {
//     Den: 60,
//     Kate: 120,
//     William: 45,
//     Matthew: 130,
//     Ethan: 40,
//     David:55
// }
// function getTime(obj) {
//     const countPlayers = Object.keys(obj)?.length
//     const values = Object.values(obj)
//     let totalTime = 0
//     for (const value of values) {
//         totalTime+=value
//     }
// // const averageTime=totalTime/countPlayers
    
//   return `Count of players ${countPlayers}, average time ${totalTime/countPlayers
//     }`
// }

// function getTime(obj) {
//     const entries = Object.entries(obj)
//      let totalTime = 0;
//     for (const entry of entries) {
//       totalTime+=entry[1]
//     }
//     return `Count of players ${entries.length}, average time ${totalTime/entries.length
//     }`
// }
//    console.log(getTime(players));

// TASK#3
// Task - 3
// 1 Створити функцію яка буде приймати 2 параметри
//    1 параметр масив
//    2 параметр назва книги
// Функція повертає Імена юзерів (формат стрінги) в яких є дана книга ("Harry Potter") \\\ "Anna, Oleksii"

// 2 Порахувати вік всіх юзерів у яких є ключ age.
// const friends = [
//     { name: 'Anna', books: ['Bible', 'Harry Potter'], age: 21 },
//     { name: 'Bob', books: ['War and peace', 'Romeo and Juliet'], age: 26 },
//     { name: 'Alice', books: ['War and peace', 'Romeo and Juliet'], age: 0 },
//     {
//         name: 'Oleksii',
//         books: ['Bible', 'War and peace', 'Harry Potter', 'Romeo and Juliet'],
//         age: 26,
//     },
// ];

// function getUsers(arr, bookName) {
//     const users=[]
//     for (const friend of arr) {
//         if (friend.books.includes(bookName)) {
//             console.log(friend.name);
//                users.push(friend.name)
//         };
//     }
//     return users.join(', ')
  
// }
// console.log(getUsers(friends, 'Harry Potter'));  


// function getTotalAge(arr) {
//     let totalAge = 0;
// for (const user of arr) {
    
//     // exp 1
// //     if (user.age) {
// //     totalAge+=user.age
// // }
//     // exp 2
//     if (user.hasOwnProperty('age')) {
//         totalAge+=user.age
//     }
//     // exp 3
//     // if ("age" in user) {
//     //     totalAge+=user.age
//     // }
//     }
//     return totalAge
// }
// console.log(getTotalAge(friends));

// TASK#4

// Task - 4
// 1 Створити метод об'єкту який буде приймати 1 параметр назву факультету та повертати списoк імен учнів факультету
// 2 Створити метод об'єкту який буде приймати 1 параметр назву факультету та повертати кількість очків факультету

// const hogvarts = {
//     griffindor: [{
//         name: 'Harry',
//         points: 17,
//     },
//     {
//         name: 'Hermiona',
//         points: 19,
//     },
//     {
//         name: 'Ron',
//         points: 14,
//     },
//     ],
//     slizerin: [{
//         name: 'Draco',
//         points: 17,
//     },
//     {
//         name: 'Goyl',
//         points: 14,
//     },
//     {
//         name: 'Crabbe',
//         points: 5,
//     },
//     ],
//     getUserList(faculty){
//         if (!(faculty in this)) {
//             return "Not found"
//         } 
//         const students = [];
//         for (const student of this[faculty]) {
//             students.push(student.name)
//         }
//         return students.join(', ');
// }
    
//     getTotalPoints(faculty) {
//         if (!this.hasOwnProperty(faculty)) {
//             return 'Faculty not found'
//         }
//         let totalPoints = 0;
//         for (const student of this[faculty])
//         {
//             totalPoints+=student.points
            
//         }
//         return totalPoints
//     }
// }


// console.log(hogvarts.getUserList("griffindor"));
// // console.log(hogvarts.getUserList("qwerty"));
// console.log(hogvarts.getUserList("slizerin"));
// console.log(hogvarts.getUserList('slitherin'));

// console.log(hogvarts.getTotalPoints("griffindor"));
// console.log(hogvarts.getTotalPoints("slizerin"));
// console.log(hogvarts.getTotalPoints("slitherin"));


