'use strict';

let num = 33721,
  multi = 1,
  cube,
  fin1, fin2,
  finish;
num = String(num).split("");
num.forEach(function (e) {
  multi *= e;
});
cube = multi ** 3;
fin1 = String(cube).charAt(0);
fin2 = String(cube).charAt(1);
finish = fin1 + " и " + fin2;
console.log("Умножение цифр числа 33721 - " + multi);
console.log("Третья степень - " + cube);
alert("Первые две цифры полученого числа - " + finish);