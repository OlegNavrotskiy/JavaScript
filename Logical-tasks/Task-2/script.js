'use strict';
// Для каждого элемента X данного массива подсчитайте, сколько элементов справа от X меньше, чем X. 

function funcNum(arr) {

let calc = 0,
    arrNew = [];
for (let j = 0; j < arr.length; j++) {
calc = 0;
for (let i = j+1; i < arr.length; i++) {
  if ( arr[j] > arr[i]) {
    calc++;
  }
}
arrNew.push(calc);
}
console.log(arr);
console.log(arrNew);
}

funcNum([15,1,2,3,0,12,4]);

