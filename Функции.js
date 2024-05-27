'use strict'

// -----------------------------------------ФУНКЦИИ-----------------------------------------

// -----------------------------------------Задание 1-----------------------------------------

// ------1 варик------------

// function countDown(n) {
// 	for (let i = n; i > 0; i--) {
// 		console.log(i);
// 	}
// }
// countDown(9);

// ---------2 варик с рекурсивным таймаутом-------
// function countDown (n) {
// 	if (n >= 1) {
// 	console.log(n);
// 	setTimeout(countDown, 1000, --n);
// 	} else {
// 		console.log('SIUUUUUUUUUUUUUUUU');
// 	}
// }
// setTimeout(countDown, 1000, 3);

// --------------------------------------Задание 2-----------------------------------------

// function getPercents (percent, number) {
// 	return number / 100 * percent;
// }
// console.log(getPercents(30, 200));

// --------------------------------------Задание 3-----------------------------------------

// function repeatWord (word, count) {
// 	let result = '';
// 	for (let i = 1; i <= count; i++) {
// 		if (i < count) {
// 		result += word + ', ';
// 		} else {
// 			result += word + '.';
// 		}
// 	}
// 	console.log(result);
// }
// repeatWord('стив', 16);

// --------------------------------------Задание 4-----------------------------------------

// function createAdder(a) {
// 	return function addA(b) {
//   	return a + b;
//   }
// }

// const add5 = createAdder(5);
// alert( add5(5) ) // Должно получиться 10
// alert( add5(12) ) // Должно получиться 17

// -------------------------------------Задание 5------------------------------------------

// function getMonth (n) {
// 	let monthNum;
// 	switch(n) {
// 		case 1:
// 			monthNum = 'Январь';
// 			break;
// 		case 2:
// 			monthNum = 'Февраль';
// 			break;
// 		case 3:
// 			monthNum = 'Март';
// 			break;
// 		case 4:
// 			monthNum = 'Апрель';
// 			break;
// 		case 5:
// 			monthNum = 'Май';
// 			break;
// 		case 6:
// 			monthNum = 'Июнь';
// 			break;
// 		case 7:
// 			monthNum = 'Июль';
// 			break;
// 		case 8:
// 			monthNum = 'Август';
// 			break;
// 		case 9:
// 			monthNum = 'Сентябрь';
// 			break;
// 		case 10:
// 			monthNum = 'Октябрь';
// 			break;
// 		case 11:
// 			monthNum = 'Ноябрь';
// 			break;
// 		case 12:
// 			monthNum = 'Декабрь';
// 			break;
// 		default:
// 			monthNum = 'Такого месяца нет'
// 			break;
// 	}
// 	alert(monthNum);
// }
// const month = +prompt('Введите номер месяца');
// getMonth(month);