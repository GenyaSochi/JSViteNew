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

function getMin(num1: number, num2: number) {

  return num1 < num2 ? num1 : num2
}
num1 = 19
num2 = 20
console.log(getMin(num1, num2))

//2.Написать функцию, которая возводит переданное число в указанную степень.

function pow(num1: number, num2: number) {
  return num1 ** num2
}
num1 = 2
num2 = 2
console.log(pow(num1, num2))

//3.Написать функцию, которая принимает 2 числа и знак (+ - * /), считает примет и возвращает результат.

function receiveNum(num1: number, num2: number, operator: string) {
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

console.log(receiveNum(1, 2, '='))

//4.Написать функцию, которая проверяет, является ли переданное ей чило простым.

function simpleNum(num: number) {
  for (i = 2; i <= num! / 2; i++) {
    if (num % i !== 0)
      return num
  }
}
num = 13
console.log(simpleNum(num))


//5.Написать функцию, которая принимает 2 числа от 2 до 9 и выводит таблицу умножения.

function showTable(a: number) {
  let result = ''
  for (let i = 1; i < 10; i++) {
    result += i + '*' + a + '=' + i * a + '\n'
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

function sumNum(n1: number, n2 = 0, n3 = 0, n4 = 0, n5 = 0) {
  return n1 + n2 + n3 + n4 + n5
}
console.log(sumNum(7))

//8.Написать функцию, которая принимает от 1 до 5 чисел и возвращает большее из них.

function getMax(num1: number, num2: number) {
  return num1 > num2 ? num1 : num2
}
num1 = 6
num2 = 12
console.log(getMax(num1, num2))


//9.Написать функцию, которая выводит все четные и нечетные числа, в указанном пользователем диапазоне.Использовать true, false.

function printEvenNum(num1: number, num2: number) {
  let odd = ''
  let even = ''
  const max = Math.max(num1, num2)
  const min = Math.min(num1, num2)
  for (let i = min; i < max; i += 1) {
    if (i % 2 == 0) {
      even += !even ? i : ', ' + i
    } else {
      odd += !odd ? i : ', ' + i
    }
  }
  console.log(`Even ${even} \nOdd ${odd}`)
}
printEvenNum(98, 85)

//10.Написать функцию, которая принимает дату(день. месяц, год) и возвращает дату следующего дня в виде стрки дд.мм.гггг.
//Проверку на високосный год написать отдельной функцией.

//Pz5.
//1.Написать функцию, котораявычисляет факториал заданного числа.

function getFactorialNum(num: number): number {
  if (num == 1) {
    return num
  } else {
    return num * (getFactorialNum(num - 1))
  }
}
console.log(getFactorialNum(5))

//2.Написать функцию, которая выводит все числа из заданного пользователем диапазона в прямом порядке. И еще одну
//функцию – для вывода в обратном порядке.

function PrintNumForvard(num1: number, num2: number): void {
  if (num1 > num2) {
    return
  }
  console.log(num1)
  PrintNumForvard(num1 + 1, num2)
}
PrintNumForvard(1, 5)


function PrintNumBacward(num1: number, num2: number): void {
  if (num1 < num2) {
    return
  }
  console.log(num1)
  PrintNumBacward(num1 - 1, num2)
}
PrintNumBacward(5, 1)

//3.Написать функцию, которая выводит переданное ей число задом наперед. Например: число 1234 вывести как 4321

function getReversNumber(n: number): number {
  if (n < 10) {
    return n
  } else {
    return +(n % 10 + '' + getReversNumber(Math.floor(n / 10)))
  }
}
console.log(getReversNumber(1234))

//4.Написать функцию, которая считает сумму цифр числа. Например: число 1357, сумма 1 + 3 + 5 + 7 = 16
function getSumOfDigits(n: number): number {
  if (n < 10) {
    return n
  } else {
    return n % 10 + getSumOfDigits(Math.floor(n / 10))
  }
}
console.log(getSumOfDigits(1234))

//5.Написать функцию, которая принимает число и выводит соответствующее количество вложенных пар круглых скобок.
//Например: число 4 – (((()))).

function getBracketsPairsByNum(n: number): string {
  if (!n) {
    return ''
  } else {
    return '(' + getBracketsPairsByNum(n - 1) + ')'
  }
}
//getBracketsPairsByNum(4) ='(' + getBracketsPairsByNum(3) +')' = (((())))
//getBracketsPairsByNum(3) ='(' + getBracketsPairsByNum(2) +')' = ((()))
//getBracketsPairsByNum(2) ='(' + getBracketsPairsByNum(1) +')' = (())
//getBracketsPairsByNum(1) ='(' + getBracketsPairsByNum(0) +')' = ()
console.log(getBracketsPairsByNum(4))


//Dz5
//1.Написать функцию возведения числа в степень.

function powNum(x: number, n: number): number {
  if (n == 1) {
    return x
  } else {
    return x * pow(x, n - 1)
  }
}
console.log(powNum(2, 5))

//2.Написать функцию поиска наибольшего общего делителя.

function nod(min: number, max: number): number {
  if (max % min == 0) {
    return min
  } else {
    min > max ? min %= max : max %= min;
    min += max;
  }
  return max
}
console.log(nod(6, 12))


function NOD(x: number, y: number): number {
  for (x = arguments[0], i = 1; i < arguments.length; i++) {
    y = arguments[i];
    while (x && y) {
      x > y ? x %= y : y %= x;
    }
    x += y;
  }
  return x;
}
console.log(NOD(2, 8))

//3.Написать функцию для поиска максимальной цифры в числе.

function maxNum(num: number): number {
  if (num == 0) {
    return 0
  } else {
    return Math.max(num % 10, maxNum(Math.floor(num / 10)))
  }
}
console.log(maxNum(163))

//4.Написать функцию, которая определяет простое ли переданное число.

function simpNum(num: number) {
  if (num % 2 !== 0) {
    return true
  } else (num % 2 == 0)
  return false
}
console.log(simpNum(13))

//5.Написать функцию для вывода всех множителей переданного числа в возрастающем порядке.
//Например: число 18 – множители 2 * 3 * 3

function multiplier(num: number): string {
  if (num == 1) {
    return ''
  }
  for (let i = 2; i <= num; i++) {
    if (num % i == 0) {
      return (' ' + i + ' ' + multiplier(num / i)).trim().replace(/\ /g, '*')
    }
  }
  return ''
}
console.log(multiplier(18))


//6.Написать функцию, которая возвращает число Фибоначчи по переданному порядковому номеру.
//Числа Фибоначчи: 1, 1, 2, 3, 5, 8, 13… Ряд основывается натом, что каждое число равно сумме двух предыдущих чисел.
//Например: порядковый номер 3 – число 2, порядковый номер 6 – число 8

function fibonacci(num: number): number {
  return num <= 1 ? num : fibonacci(num - 1) + fibonacci(num - 2);
}
console.log(fibonacci(3))


//Dz6.
//1.Функция для вывода на экран информации об автомобиле.
//2.Функция для подсчета необходимого времени для преодоления переданного расстояния со средней скоростью.
//Учтите, что через каждые 4 часа дороги водителю необходимо делать перерыв на 1 час.

type Car = {
  name: string,
  age: number,
  color: string,
  speed: number,
  avearage?: number,
}

let car: Car = {
  name: "Mini cooper",
  age: 2020,
  color: "red",
  speed: 100,
}

// car.avearage = 321

function getCarInfo(car: Car) {
  console.log(car.name, car.age, car.color, car.speed)
}
getCarInfo(car)

function timeDistance(car: Car, distance: number) {
  const time = distance / car.speed
  const restTime = time % 4 == 0 ? Math.floor((distance / car.speed) / 4) - 1 : Math.floor((distance / car.speed) / 4)
  return time + restTime
}
console.log(timeDistance(car, 1600))

//2.Создать объект, хранящий в себе отдельно числитель и знаменатель дроби, и следующие функции для работы с этим объектом.

type Fraction = {
  numerator: number,
  denominator: number,
}
const fraction1: Fraction = {
  numerator: 1,
  denominator: 2,
}
const fraction2: Fraction = {
  numerator: 3,
  denominator: 10,
}
function transformToCommonDenominator(fr1: Fraction, fr2: Fraction) {
  return {
    fr1: {
      numerator: fr1.numerator * fr2.denominator,
      denominator: fr1.denominator * fr2.denominator
    },
    fr2: {
      numerator: fr2.numerator * fr1.denominator,
      denominator: fr1.denominator * fr2.denominator
    }
  }
}
//1.Функция сложения 2-х объектов-дробей.

function getSumOfFractions(fr1: Fraction, fr2: Fraction) {
  const commonFractions = transformToCommonDenominator(fr1, fr2)
  console.log(commonFractions)
  return {
    numerator: commonFractions.fr1.numerator + commonFractions.fr2.numerator,
    denominator: commonFractions.fr1.denominator
  }
}
console.log(getSumOfFractions(fraction1, fraction2))

function getReductionSumOfFractions(fr1: Fraction, fr2: Fraction) {
  const result = getSumOfFractions(fr1, fr2)
  return getReductionFraction(result)
}
console.log(getReductionSumOfFractions(fraction1, fraction2))
//2.Функция вычитания 2-х объектов-дробей.
function getSubOfFractions(fr1: Fraction, fr2: Fraction) {
  const commonFractions = transformToCommonDenominator(fr1, fr2)
  console.log(commonFractions)
  const result = {
    numerator: commonFractions.fr1.numerator - commonFractions.fr2.numerator,
    denominator: commonFractions.fr1.denominator
  }
  return getReductionFraction(result)
}
console.log(getSubOfFractions(fraction1, fraction2))


//3.Функция умножения 2-х объектов-дробей.
function getMulOfFractions(fr1: Fraction, fr2: Fraction) {
  const result = {
    numerator: fr1.numerator * fr2.numerator,
    denominator: fr1.denominator * fr2.denominator
  }
  return getReductionFraction(result)
}
console.log(getMulOfFractions(fraction1, fraction2))

//4.Функция деления 2-х объектов-дробей.
function getDivOfFractions(fr1: Fraction, fr2: Fraction) {
  const result = {
    numerator: fr1.numerator * fr2.denominator,
    denominator: fr2.numerator * fr1.denominator
  }
  return getReductionFraction(result)
}
console.log(getDivOfFractions(fraction1, fraction2))

//5.Функция сокращения объекта-дроби.
function getReductionFraction(fr: Fraction) {
  const min = fr.numerator < fr.denominator ? fr.numerator : fr.denominator
  for (i = min; i > 1; i--) {
    if (fr.numerator % i && fr.denominator % i) {
      fr.numerator /= i,
        fr.denominator /= i
      return getReductionFraction(fr)
    }
  }
  return fr
}

//3.Создать объект, описывающий время (часы, минуты, секунды), и следующие функции для работы с этим объектом.
//1.Функция вывода времени на экран.
//2.Функция изменения времени на переданное количество секунд.
//3.Функция изменения времени на переданное количество минут.
//4.Функция изменения времени на переданное количество часов.

type Time = {
  hours: number,
  minutes: number,
  seconds: number,
}

const time = {
  hours: 10,
  minutes: 10,
  seconds: 20,
}

time.hours++
time.minutes++
time.seconds++
function showTime(time: Time) {
  const timeStr = time.hours + ':' + time.minutes + ':' + time.seconds
  console.log(timeStr)
  return timeStr
}

function secondChange(time: Time, seconds: number) {
  const newSeconds = time.seconds + seconds
  time.seconds = newSeconds % 60
  const newMinutes = time.minutes + Math.trunc(newSeconds / 60)
  time.minutes = newMinutes % 60
  const newHours = time.hours + Math.trunc(newMinutes / 60)
  time.hours = newHours % 24
}
function minuteChange(time: Time, minutes: number) {
  secondChange(time, minutes * 60)
}
function hourChange(time: Time, hours: number) {
  secondChange(time, hours * 60 * 60)
}
console.log(showTime(time))
secondChange(time, 95)
console.log(showTime(time))
minuteChange(time, 65)
console.log(showTime(time))
hourChange(time, 25)
console.log(showTime(time))


//Задание.Создать объект, описывающий прямоугольник (хранит координаты левой верхней и правой нижней точек), и написать следу-
//ющие функции для работы с таким объектом.
type Rectangle = {
  x1: number,
  y1: number,
  x2: number,
  y2: number,
}
let rectangle = {
  x1: 0,
  x2: 12,
  y1: 0,
  y2: 5,
}
//1.Функция принимает объект-прямоугольник и выводит информацию о нем (где какая точка расположена).
function infoRectangle(rectangle: Rectangle) {
  console.log(rectangle.x1, rectangle.y1, rectangle.x2, rectangle.y2)
}
infoRectangle(rectangle)

//2.Функция принимает объект-прямоугольник и возвращает его ширину.
function widthRectangle(rectangle: Rectangle) {
  return Math.abs(rectangle.x2) - Math.abs(rectangle.x1)
}
console.log(widthRectangle(rectangle))

//3.Функция принимает объект-прямоугольник и возвращает его высоту.
function heightRectangle(rectangle: Rectangle) {
  return Math.abs(rectangle.y2) - Math.abs(rectangle.y1)
}
console.log(heightRectangle(rectangle))

//4.Функция принимает объект-прямоугольник и возвращает его площадь.
function squareRectangle(rectangle: Rectangle) {
  return (Math.abs(rectangle.x2) - Math.abs(rectangle.x1)) * (Math.abs(rectangle.y2) - Math.abs(rectangle.y1))
}
console.log(squareRectangle(rectangle))

//5.Функция принимает объект-прямоугольник и возвращает его периметр.
function perimeterRectangle(rectangle: Rectangle) {
  return ((Math.abs(rectangle.x2) - Math.abs(rectangle.x1)) * 2) + ((Math.abs(rectangle.y2) - Math.abs(rectangle.y1)) * 2)
}
console.log(perimeterRectangle(rectangle))

//6.Функция изменения ширины прямоугольника. Она принимает объект-прямоугольник и на сколько единиц изменить ширину.
function widthRectangleChange(rectangle: Rectangle, x: number) {
  rectangle.x2 += x
}
widthRectangleChange(rectangle, 5)

//7.Функция изменения высоты прямоугольника. Она принимает объект-прямоугольник и на сколько единиц изменить высоту.
function heightRectangleChange(rectangle: Rectangle, y: number) {
  rectangle.y2 += y
}
heightRectangleChange(rectangle, 5)

//8.Функция изменения ширины и высоты прямоугольника. Она принимает объект-прямоугольник и два значения для изменения ширины и высоты.
function widthHeightRectangleChange(rectangle: Rectangle, x: number, y: number) {
  widthRectangleChange(rectangle, x)
  heightRectangleChange(rectangle, y)
}
widthHeightRectangleChange(rectangle, 4, 9)

//9.Функция смещения прямоугольника по оси X. Она принимает объект-прямоугольник и на сколько единиц его сдвинуть.
function moveAxisX(rectangle: Rectangle, x: number) {
  rectangle.x1 += x
  rectangle.x2 += x
}
moveAxisX(rectangle, 5)

//10.Функция смещения прямоугольника по оси Y. Она принимает объект-прямоугольник и на сколько единиц его сдвинуть.
function moveAxisY(rectangle: Rectangle, y: number) {
  rectangle.y1 += y
  rectangle.y2 += y
}
moveAxisY(rectangle, 10)

//11.Функция смещения прямоугольника и по оси X и по оси Y. Она принимает объект-прямоугольник и два значения: сдвиг по оси X и сдвиг по оси Y.
function moveAxisXY(rectangle: Rectangle, x: number, y: number) {
  moveAxisX(rectangle, x)
  moveAxisY(rectangle, y)
}
moveAxisXY(rectangle, 2, 1)

//12.Функция для проверки, находится ли точка внутри прямоугольника. Она принимает объект-прямоугольник и координаты точки.
function pointRectangle(rectangle: Rectangle, x3: number, y3: number) {
  if ((x3 >= rectangle.x1 && x3 <= rectangle.x2) && (y3 >= rectangle.y1 && y3 <= rectangle.y2)) {
    return true
  }
  return false
}
console.log(rectangle)
console.log(pointRectangle(rectangle, 12, 15))

//Массив
//PZ1.Задание 1.Создать массив из 10 случайных чисел и написать несколько функций для работы с ним.
//1.Функция принимает массив и выводит его на экран.
const arr: number[] = []
function fillArrRandomNumbers(arr: number[], length: number) {
  for (let i = 0; i < length; i++) {
    arr.push(Math.floor(Math.random() * 10))
  }
}
fillArrRandomNumbers(arr, 10)
console.log(arr)

//2.Функция принимает массив и выводит только четные элементы.
function outputsArr(arr: number[]) {
  const arr1 = []
  for (i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      arr1.push(arr[i])
    }
  }
  console.log(arr1)
}
console.log(outputsArr(arr))

//3.Функция принимает массив и возвращает сумму всех элементов массива.
function sumElem(arr: number[]) {
  let sum = 0
  for (i = 0; i < arr.length; i++) {
    sum += arr[i]
  }
  console.log(sum)
}
console.log(sumElem(arr))

//4.Функция принимает массив и возвращает его максимальный элемент.
function maxElem(arr: number[]) {
  return Math.max(...arr)
}
console.log(maxElem(arr))

//5.Функция добавления нового элемента в массив по указанному индексу.
function newElem(arr: number[], el: number, index: number) {
  arr.splice(index, 0, el)
  console.log(arr)
}
console.log(newElem(arr, 5, 2))
console.log(newElem(arr, 8, 4))

//6.Функция удаления элемента из массива по указанному индексу.
function delElem(arr: number[], index: number) {
  arr.splice(index, 1)
  console.log(arr)
}
console.log(delElem(arr, 1))

//PZ2.Создать еще один массив из 5 случайных чисел и написать следующие функции.
//1.Функция принимает 2 массива и возвращает новый массив, в котором собраны все элементы из двух массивов без повторений.
const arr1: number[] = []
const arr2: number[] = []
function arrRandomNumbers(arr1: number[], length: number) {
  for (let i = 0; i < length; i++) {
    arr1.push(Math.floor(Math.random() * 10))
  }
}
arrRandomNumbers(arr1, 10)
arrRandomNumbers(arr2, 5)

console.log(arr1)
console.log(arr2)

function getUnionArr(arr1: number[], arr2: number[]) {
  const arr: number[] = []
  for (let el of arr1) {
    if (!arr.includes(el)) {
      arr.push(el)
    }
  }
  for (let el of arr2) {
    if (!arr.includes(el)) {
      arr.push(el)
    }
  }
  return arr
}
console.log(getUnionArr(arr1, arr2))
//2.Функция принимает 2 массива и возвращает новый массив, в котором собраны общие элементы (то есть элементы,
//которые встречаются и в первом и во втором массивах) без повторений.
function getCommonUnionArr(arr1: number[], arr2: number[]) {
  const arr: number[] = []
  for (let el of arr1) {
    if (arr1.includes(el) && arr2.includes(el)) {
      if (!arr.includes(el)) {
        arr.push(el)
      }
    }
  }
  return arr
}
console.log(getCommonUnionArr(arr1, arr2))

//3.Функция принимает 2 массива и возвращает новый массив, в котором собраны все элементы из первого массива,
//которых нет во втором массиве.
function getNotCommonUnionArr(arr1: number[], arr2: number[]) {
  const arr: number[] = []
  for (let el of arr1) {
    if (!arr2.includes(el)) {
      if (!arr.includes(el)) {
        arr.push(el)
      }
    }
  }
  return arr
}
console.log(getNotCommonUnionArr(arr1, arr2))

//PZ3.Создать массив фруктов и отсортировать его по алфавиту. Написать следующие функции.
//1.Вывод на экран с помощью document.write() в виде списка(с помощью тегов ul и li).

type fruits = {
  name: string,
}
const fruitsList: fruits[] = [
  { name: 'яблоко' },
  { name: 'груша' },
  { name: 'апельсин' },
  { name: 'слива' },
  { name: 'персик' },
  { name: 'манго' },
  { name: 'киви' },
]
let html = ``
console.log(fruitsList.sort((a, b) => a.name.localeCompare(b.name)))
fruitsList.sort((a, b) => +a - +b).forEach((el) => {
  html += `<p>${el.name}</P>`
})
console.log(html)


//2.Поиск фрукта в массиве. Функция принимает название фрукта и возвращает индекс найденного элемента или -1,
//если не найден. Поиск должен быть нерегистрозависимым.

function searchFruit(name: string, arr: fruits[]) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].name == name) {
      return i
    }
  }
  return -1
}
console.log(searchFruit('киви', fruitsList))

