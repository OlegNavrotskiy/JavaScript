'use strict';

let money = +prompt("Ваш бюджет на месяц?"),
    time =  prompt("Введите дату в формате YYYY-MM-DD"),
    oneDay,
    answer1 = prompt("Введите обязательную статью расходов в этом месяце"),
    answer2 = +prompt("Во сколько обойдется?"),
    answer3 = prompt("Введите обязательную статью расходов в этом месяце"),
    answer4 = +prompt("Во сколько обойдется?"),
    appData = {
      budget: money,
      timeData: time,
      expenses: {},
      optionalExpenses: '',
      income: [],
      savings: false
    };
appData.expenses[answer1] = answer2;
appData.expenses[answer3] = answer4;
oneDay = (money - +appData.expenses[answer1] - +appData.expenses[answer3]) / 30;
alert("Ваш бюджет на 1 день - " + oneDay);
console.log(appData);