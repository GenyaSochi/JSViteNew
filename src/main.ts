import './style.css'
//console.log('Привет!')
//console.log(100) 


//Dz2.

//1. Запрсить у пользователя его возраст и определить, кем он яляется:
//ребенком(0-2), подростком(12-18), взрослым(18-60), пенсионеом(60-...)

let age = 122
console.log('Введите сколько Вам лет ', '')
if (age < 11) {
  console.log('ты ребенок')
} else if (age < 18) {
  console.log('ты подросток')
} else if (age < 59) {
  console.log('вы взрослый')
} else if (age < 100) {
  console.log('вы пенсионер')
} else if (age < 200) {
  console.log('вы долгожитель')
}

//2. Запросить у пользователя число от 0 до 9 и вывести ему спецсимвол, который расположен
//на той клавише.

let num = 5
console.log('Введите число от 0 до 9 ')
if (num == 0) {
  console.log(')')
} else if (num == 1) {
  console.log('!')
} else if (num == 2) {
  console.log('@')
} else if (num == 3) {
  console.log('#')
} else if (num == 4) {
  console.log('$')
} else if (num == 5) {
  console.log('%')
} else if (num == 6) {
  console.log('^')
} else if (num == 7) {
  console.log('&')
} else if (num == 8) {
  console.log('*')
} else if (num == 9) {
  console.log('(')
}

//3. Запросить у пользователя трехзначное число и проверить, есть ли в нем одинаковые цифры.

let num1 = 3
let num2 = 1
let num3 = 2
console.log('Введите трехзначное число', num1, num2, num3)
if (num1 == num2 || num1 == num3 || num2 == num3) {
  console.log('В числе есть одинаковые цифры')
} else {
  console.log('В числе нет одинаковых цифр')
}

//4. Запросить у пользователя год и проверить, високосный он или нет.Високосный год  либо кратен 400
//либо кратен 4 и при этом не кратен 100.

let year = 2024
console.log('Введите год', year)
if (year % 400 == 0 || year % 4 == 0 || year % 100 == 0) {
  console.log('Год високосный')
} else console.log('Год не високосный')

//5. Запросить у пользователя пятиразрядное число и определить, является ли оно палиндромом.

num1 = 2
num2 = 3
num3 = 5
let num4 = 3
let num5 = 6
console.log('Введите пятизначное число', num1, num2, num3, num4, num5)
if (num1 == num5 && num2 == num4) {
  console.log('Число является палиндромом')
} else console.log('Число не является палиндромом')

//6. Написать конвертор валют.Пользователь вводит количество USD, выбирает, в какую валюту он хочет перевести
//EUR,  UAN, AZN, получает ответ.

const USD = 20
const EUR = 0.92
const UAN = 7.20
const AZN = 0.59
console.log('Введите количество USD и валюту, в которую вы хотите сделать перевод', EUR, UAN, AZN)
if (EUR) {
  console.log(USD * EUR, USD * UAN, USD * AZN)
}


//7. Запросить у пользователя сумму покупки, вывести сумму к оплате со скидкой: от 200-300 скидка 3%,
//300-500 скидка 5%, 500 и выше 7%.

let cost = 800
console.log('Введите стоимость покупки', cost)
if (cost >= 200 && cost <= 300) {
  console.log('Ваша скидка составляет 3% от суммы покупки', (cost / 100) * 3)
} else if (cost >= 301 && cost <= 500) {
  console.log('Ваша скидка составляет 5% от суммы покупки', (cost / 100) * 5)
} else if (cost >= 501) {
  console.log('Ваша скидка составляет 7% от суммы покупки', (cost / 100) * 7)
} else console.log('Скидка на покупку не распространяется')

//8. Запросить у пользователя длину окружности и периметр квадрата. Определить, может ли такая окружность поместиться
// //в указанный квадрат.

let L = 12
let P = 40
console.log('Введите длину окружнсти и периметр квадрата', L, P)
if (P / 4 >= L) {
  console.log('Окружность поместится в квадрат')
} else console.log('Окружность не поместится в квадрат')

//9. Задать подьзоателю 3 вопроса, в каждом по 3 варианта ответа. За каждый правилный ответ начисляется 2 балла.
//После вопросов выводиться набранное количество баллов.

