'use strict';

let groupFirst = {
  money: +prompt("Ваш бюджет на месяц?"),
  time: prompt("Введите дату в формате YYYY-MM-DD"),
  },
  oneDay,
  appData = {
    budget: groupFirst.money,
    timeData: groupFirst.time,
    expenses: {
      answerFirst: prompt("Введите обязательную статью расходов в этом месяце"),
      answerSecond: +prompt("Во сколько обойдется?"),
    },
    optionalExpenses: '',
    income: [],
    savings: false
  };
oneDay = (groupFirst.money - appData.expenses.answerSecond) / 30;
alert("Ваш бюджет на 1 день - " + oneDay);
console.log(appData);