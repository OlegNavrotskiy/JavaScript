'use strict';

let dataNow = new Date(),
    hours = dataNow.getHours(),
    minutes = dataNow.getMinutes(),
    second = dataNow.getSeconds(),
    day = dataNow.getDay(),
    date = dataNow.getDate(),
    month = dataNow.getMonth(),
    year = dataNow.getFullYear(),
    timeBtn = document.querySelector("#timeNow"),
    str, num,
    result = document.querySelector("#result");

dataNow.setMonth(dataNow.getMonth() + 1);

hours = dataNow.getHours().toString();
minutes = dataNow.getMinutes().toString();
second = dataNow.getSeconds().toString();
day = dataNow.getDay().toString();
date = dataNow.getDate().toString();
month = dataNow.getMonth().toString();
year = dataNow.getFullYear();

function showData(arg) {
//Первый способ
  if (arg.length < 2) {
    arg = "0" + arg;
  } return arg;
}
  str = showData(hours) + ":" + showData(minutes) + ":" + showData(second) +
   "    " + showData(date) + "." + showData(month) + "." + year;
  timeBtn.value = str;

//Второй способ
/* let timeBtn = document.querySelector("#timeNow"),
    today = new Date().toLocaleString();
timeBtn.value = today; */

showData(dataNow);

function dayWeek(day) {
  let dayWeekInput = document.querySelector("#dayWeek"),
      week = [
      "Воскресенье",
      "Понедельник",
      "Вторник",
      "Среда",
      "Четверг",
      "Пятница",
      "Суббота"
      ];
  week.forEach(function(item, i) {
    if (i == day) {
      dayWeekInput.value = item;
    }
  });
}
dayWeek(day);

function numDay(dataNow) {
  let startDate = document.body.querySelector("#start").value,
      endDate = document.body.querySelector("#end").value,
      oneDay = 24 * 60 * 60 * 1000, //количество миллисекунд за 24 часа
      numDay = 0;

  startDate = new Date(startDate); //Создает объект Date, значение которого равно количеству миллисекунд
  endDate = new Date(endDate); //Создает объект Date, значение которого равно количеству миллисекунд
  numDay = Math.floor((endDate - startDate) / oneDay); 

  result.value = numDay;
}