//DZ3.1.Создать массив «Список покупок». Каждый элемент массива является объектом, который содержит название продукта, необ-
//ходимое количество и куплен или нет. Написать несколько функций для работы с таким массивом.
//1.Вывод всего списка на экран таким образом, чтобы сначала шли некупленные продукты, а потом – купленные.

type product = {
  name: string,
  count: number,
  isBuyed: boolean,
}

const toBuyList: product[] = [
  { name: 'молоко', count: 1, isBuyed: false },
  { name: 'мука', count: 1, isBuyed: true },
  { name: 'сахар', count: 1, isBuyed: true },
  { name: 'картофель', count: 1, isBuyed: false },
  { name: 'сыр', count: 1, isBuyed: true },
  { name: 'бекон', count: 1, isBuyed: false },
  { name: 'конфеты', count: 1, isBuyed: true },
  { name: 'чай', count: 1, isBuyed: false },
]
const toBuyListOL = document.getElementById('toBuyList') as HTMLOListElement

function renderBuyList(arr: product[]) {
  let html = ''
  for (let el of arr) {
    if (!el.isBuyed) {
      html += `<li style="color:red">${el.name} ${el.count}</li>`
    }
  }
  for (let el of arr) {
    if (el.isBuyed) {
      html += `<li style="color:green">${el.name} ${el.count}</li>`
    }
  }
  toBuyListOL.innerHTML = html
}

renderBuyList(toBuyList)

//2.Добавление покупки в список. Учтите, что при добавлении покупки с уже существующим в списке продуктом, необ-
//ходимо увеличивать количество в существующей покупке,а не добавлять новую.

const productNameInput = document.getElementById('productName') as HTMLInputElement
const productCountInput = document.getElementById('productCount') as HTMLInputElement
const addProductButton = document.getElementById('addProduct') as HTMLButtonElement

function addToBuyList(arr: product[], name: string, count: number) {
  let inList = false
  for (let el of arr) {
    if (el.name == name && !el.isBuyed) {
      el.count += count
      inList = true
    }
  }
  if (!inList) {
    arr.push({ name, count, isBuyed: false })
  }
  renderBuyList(arr)
}
addToBuyList(toBuyList, 'масло', 1)

addProductButton.addEventListener('click', function () {
  const count = parseFloat(productCountInput.value.replace(',', '.'))
  addToBuyList(toBuyList, productNameInput.value, count)
  productNameInput.value = ''
  productCountInput.value = ''
})

//3.Покупка продукта. Функция принимает название продукта и отмечает его как купленный.

const setBuyedButton = document.getElementById('setBuyed') as HTMLButtonElement

function setBuyed(arr: product[], name: string) {
  for (let el of arr) {
    if (el.name == name) {
      el.isBuyed = true
    }
  }
  renderBuyList(arr)
}

setBuyed(toBuyList, 'макароны')

setBuyedButton.addEventListener('click', function () {
  setBuyed(toBuyList, productNameInput.value)
  productNameInput.value = ''
  productCountInput.value = ''
})

toBuyListOL.addEventListener('click', function (e) {
  const target = e.target as HTMLElement
  if (target.tagName == 'BUTTON' && target.dataset.name) {
    setBuyed(toBuyList, target.dataset.name)
  }
})


//2.Создать массив, описывающий чек в магазине. Каждый элемент массива состоит из названия товара, количества и цены за
//единицу товара. Написать следующие функции.
type check = {
  name: string,
  count: number,
  price: number,
}

