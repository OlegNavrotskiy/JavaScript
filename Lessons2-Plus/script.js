'use strict';

let week = [],
    today = "Пт";

for (let i = 0; i < 7; i++) {
    week.push(prompt("Введите дни недели", ''));
if (week[i] == "Сб" || week[i] == "Вс" ||
  week[i] == "Суббота" || week[i] == "Воскресенье") {
  document.write(`<p><b>${week[i]}</b></p>`);
} else {
  if (week[i] == today) {
    document.write(`<p><i>${week[i]}</i></p>`);
  } else {
    document.write(`<p>${week[i]}</p>`);
  }
}
}

//Можно сделать заполнение массива через push как на первом задании,
//но я хотел что бы было по разному
let arr = ["151", "2458", "7456", "8964", "324789", "41589", "718962"];

for (let i = 0; i < arr.length; i++) {
if (arr[i].charAt(0) == "3" || arr[i].charAt(0) == "7") {
  console.log(arr[i]);
}
}