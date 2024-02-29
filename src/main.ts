import './style.css'
//console.log('Привет!')
//console.log(100) 


//Dz2.

//1. Запрсить у пользователя его возраст и определить, кем он яляется:
//ребенком(0-2), подростком(12-18), взрослым(18-60), пенсионеом(60-...)

// let age = 122
// console.log('Введите сколько Вам лет ', '')
// if (age < 11) {
//   console.log('ты ребенок')
// } else if (age < 18) {
//   console.log('ты подросток')
// } else if (age < 59) {
//   console.log('вы взрослый')
// } else if (age < 100) {
//   console.log('вы пенсионер')
// } else if (age < 200) {
//   console.log('вы долгожитель')
// }

//2. Запросить у пользователя число от 0 до 9 и вывести ему спецсимвол, который расположен
//на той клавише.

// let num = 5
// console.log('Введите число от 0 до 9 ')
// if (num == 0) {
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
// if (num1 == num2 || num1 == num3 || num2 == num3) {
//   console.log('В числе есть одинаковые цифры')
// } else {
//   console.log('В числе нет одинаковых цифр')
// }

//4. Запросить у пользователя год и проверить, високосный он или нет.Високосный год  либо кратен 400
//либо кратен 4 и при этом не кратен 100.
// let year = 2024
// console.log('Введите год', year)
// if (year % 400 == 0 || year % 4 == 0 || year % 100 == 0) {
//   console.log('Год високосный')
// } else console.log('Год не високосный')

//5. Запросить у пользователя пятиразрядное число и определить, является ли оно палиндромом.

// let num1 = 2
// let num2 = 3
// let num3 = 5
// let num4 = 3
// let num5 = 6
// console.log('Введите пятизначное число', num1, num2, num3, num4, num5)
// if (num1 == num5 && num2 == num4) {
//   console.log('Число является палиндромом')
// } else console.log('Число не является палиндромом')

//6. Написать конвертор валют.Пользователь вводит количество USD, выбирает, в какую валюту он хочет перевести
//EUR,  UAN, AZN, получает ответ.

// const USD = 20
// const EUR = 0.92
// const UAN = 7.20
// const AZN = 0.59
// console.log('Введите количество USD и валюту, в которую вы хотите сделать перевод', EUR, UAN, AZN)
// if (EUR) {
//   console.log(USD * EUR, USD * UAN, USD * AZN)
// }


//7. Запросить у пользователя сумму покупки, вывести сумму к оплате со скидкой: от 200-300 скидка 3%,
//300-500 скидка 5%, 500 и выше 7%.

// let cost = 800
// console.log('Введите стоимость покупки', cost)
// if (cost >= 200 && cost <= 300) {
//   console.log('Ваша скидка составляет 3% от суммы покупки', (cost / 100) * 3)
// } else if (cost >= 301 && cost <= 500) {
//   console.log('Ваша скидка составляет 5% от суммы покупки', (cost / 100) * 5)
// } else if (cost >= 501) {
//   console.log('Ваша скидка составляет 7% от суммы покупки', (cost / 100) * 7)
// } else console.log('Скидка на покупку не распространяется')

//8. Запросить у пользователя длину окружности и периметр квадрата. Определить, может ли такая окружность поместиться
// //в указанный квадрат.

// let L = 12
// let P = 40
// console.log('Введите длину окружнсти и периметр квадрата', L, P)
// if (P / 4 >= L) {
//   console.log('Окружность поместится в квадрат')
// } else console.log('Окружность не поместится в квадрат')

//9. Задать подьзоателю 3 вопроса, в каждом по 3 варианта ответа. За каждый правилный ответ начисляется 2 балла.
//После вопросов выводиться набранное количество баллов.

// let answer1, answer2, answer3
// answer1 = 1
// answer2 = 2
// answer3 = 3
// let rightMark = 2
// let yes = 1
// let no = 2
// let dontKnow = 3
// let result = 0
// console.log('Земля круглая? Выберите вариант ответа.', 'yes = ' + yes, 'no = ' + no, 'dontKnow = ' + dontKnow)
// if (answer1 == yes) {
//   console.log(rightMark)
//   result += rightMark
// }
// console.log('Россия самая большая страна? Выберите вариант ответа.', 'yes', 'no', 'dontKnow')
// if (answer2 == yes) {
//   console.log(rightMark)
//   result += rightMark
// }
// console.log('В сутках 24 часа? Выберите вариант ответа.', 'yes', 'no', 'dontKnow')
// if (answer3 == yes) {
//   console.log(rightMark)
//   result += rightMark
// }
// console.log('Ваш результат: ' + result)

