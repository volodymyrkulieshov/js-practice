// 1)--------------------
// const pizzaPalace = {
//     pizzas: ["Supercheese", "Smoked", "Four meats"],
//     // Change code below this line
//     checkPizza(pizzaName) {
//         return this.pizzas.includes(pizzaName);
//     },
//     order(pizzaName) {
//         const isPizzaAvailable = this.checkPizza(pizzaName);
//         if (!isPizzaAvailable) {
//             return `Sorry, there is no pizza named «${pizzaName}»`;
//         }
//         return `Order accepted, preparing «${pizzaName}» pizza`;
//     },
//     // Change code above this line
// };
// console.log(pizzaPalace.order("Smoked"));
// 2)----------------------
// const customer = {
//     username: "Mango",
//     balance: 24000,
//     discount: 0.1,
//     orders: ["Burger", "Pizza", "Salad"],
//     // Change code below this line
//     getBalance() {
//         return this.balance;
//     },
//     getDiscount() {
//         return this.discount;
//     },
//     setDiscount(value) {
//         this.discount = value;
//     },
//     getOrders() {
//         return this.orders;
//     },
//     addOrder(cost, order) {
//         this.balance -= cost - cost * this.discount;
//         this.orders.push(order);
//     },
//     // Change code above this line
// };
// customer.setDiscount(0.15);
// console.log(customer.getDiscount()); // 0.15
// customer.addOrder(5000, "Steak");
// console.log(customer.getBalance()); // 19750
// console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]
// 3)--------------------
// const historyService = {
//     orders: [
//         { email: "jacob@hotmail.com", dish: "Burrito" },
//         { email: "solomon@topmail.net", dish: "Burger" },
//         { email: "artemis@coldmail.net", dish: "Pizza" },
//         { email: "solomon@topmail.net", dish: "Apple pie" },
//         { email: "jacob@hotmail.com", dish: "Taco" },
//     ],
//     // Change code below this line
//     getOrdersLog() {
//         return this.orders
//             .map((order) => `email: ${order.email} dish: ${order.dish}`)
//             .join(" - ");
//     },
//     getEmails() {
//         const emails = this.orders.map((order) => order.email);
//         const uniqueEmails = new Set(emails);
//         return [...uniqueEmails];
//     },
//     getOrdersByEmail(email) {
//         return this.orders.filter((order) => order.email === email);
//     },
//     // Change code above this line
// };
// console.log(historyService.getOrdersByEmail("solomon@topmail.net"));
// 4)-------------------------
// const parent = {
//     name: "Stacey",
//     surname: "Moore",
//     age: 54,
//     heritage: "Irish",
// };
// // Change code below this line
// const child = Object.create(parent);
// // Change code above this line
// child.name = "Jason";
// child.age = 27;
// console.log(child);
// 5)-------------------------
// const ancestor = {
//     name: "Paul",
//     age: 83,
//     surname: "Dawson",
//     heritage: "Irish",
// };
// // Change code below this line
// const parent = Object.create(ancestor);
// parent.name = "Stacey";
// parent.surname = "Moore";
// parent.age = 54;
// const child = Object.create(parent);
// child.name = "Jason";
// child.age = 27;
// console.log(child);
// 6)------------------------
// class Car {}
// const bmw = new Car()
// console.log(bmw);
// 7)----------------------
// class Car {
//     constructor(brand, model, price) {
//         this.brand = brand;
//         this.model = model;
//         this.price = price;
//     }
// }
// console.log(new Car("BMW", "X5", 58900));
// 8)----------------------------
// class Car {
//     // Change code below this line
//     constructor({ brand, model, price }) {
//         this.brand = brand;
//         this.model = model;
//         this.price = price;
//     }
// }
// console.log(new Car({ brand: "BMW", model: "X5", price: 58900 }));
// 9)----------------------------
// class Car {
//     constructor({ brand, model, price }) {
//         this.brand = brand;
//         this.model = model;
//         this.price = price;
//     }
//     getPrice() {
//         return this.price
//     }
//     changePrice(newPrice) {
//         this.price = newPrice
//     }
// }
// 10)--------------------------------
// class Storage {
//     constructor(items) {
//         this.items = items;
//     }
//     getItems() {
//         return this.items
//     }
//     addItem(newItem) {
//         this.items.push(newItem);
//     }
//     removeItem(itemToRemove) {
//         this.items.indexOf(itemToRemove);
//         this.items.splice(1, 1);
//     }
// }
// // Change code above this line
// const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// storage.addItem("Droid");
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// storage.removeItem("Prolonger");
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
// 11)---------------------------
// class StringBuilder {
//     constructor(initialValue) {
//         this.value = initialValue;
//     }
//     getValue() {
//         return this.value
//     }
//     padEnd(str) {
//         this.value = this.value + str
//     }
//     padStart(str) {
//         this.value = str + this.value
//     }
//     padBoth(str) {
//         this.padEnd(str);
//         this.padStart(str)
//     }
// }
// const builder = new StringBuilder(".");
// console.log(builder.getValue()); // "."
// builder.padStart("^");
// console.log(builder.getValue()); // "^."
// builder.padEnd("^");
// console.log(builder.getValue()); // "^.^"
// builder.padBoth("=");
// console.log(builder.getValue()); // "=^.^="
// 12)--------------------------
// class Car {
//     #brand;
//     model;
//     price;
//     constructor({ brand, model, price }) {
//         this.#brand = brand;
//         this.model = model;
//         this.price = price;
//     }
//     getBrand() {
//         return this.#brand
//     }
//     changeBrand(newBrand) {
//         this.#brand = newBrand
//     }
// }
// 13)-----------------------
// class Storage {
//     #items;
//     constructor(items) {
//         this.#items = items;
//     }
//     getItems() {
//         return this.#items;
//     }
//     addItem(newItem) {
//         this.#items.push(newItem);
//     }
//     removeItem(itemToRemove) {
//         this.#items = this.#items.filter((item) => item !== itemToRemove);
//     }
// }
// // Change code above this line
// const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// storage.addItem("Droid");
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// storage.removeItem("Prolonger");
// console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Droid"]
// 14)--------------------------
// class StringBuilder {#
//     value;
//     constructor(initialValue) {
//         this.#value = initialValue;
//     }
//     getValue() {
//         return this.#value;
//     }
//     padEnd(str) {
//         this.#value += str;
//     }
//     padStart(str) {
//         this.#value = str + this.#value;
//     }
//     padBoth(str) {
//         this.padStart(str);
//         this.padEnd(str);
//     }
// }
// // Change code above this line
// const builder = new StringBuilder(".");
// console.log(builder.getValue()); // "."
// builder.padStart("^");
// console.log(builder.getValue()); // "^."
// builder.padEnd("^");
// console.log(builder.getValue()); // "^.^"
// builder.padBoth("=");
// console.log(builder.getValue()); // "=^.^="
// 15)---------------------------
// class Car {
//     // Change code below this line
//     #brand;
//     #model;
//     #price;
//     constructor({ brand, model, price }) {
//         this.#brand = brand;
//         this.#model = model;
//         this.#price = price;
//     }
//     get brand() {
//         return this.#brand;
//     }
//     set brand(newBrand) {
//         this.#brand = newBrand;
//     }
//     get model() {
//         return this.#model;
//     }
//     set model(newModel) {
//         this.#model = newModel;
//     }
//     get price() {
//         return this.#price;
//     }
//     set price(newPrice) {
//             this.#price = newPrice;
//         }
//         // Change code above this line
// }
// 16)---------------------------
// class Car {
//     // Change code below this line
//     static MAX_PRICE = 50000;
//     #price;
//     constructor({ price }) {
//         this.#price = price;
//     }
//     get price() {
//         return this.#price;
//     }
//     set price(newPrice) {
//         if (newPrice >= Car.MAX_PRICE) {
//             return;
//         } else {
//             return this.#price = newPrice;
//         }
//     }
// }
// const audi = new Car({ price: 35000 });
// console.log(audi.price); // 35000
// audi.price = 49000;
// console.log(audi.price); // 49000
// audi.price = 51000;
// console.log(audi.price); // 49000
// 17)---------------------------
// class Car {
//     static# MAX_PRICE = 50000;

//     static checkPrice(price) {
//         if (price > Car.#MAX_PRICE) {
//             return "Error! Price exceeds the maximum";
//         } else {
//             return "Success! Price is within acceptable limits";
//         }
//     }

//     constructor({ price }) {
//         this.price = price;
//     }
// }
// const audi = new Car({ price: 36000 });
// const bmw = new Car({ price: 64000 });
// console.log(Car.checkPrice(audi.price)); // "Success! Price is within acceptable limits"

// console.log(Car.checkPrice(bmw.price)); // "Error! Price exceeds the maximum"
