'use strict'

// -------------------------------Строковые методы и работа с массивами------------------------------------

// -----------------------------------------------Задание 1------------------------------------------------

// const match = (str1, str2) => str1.toLowerCase() === str2.toLowerCase();
// console.log(match('hEllO', 'HeLlO'));

// ----------------------------------------------Задание 2-------------------------------------------------

// Мой вариант

// const getChapterName = (link) => {
// 	return link.split('').slice(21, length - 1).join('');
// }

// console.log(chapterName('https://reddit.com/r/название_раздела/'));

// Вариант gpt

// function getSubredditName(url) {
// 	const parts = url.split('/');
// 	return parts[parts.length - 2];
//   }
  
//   // Примеры использования
//   console.log(getSubredditName('https://reddit.com/r/javascript/')); // javascript
  
//   Из ответов

// const getSubredditName = (link) => {
// 	const rIndex = link.indexOf('/r/');
//   const nameStartIndex = rIndex + 3; // +3 потому что ищется индекс начала искомой строки /r/!
//   return link.slice(nameStartIndex, -1);
// }

// alert(getSubredditName('https://reddit.com/r/dankmemes/'));

// -----------------------------------Задание 3--------------------------------------------------

// let array = [1, -2, 5, 4];

// const reverseAndNegate = (arr) => {
// 	return arr
// 	.map((elem) => {
// 		return elem * -1;
// 	})
// 	.reverse();
// }

// console.log(reverseAndNegate(array));

// Второй вариант с циклом

// let array = [1, -2, 5, 4];
// let newArray = [];
// for (let i = array.length - 1; i >= 0; i--) {
// 	newArray.push(array[i] * -1);
// }
// console.log(newArray);

// -------------------------------------Задание 4-------------------------------------------------

// let array = [15, 2, 3, 5, 6]

// const getNew = (arr) => {
// 	return arr.map((elem) => {
// 		if (elem % 2 === 0) {
// 			return elem + 4;
// 		} else {
// 			return elem - 2;
// 		}
// 	})
// 	.filter(elem => elem % 13 != 0)
// 	.reduce((total, item) => total + item, 0)
// }
// console.log(getNew(array));

// Из ответов

// const calculate = (arr) => {
// 	return arr
// 	  .map(v => v % 2 === 0 ? v + 4 : v - 2)
// 	  .filter(v => !(v % 13 === 0))
// 	  .reduce((a, b) => a + b, 0)
//   }
  
//   alert(calculate([15, 2, 3, 5, 6]))
  

// -------------------------------------------Задание 5-----------------------------------------------------

// Мой вариант==============================================================================

// const array = ['10k', '2.3k', '9.4k', '5k', '32',]

// const transformUpvotes = (arr) => {
// 	return arr.map((elem) => {
// 		let kIndex = elem.indexOf('k');
// 		if (kIndex !== -1) {
// 		return +elem.slice(0, kIndex) * 1000;
// 		} else {
// 			return +elem;
// 		}
// 	})
// }
// console.log(transformUpvotes(array));

// Вариант gpt=====================================================================================

// function transformUpvotes(arr) {
//     return arr.map(upvote => {
//         if (upvote.includes('k')) {
//             return parseFloat(upvote) * 1000;
//         } else {
//             return parseInt(upvote);
//         }
//     });
// }

// // Пример использования
// const upvotes = ['10k', '2.3k', '5k', '32', '28.4k'];
// const transformedUpvotes = transformUpvotes(upvotes);
// console.log(transformedUpvotes); // Output: [10000, 2300, 5000, 32, 28400]

// Из ответов==================================================================================

// const transformUpvote = strVal => {
// 	const hasK = strVal.toLowerCase().includes('k');
//   if (hasK) {
//   	const numPart = strVal.slice(0, -1);
//     return numPart * 1000;
//   }
//   return Number(strVal);
// }

// const transformUpvotes = arr => arr.map(transformUpvote);

// alert( transformUpvotes(['10k', '2.3k', '5k', '32', '28.4k']) )
