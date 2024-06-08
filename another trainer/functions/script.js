// =====================================Функции===========================================

// -------------------------------------Задание 1-----------------------------------------

// Напишите функцию, которая создаёт массив email-адресов, не попавших в чёрный список. В качестве аргументов функция должна принимать: массив строк с исходными email адресами, массив строк с email адресами в чёрном списке.
// В конце файла с кодом домашнего задания напишите конструкцию export default {название функции}, чтобы была возможность автоматической проверки получившейся функции.

// длинный вариант

// function getVerifiedEmails (allEmails, blacklistedEmails) {
// let verifiedEmails = [];
// 	for (let email of allEmails) {
// 		if (blacklistedEmails.includes(email)) {
// 			continue;
// 		} else {
// 			verifiedEmails.push(email);
// 		}
// 	}
// 	return verifiedEmails;
// }

// console.log(getVerifiedEmails([
//     "john.doe@example.com",
//     "jane.smith@example.com",
//     "user1@domain.com",
//     "spam.account@fake.com",
//     "normal.user@real.com",
//     "blocked.user@blacklist.com",
//     "test.email@sample.com",
//     "another.spam@fake.com",
//     "regular.user@domain.com",
//     "banned.user@blacklist.com"
// ],
// [
//     "spam.account@fake.com",
//     "blocked.user@blacklist.com",
//     "another.spam@fake.com",
//     "banned.user@blacklist.com"
// ]
// ));

// с фильтром

// function filterEmails(allEmails, blacklistedEmails) {
//     return allEmails.filter(email => !blacklistedEmails.includes(email));
// }

// let allEmails = [
//     "john.doe@example.com",
//     "jane.smith@example.com",
//     "user1@domain.com",
//     "spam.account@fake.com",
//     "normal.user@real.com",
//     "blocked.user@blacklist.com",
//     "test.email@sample.com",
//     "another.spam@fake.com",
//     "regular.user@domain.com",
//     "banned.user@blacklist.com"
// ];

// let blacklistedEmails = [
//     "spam.account@fake.com",
//     "blocked.user@blacklist.com",
//     "another.spam@fake.com",
//     "banned.user@blacklist.com"
// ];

// let filteredEmails = filterEmails(allEmails, blacklistedEmails);
// console.log(filteredEmails);

// -------------------------------------------Задание 2--------------------------------------------------

// Напишите функцию, которая вычисляет и возвращает стоимость корзины товаров после применения всех скидок. В качестве аргументов функция принимает 3 параметра:
// •	Общая сумма корзины
// •	Количество товаров в корзине
// •	Промокод (по умолчанию null)
// Правила и порядок (порядок важен!) начисления скидок:
// 1.	Если промокод равен 'ДАРИМ300', то из суммы вычитается 300 рублей. При этом если сумма меньше 300 рублей, то итоговая стоимость будет 0.
// 2.	При количестве товаров в корзине ≥10 применяется скидка 5% ко всей сумме
// 3.	При сумме, превышающей 50 000, применяется скидка 20% к сумме превышения (то есть к разнице суммы корзины и 50 000)
// 4.	Если промокод равен 'СКИДКА15', то ко всей сумме применяется скидка 15%, но только если сумма ≥20 000
// Каждая следующая скидка должна проверяться и применяться к сумме после применения предыдущих скидок.

// function getFinalPrice (totalPrice, numberOfItems, promocode = null) {
// 	let finalPrice = totalPrice;

// 	if (promocode === 'ДАРИМ300') {
// 		finalPrice = totalPrice - 300;
// 		if (totalPrice < 300) {
// 			finalPrice = 0;
// 			return finalPrice;
// 		}
// 	}
// 	if (numberOfItems >= 10) {
// 		finalPrice -= (finalPrice * 0.05);
// 		console.log(finalPrice);
// 	}
// 	if (totalPrice > 50000) {
// 		finalPrice -= (finalPrice - 50000) * 0.2;
// 		console.log(finalPrice);
// 	}
// 	if (promocode === 'СКИДКА15' && finalPrice >= 20000) {
// 		finalPrice -= (finalPrice * 0.15);
// 		console.log(finalPrice);
// 	}
// 	return finalPrice;
// }

// console.log(getFinalPrice(45000, 10, 'ДАРИМ300'));