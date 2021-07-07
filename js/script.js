"use strict";

// Здание1 ***

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();

const personalMovieBd = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    geners: [],
    privat: false
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Какой последний фильм посмотрели?', ''),
            b = prompt('Оцените его', '');

        if (a != null && b != null && a != "" && b != "" && a.length < 5) {
            personalMovieBd.movies[a] = b;
            console.log('OK');
        } else {
            console.log('ERR');
            i--;
        }
    }
}

rememberMyFilms();

function detectedPersonalLevel() {
    if (personalMovieBd.count <= 10) {
        alert("Просмотрено довольно мало фильмов");
    } else if (personalMovieBd.count >= 10 && personalMovieBd.count < 30) {
        alert("Вы класичесский зритель ");
    } else if (personalMovieBd.count >= 30) {
        alert("Вы киноман");
    } else {
        alert("Ошибка");
    }
}

// detectedPersonalLevel();

function showMyBd(hidden) {
    if (!hidden) {
        console.log(personalMovieBd);
    }
}

showMyBd(personalMovieBd.privat);

function writeYourGeners() {
    for (let i = 1; i <= 3; i++) {
        personalMovieBd.geners[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
    }
}

writeYourGeners();


// Циклы ***

// if (1) {
//     console.log('ok')
// } else {
//     console.log('no')
// }


// if (num < 49) {
//     console.log('Error');
// } else if (num > 100) {
//     console.log('Много');
// }else {
//     console.log('ok');
// }

// (num === 50) ? console.log('OK') : console.log('ERR');


// switch (num) {
//     case '49':
//         console.log('NO');
//         break;
//     case '100':
//         console.log('NO');
//         break;
//     case '50':
//         console.log('YES');
//         break;
//     default:
//         console.log('Not today')
// }

// let num = '50';

// while (num <= 55) {
//     console.log(num);
// num++;
// }

// do {
//     console.log(num);
//     num++;
// }
//
// while (num < 55);

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

