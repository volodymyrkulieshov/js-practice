// function getTime(obj) {
//     const countPlayers = Object.keys(obj)?.length;
//     console.log(countPlayers);
//     return `Count of players ${countPlayers}, average time ${countPlayers}`;
// }

// console.log(getTime(players));

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// const [first,...args] = numbers
// console.log(numbers);
// console.log(args);


// TASK#1
// const user = {
//     id: 1,
//     userName: 'HarryPotter',
//     profile: {
//         name: 'Harry',
//         surname: 'Potter',
//         age:25
//     }
// }

// const { userName, id, profile: {age} } = user
// console.log(userName);
// console.log(id);
// console.log(age);


// TASK#2
// const product = {
//     name: 'Smart TV',
//     price: 2500,
//     category: 'Electronics',
//     details: {
//         brand: 'LG',
//         color: 'black',
//         screenSize:55
//     }
    
// }
// function productInfo({name,price,category,details:{brand,color,screenSize}={}}={})
// {console.log(`Назва товару ${name}`);
// console.log(`Ціна ${price}`);
// console.log(`Категрія ${category}`);
// console.log(`Деталі:`);
// console.log(`Бренд ${brand}`);
// console.log(`Колір ${color}`);
// console.log(`Розмір екрану ${screenSize}`);}
// productInfo(product)

// TASK#3
// function createContact(partialContact) {
//     return{id: Date.now(),
//         createAt: new Date(),
//         list: "default",
//     ...partialContact}
// }
// console.log(createContact({
//     name: 'Magno',
//     email: "mango@mail.com",
//     list:"friends"
// }));
// console.log(createContact({
//     name: 'Poly',
//     email: "poly@mail.com",
// }));

// TASK#4
// variant1
// function transformName({firstName, lastName, ...props}) {
//     return {
//         fullName: `${firstName} ${lastName}`,
//         ...props
//     }
// }

// variant2
// function transformName(obj) {
//     const keys = Object.keys(obj)
//     const profile = {};
//     let fullName = [];
//     for (const key of keys) {
//         if (key === 'firstName' || key === "lastName") {
//             fullName.push(obj[key])
//         } else
//             {profile[key]=obj[key]}
//     }
//     profile.fullName = fullName.join(' ')
//     return profile
// }

// variant3

// function transformName(obj) {
//     const firstName = obj.firstName;
//     const lastName = obj.lastName;
//     const fullName = `${firstName} ${lastName}`;
//     delete obj.firstName;
//     delete obj.lastName;
//     obj.fullName = fullName;
//     return obj;
// }


// console.log(transformName({
//     id: 1,
//     firstName: 'Jacob',
//     lastName: 'Mercer',
//     email: 'j.mercer@mail.com',
//     friendcount:40
// }));
// console.log(transformName({
//     id: 2,
//     firstName: 'Lionel',
//     lastName: 'Messi',
//     email: 'l.messi@mail.com',
//     friendcount:123
// }));