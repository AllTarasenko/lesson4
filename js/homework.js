/*ДЗ 1

Написати свою реалізацію функції isNaN.

Умови виконання ДЗ:
- Не використовувати функції або інші матеріали які ми не вивчали
- Намагайтесь робити ДЗ самостійно та не дивитися будьякі підказки
- Не викорисутовувати isNaN/ Number.isNaN
- Будь ласка, надайте наступні дані для перевірки вашої роботи:
- Створіть гілку js_homework4.
- Додати туди ваше домашне завдання
Вислати вашу гілку
Nan != null, underfined, false, '', 0 , Nan


 */

console.log(isNaN(undefined))
console.log(isNaN("42"));
console.log(isNaN("foo"));
console.log(isNaN(NaN));


function myIsNaN (value){
    let a = Number(value);
    console.log(a)
    if (a !== NaN ) {
        return true
    }
    return false
}
console.log(myIsNaN(undefined))
console.log(myIsNaN("42"));
console.log(myIsNaN("foo"));
console.log(myIsNaN(NaN));


/*ДЗ 2

Необхідно написати власну реалізацію функцій padEnd та padStart, але у вас повинна бути одна функція pad(‘qwerty’, ‘+’, true),
яка приймає чотири аргументи:
- рядок, до якого буде додаватися символ.
- символ, який буде додаватися.
- Скільки додавати символів
- булеве значення, яке вказує, куди додавати символ. Якщо true, то до початку, якщо false, то в кінець.
Останній аргумент повинен працювати як і в оригінальній функції, а саме якщо наш рядок з 5 символів, а ви вказуєте знаачення 6,
то додаєте тільки один символ

Умови виконання ДЗ
- Функція повина повертати новий рядок
- Не використовувати функції або інші матеріали які ми не вивчали
- Намагайтесь робити ДЗ самостійно та не дивитися будьякі підказки
- Будь ласка, надайте наступні дані для перевірки вашої роботи:
- Створіть гілку js_homework4.
- Додати туди ваше домашне завдання
- Вислати вашу гілку*/

function pad(line, symbol, num, place){

        if ( place === true){
            console.log(symbol.repeat(num) + line)
        } else {
            console.log(line + symbol.repeat(num))
        }
    }

pad('texxt', '*', 10, false)

/*ДЗ3


Перевірка теорії ймовірності. Напишіть функцію яка буде генерувати певну кількість випадкових чисел в діапазоні від 100 до 1000 включно.
Порахувати кількість парних та непарних серед них. Обчислити відсоткове співвідношення - чи буде воно близьке до 50%50?
Приклад функції checkProbabilityTheory(count). Парметр count буде вказувати скільки разів буде генеруватися випадкове число.


Умови виконання ДЗ
- Функція виводить інформацію
- Кількість згенерованих чисел: кількість чисел
- Парних чисел: кількість парних чисел
- Не парних чисел: кількість не парних чисел
- Відсоток парних до не парних:
- Не використовувати функції або інші матеріали які ми не вивчали
- Намагайтесь робити ДЗ самостійно та не дивитися будьякі підказки
- Будь ласка, надайте наступні дані для перевірки вашої роботи:
- Створіть гілку js_homework4.
- Додати туди ваше домашне завдання
- Вислати вашу гілку*/

/*
 function numberSequence (count) {
     let rnd = Math.random();
     let posSum = 0;
     let posMinus = 0;
     let percent = 0;

     for (let i = 0; i < count; i++) {
         rnd = 100 + Math.random(rnd) * 902;
         rnd = Math.round(rnd);
         console.log(rnd)

         if (rnd % 2 == 0) {
             posSum += 1
         } else {posMinus += 1}
     }
        console.log('Кількість сгенерованих чісел = ' + count)
        console.log('Кількисть парних чисел = ' + posSum)
        console.log('Кількість непраних чисел = ' + posMinus)

        percent = (posMinus * 100) / posSum;
        console.log('Відсоток парних до не парних = ' + percent + '%')
 }

 console.log(numberSequence(5))*/