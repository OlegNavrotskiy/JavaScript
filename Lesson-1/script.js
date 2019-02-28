'use strict';

let money = +prompt("Ваш бюджет на месяц?"),
    time = prompt("Введите дату в формате YYYY-MM-DD"),  
    answerFirst = prompt("Введите обязательную статью расходов в этом месяце"),
    answerSecond = +prompt("Во сколько обойдется?"),
    appData = {
      budget: money,
      timeData: time,
      expenses: {
        answerFirst, answerSecond
      },
      optionalExpenses: '',
      income: [],
      savings: false
    },
    oneDay = (money-answerSecond)/30;
alert("Ваш бюджет на 1 день - " + oneDay);    
console.log(appData);

