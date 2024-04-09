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
  salary: number,
}
const employees: Employees[] = [
  { name: 'Федотова Арина Глебовна', department: 'ads', salary: 2100 },
  { name: 'Голикова Мария Филипповна', department: 'prog', salary: 3500 },
  { name: 'Панин Александр Германович', department: 'ads', salary: 2100 },
  { name: 'Романов Эмиль Макарович', department: 'prog', salary: 3100 },
  { name: 'Смирнов Никита Александрович', department: 'prog', salary: 3800 },
  { name: 'Александрова Майя Вячеславовна', department: 'prog', salary: 4500 },
  { name: 'Крылов Богдан Максимович', department: 'disign', salary: 2100 },
  { name: 'Мухина Айша Константиновна', department: 'disign', salary: 2100 },
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

function sortEmployees(arr: Employees[], key: 'name' | 'department' | 'salary') {
  return arr.sort((a, b) => {
    if (a[key] > b[key]) return 1
    if (a[key] < b[key]) return -1
    return 0
  })
}
console.log(sortEmployees(employees, 'name'))
console.log(sortEmployees(employees, 'department'))
console.log(sortEmployees(employees, 'salary'))

// 2.3. Написать функцию, аналогичную описанной в задании 2.2., но сортирующую в обратном порядке
function sortReversEmployees(arr: Employees[], key: 'name' | 'department' | 'salary') {
  return arr.sort((a, b) => {
    if (a[key] < b[key]) return 1
    if (a[key] > b[key]) return -1
    return 0
  })
}
console.log(sortReversEmployees(employees, 'name'))
console.log(sortReversEmployees(employees, 'department'))
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

function sortEmpl(arr: Employees[], key: 'name' | 'department' | 'salary') {//дубль 2.2 + localeCompare
  console.log(arr.sort((a, b) => a.name.localeCompare(b.name)))
  console.log(arr.sort((a, b) => a.department.localeCompare(b.department)))
  console.log(arr.sort((a, b) => a.salary - b.salary))
}
sortEmpl(employees, 'name')
sortEmpl(employees, 'department')
sortEmpl(employees, 'salary')

// 3.3. Написать функцию, аналогичную описанной в задании 3.2., но сортирующую в обратном порядке

function sortBackEmpl(arr: Employees[], key: 'name' | 'department' | 'salary') {//дубль 2.2 + localeCompare
  console.log(arr.sort((a, b) => b.name.localeCompare(a.name)))
  console.log(arr.sort((a, b) => b.department.localeCompare(a.department)))
  console.log(arr.sort((a, b) => b.salary - a.salary))
}
sortBackEmpl(employees, 'name')
sortBackEmpl(employees, 'department')
sortBackEmpl(employees, 'salary')

// 3.4. Написать функцию, принимающую массив работников и имя, и возвращающую объект сотрудника или undefined

function listNewEmployees(arr: Employees[], name: string) {//дубль 2.4
  for (let el of arr) {
    if (el.name == name) {
      return el
    }
  }
  return undefined
}
console.log(listNewEmployees(employees, 'Крылов Богдан Максимович'))

// 3.5. Написать функцию, принимающую массив работников и название отдела, и возвращающую новый массив, содержащий только сотрудников переданного отдела

function newArrEmp(arr: Employees[], department: string) {//дубль 2.5
  return arr.filter((el) => el.department == department)
}
newArr(employees, 'ads')
console.log(newArrEmp(employees, 'disign'))

// 3.6. Написать функцию, принимающую массив работников и возвращающую сумму зарплат. Вызвать функцию по каждому отделу и по общему массиву

function paymentNewEmployees(arr: Employees[]) {//дубль 2.6
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
function conclusionList(arr: Employees[]){
  let html =''
  for (let el of arr){
    html +=`<ul>${el.salary}</ul>`
  }
  sumSalary.innerHTML = html
}
 console.log(conclusionList(employees))

// const listEmpl = document.getElementById('employeesList') as HTMLDivElement//переписать
// console.log(listEmpl)


// 3.9. Используя массив, полученный в 3.1. Вывести кнопки с названиями отделов + кнопку "Все отделы"
// использовать data-атрибут (data-dep), в который поместить название отдела. Для кнопки "Все отделы" data-dep="all"

const buttonAds = document.getElementById('butAds') as HTMLDivElement
console.log(buttonAds)
const buttonProg = document.getElementById('butProg') as HTMLDivElement
console.log(buttonProg)
const buttonDisign = document.getElementById('butDisign') as HTMLDivElement
console.log(buttonDisign)
const allDepartments = document.getElementById('allDep') as HTMLDivElement
console.log(allDepartments)
// 3.10. Используя div, полученный в задании 3.7
// div37.addEventListener('click', function (e) {
// const target = e.target as HTMLElement
// if (target.tagName == 'BUTTON' && target.dataset.dep) {
// в зависимости от значения dep выводить в список (ul 3.8) тех сотрудников, которые работают в данном отделе, либо всех, если target.dataset.dep=='all'. Используем логическое ветвление и уже написанные функции
// в div (3.8) выводить сумму зарплат
// }
// })