const descriptionCheck: check[] = [
  { name: 'яйцо', count: 2, price: 100 },
  { name: 'мука', count: 5, price: 120 },
  { name: 'сахар', count: 1, price: 80 },
  { name: 'картофель', count: 1, price: 60 },
  { name: 'сыр', count: 2, price: 200 },
]

//1.Распечатка чека на экран.

const descriptionCheckOL = document.getElementById('descriptionCheck') as HTMLOListElement

function printCheck(arr: check[]) {
  let html = ''
  for (let el of arr) {
    html += `<li>${el.name} ${el.count} ${el.price}</li>`
  }
  descriptionCheckOL.innerHTML = html
}

printCheck(descriptionCheck)

//2.Подсчет общей суммы покупки.

function sumCheck(arr: check[]) {
  let sum = 0
  for (let el of arr) {
    console.log(el)
    sum += el.price * el.count
  }
  // for (let i = 0; i < arr.length; i++){
  //   console.log(arr[i])
  //   sum += arr[i].price * arr[i].count
  // }
  return sum
}
console.log(sumCheck(descriptionCheck))

//3.Получение самой дорогой покупки в чеке.

function maxCheck(arr: check[]) {
  let max = 0
  for (i = 0; i < arr.length; i++) {
    if (arr[i].count * arr[i].price > max) {
      max = arr[i].count * arr[i].price
    }
  }
  return max
}
console.log(maxCheck(descriptionCheck))

//4.Подсчет средней стоимости одного товара в чеке.

function averageCheck(arr: check[]) {
  return sumCheck(arr) / arr.length
}
console.log(averageCheck(descriptionCheck))

//3.Создать массив css-стилей (цвет, размер шрифта, выравнивание, подчеркивание и т. д.). Каждый элемент массива – это объ-
//ект, состоящий из двух свойств: название стиля и значение стиля.Написать функцию, которая принимает массив стилей и
//текст, и выводит этот текст с помощью document.write() в тегах <p></p>, добавив в открывающий тег атрибут style со всеми
//стилями, перечисленными в массиве.

// const mass = [
//   { 'color': 'red' },
//   { 'font-size': '20px' },
//   { 'text-align': 'left' },
//   { 'margin': '20px' },
// ]
// function renderText1(styles: any[], text: string) {
//   let styleText = ''
//   for (let el of styles) {
//     for (let key in el) {
//       styleText += `${key}:${el[key]};`
//     }
//   }
//   const tagString = `<p style="${styleText}"> ${text}</p>`
//   document.body.insertAdjacentHTML('beforeend', tagString)
// }
// renderText1(mass, 'Привет!')

//4.Создать массив аудиторий академии. Объект-аудитория состоит из названия, количества посадочных мест (от 10 до 20) и
//названия факультета, для которого она предназначена. Написать несколько функций для работы с ним.
//1.Вывод на экран всех аудиторий.
//2.Вывод на экран аудиторий для указанного факультета.
//3.Вывод на экран только тех аудиторий, которые подходят для переданной группы. Объект-группа состоит из названия,
//количества студентов и названия факультета.
//4.Функция сортировки аудиторий по количеству мест.
//5.Функция сортировки аудиторий по названию (по алфавиту).



// 1.1.  Написать функцию возвращающюю массив целых чисел от 0 до 10
function getNum() {
  const arr: number[] = []
  for (let i = 0; i < 10; i++) {
    arr.push(i)
  }
  return arr
}

console.log(getNum())

// 1.2.  Добавить в функцию опциональные параметры начального и конечного значения массива
//     (если конечный элемент массива не передат, то он больше нечального на 10) . Вызвать функцию несколько раз

function generateArray(start = 0, end = start + 10) {
  const arr: number[] = []
  for (let i = 0; i < end - start; i++) {
    arr.push(i + start)
  }
  return arr
}
console.log(generateArray())
console.log(generateArray(20))
console.log(generateArray(20, 40))
console.log(generateArray(20, 50))

// 1.3*. Написать функцию возвращающюю массив случайных целых чисел. Функция принимает 1 параметр, количество элементов в будущем массиве

function getRandomArray(num: number) {
  let arr = []
  for (let i = 0; i < num; i++) {
    arr.push(Math.floor(Math.random() * 10))
  }
  return arr
}
console.log(getRandomArray(5))

// 2.1. В файле html создать пустой div с произвольным id
//______________создан___________________________________

// 2.2. Получить объект div'а в js при помощи метода document.getElementById(ваш id) as HTMLDivElement

const myObj = document.getElementById('test') as HTMLDivElement
console.log(myObj)

// 2.3. Вывести в полученный div текст, "Привет, пользователь"

myObj.innerHTML = 'Привет, пользователь!'
// 2.4. Написать функцию, которая возвращает текст "Привет, пользователь" или "Привет, <имяПользователя>" в зависимости от переданных параметров
// и использовать её в задании 2.3.

// Есть массив объектов
type Employees = {
  name: string,
  department: string,
  age: number
  salary: number,
}
const employees: Employees[] = [
  { name: 'Федотова Арина Глебовна', department: 'ads', age: 20, salary: 2100 },
  { name: 'Голикова Мария Филипповна', department: 'prog', age: 22, salary: 3500 },
  { name: 'Панин Александр Германович', department: 'ads', age: 27, salary: 2100 },
  { name: 'Романов Эмиль Макарович', department: 'prog', age: 20, salary: 3100 },
  { name: 'Смирнов Никита Александрович', department: 'prog', age: 28, salary: 3800 },
  { name: 'Александрова Майя Вячеславовна', department: 'prog', age: 22, salary: 4500 },
  { name: 'Крылов Богдан Максимович', department: 'disign', age: 27, salary: 2100 },
  { name: 'Мухина Айша Константиновна', department: 'disign', age: 30, salary: 2100 },
  { name: 'Кошкин Богдан Максимович', department: 'buh', age: 29, salary: 2200 },
  { name: 'Муразова Айша Константиновна', department: 'buh', age: 30, salary: 2300 },
]
function showEmployees(arr: Employees[], i = -1) {
  if (i > -1 && i < arr.length) {
    myObj.innerHTML = 'Привет, ' + arr[i].name + '!'
  } else {
    myObj.innerHTML = 'Привет, пользователь'
  }
}
showEmployees(employees, 4)


// Все функции вызывать несколько раз с разными параметрами
// 2.1. Создать функцию, принимающую массив работников, и возвращающую массив уникальных отделов (department)

function uniqueDepartment(arr: Employees[]) {
  const unique: string[] = []
  for (let el of arr) {
    if (!unique.includes(el.department)) {
      unique.push(el.department)
    }
  }
  return unique
}
console.log(uniqueDepartment(employees))

// 2.2. Написать функцию, принимающую массив работников и ключ объекта, по которому сделать сортировку массива
// Учесть, что строковые параметры сортируются при помощи метода localeCompare, а числовые,- вычитанием

function sortEmployees(arr: Employees[], key: 'name' | 'department' | 'age' | 'salary') {
  return arr.sort((a, b) => {
    if (a[key] > b[key]) return 1
    if (a[key] < b[key]) return -1
    return 0
  })
}
console.log(sortEmployees(employees, 'name'))
console.log(sortEmployees(employees, 'department'))
console.log(sortEmployees(employees, 'age'))
console.log(sortEmployees(employees, 'salary'))

// 2.3. Написать функцию, аналогичную описанной в задании 2.2., но сортирующую в обратном порядке
function sortReversEmployees(arr: Employees[], key: 'name' | 'department' | 'age' | 'salary') {
  return arr.sort((a, b) => {
    if (a[key] < b[key]) return 1
    if (a[key] > b[key]) return -1
    return 0
  })
}
console.log(sortReversEmployees(employees, 'name'))
console.log(sortReversEmployees(employees, 'department'))
console.log(sortReversEmployees(employees, 'age'))
console.log(sortReversEmployees(employees, 'salary'))


// 2.4. Написать функцию, принимающую массив работников и имя, и возвращающую объект сотрудника или undefined

function listEmployees(arr: Employees[], name: string) {
  for (let el of arr) {
    if (el.name == name) {
      return el
    }
  }
  return undefined
}
console.log(listEmployees(employees, 'Крылов Богдан Максимович'))

// 2.5. Написать функцию, принимающую массив работников и название отдела, и возвращающую новый массив, содержащий только сотрудников переданного отдела
function newArr(arr: Employees[], department: string) {
  return arr.filter((el) => el.department == department)
}
newArr(employees, 'ads')
console.log(newArr(employees, 'ads'))

// 2.6. Написать функцию, принимающую массив работников и возвращающую сумму зарплат. Вызвать функцию по каждому отделу и по общему массиву

function paymentEmployees(arr: Employees[]) {
  let sum = 0
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i].salary
  }
  return sum
}
console.log(paymentEmployees(employees))
console.log(paymentEmployees(newArr(employees, 'ads')))
console.log(paymentEmployees(newArr(employees, 'prog')))
console.log(paymentEmployees(newArr(employees, 'disign')))


// Все функции вызывать несколько раз с разными параметрами
// 3.1. Создать функцию, принимающую массив работников, и возвращающую массив уникальных отделов (department)
// deps.includes
// [ads, prog, disign]

function uniqueDep(arr: Employees[]) {
  const unique: string[] = []
  for (let el of arr) {
    if (!unique.includes(el.department)) {
      unique.push(el.department)
    }
  }
  return unique
}
console.log(uniqueDep(employees))//Задание дублируется с 2.1

// 3.2. Написать функцию, принимающую массив работников и ключ объекта, по которому сделать сортировку массива
// Учесть, что строковые параметры сортируются при помощи метода localeCompare, а числовые,- вычитанием
// function sortEmpl(arr, key: 'name' | 'department' |'salary') {
// }

function sortEmpl(arr: Employees[], key: 'name' | 'department' | 'age' | 'salary') {//дубль 2.2 + localeCompare
  if (key == 'name' || key == 'department') {
    arr.sort((a, b) => a[key].localeCompare(b[key]))
  } else {
    arr.sort((a, b) => a[key] - b[key])
  }
}
// sortEmpl(employees, 'name')
sortEmpl(employees, 'department')
// sortEmpl(employees, 'salary')

// 3.3. Написать функцию, аналогичную описанной в задании 3.2., но сортирующую в обратном порядке

function sortBackEmpl(arr: Employees[], key: 'name' | 'department' | 'age' | 'salary') {
  sortEmpl(arr, key)
  arr.reverse()
}
sortBackEmpl(employees, 'name')
// sortBackEmpl(employees, 'department')
// sortBackEmpl(employees, 'salary')

// 3.4. Написать функцию, принимающую массив работников и имя, и возвращающую объект сотрудника или undefined

function listNewEmployees(arr: Employees[], name: string) {
  for (let el of arr) {
    if (el.name == name) {
      return el
    }
  }
  return undefined
}
console.log(listNewEmployees(employees, 'Крылов Богдан Максимович'))

// 3.5. Написать функцию, принимающую массив работников и название отдела, и возвращающую новый массив, содержащий только сотрудников переданного отдела

function newArrEmp(arr: Employees[], department: string) {
  return arr.filter((el) => el.department == department)
}
newArr(employees, 'ads')
console.log(newArrEmp(employees, 'disign'))

// 3.6. Написать функцию, принимающую массив работников и возвращающую сумму зарплат. Вызвать функцию по каждому отделу и по общему массиву

function paymentNewEmployees(arr: Employees[]) {
  let sum = 0
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i].salary
  }
  return sum
}
console.log(paymentNewEmployees(employees))
console.log(paymentNewEmployees(newArr(employees, 'ads')))
console.log(paymentNewEmployees(newArr(employees, 'prog')))
console.log(paymentNewEmployees(newArr(employees, 'disign')))

// 3.7. В HTML создать div для кнопок, задать ему id и получить объект div'a в js, аналогично заданию 2.2.

const myButton = document.getElementById('myBut') as HTMLDivElement
console.log(myButton)

// 3.8. Так же как в 3.7 создать ul (as HTMLUListElement) для вывода списка и div для вывода суммы зарплат
const sumSalary = document.getElementById('sumSal') as HTMLDivElement
function conclusionList(arr: Employees[]) {
  let html = '<ul>'

  for (let el of arr) {
    html += `<li>${el.name} ${el.department} ${el.salary}</li>`
  }
  sumSalary.innerHTML = `${html}</ul><div>Sum ${paymentNewEmployees(arr)}</div>`
}
console.log(conclusionList(employees))

