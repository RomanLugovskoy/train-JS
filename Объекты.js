'use strict'
// ========================================ОБЪЕКТЫ==================================================

// ---------------------------------------Задание 1-------------------------------------------------

// Мой вариант

// const personsArray = [
// 	{
// 		name: 'Витя',
// 		age: 37,
// 	},
// 	{
// 		name: 'Макси',
// 		age: 36,
// 	},
// 	{
// 		name: 'QП',
// 		age: 42,
// 	},
// 	{
// 		name: 'Гуфака',
// 		age: 43,
// 	},
// ];

// const getInfo = (persons) => {
// 	const averageAge = persons.reduce((acc, next) => acc += next.age, 0) / persons.length;
// 	const nameOfTheOldest = persons.reduce((oldest, person) => {
// 		return (person.age > oldest.age) ? person : oldest;
// 	}, persons[0]).name;
// 	return {nameOfTheOldest, averageAge,};
// }

// console.log(getInfo(personsArray));

// Из ответов

// const getInfo = persons => {
// 	const ages = persons.map(person => person.age);
//   const averageAge = ages.reduce((a, b) => a + b, 0) / ages.length;
//   const maxAge = Math.max(...ages);
//   const oldestPerson = persons.find(person => person.age === maxAge);
//   return {
//   	averageAge,
//     oldestPerson: oldestPerson.name,
//   }
// }

// console.log( getInfo([
//   {
//   	name: 'Kaya',
//     age: 10,
//   },
//   {
//   	name: 'Vitya',
//     age: 20,
//   },
//   {
//   	name: 'Kolya',
//     age: 30,
//   }
// ]) )


// -------------------------------------------Задание 2--------------------------------------------------

const array = [
	['ключ 1', 'значение 1'],
	['ключ 2','значение 2'],
];

function getObject(arr) {
	arr.reduce((acc, elem) => {
		
		return acc;
	}, {})
  }
console.log(getObject(array));