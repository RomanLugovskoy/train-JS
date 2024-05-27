'use strict'
// -----------------------------------Операторы, значения, переменные--------------------------------------------


// --------------------------------------------Задание 1---------------------------------------------------------

// const userName = prompt('Напишите имя');
// const userLastName = prompt('Напишите фамилию');
// alert(`Привет, ${userName} ${userLastName}!`);

// --------------------------------------------Задание 2-------------------------------------------------------------

// const celValue = +prompt('Введите количество градусов по Цельсию');
// const fahrValue = (celValue * 9 / 5) + 32;
// alert(`${celValue} градусов по Цельсию равны ${fahrValue} градусам по Фаренгейту`)

// --------------------------------------------Задание 3------------------------------------------------------------

// const x = prompt('Введите значение X');

// const y = (((4 * x**2) + 18 - (23 * x)) / ((5 / 9 * x) + (18 * (x**3 / 33) * x)) + (x * 15 / 12));

// alert(`При X равном ${x}, Y равен ${y}`);

// ----------------------------------------------Задание 4----------------------------------------------------------

// let a = 12;
// let b = 'number';
// let c = false;
// let d = null;
// let e = undefined;
// let f = 123.34;
// let g = '1' + 1;
// let h = 15 / 0;
// let i = -'5';
// let j = 5 == '5'

// let at = typeof a === 'number';
// let bt = typeof b === 'string';
// let ct = typeof c === 'boolean';
// let dt = typeof d === 'object';
// let et = typeof e === 'undefined';
// let ft = typeof f === 'number';
// let gt = typeof g === 'string';
// let ht = typeof h === 'number';
// let it = typeof i === 'number';
// let jt = typeof j === 'boolean';

// alert(at && bt && ct && dt && et && ft && gt && ht && it && jt);

// console.log(typeof a);
// console.log(typeof b);
// console.log(typeof c);
// console.log(typeof d);
// console.log(typeof e);
// console.log(typeof f);
// console.log(typeof g);
// console.log(typeof h);
// console.log(typeof i);
// console.log(typeof j);

// ------------------------------------------------------Задание 5---------------------------------------------------------

// const NDS = 0.20
// const NDFL = 0.13
// const EXCISE = 0.1
// const RENT = 40000
// const FOOD = 15000
// const OTHER = 15000
// const MY_SALARY = 120000

// const ndflTax = MY_SALARY * NDFL;
// const mySalaryNet = MY_SALARY - ndflTax;
// const otherTaxes = mySalaryNet * (NDS + EXCISE);
// let totalAvailable = mySalaryNet - otherTaxes;
// totalAvailable -= FOOD + OTHER + RENT
// alert('Зарплата ' + MY_SALARY + ' рублей')
// alert('Уплачено налогов на сумму ' + (ndflTax + otherTaxes) + ' рублей')
// alert('Осталось ' + totalAvailable + ' рублей')