// 3.9. Используя массив, полученный в 3.1. Вывести кнопки с названиями отделов + кнопку "Все отделы"
// использовать data-атрибут (data-dep), в который поместить название отдела. Для кнопки "Все отделы" data-dep="all"
const buttonAds = document.getElementById('butAds') as HTMLDivElement

function renderButtons(arr: string[]) {
  let html = ''
  for (let dep of arr) {
    html += `<button style="background-color: forestgreen; width: 80px; color: white; border-color: blue; border-width: 5px;
    margin-left: 20px; margin-bottom: 5px;" data-dep="${dep}">${dep.toUpperCase()}</button>`
  }
  html += `<button style="background-color: forestgreen; width: 80px; color: white; border-color: blue; border-width: 5px;
  margin-left: 20px; margin-bottom: 5px;" data-dep="all">ALL</button>`
  buttonAds.innerHTML = html
}

renderButtons(uniqueDep(employees))

// 3.10. Используя div, полученный в задании 3.7
buttonAds.addEventListener('click', function (e) {
  const target = e.target as HTMLElement
  if (target.tagName == 'BUTTON' && target.dataset.dep) {
    if (target.dataset.dep == 'all') {
      conclusionList(employees)
    } else {
      conclusionList(newArrEmp(employees, target.dataset.dep))
    }
    // в зависимости от значения dep выводить в список (ul 3.8) тех сотрудников, которые работают в данном отделе, либо всех, если target.dataset.dep=='all'. Используем логическое ветвление и уже написанные функции
    // в div (3.8) выводить сумму зарплат
  }
})
function renderText(mass: ({ color: string; width?: undefined; height?: undefined; 'font-size'?: undefined; 'text-align'?: undefined } | { width: string; color?: undefined; height?: undefined; 'font-size'?: undefined; 'text-align'?: undefined } | { height: string; color?: undefined; width?: undefined; 'font-size'?: undefined; 'text-align'?: undefined } | { 'font-size': string; color?: undefined; width?: undefined; height?: undefined; 'text-align'?: undefined } | { 'text-align': string; color?: undefined; width?: undefined; height?: undefined; 'font-size'?: undefined })[], arg1: string) {
  throw new Error('Function not implemented.')
}
console.log(renderText)


//PZ.СТРОКИ.
//1.Написать функцию, которая принимает 2 строки и сравнивает их длину. Функция возвращает 1, если в первой
//строке больше символов, чем во второй; -1 – если во второй больше символов, чем в первой; или 0 – если строки
//одинаковой длины.

function acceptsStr(str1: string, str2: string) {
  for (let i = 0; i < str1.length && str2.length; i++) {
    if (str1.length > str2.length) {
      return 1
    } else if (str2.length > str1.length) {
      return -1
    } else (str1.length == str2.length)
    return 0
  }
}
console.log(acceptsStr('привет', 'пока'))

//2.Написать функцию, которая переводит в верхний регистр первый символ переданной строки.
function upperString(str: string) {
  for (let i = 0; i < str.length; i++)
    return str
}
console.log(upperString('вася'[0].toUpperCase()))

//3.Написать функцию, которая считает количество гласных букв в переданной строке.
let vow = ['a', 'e', 'i', 'o', 'u', 'y']
sum = 0
function quantityVowelsLetters(str: string) {
  for (let char of str.toLowerCase()) {
    if (vow.includes(char)) {
      sum += 1
    }
  }
  return sum
}
console.log(quantityVowelsLetters('AsasAs'))

//4.Написать функцию для проверки спама в переданной строке. Функция возвращает true, если строка содержит
//спам. Спамом считать следующие слова: 100% бесплатно, увеличение продаж, только сегодня, не удаляйте, ххх.
//Функция должна быть нечувствительна к регистру.

function checkSpam(str: string) {
  let lowerStr = str.toLowerCase();
  if (lowerStr.includes('100% бесплато') || lowerStr.includes('увеличение продаж') || lowerStr.includes('только сегодня') ||
    lowerStr.includes('не удаляйте') || lowerStr.includes('xxx')) {
    return true
  } else
    return false
}
console.log(checkSpam('Привет'))
console.log(checkSpam('увеличение продаж'))
console.log(checkSpam('не удаляйте'))
console.log(checkSpam('только сегодня'))
console.log(checkSpam('Закрыто'))
console.log(checkSpam('100% бесплато'))

//5.Написать функцию сокращения строки. Функция принимает строку и ее максимальную длину. Если длина строки
//больше, чем максимальная, то необходимо отбросить лишние символы, добавив вместо них троеточие.
//Например: truncate(“Hello, world!”, 8) должна вернуть “Hello...”.

function reductionStr(str: string, maxlength: number) {
  if (str.length > maxlength) {
    return str.slice(0, maxlength - 1) + '…'
  }
}
console.log(reductionStr('Здравствуйте', 10))

//6.Написать функцию, которая проверяет, является ли переданная строка палиндромом.

function palindromeStr(str: string) {
  return str.split('').reverse().join('') == str;
}
console.log(palindromeStr('анна'))

//7.Написать функцию, которая считает количество слов в предложении.

function quantityWords(str: string) {
  return str.split(` `).length
}
console.log(quantityWords(`мама моет раму и Тузика`))

//8.Написать функцию, которая возвращает самое длинное слово из предложения.
//!порешать подобные задачи
function findLongestWord(str: string) {
  const arrayWords = str.split(` `)

  let longestWord = arrayWords[0]

  for (const word of arrayWords) {
    if (word.length > longestWord.length) {
      longestWord = word
    }
  }
  return longestWord
}
console.log(findLongestWord(`мама моет раму и Тузика`))


//9.Написать функцию, которая считает среднюю длину слова в предложении.

// let alphabetRussian = ['а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'к', 'л', 'м', 'н',
// 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ъ', 'ы', 'ь', 'э', 'ю', 'я']
sum = 0
function averageLength(str: string) {
  str = str.replaceAll(',', '').replaceAll('.', '').replaceAll('?', '').replaceAll('!', '').replaceAll(':', '').replaceAll(';', '')
  const words = str.split(` `)
  for (let word of words) {
    sum += word.length
  }
  return sum / words.length
}
console.log(averageLength(`мама, моет! раму: и; Тузика!`))

//10.Написать функцию, которая принимает строку и символ и выводит индексы, по которым находится этот символ в
//строке. Также вывести, сколько всего раз встречается этот символ в строке.

function indexSymbol(str: string, char: string) {
  const info = {
    sumChar: 0,
    position: [] as number[]
  }
  for (let i = 0; i < str.length; i++) {
    if (char == str[i]) {
      info.position.push(i)
      info.sumChar++
    }
  }
  return info
}
console.log(indexSymbol('уроккк уроккк', 'у'))


//DZ.СТРОКИ
//1.Написать функцию, которая принимает строку и выводит статистику о ней: количество букв, количество цифр и
//количество других знаков.

function newStr(str: string) {
  const infoStr = {
    sumLetter: 0,
    sumFigure: 0,
    sumSign: 0,
  }
  let letters = 'абвгдеёжзийклмнопрстуфхцчэюяabcdefghijklmnopqrstuvwxyz'
  let figure = '1234567890'
  let sign = '/.,;:"!&%$#@*-+=\\'
  let allLetters = letters + letters.toUpperCase()
  for (let char of str) {
    if (allLetters.includes(char)) {
      infoStr.sumLetter++
    }
    if (figure.includes(char)) {
      infoStr.sumFigure++
    }
    if (sign.includes(char)) {
      infoStr.sumSign++
    }
  }
  return infoStr
}
console.log(newStr('!56DTgf...!hjk'))

//2.Написать функцию, которая принимает двузначное число и возвращает его в текстовом виде.
//Например: 35 – тридцать пять, 89 – восемьдесят девять, 12 – двенадцать.