let answer1, answer2, answer3
answer1 = 1
answer2 = 2
answer3 = 3
let rightMark = 2
let yes = 1
let no = 2
let dontKnow = 3
let result = 0
console.log('Земля круглая? Выберите вариант ответа.', 'yes = ' + yes, 'no = ' + no, 'dontKnow = ' + dontKnow)
if (answer1 == yes) {
  console.log(rightMark)
  result += rightMark
}
console.log('Россия самая большая страна? Выберите вариант ответа.', 'yes', 'no', 'dontKnow')
if (answer2 == yes) {
  console.log(rightMark)
  result += rightMark
}
console.log('В сутках 24 часа? Выберите вариант ответа.', 'yes', 'no', 'dontKnow')
if (answer3 == yes) {
  console.log(rightMark)
  result += rightMark
}
console.log('Ваш результат: ' + result)

//10. Запросить дату (день, месяц, год) и вывести следующую за ней дату. Учтите возмжность перехода на следующий месяц,
//год, а также високосный год.

let DD = 30
let MM = 10
let YY = 2023
console.log('Введите дату в формате', DD, MM, YY)
if (MM == 2 && YY % 100 == 0 || YY % 400 == 0 || YY % 4 == 0) {
  if (DD < 29) {
    console.log((DD + 1) + '.' + MM + '.' + YY)
  } else {
    console.log('1.' + (MM + 1) + '.' + YY)
  }
} else {
  if (MM == 4 || MM == 6 || MM == 9 || MM == 11) {
    if (DD < 30) {
      console.log((DD + 1) + '.' + MM + '.' + YY)
    } else {
      console.log('1.' + (MM + 1) + '.' + YY)
    }
  } else if (MM == 2) {
    if (DD < 28) {
      console.log((DD + 1) + '.' + MM + '.' + YY)
    } else {
      console.log('1.' + (MM + 1) + '.' + YY)
    }
  } else {
    if (MM == 12 && DD == 31) {
      console.log('1.' + '1.' + (YY + 1))
    } else if (DD < 31) {
      console.log((DD + 1) + '.' + MM + '.' + YY)
    } else {
      console.log('1.' + (MM + 1) + '.' + YY)
    }
  }
}


//Pz2.
//1. Запросить число и определить оно положительное, отрицательное или ноль.

num = 0
console.log('Введите любое число', num)
if (num == 0) {
  console.log('Вы ввели ноль')
} else if (num > 0) {
  console.log('Вы ввели положительное число')
} else {
  console.log('Вы ввели отрицательное число')
}

//2. Запросить у пользователя возраст и проверить корректность введенных данных (0-120 лет).

age = 14
console.log('Введите свой возраст', age)
if (age > 0 && age < 120) {
  console.log('Данные введены корректно')
} else {
  console.log('Данные введены не корректно. Повторите ввод данных.')
}

//3. Запросить число и вывести его модуль (растояние от нуля до данного числа)(|7| = 7, |-7| = 7).

num = 10
console.log('введите любое число', num)
if (num < 0) {
  console.log('Модуль отрицательного числа', num * (-1))
} else {
  console.log('Модуль положительного числа')
}


//4. (часы, минуты, секунды) и проверить корректность ввденных данных.

let hour = 25
let min = 12
let sec = 10

if (hour <= 24 && min <= 60 && sec <= 60) {
  console.log('Данные корректны')
} else console.log('Повторите ввод данных.')


//5. Запросить координаты точки (x, y) и определить номер четверти, в которую попала эта точка.
//Необходимо учесть случаи попадания точки на ось X, Y  или на начало координат.

let x = 6
let y = 10
console.log('Введите координаты точек X и Y', x, y)
if (x > 0.1 && y > 0.1) {
  console.log('Точки раположены в первой четверти на оси координат')
} else if (x < 0.1 && y > 0.1) {
  console.log('Точки раположены во второй четверти на оси координат')
} else if (x < 0.1 && y < 0.1) {
  console.log('Точки раположены в третей четверти на оси координат')
} else if (x > 0.1 && y < 0.1) {
  console.log('Точки раположены в четвертой четверти на оси координат')
} else (x == 0 || y == 0)
console.log('Точка в начале оси координат')