//10. Запросить дату (день, месяц, год) и вывести следующую за ней дату. Учтите возмжность перехода на следующий месяц,
//год, а также високосный год.

// let DD = 30
// let MM = 10
// let YY = 2023
// console.log('Введите дату в формате', DD, MM, YY)
// if (MM == 2 && YY % 100 == 0 || YY % 400 == 0 || YY % 4 == 0) {
//   if (DD < 29) {
//     console.log((DD + 1) + '.' + MM + '.' + YY)
//   } else {
//     console.log('1.' + (MM + 1) + '.' + YY)
//   }
// } else {
//   if (MM == 4 || MM == 6 || MM == 9 || MM == 11) {
//     if (DD < 30) {
//       console.log((DD + 1) + '.' + MM + '.' + YY)
//     } else {
//       console.log('1.' + (MM + 1) + '.' + YY)
//     }
//   } else if (MM == 2) {
//     if (DD < 28) {
//       console.log((DD + 1) + '.' + MM + '.' + YY)
//     } else {
//       console.log('1.' + (MM + 1) + '.' + YY)
//     }
//   } else {
//     if (MM == 12 && DD == 31) {
//       console.log('1.' + '1.' + (YY + 1))
//     } else if (DD < 31) {
//       console.log((DD + 1) + '.' + MM + '.' + YY)
//     } else {
//       console.log('1.' + (MM + 1) + '.' + YY)
//     }
//   }
// }


//Pz2.

//1. Запросить число и определить оно положительное, отрицательное или ноль.

// let num = 0
// console.log('Введите любое число', num)
// if (num == 0) {
//   console.log('Вы ввели ноль')
// } else if (num > 0) {
//   console.log('Вы ввели положительное число')
// } else {
//   console.log('Вы ввели отрицательное число')
// }

//2. Запросить у пользователя возраст и проверить корректность введенных данных (0-120 лет).

// let age = 14
// console.log('Введите свой возраст', age)
// if (age > 0 && age < 120) {
//   console.log('Данные введены корректно')
// } else {
//   console.log('Данные введены не корректно. Повторите ввод данных.')
// }

//3. Запросить число и вывести его модуль (растояние от нуля до данного числа)(|7| = 7, |-7| = 7).

// let num = 10
// console.log('введите любое число', num)
// if (num < 0) {
//   console.log('Модуль отрицательного числа', num * (-1))
// } else {
//   console.log('Модуль положительного числа')
// }


//4. (часы, минуты, секунды) и проверить корректность ввденных данных.

// let hour = 25
// let min = 12
// let sec = 10

// if (hour <= 24 && min <= 60 && sec <= 60){
//   console.log ('Данные корректны')
// } else console.log ('Повторите ввод данных.')


//5. Запросить координаты точки (x, y) и определить номер четверти, в которую попала эта точка.
//Необходимо учесть случаи попадания точки на ось X, Y  или на начало координат.

// let x = 6
// let y = 10
// console.log('Введите координаты точек X и Y', x, y)
// if (x > 0.1 && y > 0.1) {
//   console.log('Точки раположены в первой четверти на оси координат')
// } else if (x < 0.1 && y > 0.1) {
//   console.log('Точки раположены во второй четверти на оси координат')
// } else if (x < 0.1 && y < 0.1) {
//   console.log('Точки раположены в третей четверти на оси координат')
// } else if (x > 0.1 && y < 0.1) {
//   console.log('Точки раположены в четвертой четверти на оси координат')
// } else (x == 0 || y == 0)
// console.log('Точка в начале оси координат')



//Pz_class
//1. Напишите условие if для проверки, что переменная age находится в диапазоне между 14 и 90 включительно.