function doubleNum(num: number) {
  let units = ['ноль', 'один', 'два', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять']
  let dozens = ['десять', 'одинадцать', 'двенадцать', 'тринадцать', 'четырнадцать', 'пятнадцать', 'шестнадцать', 'семнадцать', 'восемнадцать', 'девятнадцать']
  let rounds = [, , 'двадцать', 'тридцать', 'сорок', 'пятьдесят', 'шестьдесят', 'семьдесят', 'восемьдесят', 'девяносто']
  if (num >= 0 && num <= 9) {
    return units[num]
  }
  if (num >= 10 && num <= 20) {
    return dozens[num - 10]
  }
  if (num >= 20 && num <= 99) {
    if (num % 10 == 0) {
      return rounds[num / 10]
    }
    return rounds[Math.trunc(num / 10)] + ' ' + units[num % 10]
  }
}
console.log(doubleNum(88))

//3.Написать функцию, которая заменяет в полученной строке большие буквы на маленькие, маленькие – на большие, а
//цифры – на знак нижнего подчеркивания.

function replacingLetters(str: string) {
  let newStr = ''
  for (let char of str) {
    if ('1234567890'.includes(char)) {
      newStr += '_'
    }
    else if (char == char.toUpperCase()) {
      newStr += char.toLowerCase()
    }
    else if (char == char.toLowerCase()) {
      newStr += char.toUpperCase()
    }
  }
  return newStr
}
console.log(replacingLetters('Ro4'))


//4.Написать функцию, которая преобразует названия css-стилей с дефисом в название в СamelСase стиле: font-size
//в fontSize, background-color в backgroundColor, text-align в textAlign.

function styleCSS(str: string) {
  return str.split('-').map((el, i) => i ? el[0].toUpperCase() + el.slice(1) : el).join('')
}
console.log(styleCSS('font-size'))
console.log(styleCSS('background-color'))
console.log(styleCSS('text-align'))


//5.Написать функцию, которая принимает словосочетание и превращает его в аббревиатуру.
//Например: cascading style sheets в CSS, объектно-ориентированное программирование в ООП.

function abbr(str: string) {
  return str.replaceAll('-', ' ').split(' ').map(el => el[0].toUpperCase()).join('')
}
console.log(abbr('cascading style sheets'))
console.log(abbr('объектно-ориентированное программирование'))


//6.Написать функцию, которая принимает любое количество строк, объединяет их в одну длинную строку и
//возвращает ее.
function concatStr(...arr: string[]) {
  return arr.join('; ')
}
console.log(concatStr('o', 'df', 'dfg'))

//7.Написать функцию – калькулятор. Функция принимает строку с примером, определяет, какое действие необходимо
//выполнить (+ - * /), переводит операнды в числа, решает пример и возвращает результат.

function calculator(str: string): number {
  str = str.replaceAll(' ', '')
  if (str.includes('+')) {
    const arr = str.split('+')
    let sum = 0
    arr.forEach(el => sum += +calculator(el))
    return sum
  } else if (str.includes('-')) {
    const arr = str.split('-')
    let sum = +calculator(arr[0])
    arr.forEach((el, i) => sum -= i ? +calculator(el) : 0)
    return sum
    // return +calculator(arr[0]) - (+calculator(arr[1]))
  } else if (str.includes('*')) {
    const arr = str.split('*')
    let sum = 1
    arr.forEach(el => sum *= +calculator(el))
    return sum
    // return +calculator(arr[0]) * (+calculator(arr[1]))
  } else if (str.includes('/')) {
    const arr = str.split('/')
    let sum = +arr[0]
    arr.forEach((el, i) => sum /= i ? +calculator(el) : 1)
    return sum
    // return +calculator(arr[0]) / (+calculator(arr[1]))
  }
  return +str
}
console.log(calculator('18 + 9 * 7 / 2 / 3.5 - 5 + 10 * 2 * 4'))
console.log(calculator('8 * 89/8 + 1'))
console.log(calculator('88 / 8'))
console.log(calculator('81 - 9'))


//8.Написать функцию, которая получает url и выводит подробную информацию о нем.
//Например: url “https://itstep.org/ua/about”, информация “протокол: https, домен: itstep.org, путь: /ua/about”.

function infoUrl(url: string) {
  let protocol
  let domain
  let way
  let arr1 = url.split(`://`)
  let arr2
  for (let i = 0; i < arr1.length; i++) {
    protocol = arr1[0]
    arr2 = arr1[1].split(`/`)
    domain = arr2[0]
    arr2.shift()
    way = arr2.join(`/`)
  }
  return "Информация: протокол: " + protocol + "," + " домен: " + domain + "," + " путь: " + way
}
console.log(infoUrl(`https://itstep.org/ua/about`))

//9.Написать функцию, которая принимает строку и разделитель и возвращает массив подстрок, разбитых с помощью
//указанного разделителя. Например: строка “10/08/2020”, разделитель “/”, результат:“10”, “08”, “2020”.
//Выполняя задание, не используйте функцию split().

function dateSplit(str: string, separator: any) {
  let lastContent = 0
  const arr = []
  for (let i = 0; i < str.length; i++) {
    if (str[i] == separator) {
      arr.push(str.slice(lastContent, i))
      lastContent = i + 1
    }
  }
  if (str.slice(lastContent)) {
    arr.push(str.slice(lastContent))
  }
  return arr
}
console.log(dateSplit("10/08/2020", "/"))

//10.Написать функцию вывода текста по заданному шаблону. Функция принимает первым параметром шаблон, в тексте
//которого может использоваться %, после символа % указывается индекс входного параметра. При выводе вместо
//%индекс необходимо вывести значение соответствующего входного параметра.
//Например: print(“Today is %1 %2.%3.%4”, “Monday”, 10, 8, 2020) должна вывести “Today is Monday 10.8.2020”.

function outputText(template: string, ...values: any[]) {
  for (let i = 0; i < template.length; i++) {
    template = template.replace('%' + (i + 1), values[i])
  }
  return template
}
console.log(outputText("Today is %1 %2.%3.%4", "Monday", 10, 8, 2020));


// Реализовать класс PrintMachine, которой состоит из:
// ■ размера шрифта;
// ■ цвета шрифта;
// ■ семейства шрифта;
// ■ метода print(), который принимает текст и печатает его соответствующим шрифтом.
// Создать объект такого класса и продемонстрировать работу метода.

const pmDiv = document.getElementById('pm') as HTMLDivElement
class PrintMachine {
  tag: string
  fSize: string
  color: string
  fFamily: string
  constructor(fSize: string, color: string, fFamily: string, tag = 'p') {
    this.tag = tag
    this.fSize = fSize
    this.color = color
    this.fFamily = fFamily
  }
  print(text: string) {
    pmDiv.innerHTML += `<${this.tag} style="font-size:${this.fSize};font-family:${this.fFamily}; color: ${this.color}">${text}</${this.tag}>`
  }
}

PrintMachine
// const redPM = new PrintMachine('50px', 'red', 'Arial')
// const blackPM = new PrintMachine('25px', 'black', 'Tahoma', 'h1')
// redPM.print('Alert')
// blackPM.print('(tommorow)')
// redPM.print('1 may on nose')
// blackPM.print('not work')



// Реализовать класс, описывающий html элемент.
// Класс HtmlElement должен содержать внутри себя:
// ■ название тега;
// ■ самозакрывающийся тег или нет;
// ■ текстовое содержимое;
// ■ массив атрибутов;
// ■ массив стилей;
// ■ массив вложенных таких же тегов;
// ■ метод для установки атрибута;
// ■ метод для установки стиля;
// ■ метод для добавления вложенного элемента в конец текущего элемента;
// ■ метод для добавления вложенного элемента в начало текущего элемента;
// ■ метод getHtml(), который возвращает html код в виде
//   строки, включая html код вложенных элементов.
// С помощью написанного класса реализовать следующий блок
// и добавить его на страницу с помощью document.write().

class HtmlElement {
  offsetWidth: any
  clientWidth: any
  innerHTML() {
    throw new Error('Method not implemented.')
  }
  tag: string
  isSingle: boolean
  text: string
  atributes = [] as any[]
  styles = [] as any[]
  elements = [] as HtmlElement[]
  constructor(tag: string, text = '') {
    const singleArr = ['area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'keygen', 'link', 'meta', 'param', 'source', 'track', 'wbr']
    this.tag = tag
    this.text = text
    this.isSingle = singleArr.includes(tag) ? true : false
  }
  setAtribute(name: string, value: string) {
    this.atributes.push({ name, value })
  }
  setStyle(name: string, value: string) {
    this.styles.push({ name, value })
  }
  prepend(el: HtmlElement) {
    this.elements.unshift(el)
  }
  append(el: HtmlElement) {
    this.elements.push(el)
  }
  getHtml(): string {
    const styles = this.styles.map(el => el.name + ':' + el.value).join(';')
    const attrCopy = [...this.atributes]
    if (this.styles.length) {
      attrCopy.push({ name: 'style', value: styles })
    }
    if (this.isSingle) {
      if (this.text) {
        attrCopy.push({ name: 'area-label', value: this.text })
      }
      const atributes = attrCopy.map(el => el.name + '="' + el.value + '"').join(' ')
      return `<${this.tag} ${atributes}>`
    } else {
      const atributes = attrCopy.map(el => el.name + '="' + el.value + '"').join(' ')
      return `<${this.tag} ${atributes}>${this.text}${this.elements.map(el => el.getHtml()).join('\n')}</${this.tag}>`
    }
  }
}

const wrapper = new HtmlElement('div')
wrapper.setAtribute('id', 'wrapper')
wrapper.setAtribute('class', 'wrap')
let div = new HtmlElement('div')
div.setAtribute('class', 'block')
const h3 = new HtmlElement('h3', 'Lorem')
const img = new HtmlElement('img')
img.setAtribute('class', 'img')
img.setAtribute('src', 'vite.svg')
img.setAtribute('alt', 'Lorem')
const p = new HtmlElement('p', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla assumenda inventore voluptas natus obcaecati mollitia ad eos adipisci delectus quia odit, earum culpa sunt, molestiae doloribus in explicabo! Illo, harum!')
p.setAtribute('class', 'text')
const a = new HtmlElement('a', 'More...')
a.setAtribute('href', 'https://www.lipsum.com/')
a.setAtribute('target', '_blank')
p.append(a)
div.append(img)
div.append(p)
div.prepend(h3)
wrapper.append(div)
wrapper.append(div)

const heDiv = document.getElementById('he') as HTMLDivElement
heDiv.innerHTML = wrapper.getHtml()

//Реализовать класс, описывающий окружность. В классе должны быть следующие компоненты:
//■ поле, хранящее радиус окружности;
//■ get-свойство, возвращающее радиус окружности;
//■ set-свойство, устанавливающее радиус окружности;
//■ get-свойство, возвращающее диаметр окружности;
//■ метод, вычисляющий площадь окружности;
//■ метод, вычисляющий длину окружности.
//Продемонстрировать работу свойств и методов.

class Circle {
  #radius: number
  constructor(radius: number) {
    this.#radius = radius
  }
  get radius() {
    console.log('getter worked', this.#radius)
    return this.#radius
  }
  set radius(val: number) {
    if (val <= 0) {
      throw Error('nizza')
    }
    console.log('setter worked', val)
    this.#radius = val
  }
  squareCircle() {
    return Math.PI * this.#radius ** 2
  }
  lengthCircle() {
    return 2 * Math.PI * this.#radius
  }
}
const c = new Circle(10)
console.log(c.radius)
c.radius = 15
console.log(c.radius)
console.log(c.squareCircle())
console.log(c.lengthCircle())

//Реализовать класс, который описывает css класс. Класс CssClass должен содержать внутри себя:
//■ название css класса;
//■ массив стилей;
//■ метод для установки стиля;
//■ метод для удаления стиля;
//■ метод getCss(), который возвращает css код в виде строки.


class CssClass {
  styles = [] as any[]
  name: string
  constructor(name: string) {
    this.name = name
  }

  setStyle(name: any, value: any) {
    this.styles.push({ name, value })
  }

  removeProperty(name: string) {
    const index = this.styles.findIndex(el => el.name == name)
    if (index != -1) this.styles.splice(index, 1)
  }

  getCss() {
    const styles = this.styles.map((el: { name: string; value: string }) => el.name + ':' + el.value).join(';')
    return `.${this.name}{${styles}}`
  }
}

const descCss = document.getElementById('st') as HTMLDivElement
const bigRed = new CssClass('bigRed')
bigRed.setStyle("color", "red")
bigRed.setStyle("color", "green")
bigRed.setStyle("font-size", "30px")
bigRed.setStyle("font-family", "Arial")
console.log(bigRed.getCss())
bigRed.removeProperty("font-family")
bigRed.removeProperty("color")
console.log(bigRed.getCss())

descCss.innerHTML += bigRed.getCss()

//4.Реализовать класс, описывающий блок html документ.Класс HtmlBlock должен содержать внутри себя:
//■ коллекцию стилей, описанных с помощью класса CssClass;
//■ корневой элемент, описанный с помощью класса HtmlElement;
//■ метод getCode(), который возвращает строку с html кодом (сначала теги style с описанием всех классов, а потом
//все html содержимое из корневого тега и его вложенных элементов).
//С помощью написанных классов реализовать следующий блок (см. рис. 2) и добавить его на страницу с помощью document.write().

class HtmlBlock {
  styles = [] as CssClass[]
  element: HtmlElement
  constructor(styles: CssClass[], element: HtmlElement) {
    this.styles = styles
    this.element = element
  }

  getCode() {
    return {
      styles: this.styles.map(el => el.getCss()).join('\n'),
      html: this.element.getHtml()
    }
  }
}

const docCss = document.getElementById('st') as HTMLDivElement
const docDiv = document.getElementById('he') as HTMLDivElement
const bigGreen = new CssClass('bigGreen')
bigGreen.setStyle("color", "pink")
bigGreen.setStyle("color", "blueviolet")
bigGreen.setStyle("font-size", "60px")
bigGreen.setStyle("font-family", "Times New Roman")
bigGreen.setStyle("margin", "10px")
console.log(bigGreen.getCss())

const wrapClass = new CssClass('wrap')
wrapClass.setStyle("display", "flex")

const blockClass = new CssClass('block')
blockClass.setStyle("width", "300px")
blockClass.setStyle("margin", "10px")

const imgClass = new CssClass('img')
imgClass.setStyle("width", "100%")
imgClass.setStyle("color", "blueviolet")

const textClass = new CssClass('text')
textClass.setStyle("text-align", "justify")

const block = new HtmlBlock([wrapClass, blockClass, imgClass, textClass], wrapper)

docCss.innerHTML += bigGreen.getCss()
docDiv.innerHTML = wrapper.getHtml()
const blockCode = block.getCode()
docCss.innerHTML += blockCode.styles
docDiv.innerHTML = blockCode.html

//02.05.2024 Date.LearnJS.
//1.Создайте дату.
//Создайте объект Date для даты: 20 февраля 2012 года, 3 часа 12 минут. Временная зона – местная.

let now = new Date(2012, 1, 20, 3, 12)//Если в скобках ничего не указывать, то мы получим текущую дату со временем.
console.log(now.toLocaleString())

//2.Покажите день недели.
//Напишите функцию getWeekDay(date), показывающую день недели в коротком формате: «ПН», «ВТ», «СР», «ЧТ», «ПТ», «СБ», «ВС».
function getWeekDay(date: Date) {
  let dateWeek = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС']
  return dateWeek[date.getDate() + 1]
}
let date = new Date(2024, 5, 2)
console.log(getWeekDay(date))

//3.День недели в европейской нумерации.
//В Европейских странах неделя начинается с понедельника (день номер 1), затем идёт вторник (номер 2)
// и так до воскресенья (номер 7). Напишите функцию getLocalDay(date), которая возвращает «европейский» день недели для даты date.

function getLocalDay(day: Date) {
  return day.getDay() == 0 ? 7 : day.getDay()
}
date = new Date(2024, 5, 4)
console.log(getLocalDay(date))

//4.Какой день месяца был много дней назад?
//Создайте функцию getDateAgo(date, days), возвращающую число, которое было days дней назад от даты date.

function getDateAgo(date: Date, days: number) {

  let dateCopy = new Date(date)
  dateCopy.setDate(date.getDate() - days)
  return dateCopy.getDate()
}
date = new Date(2024, 5, 3)
console.log(getDateAgo(date, 1))

//5.Последнее число месяца?
//Напишите функцию getLastDayOfMonth(year, month), возвращающую последнее число месяца.
//Иногда это 30, 31 или даже февральские 28/29.

function getLastDayOfMonth(year: number, month: number) {
  let date = new Date(year, month + 1, 0)
  return date.getDate()
}
console.log(getLastDayOfMonth(2024, 0))

//6.Сколько сегодня прошло секунд?
//Напишите функцию getSecondsToday(), возвращающую количество секунд с начала сегодняшнего дня.

function getSecondsToday() {
  let d = new Date()
  return d.getHours() * 3600 + d.getMinutes() * 60 + d.getSeconds()
}
console.log(getSecondsToday())

//7.Сколько секунд осталось до завтра?
//Создайте функцию getSecondsToTomorrow(), возвращающую количество секунд до завтрашней даты.

function getSecondsToTomorrow() {
  let now = new Date()
  let hour = now.getHours()
  let minutes = now.getMinutes()
  let seconds = now.getSeconds()
  let totalSecondsToday = (hour * 60 + minutes) * 60 + seconds
  let totalSecondsInADay = 86400

  return totalSecondsInADay - totalSecondsToday
}
console.log(getSecondsToTomorrow())

//8.Форматирование относительной даты.  
//Напишите функцию formatDate(date), форматирующую date по следующему принципу:
//Если спустя date прошло менее 1 секунды, вывести "прямо сейчас".
//В противном случае, если с date прошло меньше 1 минуты, вывести "n сек. назад".
//В противном случае, если меньше часа, вывести "m мин. назад".
//В противном случае, полная дата в формате "DD.MM.YY HH:mm". А именно: "день.месяц.год часы:минуты", всё в виде двух цифр, т.е. 31.12.16 10:00.

function formatDate(date: Date) {
  let dayOfMonth = date.getDate()
  let month = date.getMonth() + 1
  let year = date.getFullYear()
  let hour = date.getHours()
  let minutes = date.getMinutes()
  let diffMs = new Date().getTime() - date.getTime()
  let diffSec = Math.round(diffMs / 1000)
  let diffMin = diffSec / 60
  let diffHour = diffMin / 60

  //форматирование
  // year = year.toString().slice(-2)
  // month = month < 10 ? '0' + month : month
  // dayOfMonth = dayOfMonth < 10 ? '0' + dayOfMonth : dayOfMonth
  // hour = hour < 10 ? '0' + hour : hour
  // minutes = minutes < 10 ? '0' + minutes : minutes

  if (diffSec < 1) {
    return 'прямо сейчас'
  } else if (diffMin < 1) {
    return `${diffSec} сек. назад`
  } else if (diffHour < 1) {
    return `${diffMin} мин. назад`
  } else {
    return `${dayOfMonth.toString().padStart(2, '0')}.${month.toString().padStart(2, '0')}.${year.toString().slice(-2)} ${hour.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`
  }
}
console.log(formatDate(new Date(+new Date() - 1)))
console.log(formatDate(new Date(+new Date - 30 * 1000)))
console.log(formatDate(new Date(+new Date - 5 * 60 * 1000)))
console.log(formatDate(new Date(+new Date - 86400 * 1000)))



//________________________________________________________
let naw = new Date("2024-01-02")
console.log(naw)

let day = new Date()
console.log(day.toLocaleString())
//new Date(year, month, date, hours, minutes, seconds, ms)

date = new Date(0)
console.log(date)

date = new Date(2024, 5, 6)
date.setFullYear(2017)
console.log(date)
//________________________________________________________

//Замыкание.
let users = [
  { name: "Иван", age: 20, surname: "Иванов" },
  { name: "Пётр", age: 18, surname: "Петров" },
  { name: "Анна", age: 19, surname: "Каренина" }
]
console.log(users)

function byField(key: string, arr: any) {
  if (typeof arr[0][key] == 'number') {
    return (a: any, b: any) => a[key] - b[key]
  }
  return (a: any, b: any) => a[key].localeCompare(b[key])
}

users.sort(byField('name', users))
console.log(users)

users.sort(byField('age', users))
console.log(users)

//DZ_5.
//Задание 1.Реализовать класс, описывающий простой маркер. В классе должны быть следующие компоненты:
//■ поле, которое хранит цвет маркера;
//■ поле, которое хранит количество чернил в маркере (в процентах);
//■ метод для печати (метод принимает строку и выводит текст соответствующим цветом; текст выводится до тех
//пор, пока в маркере есть чернила; один не пробельный символ – это 0,5% чернил в маркере).
//Реализовать класс, описывающий заправляющийся маркер, унаследовав его от простого маркера и добавив метод для 
//заправки маркера. Продемонстрировать работу написанных методов.

class Marker {
  colour: string
  ink: number
  constructor(colour: string, ink: number) {
    this.colour = colour
    this.ink = ink
  }
  markerPrint(str: string) {
    let html = ''
    str = str.toUpperCase()
    for (let el of str) {
      html += `<span style="color:${this.colour};opacity:${this.ink / 100}">${el}</span>`
      if (el != ' ') this.ink -= 0.5
    }
    return html
  }
}
class refuelMarker extends Marker {
  refuelInk() {
    this.ink = 100
  }
}
const refMarker = new refuelMarker('green', 100)
const markerDiv = document.getElementById('marker') as HTMLDivElement
markerDiv.innerHTML = refMarker.markerPrint('dgkjjfdkgjkfd dgkjjfdkgjkfd dgkjjfdkgjkfd dgkjjfdkgjkfd  dgkjjfdkgjkfddgkjjfdkgjkfd dgkjjfdkgjkfd')


//Задание 2.Реализуйте класс ExtendedDate, унаследовав его от стандартного класса Date и добавив следующие возможности:
//■ метод для вывода даты (числа и месяца) текстом;
//■ метод для проверки – это прошедшая дата или будущая
//(если прошедшая, то метод возвращает false; если будущая или текущая, то true);
//■ метод для проверки – високосный год или нет;
//■ метод, возвращающий следующую дату.
//Создайте объект класса ExtendedDate и выведите на экран результаты работы новых методов.

class ExtendedDate extends Date {
  textDate() {
    let days = [
      'первое', 'второе', 'третье', 'четвертое', 'пятое', 'шестое', 'седьмое', 'восьмое', 'девятое', 'десятое',
      'одинадцатое', 'двенадцатое', 'тринадцатое', 'четырнадцатое', 'пятнадцатое', 'шестнадцатое', 'семнадцатое', 'восемнадцатое', 'девятнадцатое', 'двадцатое',
      'двадцать первое', 'двадцать второе', 'двадцать трете', 'двадцать четвертое', 'двадцать пятое', 'двадцать шестое', 'двадцать седьмое', 'двадцать восьмое',
      'двадцать девятое', 'тридцатое', 'тридцать первое'
    ]
    let month = [
      'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря', 'января', 'февраля', 'марта', 'апреля', 'мая',
    ]
    return days[this.getDate() - 1] + ' ' + month[this.getMonth()]
  }
  checkDate() {
    let day = new Date
    if (day < this) {
      return false
    } else {
      return true
    }
  }
  leapYear() {
    let year = new Date()
    if (year.getFullYear() % 400 == 0 || (year.getFullYear() % 4 == 0 && year.getFullYear() % 100 != 0)) {
      return true
    } else
      return false
  }
  nextDate() {
    date = new Date()
    date.setDate(date.getDate() + 1)
    console.log(date)
  }
}
const today = new ExtendedDate()
const myDate = new ExtendedDate()
const myYear = new ExtendedDate()
const myNext = new ExtendedDate()
console.log(date.toString())
console.log(date.toDateString())
console.log(myDate.textDate())
console.log(today.checkDate())
console.log(myYear.leapYear())
console.log(myNext.nextDate())



//Задание 3.Реализовать класс Employee, описывающий работника, и создать массив работников банка.
//Реализовать класс EmpTable для генерации html кода таблицы со списком работников банка. Массив работников необходимо
//передавать через конструктор, а получать html код с помощью метода getHtml().
//Создать объект класса EmpTable и вывести на экран результат работы метода getHtml().

class Employee {
  name: string | undefined
  department: string | undefined
  age: number | undefined
  salary: number | undefined
  constructor(name: string, department: string, age: number, salary: number) {
    this.name = name
    this.department = department
    this.age = age
    this.salary = salary
  }
}
const employees1 = [
  new Employee('Федотова Арина Глебовна', 'ads', 20, 2100),
  new Employee('Голикова Мария Филипповна', 'prog', 22, 3500),
  new Employee('Панин Александр Германович', 'ads', 27, 2100),
  new Employee('Романов Эмиль Макарович', 'prog', 30, 3100),
  new Employee('Смирнов Никита Александрович', 'prog', 28, 3800),
  new Employee('Александрова Майя Вячеславовна', 'ads', 25, 2900),
  new Employee('Крылов Богдан Максимович', 'disign', 27, 2500),
  new Employee('Мухина Айша Константиновна', 'disign', 30, 2100),
  new Employee('Кошкин Богдан Максимович', 'buh', 29, 2200),
  new Employee('Муразова Айша Константиновна', 'buh', 30, 2300),
]
class EmpTable {
  arr: Employee[]
  constructor(arr: Employee[]) {
    this.arr = arr
  }
  getHtml() {
    let html = '<table><thead>'
    html += `<tr><th>Имя</th><th>Отдел</th><th>Возраст</th><th>Заработная плата</th></tr></thead><tbody>`
    for (let el of this.arr) {
      html += `<tr><td>${el.name}</td><td>${el.department}</td><td>${el.age}</td><td>${el.salary}</td></tr>`
    }
    html += '</tbody></table><br>'
    return html
  }
}
const emp = new EmpTable(employees1)
const empTableDiv = document.querySelector('#empTable') as HTMLDivElement
empTableDiv.innerHTML = emp.getHtml()

//Задание 4.Реализовать класс StyledEmpTable, который наследуется от класса EmpTable. Добавить метод getStyles(), который возвращает
//строку со стилями для таблицы в тегах style. Переопределить метод getHtml(), который добавляет стили к тому, что возвращает
// метод getHtml() из родительского класса. Создать объект класса StyledEmpTable и вывести на экран
//результат работы метода getHtml().




//Изменение документа./
//Напишите интерфейс для создания списка.
// Для каждого пункта:
// Запрашивайте содержимое пункта у пользователя с помощью prompt.
// Создавайте элемент <li> и добавляйте его к <ul>.
// Продолжайте до тех пор, пока пользователь не отменит ввод (нажатием клавиши Esc или введя пустую строку).
// Все элементы должны создаваться динамически.

// Если пользователь вводит HTML-теги, они должны обрабатываться как текст.
{
  const input = document.querySelector('#toDo input') as HTMLInputElement
  const button = document.querySelector('#toDo button') as HTMLInputElement
  const list = document.querySelector('#toDo ul') as HTMLUListElement

  button.addEventListener('click', () => {
    list.insertAdjacentHTML('beforeend', `<li></li>`)
    if (list.lastElementChild) list.lastElementChild.textContent = input.value.trim()
    // const li = document.createElement('li')
    // li.textContent = input.value.trim()
    // list.append(li)
    input.value = ''
    input.focus()
  })
}

//Напишите функцию createTree, которая создаёт вложенный список ul/li из объекта.

let data = {
  "Рыбы": {
    "форель": {},
    "лосось": {}
  },
  "Деревья": {
    "Огромные": {
      "секвойя": {},
      "дуб": {}
    },
    "Цветковые": {
      "яблоня": {},
      "магнолия": {}
    }
  }
} as Record<string, any>

let container = document.querySelector('#container ul') as HTMLUListElement

function createTree(container: HTMLUListElement, data: Record<string, any>) {
  for (let key in data) {
    if (Object.keys(data[key]).length) {
      const li = document.createElement('li')
      li.innerHTML = `${key}<ul></ul>`
      container.append(li)
      const ul = li.querySelector('ul') as HTMLUListElement
      createTree(ul, data[key])
    } else {
      container.insertAdjacentHTML('beforeend', `<li>${key}</li>`)
    }
  }
}
createTree(container, data)
console.log(data)

//Напишите код для выбора элемента с атрибутом data-widget-name из документа и прочитайте его значение.
let elem = document.querySelector('[data-widget-name]')
console.log(elem?.getAttribute('data-widget-name'))

//Сделайте все внешние ссылки оранжевыми, изменяя их свойство style.
// найти все ссылки, атрибут href у которых содержит :// и при этом href не начинается с http://internal.com

let selector = 'a[href*="://"]:not([href^="http://internal.com"])'
let links = document.querySelectorAll(selector) as NodeListOf<HTMLAnchorElement>
links.forEach(link => link.style.color = 'orange')


// добавление класса
//document.body.classList.add('article')

//Напишите функцию showNotification(options), которая создаёт уведомление: <div class="notification"> 
//с заданным содержимым. Уведомление должно автоматически исчезнуть через 1,5 секунды.

function showNotification({ top = 0, right = 0, className = '', html = '' }) {

  let notification = document.createElement('div')
  notification.className = "notification"
  notification.classList.add("notification")
  if (className) {
    notification.classList.add(className)
  }

  notification.style.top = top + 'px'
  notification.style.right = right + 'px'
  document.body.append(notification)
  notification.innerHTML = html
  setTimeout(() => notification.remove(), 1500)
}
{
  let i = 1
  setInterval(() => {
    showNotification({
      top: 30,
      right: 30,
      html: 'Hello ' + i++,
      className: "welcome"
    })
  }, 2000)
}


let textNode = document.createTextNode('div')//Создаёт новый элемент с заданным тегом.
document.createTextNode(text)//Создаёт новый текстовый узел с заданным текстом.
textNode = document.createTextNode('А вот и я')
console.log(textNode)

{
  // let div = document.createElement('div')//div с классом alert и HTML в нём
  // div.className = "alert"
  // div.innerHTML = "<strong>Всем привет!</strong> Вы прочитали важное сообщение."
  //Чтобы наш div появился, нам нужно вставить его где-нибудь в document. Например, в document.body.
  //Для этого есть метод append.
  // document.body.append(div)
  // console.log(div.innerHTML)
}
//?Вот методы для различных вариантов вставки:

// node.append(...nodes or strings) – добавляет узлы или строки в конец node,
// node.prepend(...nodes or strings) – вставляет узлы или строки в начало node,
// node.before(...nodes or strings) –- вставляет узлы или строки до node,
// node.after(...nodes or strings) –- вставляет узлы или строки после node,
// node.replaceWith(...nodes or strings) –- заменяет node заданными узлами или строками.

//Пример:
{
  let ol = document.createElement('ol')
  ol.before('before'); // вставить строку "before" перед <ol>
  ol.after('after'); // вставить строку "after" после <ol>
  let liFirst = document.createElement('li');
  liFirst.innerHTML = 'prepend';
  ol.prepend(liFirst); // вставить liFirst в начало <ol>

  let liLast = document.createElement('li');
  liLast.innerHTML = 'append';
  ol.append(liLast); // вставить liLast в конец <ol>
}

//?если мы хотим вставить HTML именно «как html», со всеми тегами и прочим, как делает это elem.innerHTML

//elem.insertAdjacentHTML(where, html)
//Первый параметр – это специальное слово, указывающее, куда по отношению к elem производить вставку. Значение должно быть одним из следующих:
"beforebegin" //вставить html непосредственно перед elem,
"afterbegin" // вставить html в начало elem,
"beforeend" // вставить html в конец elem,
"afterend" // вставить html непосредственно после elem.
//Второй параметр – это HTML-строка, которая будет вставлена именно «как HTML».
//У метода есть два брата:
//elem.insertAdjacentText(where, text) – такой же синтаксис, но строка text вставляется «как текст», вместо HTML,
//elem.insertAdjacentElement(where, elem) – такой же синтаксис, но вставляет элемент elem.
//Они существуют, в основном, чтобы унифицировать синтаксис. На практике часто используется только insertAdjacentHTML.
// Потому что для элементов и текста у нас есть методы //?append/prepend/before/after – их быстрее написать, и они могут вставлять как узлы, так и текст.

//Для удаления узла есть //? методы node.remove()

//document.body.append(div);
//setTimeout(() => div.remove(), 1000) сообщение удаляется через секунду.

//? давайте поменяем местами элементы:
//second.after(first); // берёт #second и после него вставляет #first

//?Клонирование узлов
//elem.cloneNode(true)лон элемента – со всеми атрибутами и дочерними элементами
//elem.cloneNode(false), тогда клон будет без дочерних элементов.

//?DocumentFragment является специальным DOM-узлом, который служит обёрткой для передачи списков узлов. Редко используется.
// let fragment = new DocumentFragment()

//Методы для создания узлов:

//?document.createElement(tag) – создаёт элемент с заданным тегом,
//?document.createTextNode(value) – создаёт текстовый узел (редко используется),
//?elem.cloneNode(deep) – клонирует элемент, если deep==true, то со всеми дочерними элементами.

// добавить HTML на страницу до завершения её загрузки:
//document.write(html)


//Напишите код, который добавит каждому элементу списка <li> количество вложенных в него элементов. Узлы нижнего уровня, без детей – пропускайте.

data = {
  "Животные": {
    "Млекопитающие": {
      "Коровы": {},
      "Ослы": {},
      "Собаки": {},
      "Тигры": {}
    },
    "Другие": {
      "Змеи": {},
      "Птицы": {},
      "Ящерицы": {}
    }
  },
  "Рыбы": {
    "Аквариумные": {
      "Гуппи": {},
      "Скалярии": {}
    },
    "Морские": {
      "Морская форель": {}
    }
  }
} as Record<string, any>

container = document.querySelector('#animals ul') as HTMLUListElement

function countObjects(data: any): number {
  let sum = 0
  for (let key in data) {
    if (Object.keys(data[key]).length) {
      sum += countObjects(data[key])
    } else {
      sum++
    }
  }
  return sum
}

function createAnimals(container: HTMLUListElement, data: Record<string, any>) {
  for (let key in data) {
    if (Object.keys(data[key]).length) {
      const li = document.createElement('li')
      const count = countObjects(data[key])
      li.innerHTML = `${key} [${count}]<ul></ul>`
      container.append(li)
      const ul = li.querySelector('ul') as HTMLUListElement
      createAnimals(ul, data[key])
    } else {
      container.insertAdjacentHTML('beforeend', `<li>${key}</li>`)
    }
  }
}
createAnimals(container, data)
const descendants = document.querySelectorAll('#animals li') as NodeListOf<HTMLLIElement>
console.log(descendants.length)
for (let li of descendants) {
  const descendantsCount = li.querySelectorAll('li').length
  if (!descendantsCount) continue //продолжаем          
  li.firstChild!.textContent = li.firstChild!.textContent + ' [' + descendantsCount + ']'// добавить непосредственно к текстовому узлу (добавить к тексту)    
}

//Вариант 2.
{
  let liElement = document.querySelectorAll('#animals2 li')
  for (let li of liElement) {
    if (li.querySelectorAll('li').length > 0) {
      li.firstChild!.nodeValue = `${li.firstChild!.textContent} [${li.querySelectorAll('li').length}]`
    }
  }
}

//Создать каледарь в виде таблицы
{
  let tableElem = document.getElementById('calendar') as HTMLTableElement
  function createCalendar(elem: any, year: number, month: number) {
    let mon = month - 1 // месяцы в JS идут от 0 до 11, а не от 1 до 12
    let d = new Date(year, mon)
    let table = '<table><tr><th>пн</th><th>вт</th><th>ср</th><th>чт</th><th>пт</th><th>сб</th><th>вс</th></tr><tr>'
    for (let i = 0; i < getDay(d); i++) {
      table += '<td></td>'
    }
    while (d.getMonth() == mon) {
      table += '<td>' + d.getDate() + '</td>'  // <td> ячейки календаря с датами

      if (getDay(d) % 7 == 6) { // вс, последний день - перевод строки
        table += '</tr><tr>'
      }

      d.setDate(d.getDate() + 1);
    }
    if (getDay(d) != 0) {
      for (let i = getDay(d); i < 7; i++) {
        table += '<td></td>'
      }
    }
    table += '</tr></table>'
    elem.innerHTML = table
  }
  function getDay(date: Date) { // получить номер дня недели, от 0 (пн) до 6 (вс)
    let day = date.getDay()
    if (day == 0) day = 7 // сделать воскресенье (0) последним днем
    return day - 1
  }
  createCalendar(tableElem, 2024, 6)
}

//Создайте цветные часы.

const clock = document.getElementById('clock') as HTMLDivElement
const buttonStart = document.getElementById('start') as HTMLButtonElement
const buttonEnd = document.getElementById('end') as HTMLButtonElement
function newDate() {
  let date = new Date()
  let hours = date.getHours()
  let minutes = date.getMinutes()
  let seconds = date.getSeconds()
  clock.children[0].innerHTML = hours.toString().padStart(2, '0')
  clock.children[1].innerHTML = minutes.toString().padStart(2, '0')
  clock.children[2].innerHTML = seconds.toString().padStart(2, '0')
}
let timer = setInterval(newDate, 1000)
buttonStart.onclick = function clockStart() {
  clearInterval(timer)
  timer = setInterval(newDate, 1000)
}
buttonEnd.onclick = function clockStop() {
  clearInterval(timer)
}


//?Чтобы получить ширину/высоту окна, можно взять свойства clientWidth/clientHeight из document.documentElement
//?window.innerWidth/Height Включают в себя полосу прокрутки.
//?корневой элемент документа document.documentElement, который соответствует тегу <html>.
//?Если есть полоса прокрутки, и она занимает какое-то место, то свойства clientWidth/clientHeight
//? указывают на ширину/высоту документа без неё (за её вычетом).
//? Ширина и высота документа.
//let scrollHeight = Math.max(
//document.body.scrollHeight, document.documentElement.scrollHeight,
//document.body.offsetHeight, document.documentElement.offsetHeight,
//document.body.clientHeight, document.documentElement.clientHeight
//)
//?текущую прокрутку можно прочитать из свойств window.pageXOffset/pageYOffset То, где мы сейчас находимся.
//?Обычные элементы хранят текущее состояние прокрутки в elem.scrollLeft/scrollTop, все окно.
//?Обычные элементы можно прокручивать, изменяя scrollTop/scrollLeft




// Размеры:

// Ширина / высота видимой части документа(ширина / высота области содержимого): document.documentElement.clientWidth / Height

// Ширина / высота всего документа со всей прокручиваемой областью страницы:
// let scrollHeight = Math.max(
//   document.body.scrollHeight, document.documentElement.scrollHeight,
//   document.body.offsetHeight, document.documentElement.offsetHeight,
//   document.body.clientHeight, document.documentElement.clientHeight
// );

// Прокрутка:
// Прокрутку окна можно получить так: window.pageYOffset / pageXOffset.

// Изменить текущую прокрутку:
// window.scrollTo(pageX, pageY) – абсолютные координаты,
// window.scrollBy(x, y) – прокрутка относительно текущего места,
// elem.scrollIntoView(top) – прокрутить страницу так, чтобы сделать elem видимым(выровнять относительно верхней / нижней части окна).

// Любая точка на странице имеет координаты:

// Относительно окна браузера – elem.getBoundingClientRect().
// Относительно документа – elem.getBoundingClientRect() плюс текущая прокрутка страницы.
// Координаты в контексте окна подходят для использования с position: fixed, а координаты относительно документа – для использования с position: absolute.

// Каждая из систем координат имеет свои преимущества и недостатки.Иногда будет лучше применить одну, а иногда – другую, как это и происходит с позиционированием в CSS, где мы выбираем между absolute и fixed.

const fieldDataElement = document.querySelector('#fieldData') as HTMLDivElement
const fieldElement = document.querySelector('#field') as HTMLDivElement
const fieldStyles = getComputedStyle(fieldElement)
const borderRight = parseFloat(fieldStyles.borderRightWidth)
const borderBottom = parseFloat(fieldStyles.borderBottomWidth)
const borderTop = parseFloat(fieldStyles.borderTopWidth)
const borderLeft = parseFloat(fieldStyles.borderLeftWidth)
document.addEventListener('scroll', () => {
  const rect = fieldElement.getBoundingClientRect()
  fieldDataElement.innerHTML = `<p>1. 
  client: (${Math.round(rect.left)}, ${Math.round(rect.top)}), 
  page: (${Math.round(rect.left + window.scrollX)}, ${Math.round(rect.top + window.scrollY)})</p>`
  fieldDataElement.innerHTML += `<p>2. 
  client: (${Math.round(rect.right)}, ${Math.round(rect.bottom)}),
  page:(${Math.round(rect.right + window.scrollX)}, ${Math.round(rect.bottom + window.scrollY)})</p>`
  fieldDataElement.innerHTML += `<p>3. 
  client: (${Math.round(rect.left + borderLeft)}, ${Math.round(rect.top + borderTop)}), 
  page: (${Math.round(rect.left + borderLeft + window.scrollX)}, ${Math.round(rect.top + borderTop + window.scrollY)})</p>`
  fieldDataElement.innerHTML += `<p>4. 
  client: (${Math.round(rect.right - borderRight)}, ${Math.round(rect.bottom - borderBottom)}), 
  page: (${Math.round(rect.right - borderRight + window.scrollX)}, ${Math.round(rect.bottom - borderBottom + window.scrollY)})</p>`
})

//?offsetWidth/Height
// Они содержат «внешнюю» ширину/высоту элемента, то есть его полный размер, включая рамки.
//?clientWidth/Height
//Эти свойства – размер области внутри рамок элемента.
//Они включают в себя ширину области содержимого вместе с внутренними отступами padding, но без прокрутки.
//Если нет внутренних отступов padding, то clientWidth/Height в точности равны размеру области содержимого внутри рамок за вычетом полосы прокрутки (если она есть).
//?clientTop/Left
// отступы внутренней части элемента от внешней.Они возникают, когда документ располагается справа налево. 
//?scrollWidth/Height
//Эти свойства – как clientWidth/clientHeight, но также включают в себя прокрученную (которую не видно) часть элемента.
//Эти свойства можно использовать, чтобы «распахнуть» элемент на всю ширину/высоту. 
//?element.style.height = `${element.scrollHeight}px`

//?scrollLeft/scrollTop
//ширина/высота невидимой, прокрученной в данный момент, части элемента слева и сверху.
//Другими словами, свойство scrollTop – это «сколько уже прокручено вверх».
//можно изменять elem.scrollTop += 10

//?getComputedStyle
//можно извлечь CSS-высоту и ширину. consol.log(getComputedStyle(elem).width), Но нужно учитывать, что getComputedStyle зависят от другого свойства – box-sizing.
//Его лучше не использовать, для того. чтобы узнать размер элемента. 

//Найти размер прокрутки снизу.
{
  const elem = document.querySelector('#example') as HTMLDivElement
  elem.addEventListener('scroll', () => {
    let scrollBottom = elem.scrollHeight - elem.scrollTop - elem.clientHeight
    console.log(scrollBottom)
  })
}

//Напишите код, который возвращает ширину стандартной полосы прокрутки.
{
  let elem = document.querySelector('#example') as HTMLDivElement
  elem.addEventListener('scroll', () => {
    let scrollWidth = elem.offsetWidth - elem.clientWidth - (elem.clientLeft * 2)
    console.log(scrollWidth)
  })
}


//Скрыть элемент по нажатию кнопки.
//Добавьте JavaScript к кнопке button, чтобы при нажатии элемент <div id="text"> исчезал.

{
  const but = document.querySelector('#but') as HTMLButtonElement
  const butText = document.querySelector('#text') as HTMLDivElement
  but.addEventListener('click', () => {
    butText.hidden = true
  })
}

//Спрятать себя.
//Создайте кнопку, которая будет скрывать себя по нажатию.

{
  const hideBut = document.querySelector('#hideButton') as HTMLButtonElement
  hideBut.addEventListener('click', () => {
    hideBut.hidden = true
  })
}

//Передвиньте мяч по полю.
//Требования:
//Центр мяча должен совпадать с местом нажатия мыши (если это возможно без пересечения краёв поля).
//CSS-анимация желательна, но не обязательна.
//Мяч ни в коем случае не должен пересекать границы поля.
//При прокрутке страницы ничего не должно ломаться.

//Заметки:
//Код должен уметь работать с различными размерами мяча и поля, не привязываться к каким-либо фиксированным значениям.
//Используйте свойства event.clientX/event.clientY для определения координат мыши при клике.

{
  const ball = document.querySelector('#ball') as HTMLImageElement
  const field = document.querySelector('#field1') as HTMLDivElement
  ball.style.left = Math.round(field.clientWidth / 2 - ball.offsetWidth / 2) + 'px'
  ball.style.top = Math.round(field.clientHeight / 2 - ball.offsetHeight / 2) + 'px'

  field.addEventListener('click', (event) => {
    let fieldCoords = field.getBoundingClientRect()
    let ballCoords = {
      top: event.clientY - fieldCoords.top - field.clientTop - ball.clientHeight / 2,
      left: event.clientX - fieldCoords.left - field.clientLeft - ball.clientWidth / 2
    }

    if (ballCoords.top < 0) ballCoords.top = 0
    if (ballCoords.left < 0) ballCoords.left = 0
    if (ballCoords.left + ball.clientWidth > field.clientWidth) {
      ballCoords.left = field.clientWidth - ball.clientWidth
    }
    if (ballCoords.top + ball.clientHeight > field.clientHeight) {
      ballCoords.top = field.clientHeight - ball.clientHeight
    }

    ball.style.top = ballCoords.top + 'px'
    ball.style.left = ballCoords.left + 'px'
  })
}



//Существует два способа обработать события:
//?с помощью on-свойств DOM-элементов;
//?методом addEventListener().
//Каждый DOM-элемент имеет большой набор свойств, которые начинаются на on:
//onclick;
//onscroll;
//onkeypress;
//onmouseenter;
//и так далее.Если в это свойство записать анонимную функцию, то эта функция
//будет вызываться каждый раз, когда браузер будет создавать событие, связанное с этим элементом.
//Такие функции называют функциями-обработчиками события.

//*Если обрабатывать события с помощью on-свойств, то получится добавить только одну функцию-обработчик на каждый элемент.
//*Часто одного обработчика недостаточно. Чтобы не создавать ограничение на пустом месте, используют альтернативный метод подписки на события — метод addEventListener().


//Координаты.
//Относительно окна браузера – как position:fixed,  будем обозначать эти координаты как clientX/clientY.

//Относительно документа – как position:absolute, будем обозначать эти координаты как pageX/pageY.

//?elem.getBoundingClientRect() возвращает координаты в контексте окна для минимального по размеру прямоугольника.
//x/y – X/Y-координаты начала прямоугольника относительно окна,
//width/height – ширина/высота прямоугольника (могут быть отрицательными).
//top/bottom – Y-координата верхней/нижней границы прямоугольника,
//left/right – X-координата левой/правой границы прямоугольника.
//?left = x
//?top = y
//?right = x + width
//?bottom = y + height

//document.elementFromPoint(x, y) возвращает самый глубоко вложенный элемент в окне, находящийся по координатам (x, y)
//?Синтаксис: let elem = document.elementFromPoint(x, y)

//Метод document.elementFromPoint(x,y) работает, только если координаты (x,y) относятся к видимой части содержимого окна.
//*Чтобы показать что-то около нужного элемента, мы можем вызвать getBoundingClientRect - текущая позиция в окне.
//*функция createMessageUnder(elem, html) ниже показывает сообщение под элементом

//*Две системы координат связаны следующими формулами:
//?pageY = clientY + высота вертикально прокрученной части документа.
//?pageX = clientX + ширина горизонтально прокрученной части документа.

//Функция getCoords(elem) берёт координаты в контексте окна с помощью elem.getBoundingClientRect() и добавляет к ним значение соответствующей прокрутки:

// получаем координаты элемента в контексте документа
// function getCoords(elem) {
//   let box = elem.getBoundingClientRect()

//   return {
//     top: box.top + window.pageYOffset,
//     right: box.right + window.pageXOffset,
//     bottom: box.bottom + window.pageYOffset,
//     left: box.left + window.pageXOffset
//   }
// }

//*Модифицированная функция createMessageUnder:
// function createMessageUnder(elem, html) {
//   let message = document.createElement('div');
//   message.style.cssText = "position:absolute; color: red";

//   let coords = getCoords(elem);
//   message.style.left = coords.left + "px";
//   message.style.top = coords.bottom + "px";
//   message.innerHTML = html;
//   return message;
// }

//Создать меню, которое по нажатию открывается либо закрывается:
{
  const sweet = document.querySelector('#sweeties') as HTMLButtonElement
  const sweetTitle = sweet.querySelector('.title') as HTMLSpanElement
  sweetTitle.addEventListener('click', () => {
    sweet.classList.toggle('open')
  })
}

//Есть список сообщений.
//При помощи JavaScript для каждого сообщения добавьте в верхний правый угол кнопку закрытия.

{
  const btns = document.querySelectorAll('.remove-button')
  for (let btn of btns) {
    btn.addEventListener('click', (e) => {
      const t = e.target as HTMLElement
      t.closest('.pane')?.remove()
    })
  }
}

//Сделайте так, чтобы при клике на ссылки внутри элемента id="contents" пользователю выводился вопрос о том,
//действительно ли он хочет покинуть страницу, и если он не хочет, то прерывать переход по ссылке.
//Содержимое #contents может быть загружено динамически и присвоено при помощи innerHTML. 
//Так что найти все ссылки и поставить на них обработчики нельзя. Используйте делегирование.
//Содержимое может иметь вложенные теги, в том числе внутри ссылок, например, <a href=".."><i>...</i></a>.

const viki = document.querySelector('#contents') as HTMLFieldSetElement
viki.addEventListener('click', (e) => {
  const target = e.target as Element
  const el = target.closest('a')
  if (el) {
    const answer = confirm('move to ' + el.href + '?')
    if (!answer) {
      e.preventDefault()
    }
  }
})

//Создайте галерею изображений, в которой основное изображение изменяется при клике на уменьшенный вариант.
//!Метод elem.closest(selector) возвращает ближайшего предка, соответствующего селектору. 

const galleryLarge = document.querySelector('#largeImg') as HTMLImageElement
document.addEventListener('click', (e) => {
  const target = e.target as HTMLElement
  let galleryMini = target.closest('a') as HTMLAnchorElement
  if (galleryMini) {
    galleryLarge.src = galleryMini.href
  }
  if (!galleryMini) return
  e.preventDefault()
})


//Генерация пользовательских событий
//let event = new Event(type[, options]);
//Где: type – тип события, строка, например "click" или же любой придуманный нами – "my-event".
//options – объект с тремя необязательными свойствами:
//bubbles: true/false – если true, тогда событие всплывает.
//cancelable: true/false – если true, тогда можно отменить действие по умолчанию. Позже мы разберём, что это значит для пользовательских событий.
//composed: true/false – если true

//После того, как объект события создан, мы должны запустить его на элементе,
//?вызвав метод elem.dispatchEvent(event)

//event.isTrusted
//Можно легко отличить «настоящее» событие от сгенерированного кодом.
//Свойство event.isTrusted принимает значение true для событий, порождаемых реальными действиями пользователя, и false для генерируемых кодом.


//Для некоторых конкретных типов событий есть свои специфические конструкторы
//UIEvent
//FocusEvent
//MouseEvent
//WheelEvent
//KeyboardEvent


//Пользовательские события
//Для генерации событий совершенно новых типов, таких как "hello", следует использовать конструктор new CustomEvent.
//Технически CustomEvent абсолютно идентичен Event за исключением одной небольшой детали.
//У второго аргумента-объекта есть дополнительное свойство detail, в котором можно указывать информацию для передачи в событие.

//*Вызов event.preventDefault() является возможностью для обработчика события сообщить в сгенерировавший событие код, что эти действия надо отменить.
//?событие должно содержать флаг cancelable: true. Иначе, вызов event.preventDefault() будет проигнорирован.