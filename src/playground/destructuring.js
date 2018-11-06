//ES6 Object Destructuring
// const person = {
//   name: 'Brendan',
//   age: 29,
//   location: {
//     city: 'San Diego',
//     temp: 82
//   }
// };

// const { name: firstname = 'Bob', age } = person;
// const { city, temp: temperature } = person.location;
// // const name = person.name;
// // const age = person.age;
// console.log(`${firstname} is ${age}.`);

// if (city && temperature) {
//   console.log(`It's ${temperature} in ${city}.`);
// }

// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     // name: 'Penguin'
//   }
// };

// const { name: publisherName = 'Self Published' } = book.publisher;

// console.log(publisherName);

//ES6 Array Destructuring

const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];

const [, city, state = 'California'] = address;
console.log(`You are in ${city}, ${state}.`);

const item = ['Coffee(hot)', '$2.00', '$2.50', '$2.75'];
const [itemName, , medium] = item;

console.log(`A medium ${itemName} costs ${medium}.`);