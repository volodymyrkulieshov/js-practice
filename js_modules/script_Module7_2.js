// ************************************Практика************************************ \\

// Потрібно створити гру хрестики нулики.
// Відмалюй розмітку ігрового поля для контейнера з класом "content", для кожної клітинки застосуй клас "item"
// Реалізуй делегування подій на ігровому полі для можливості ходу.
// Скріпт має самостійно визначати переможця гри та виводити модальне вікно з переможцем (X/O)
// Для історії ходів наших гравців (Х/О) потрібно щоб кожна клітинка ігрового поля містила дата атрибут id
// Створи скріпт для перевірки виграшної комбінації, список всіх можливих виграшних комбінацій знаходиться в масиві combination.
// Для виводу модального вікна застосуй бібліотеку basiclightbox
// Після визначення переможця обов'язково підготуй ігрове поле для наступної гри

const combination = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [1, 5, 9],
  [3, 5, 7],
  [3, 6, 9],
];

const container = document.querySelector(".content");
let player = "X";
const historyX = [];
const historyO = [];

createMarkup();

container.addEventListener("click", handlerClick);

function handlerClick(evt) {
  if (evt.target === evt.currentTarget || evt.target.textContent) {
    return;
  }
  const id = Number(evt.target.dataset.id);
  let isWinner = false;

  if (player === "X") {
    historyX.push(id);
    checkWinner(historyX);
    isWinner = historyX.length > 2 ? checkWinner(historyX) : false;
    // console.log(historyX);
  } else {
    historyO.push(id);
    isWinner = historyO.length > 2 ? checkWinner(historyO) : false;
    // console.log(historyO);
  }

  if (isWinner) {
    const instance = basicLightbox.create(`
	<div class ="box">
	<h1>Player - ${player} is winner</h1>
    </div>
`);
    instance.show();
    resetGame();
    return;
  }

  evt.target.textContent = player;
  player = player === "X" ? "O" : "X";
}

function checkWinner(arr) {
  return combination.some((item) => item.every((id) => arr.includes(id)));
}

function resetGame() {
  player = "X";
  historyX.splice(0);
  historyO.splice(0);
  createMarkup();
}

function createMarkup() {
  let markup = "";
  for (let i = 0; i < 9; i += 1) {
    markup += `<div class="item" data-id ="${i + 1}"></div>`;
  }
  container.innerHTML = markup;
}

// const container = document.querySelector(".content");

// let player = "X";
// const historyX = [];
// const historyO = [];

// createMarkup();
// container.addEventListener("click", handlerClick);

// function handlerClick(evt) {
//   if (evt.target === evt.currentTarget || evt.target.textContent) {
//     //evt.target.textContent !== ''
//     return;
//   }
//   const id = Number(evt.target.dataset.id);
//   let isWinner = false;
//   if (player === "X") {
//     historyX.push(id);
//     isWinner = historyX.length > 2 ? checkWinner(historyX) : false;
//   } else {
//     historyO.push(id);
//     isWinner = historyO.length > 2 ? checkWinner(historyO) : false;
//   }

//   if (isWinner) {
//     const instance = basicLightbox.create(`
// 	<div class="box">
//         <h1>Player - ${player} is winner</h1>
//     </div>`);
//     instance.show();
//     resetGame();
//     return;
//   }

//   evt.target.textContent = player;
//   player = player === "X" ? "O" : "X";
// }

// function checkWinner(arr) {
//   return combination.some((item) => item.every((id) => arr.includes(id)));
// }

// function resetGame() {
//   player = "X";
//   historyX.splice(0);
//   historyO.splice(0);
//   createMarkup();
// }

// function createMarkup() {
//   let markup = "";
//   for (let i = 0; i < 9; i += 1) {
//     markup += `<div class="item" data-id="${i + 1}"></div>`;
//   }
//   container.innerHTML = markup;
// }