//Pz_class
//1. Напишите условие if для проверки, что переменная age находится в диапазоне между 14 и 90 включительно.

age = 55
console.log('Введите возраст', age)
if (age > 14 && age < 90) {
  console.log('Диапазон ввода возраста корректен')
} else {
  console.log('Диапазон ввода возраста некорректен. Повторите ввод.')
}


age = 60
console.log('Введите возраст', age)
if (age < 14 || age > 90) {
  console.log('Вам меньше 14 лет или больше 90')
} else {
  console.log('Ваш возраст в диапазоне от 14 до 90 лет')
}

//2. Проверка логина.

// let user = prompt('Кто там?', '')
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
// else if (user === '' || user === null) {
//   console.log('Отмена')
// }
// else console.log('Я вас не знаю')


//6. SWITCH
//1. Заппосить у пользователя номер месяца и вывести на экран его название.

let month = 13
switch (month) {
  case 1:
    console.log('январь')
    break
  case 2:
    console.log('февраль')
    break
  case 3:
    console.log('март')
    break
  case 4:
    console.log('апрель')
    break
  case 5:
    console.log('май')
    break
  case 6:
    console.log('июнь')
    break
  case 7:
    console.log('июль')
    break
  case 8:
    console.log('август')
    break
  case 9:
    console.log('сентябрь')
    break
  case 10:
    console.log('октябрь')
    break
  case 11:
    console.log('ноябрь')
    break
  case 12:
    console.log('декабрь')
    break
  default:
    console.log('Повторите ввод.')
}

//2. Реализовать калькулятор. Пользователь вводит 2 числа и знак(+ - * /). Вывести результат на экран.

num1 = 10
num2 = 10
let operator = '*'
console.log('Введите оператор (+ - * /) и два числа', num1, num2)
switch (operator) {
  case '+':
    console.log(num1 + num2)
    break
  case '-':
    console.log(num1 - num2)
    break
  case '*':
    console.log(num1 * num2)
    break
  case '/':
    console.log(num1 / num2)
    break
}


//Тернарный оператор.
//1. Запросить у пользователя два числа и вывести большее из них.

num1 = 1
num2 = 6
console.log(num1 > num2 ? 'Первое число больше' : 'Первое число меньше')


//2. Запросить у пользователя одно число и проверить, оно кратно 5 или нет.

num = 10
console.log(num % 5 == 0 ? 'Число кратно пяти' : 'Число не кратно пяти')

//3. Запросит у пользователя название планеты. Если пользователь ввел "Земля" или "земля",
//то вывести "Привет, землянин!", в остальных случаях вывести "Привет, инопланетянин!"

let planet = 'Марс'
console.log(planet == 'Земля' || planet == 'земля' ? 'Привет, землянин!' : 'Привет, инопланетянин!')


//Pz3.
//1. Вывести # столько раз, сколько указал пользователь.

let i = 0
let userInput = 6
let text = ''
while (i < userInput) {
  text += '#'
  i++
}
console.log(text)

//2. Пользователь ввел число, а на экран вывелись все числа от введеного до нуля.

userInput = 10
text = ''
while (userInput) {
  text = text + userInput + '_'
  userInput--
}
console.log(text)


//3. Запросить число и степень. Возвести число в указанную степень и вывести результат.
num = 10
let count = 2
result = 1
while (count) {
  result *= num
  count--
}
console.log(result)

//4. Запросить два числа и найти все общие делители.
num1 = 410
num2 = 820
text = ''
min = num1 < num2 ? num1 : num2
while (min) {
  if (num1 % min == 0 && num2 % min == 0) {
    text += min + '_'
  }
  min--
}
console.log(text)


//5. Посчитать факториал введенного пользователем числа.
i = 1
num = 5
result = 1
while (i <= num) {
  result *= i
  i++
}
console.log(result)

//6.1.Задания, в которых необходимо использовать DO WHILE.
//Предложить пользователю решить пример 2+2*2 до тех пор, пока он не решит его правильно.

