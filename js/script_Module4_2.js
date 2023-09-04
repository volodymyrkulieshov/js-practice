// Task-1
// Напишіть функцію, яка використовує метод map,
// щоб створити новий масив об'єктів, в якому буде інформація про середній бал кожного студента.

// const students = [
//   { name: "John", grades: [80, 85, 90] }, //  { name: "John", average: 85 }
//   { name: "Alice", grades: [90, 95, 92] },
//   { name: "Bob", grades: [70, 80, 75] },
//   { name: "Emily", grades: [95, 92, 88] },
//   { name: "David", grades: [85, 88, 90] },
// ];
// function getAverage(arr) {
//   const result = arr.map(({ name, grades }) => {
//     const total = grades.reduce((acc, item) => acc + item, 0);
//     return {
//       name,
//       average: Math.round(total / grades.length),
//     };
//   });
//   return result;
// }
// console.log(getAverage(students));

// Task-2
// Напишіть функцію, яка використовує метод filter, щоб створити новий масив, в якому будуть тільки студенти які старше 20 років

// const students = [
//   { name: "John", age: 20, gpa: 3.8 },
//   { name: "Alice", age: 21, gpa: 3.2 },
//   { name: "Bob", age: 19, gpa: 3.5 },
//   { name: "Emily", age: 22, gpa: 3.9 },
//   { name: "David", age: 20, gpa: 3.7 },
// ];

// function getAdult(arr) {
//     return arr.filter(({ age }) => age > 20)
//               .map(({ name }) => name);
// }
// console.log(getAdult(students));

// Task-3
// Напишіть функцію, яка використовує метод find, щоб знайти книжку за її назвою (title).
// Якщо книгу не знайдено повертається рядок 'Not found'.
const books = [
  {
    title: "JavaScript: The Good Parts",
    author: "Douglas Crockford",
    year: 2008,
  },
  {
    title: "Clean Code: A Handbook of Agile Software Craftsmanship",
    author: "Robert C. Martin",
    year: 2008,
  },
  {
    title: "The Pragmatic Programmer: Your Journey to Mastery",
    author: "Andrew Hunt, David Thomas",
    year: 1999,
  },
  {
    title: "Design Patterns: Elements of Reusable Object-Oriented Software",
    author: "Erich Gamma, Richard Helm, Ralph Johnson, John Vlissides",
    year: 1994,
  },
  {
    title: "Refactoring: Improving the Design of Existing Code",
    author: "Martin Fowler",
    year: 1999,
  },
];

function getBook(arr, title) {}

console.log(
  getBook(
    books,
    "Design Patterns: Elements of Reusable Object-Oriented Software"
  )
);
console.log(getBook(books, "qwerty"));
