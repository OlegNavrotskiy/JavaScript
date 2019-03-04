'use strict';

let str = "урок-3-был слишком легким";
//Задание 1
function startingBigWord() {
  str = str[0].toUpperCase() + str.slice(1);
  console.log(str);
}
startingBigWord();

//Задание 2
function replaceAll() {
  str = str.replace(/-/g," ");
  console.log(str);
}
replaceAll();

//Задание 3
function deleteWord () {
  let light1 ,light = "легким";
  str = str.replace(light,"");
  light1 = light.slice(-2);
  light = light.replace(light1,"о");
  console.log(str);
  console.log(light);
}
deleteWord();

//Задание 4
let sqrt, 
    cube = 0,
    arr = [20, 33, 1, "Человек", 2, 3];
for (let i=0; i < arr.length; i++) {
  if (typeof(arr[i]) == "string") {
    arr.splice(i, 1);
  }
}
arr.forEach(function(e) {
  cube += Math.pow(e,3);
});
sqrt = Math.sqrt(cube);
console.log(sqrt.toFixed(2));

//Задание 5
str ="    Если строка более 50 знаков - то после 50го символа часть текста скрывается и вместо них появляются три точки (...)     ";
console.log(str);

function myFunction(str) {
  if (typeof str !== "string") {
    console.log(" Не строка");
  } else {
    str = str.trim();
    let slic = str.slice(0, 50);
    if (slic.length < str.length) {
      return (slic += "...");
    }
    console.log(slic);
  }
}
console.log(myFunction(str));