result = 6
while (true) {
  if (result == 6) break
}
console.log(result)


//6.2. Делить число 1000 на 2 до тех пор, пока не получиться число меньше 50. Вывести это число и сколько делений произвели.

let res = 1000
i = 0
while (true) {
  res /= 2
  i++
  if (res < 50) break
}
console.log(res, `за ${i} итераций`)

//7.1. Задания, в которых необходимо использовать FOR.
//Вывести все числа от 1 до 100, которые кратные указанному пользователем числу.

userInput = 23
text = ''
for (i = 1; i <= 100; i++) {
  if (i % userInput == 0) {
    console.log(i + '_')
  }
}

//7.2 Вывести каждый 4-й элемент из указанного пользователем диапазона.
//Пользователь указывает минимальное и максимвальное значение диапазона.

min = 1
let max = 12
for (i = min + 3; i <= max; i += 4) {
  console.log(i + '_')
}

//7.3. Запросить число и проверить, простое ли оно.Простое число делится без остатка только на себя и на единицу.
//Не имеют других делителей, кроме 1 и самих себя.
//

num = 8
for (i = 2; i <= num! / 2; i++) {
  if (num % i !== 0)
    console.log(`простое число`)
}


//Dz3.
//1.Посчитать сумму всех чисел в заданном паользователем диапазоне.

let start = 1
let end = 3
let sum = 0
for (i = start; i <= end; i++) {
  sum += i
}
console.log(sum)

//2.Запросить 2 числа и найти только наибольший общий делитель.

num1 = 3
num2 = 6
let temp
for (i = 1; i <= num2; ++i) {
  if (num1 % i == 0 && num2 % i == 0) {
    temp = i
  }
}
console.log(temp)

//3.Запросить у пользователя число и вывести все делители этого числа.

num = 6
for (i = 1; i <= num; i++) {
  if (num % i == 0) {
    console.log(i)
  }
}

//4.Определить количество цифр в введенном числе.

num = 100
count
while (num != 0) {
  num /= 10
  count++
}
console.log(count)

//PZ4.1
//1.Написать функцию, которая принимает два числа и возвращает меньшее из них.

function getMin(num1:number, num2:number) {

  return num1 < num2 ? num1 : num2
}
num1 =19
num2 = 20
console.log(getMin(num1, num2))

//2.Написать функцию, которая возводит переданное число в указанную степень.

function pow(num1:number, num2:number){
  return num1**num2
}
num1 = 2
num2 = 2
console.log(pow(num1,num2))

//3.Написать функцию, которая принимает 2 числа и знак (+ - * /), считает примет и возвращает результат.

function receiveNum(num1:number, num2:number, operator:string){
  switch (operator) {
  case '+':
    return num1 + num2
  case '-':
    return num1 - num2
  case '*':
    return num1 * num2
  case '/':
    return num1 / num2
  default:
    return 'Я не понимаю.'
}
}

console.log(receiveNum(1,2,'='))

//4.Написать функцию, которая проверяет, является ли переданное ей чило простым.

function simpleNum(num:number){
  for (i = 2; i <= num !/2; i++) {
    if (num % i !== 0)
    return num
}
}
num = 13
console.log(simpleNum(num))


//5.Написать функцию, которая принимает 2 числа от 2 до 9 и выводит таблицу умножения.

