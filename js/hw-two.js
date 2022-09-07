'use strict';

/* 1. Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Если объект salaries пуст, то результат должен быть 0.*/

let salaries = {
  John: 1000,
  Ann: 1600,
  Pete: 800,
}

function salaries_one(salaries) {
  let sum = 0;
  for(let i of Object.values(salaries)) {
    sum += i;
  }
  return sum;
}
alert(salaries_one(salaries));


/*Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2 */

// до вызова функции
// let menu = {
//   width: 500,
//   height: 100,
//   title: "My menu"
// };
let menu = {
    width: 500,
    height: 100,
    title: "My menu"
};
function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] === 'number') {
      obj[key] *= 2;
    }
  }
  return obj;
}
console.log(multiplyNumeric(menu));


// multiplyNumeric(menu);
// после вызова функции
// menu = {
//   width: 1000,
//   height: 200,
//   title: "My menu"
// };