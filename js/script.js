"use strict";

// Задание1 ***

// let numberOfFilms;
//
// function start() {
//     numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
//
//     while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
//         numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
//     }
// }
//
// start();
//
// const personalMovieBd = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     geners: [],
//     privat: false
// };
//
// function rememberMyFilms() {
//     for (let i = 0; i < 2; i++) {
//         const a = prompt('Какой последний фильм посмотрели?', ''),
//             b = prompt('Оцените его', '');
//
//         if (a != null && b != null && a != "" && b != "" && a.length < 5) {
//             personalMovieBd.movies[a] = b;
//             console.log('OK');
//         } else {
//             console.log('ERR');
//             i--;
//         }
//     }
// }
//
// rememberMyFilms();
//
// function detectedPersonalLevel() {
//     if (personalMovieBd.count <= 10) {
//         alert("Просмотрено довольно мало фильмов");
//     } else if (personalMovieBd.count >= 10 && personalMovieBd.count < 30) {
//         alert("Вы класичесский зритель ");
//     } else if (personalMovieBd.count >= 30) {
//         alert("Вы киноман");
//     } else {
//         alert("Ошибка");
//     }
// }
//
// // detectedPersonalLevel();
//
// function showMyBd(hidden) {
//     if (!hidden) {
//         console.log(personalMovieBd);
//     }
// }
//
// showMyBd(personalMovieBd.privat);
//
// function writeYourGeners() {
//     for (let i = 1; i <= 3; i++) {
//         personalMovieBd.geners[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
//     }
// }
//
// writeYourGeners();
//

// Циклы ***


// for (let i = 1; i < 10; i++) {
//     if (i === 6) {
//         // break;
//         continue;
//     }
//     console.log(i)
// }

// Функции ***

// let num = 20;
//
// function showFirstMessage (text) {
//     console.log(text);
//     let num = 10
// }
//
// showFirstMessage("Hello")

// console.log(calc(4, 3))
// console.log(calc(5, 6))
// console.log(calc(10, 6))

// function calc(a, b) {
//     return (a + b);
// }


// function ret() {
//     let num = 41;
//     return num;
// }
//
// const anotherNum = ret();
// console.log(anotherNum);

//
// const logger = function () {
//     console.log("hello")
// };
//
// logger();

// const calc = (a, b) => a + b;

// Методы ***

// const str = 'tEst';
// const arr = [1, 2,3]
//
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());

// const friut = "some fruit";
//
// console.log(friut.indexOf("q"));

// const logg = "ROMAN ROMAN";

// console.log(logg.slice(2, 5));
//
// console.log(logg.substring(2, 5));
//
// console.log(logg.substr(6, 3));
//
// const num = 12.4;
// console.log(Math.round(num));
//
// const test = "12.2px";
// console.log(parseInt(test));
// console.log(parseFloat(test));
//
// const learn = "0123456789"
//
// console.log(learn.slice(2 , 6))

// function  first () {
//     setTimeout(function (){
//         console.log(1);
//     },500);
// }
// function second () {
//     console.log(2);
// }
//
// first();
// second();
//
// function  learnJS(lang, callback) {
//     console.log(`Я учу: ${lang}`);
//     callback();
// }
//
// function done () {
//     console.log('Я прошел этот урок!');
//
// }
// learnJS('JavaScript', done);

//
// const options = {
//     name: 'test',
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: 'black',
//         bg: 'red'
//     },
//     makeTest: function () {
//         console.log("Test")
//     }
// };
//
// options.makeTest();
//
// const {border, bg} = options.colors;
// console.log(border);

// console.log(Object.keys(options).length);

// console.log(options.name);
//
// delete options.name;
//
// console.log(options);
//
// let counter = 0;
//
// for (let key of options) {
//     if (typeof (options[key]) === 'object') {
//         for (let i in options[key]) {
//             console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
//         }
//     } else {
//         console.log(`Свойство ${key} имеет значение ${options[key]}`);
//         counter++;
//
//
//     }
// }
//
// console.log(counter)

// arr.pop();
// arr.push(10);
//
// console.log(arr)

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }
//
// function compareNum (a, b) {
//     return a - b;
// }

// const str = prompt('','');
//
// const products = str.split(', ')
//
// products.sort();
// console.log(products.join(';'));

//
// let a=5,
//     b=a;
//
// b = b + 5;
// console.log(b);
// console.log(a);
//
// const obj = {
//     a: 5,
//     b: 1
// }
//
// const copy = obj;
//
// copy.a = 10;
//
// console.log(copy);
// console.log(obj);

function copy (mainObj) {
let objCopy ={};

let key;
for(key in mainObj) {
    objCopy[key] = mainObj[key];
}
return objCopy;

}

const numbers = {
    a: 2,
    b: 5,
    c: {
        x:7,
        y:4
    }
}

const newNumbers = copy(numbers);

newNumbers.a = 10;

console.log(newNumbers);
console.log(numbers);

const add = {
    d: 17,
    e: 20
};

console.log(Object.assign(numbers, add));

const clone = Object.assign({},add);

clone.d = 20;

console.log(add);
console.log(clone);

const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();
newArray[1] = 'afdfdf'
console.log(newArray);
console.log(oldArray);

const video = ['youtube', 'vimeo', 'rutube'],
    blogs = ['wordpress', 'livejournal', 'blogger'],
    internet = [...video, ...blogs, 'vk', 'facebook'];

console.log(internet);
