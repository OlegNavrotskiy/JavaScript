'use strict';

const num = 33721;
let multiplication,
  multiplicationStr,
  cube,
  finish;
multiplicationStr = String(num);
multiplication = +multiplicationStr[0] * +multiplicationStr[1] * +multiplicationStr[2] * +multiplicationStr[3] * +multiplicationStr[4];
cube = multiplication ** 3;
finish = String(cube);
console.log(multiplication);
console.log(cube);
alert(finish[0] + finish[1]);


