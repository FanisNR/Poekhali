
/* Обратите внимание на получамый результат.
 * Обсудите с консультантом почему получается именно такой рзультат в каждом из примеров.
 * Поразмышляйте как добиться более предсказуемого результата.
 */

let year = 2021;
let age = 34;

// Выведите в консоль фразу "Я родился в 1987 году" используя переменные year, age и шаблонную строку.
console.log(``);

let one = ' 1';
let otherOne = 1;
// Выведите в консоль строгое (==) и не строгое (===) сравнение этих двух значений.
// Обсудите с консультантом полученный результат. В каких случаях следует применять
// строгое, а в каких не строгое равенство.

// Попробуйте привести к boolean типу значения с помощью конструкции
// Boolean()
// (144) (0) (true) (false) ({}) ({ name: 'Вася' }) ([]) ([1, 2, 3])

let year = "1987";
const IWasBorn = function () {
    let answer = `Я родился в ${year} году`;

    console.log(answer);
    
}
IWasBorn(year);

class Years {
    constructor(age) {
        this.age = age;
        this.old = function () {
            const now = new Date();
            return now.getFullYear() - this.age;
        };
    }
}
const abc = new Years(34)

console.log(`Я родился в`, abc.old(), `году`);






/* деление (99 / 3) (2 / 4) (144 / 0) ('4' / 2) ('1 2' / 5) (23 / Infinity)  */
const division = (99 / 3) 
console.log(division);
const divisionString = ('4' / 2) 
console.log(divisionString);
const divisionlongString = ('1 2' / 5) 
console.log(divisionlongString);
const divisionInfinity = (23 / Infinity) 
console.log(divisionInfinity);


 /** умножение ('22' * 2) ('one' * 2) (0.5 * 2) (.2 * 2)  */
const multiplication = ('22' * 2) 
console.log(multiplication);
const multiplicationString = ('one' * 2) 
console.log(multiplicationString);
const multiplicationFractional = (0.5 * 2) 
console.log(multiplicationFractional);
const multiplicationDotFractional = (.2 * 2) 
console.log(multiplicationDotFractional);

 /** сложение ('3' + 2) (2 + +'3') (12n + 2)  */
const addition = ('3' + 2) 
console.log(addition);
const additionTwoPlus = (2 + + '3') 
console.log(additionTwoPlus);
const additionMulti = (12n + 2) 
console.log(additionMulti);

 /** вычитание ('23' - '3') ('23' - 3)  */
const subtractionString = ('23' - '3') 
console.log(subtractionString);
const subtractionStringNumb = ('23' - 3) 
console.log(subtractionStringNumb);

/* Обратите внимание на получамый результат.
 * Обсудите с консультантом почему получается именно такой рзультат в каждом из примеров.
 * Поразмышляйте как добиться более предсказуемого результата.
 */

