import './style.css'
//console.log('Привет!')
//console.log(100) 


//Dz2.

//1. Запрсить у пользователя его возраст и определить, кем он яляется:
//ребенком(0-2), подростком(12-18), взрослым(18-60), пенсионеом(60-...)

//let age = 120
//console.log('Введите сколько Вам лет ', '')
//if (age < 11){
//console.log('ты ребенок')
//} else if(age < 18){
//console.log('ты подросток')
//} else if(age < 59){
//console.log('вы взрослый')
//} else if(age < 100){
//console.log('вы пенсионер')
//} else if(age < 200){
//console.log('вы долгожитель')
//}

//2. Запросить у пользователя число от 0 до 9 и вывести ему спецсимвол, который расположен
//на той клавише.

//let num = 5
//console.log('Введите число от 0 до 9 ')
//if (num == 0) {
//   console.log(')')
// } else if (num == 1) {
//   console.log('!')
// } else if (num == 2) {
//   console.log('@')
// } else if (num == 3) {
//   console.log('#')
// } else if (num == 4) {
//   console.log('$')
// } else if (num == 5) {
//   console.log('%')
// } else if (num == 6) {
//   console.log('^')
// } else if (num == 7) {
//   console.log('&')
// } else if (num == 8) {
//   console.log('*')
// } else if (num == 9) {
//   console.log('(')
// }

//3. Запросить у пользователя трехзначное число и проверить, есть ли в нем одинаковые цифры.

// let num1 = 3
// let num2 = 1
// let num3 = 2
// console.log('Введите трехзначное число', num1, num2, num3)
// if (num1 == num2 || num1 == num3 || num2 == num3){
//   console.log('В числе есть одинаковые цифры')
// } else {
//   console.log('В числе нет одинаковых цифр')
// }

//4. Запросить у пользователя год и проверить, високосный он или нет.Високосный год  либо кратен 400
//либо кратен 4 и при этом не кратен 100.
// let year = 2024
// console.log('Введите год', year)
// if (year%400 == 0 || year%4 == 0 || year%100 == 0) {
//   console.log('Год високосный')
// } else console.log('Год не високосный')

//5. Запросить у пользователя пятиразрядное число и определить, является ли оно палиндромом.

// let num1 = 2
// let num2 = 3
// let num3 = 5
// let num4 = 3
// let num5 = 6
// console.log('Введите пятизначное число', num1, num2, num3, num4, num5)
// if (num1 == num5 && num2 == num4){
//   console.log('Число является палиндромом')
// } else console.log('Число не является палиндромом')

//6. Написать конвертор валют.Пользователь вводит количество USD, выбирает, в какую валюту он хочет перевести
//EUR,  UAN, AZN, получает ответ.

// const USD = 15
// const EUR = 0.92
// const UAN = 7.20
// const AZN = 0.59
// console.log('Введите количество USD и валюту, в которую вы хотите сделать перевод', EUR, UAN, AZN)
// if (EUR){
//   console.log(USD*EUR, USD*UAN, USD*AZN)
// } 


//7. Запросить у пользователя сумму покупки, вывести сумму к оплате со скидкой: от 200-300 скидка 3%,
//300-500 скидка 5%, 500 и выше 7%.

// let cost = 800
// console.log('Введите стоимость покупки', cost)
// if(cost >= 200 && cost <= 300){
//   console.log('Ваша скидка составляет 3% от суммы покупки', (cost/100)*3)
// } else if(cost >= 301 && cost <= 500){
//   console.log('Ваша скидка составляет 5% от суммы покупки', (cost/100)*5)
// } else if(cost >=501){
//   console.log('Ваша скидка составляет 7% от суммы покупки', (cost/100)*7)
// } else console.log('Скидка на покупку не распространяется')

//8. Запросить у пользователя длину окружности и периметр квадрата. Определить, может ли такая окружность поместиться
// //в указанный квадрат.

// let L = 12
// let P = 40
// console.log('Введите длину окружнсти и периметр квадрата', L, P)
// if(P/4 >= L){
//   console.log('Окружность поместится в квадрат')
// } else console.log('Окружность не поместится в квадрат')

//9. Задать подьзоателю 3 вопроса, в каждом по 3 варианта ответа. За каждый правилный ответ начисляется 2 балла.
//После вопросов выводиться набранное количество баллов.

let answer1, answer2, answer3
answer1 = 1
answer2 = 2
answer3 = 1
let rightMark =2
let yes = 1
let no = 2
let dontKnow = 3
let result = 0
console.log('Земля круглая? Выберите вариант ответа.', 'yes = ' + yes, 'no = ' + no, 'dontKnow = ' + dontKnow)
if(answer1 == yes){
  console.log(rightMark)
  result += rightMark
}
console.log('Россия самая большая страна? Выберите вариант ответа.', 'yes', 'no', 'dontKnow')
if(answer2 == yes){
  console.log(rightMark)
  result += rightMark
}
console.log('В сутках 24 часа? Выберите вариант ответа.', 'yes', 'no', 'dontKnow')
if(answer3 == yes){
  console.log(rightMark)
  result += rightMark
}
console.log('Ваш результат: ' + result)




//10. Запросить дату (день, месяц, год) и вывести следующую за ней дату.Учтите возмжность перехода на следующий месяц,
//год, а также високосный год.



//Pz2.