function showTable(a:number){
let result = ''
  for(let i = 1; i <10; i++){
    result += i +'*' + a + '=' + i * a + '\n'
  }
  return result
  }
  console.log(showTable(2))
  console.log(showTable(3))
  console.log(showTable(4))
  console.log(showTable(5))
  console.log(showTable(6))
  console.log(showTable(7))
  console.log(showTable(8))
  console.log(showTable(9))

  //6.Написать функцию, которая возвращает остаток от деления, принимая 2 параметра, (+-*/) % не использовать.

  // function remainsFloat(a:number, b:number, q:number, r:number)
 


  //7.Написать функцию, которая принимает от 1 до 5 чисел и возвращает их сумму.

  function sumNum(n1:number, n2=0, n3=0, n4=0, n5=0){   
    return n1+n2+n3+n4+n5
  }
  console.log(sumNum(7 ))

  //8.Написать функцию, которая принимает от 1 до 5 чисел и возвращает большее из них.

  function getMax(num1:number, num2:number) {
    return num1 > num2 ? num1 : num2
  }
  num1 = 6
  num2 = 12
  console.log(getMax(num1, num2))
  

  //9.Написать функцию, которая выводит все четные и нечетные числа, в указанном пользователем диапазоне.Использовать true, false.
  
  function printEvenNum(num1:number, num2:number){
    let odd = ''
    let even = ''
    const max = Math.max(num1, num2)
    const min = Math.min(num1, num2)
    for (let i = min; i < max; i += 1) {
      if (i % 2 == 0) {
        even += !even ? i : ', '+i
      } else {
        odd += !odd ? i : ', '+i
      }
    }
    console.log(`Even ${even} \nOdd ${odd}`)
  }
  printEvenNum(98,85)

  //10.Написать функцию, которая принимает дату(день. месяц, год) и возвращает дату следующего дня в виде стрки дд.мм.гггг.
  //Проверку на високосный год написать отдельной функцией.

//Pz5.
//1.Написать функцию, котораявычисляет факториал заданного числа.

function getFactorialNum(num: number): number{
  if(num==1){
    return num
  }else {
    return num *(getFactorialNum(num-1))
  }  
}
console.log(getFactorialNum(5))

//2.Написать функцию, которая выводит все числа из заданного пользователем диапазона в прямом порядке. И еще одну
//функцию – для вывода в обратном порядке.

function PrintNumForvard(num1: number, num2: number): void{ 
  if (num1 > num2){
    return 
  }
  console.log (num1)
  PrintNumForvard(num1+1, num2)
}
   PrintNumForvard(1,5)


   function PrintNumBacward(num1: number, num2: number): void{ 
    if (num1 < num2){
      return 
    }
    console.log (num1)
    PrintNumBacward(num1-1, num2)
  }
     PrintNumBacward(5,1)

//3.Написать функцию, которая выводит переданное ей число задом наперед. Например: число 1234 вывести как 4321

function getReversNumber(n: number):number{
  if(n < 10){
    return n 
  }else {
    return +(n%10+''+getReversNumber(Math.floor(n/10)))
  }
}
console.log(getReversNumber(1234))

//4.Написать функцию, которая считает сумму цифр числа. Например: число 1357, сумма 1 + 3 + 5 + 7 = 16
function getSumOfDigits(n: number):number{
  if(n < 10){
    return n 
  }else {
    return n % 10 + getSumOfDigits(Math.floor(n/10))
  }
}
console.log(getSumOfDigits(1234))

//5.Написать функцию, которая принимает число и выводит соответствующее количество вложенных пар круглых скобок.
//Например: число 4 – (((()))).

function getBracketsPairsByNum(n: number):string{
  if(!n) {
    return ''
  }else {
    return'(' +getBracketsPairsByNum(n-1) +')'
  }
}
//getBracketsPairsByNum(4) ='(' + getBracketsPairsByNum(3) +')' = (((())))
//getBracketsPairsByNum(3) ='(' + getBracketsPairsByNum(2) +')' = ((()))
//getBracketsPairsByNum(2) ='(' + getBracketsPairsByNum(1) +')' = (())
//getBracketsPairsByNum(1) ='(' + getBracketsPairsByNum(0) +')' = ()
console.log(getBracketsPairsByNum(4))


//Dz5
//1.Написать функцию возведения числа в степень.

//2.Написать функцию поиска наибольшего общего делителя.

//3.Написать функцию для поиска максимальной цифры в числе.

//4.Написать функцию, которая определяет простое ли переданное число.

//5.Написать функцию для вывода всех множителей переданного числа в возрастающем порядке.
//Например: число 18 – множители 2 * 3 * 3

//6.Написать функцию, которая возвращает число Фибоначчи по переданному порядковому номеру.
//Числа Фибоначчи: 1, 1, 2, 3, 5, 8, 13… Ряд основывается натом, что каждое число равно сумме двух предыдущих чисел.
//Например: порядковый номер 3 – число 2, порядковый номер 6 – число 8




// console.log(`результат: ${num1 + 1}`)