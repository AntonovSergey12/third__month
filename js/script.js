'use strict';

/* 1. Ниже приведена функция checkAge. Перепишите функцию, чтобы она делала то же самое, но без if, в одну строку*/

function checkAge(age) {
return  age > 18 ? true : confirm('Родители разрешили?');
  /*  if (age > 18) {
    return true;
  } else {
    return confirm('Родители разрешили?');
  }*/
}
console.log(checkAge(20));

/* 2. Напишите функцию max(a,b), которая возвращает большее из чисел a и b. 
Примеры вызова: 
max(2, 5) //вернет 5
max(3, -1) //вернет 3
max(1, 1)  //вернет 1
*/
function max_number(num1,num2) {
//return Math.max(num1,num2);
return num1 > num2 ? num1 : num2;
}
console.log(max_number(3,5));

/* 3. Напишите функцию pow(x,n), которая возвращает x в степени n. Иначе говоря, умножает x на себя n раз и возвращает результат.
Примеры вызова: 
pow(3, 2) //вернет 9
pow(3, 3) //вернет 27
*/
function pow(num1,num2) {
 return Math.pow(num1,num2);

}
console.log(pow(27,3));
/* 4*. Напишите функцию factorial, которая вычисляет факториал числа
Пример вызова:
factorial(5) // 5!= 5 * 4 * 3 * 2 * 1 = 120 // вернет 120
*/
function factorial(num1) {
    return (num1 != 1) ? num1 * factorial(num1-1) : 1;
}
console.log(factorial(8));