// let age = 55
// console.log('Введите возраст', age)
// if( age > 14 && age < 90 ){
//   console.log('Диапазон ввода возраста корректен')
// } else {
//   console.log('Диапазон ввода возраста некорректен. Повторите ввод.')
// }


// let age = 60
// console.log('Введите возраст', age)
// if (age < 14 || age > 90){
//   console.log('Вам меньше 14 лет или больше 90')
// } else {
//   console.log('Ваш возраст в диапазоне от 14 до 90 лет')
// }

//2. Проверка логина.

// let user = prompt('Кто там?','')
// if (user === 'admin') {
//   let pass = prompt('Введите пароль', '')
//   if (pass === 'Я главный') {
//     console.log('Здравствуйте!')
//   }
//   else if (pass === '' || pass == null) {
//     console.log('Отменено')
//   }
//   else {
//     console.log('Неверный пароль')
//   }
// }
// else if(user === '' || user === null) {
//   console.log('Отмена')
// }
// else console.log('Я вас не знаю')


//6. SWITCH
//1. Заппосить у пользователя номер месяца и вывести на экран его название.

// let month = 13
// switch (month) {
//   case 1:
//     console.log('январь')
//     break
//   case 2:
//     console.log('февраль')
//     break
//   case 3:
//     console.log('март')
//     break
//   case 4:
//     console.log('апрель')
//     break
//   case 5:
//     console.log('май')
//     break
//   case 6:
//     console.log('июнь')
//     break
//   case 7:
//     console.log('июль')
//     break
//   case 8:
//     console.log('август')
//     break
//   case 9:
//     console.log('сентябрь')
//     break
//   case 10:
//     console.log('октябрь')
//     break
//   case 11:
//     console.log('ноябрь')
//     break
//   case 12:
//     console.log('декабрь')
//     break
//     default:
//       console.log('Повторите ввод.')
// }

//2. Реализовать калькулятор. Пользователь вводит 2 числа и знак(+ - * /). Вывести результат на экран.

// let num1 = 10
// let num2 = 10
// let operator = '*'
// console.log('Введите оператор (+ - * /) и два числа', num1, num2)
// switch (operator) {
//   case '+':
//     console.log(num1 + num2)
//     break
//   case '-':
//     console.log(num1 - num2)
//     break
//   case '*':
//     console.log(num1 * num2)
//     break
//   case '/':
//     console.log(num1 / num2)
//     break
// }


//Тернарный оператор.
//1. Запросить у пользователя два числа и вывести большее из них.

// let num1 = 1
// let num2 = 6
// console.log(num1 > num2 ? 'Первое число больше' : 'Первое число меньше')


//2. Запросить у пользователя одно число и проверить, оно кратно 5 или нет.

// let num = 10
// console.log(num%5 == 0 ?'Число кратно пяти' :'Число не кратно пяти')

//3. Запросит у пользователя название планеты. Если пользователь ввел "Земля" или "земля",
//то вывести "Привет, землянин!", в остальных случаях вывести "Привет, инопланетянин!"

// let planet = 'Марс'
// console.log(planet == 'Земля' || planet == 'земля' ? 'Привет, землянин!' : 'Привет, инопланетянин!')


//Dz3.
//1. Посчитать сумму всех чисел в заданном паользователем диапазоне.

// let start = 0
// let end = 0


//Pz3.
//1. Вывести # столько раз, сколько указал пользователь.

// let i = 0
// let userInput = 5
// let text = ''
// while(i < userInput) {
//   text +='#'
//   i++
// }
// console.log(text)

//2. Пользователь ввел число, а на экран вывелись все числа от введеного до нуля.

let userInput = 10
let text = ''
while (userInput) {
  text = text + userInput + '_'
  userInput--
}
console.log(text)


// //3.
let num = 10
let count = 3
let result = 1
while (count) {
  result *= num
  count--
}
console.log(result)

//4.
let num1 = 410
let num2 = 820
text = ''
let min = num1 < num2 ? num1 : num2
while (min) {
  if (num1 % min == 0 && num2 % min == 0) {
    text += min + ''
  }
  min--
}
console.log(text)


//5. Посчитать факториал введенного пользователем числа.
let i = 1
num = 5
result = 1
while (i <= num) {
  result *= i
  i++
}
console.log(result)

