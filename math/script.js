// =========================================Задание 1==========================================================

// Запишите в переменные x и y координаты двух произвольных точек: x1, y1 — первая точка, x2, y2 — вторая точка. Вычислите площадь прямоугольника, противоположные углы которого представлены указанными точками. Выведите результат с помощью console.log.

// const x1 = -5;
// const x2 = 10;

// const y1 = 8;
// const y2 = 5;

// let square = Math.abs(x1 - x2) * Math.abs(y1 - y2);
// console.log(square);

// ========================================Задание 2===========================================================

// Вычислите дробные части чисел a и b с точностью n. Выведите получившиеся числа с помощью console.log.

// let a = 13.890123;
// let b = 2.891564;

// let n = 3;

// let result = parseInt(b % 1 * (10 ** n));

// console.log(result);

// =========================================Задание 3========================================================

// Написать генератор нечётных случайных чисел в диапазоне между n и m включительно. Учесть, что n и m могут быть отрицательными, а также может быть n > m или n < m. Вывести результат с помощью console.log.

// let n = -3;
// let m = -11;

// let min = Math.min(n, m);
// let max = Math.max(n, m);

// const result = () => {
// 	let random;
// 	do {
// 		random = Math.round(Math.random() * (max - min) + min);
// 	} while (random % 2 === 0);
// 	return random;
// }

// console.log(result());