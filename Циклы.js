'use strict'

// -----------------------------------------ЦИКЛЫ-----------------------------------------

// -----------------------------------------Задание 1-----------------------------------------

// Мой вариант

// for (let i = 0; i <= 10; i++) {
// 	if (i <= 5 && i % 2 !== 0) {
// 		console.log(i);
// 	} else if (i >= 6 && i % 2 === 0) {
// 		console.log(i);
// 	}
// }

// Вариант с ответа (более производительный потому что 6 итераций, вместо 11)

// for (let i = 1; i <= 11; i += 2) {
// 	if (i > 5) {
// 		console.log(i - 1);
// 	} else {
// 		console.log(i);
// 	}
// }

// --------------------------------------Задание 2---------------------------------------------------

// let totalSum = 0;
// let userValue;

// for (let i = 0; ; i++) {
//     userValue = +prompt('Введите число');

//     // Проверка на недопустимое значение
//     if (isNaN(userValue)) {
//         alert('Пожалуйста, введите корректное число');
//         continue;
//     }

//     if (userValue !== 0) {
//         totalSum += userValue;
//     } else {
//         alert('Общая сумма: ' + totalSum);
//         break; // Завершение цикла
//     }
// }

// let sum = 0;
// let a;
// do {
//   a = prompt('Введите число для суммирования. 0 - остановить');
//   sum += +a;
// } while (a != 0);
// alert(sum);

// let totalSum = 0;
// let userValue;

// do {
// 	userValue = +prompt('Введите число');
// 	if (!isNaN(userValue)) {
// 		totalSum += userValue;
// 	} else {
// 		alert('Введите число!!');
// 	}
// } while (userValue !== 0)
// alert(totalSum);

// ----------------------------------------------Задание 3------------------------------------------------

// Мой варик

// let startValue = 10;
// let userValue;

// for (let i = 0; ; i++) {
// 	userValue = +prompt(`Введите ${startValue}`);
// 	if (userValue !== startValue) {
// 		userValue = +prompt(`Введите ${startValue}`);
// 	} else if (userValue < 100) {
// 		startValue *= 2;
// 		continue;
// 	} else if (userValue > 100) {
// 		alert('Спасибо!');
// 		break;
// 	}
// }

// Варик с ответов

// let neededNumber = 10;
// let currentNumber;

// do {
// 	while (currentNumber != neededNumber) {
// 		currentNumber = +prompt('Введите число ' + neededNumber);
// 	}
// 	neededNumber *= 2;
// } while (currentNumber < 100);
// alert('Спасибо!');