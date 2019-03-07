'use strict';

let dataNow = new Date(),
    hours = dataNow.getHours(),
    minutes = dataNow.getMinutes(),
    second = dataNow.getSeconds(),
    day = dataNow.getDay(),
    date = dataNow.getDate(),
    month = dataNow.getMonth(),
    year = dataNow.getFullYear(),
    result = document.querySelector("#result");

function showData(dataNow) {
  let timeBtn = document.querySelector("#timeNow"),
      str = "";
  hours = dataNow.getHours().toString();
  minutes = dataNow.getMinutes().toString();
  second = dataNow.getSeconds().toString();
  day = dataNow.getDay().toString();
  date = dataNow.getDate().toString();
  month = dataNow.getMonth().toString();
  year = dataNow.getFullYear();

  if (hours.length < 2) {
    hours = "0" + hours;
  }
  if (minutes.length < 2) {
    minutes = "0" + minutes;
  }
  if (second.length < 2) {
    second = "0" + second;
  }
  if (date.length < 2) {
    date = "0" + date;
  }
  if (month.length < 2) {
    month = "0" + month;
  }
  str = hours + ":" + minutes + ":" + second + "    " + date + "." + month + "." + year;
  timeBtn.value = str;
}
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
      endData = document.body.querySelector("#end").value,
      oneDay = 24 * 60 * 60 * 1000, //количество миллисекунд за 24 часа
      numDay = 0;

  startDate = new Date(startDate); //Создает объект Date, значение которого равно количеству миллисекунд
  endData = new Date(endData); //Создает объект Date, значение которого равно количеству миллисекунд

  numDay = (endData - startDate) / oneDay; 

  result.value = numDay;
}
