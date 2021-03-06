'use strict';
let money, time;

function start() {
  money = +prompt("Ваш бюджет на месяц?", '');
  while (isNaN(money) || money == "" || money == null) {
    money = +prompt("Ваш бюджет на месяц?", '');
  }
  time = prompt("Введите дату в формате YYYY-MM-DD", '');
}
start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    chooseExpenses: function() {
      for (let i = 0; i < 2; i++) {
        let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
            b = prompt("Во сколько обойдется?", '');
        if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) !=
          null && a != '' && b != '' && a.length < 50) {
          appData.expenses[a] = b;
        } else {
            i--;
        }
      } 
    },
    detectDayBudget: function() {
      appData.moneyPerDay = (appData.budget / 30).toFixed();
      alert("Ежедневный бюджет: " + appData.moneyPerDay);
    },
    detectLevel: function() {
      if (appData.moneyPerDay < 100) {
        console.log("Минимальный уровень достатка");
      } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log("Средний уровень достатка");
      } else if (appData.moneyPerDay > 2000) {
        console.log("Высокий уровень достатка");
      } else {
        console.log("Произошла ошибка");
      }
    },
    checkSavings: function() {
      if (appData.savings == true) {
        let save = +prompt("Какова сумма накоплений?"),
            percent = +prompt("Под какой процент?");
        appData.monthIncome = save/100/12*percent;
        alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
      }
    },
    chooseOptExpenses: function() {
      for (let i = 1; i < 4; i++) {
        let ans1 = prompt("Статья необязательных расходов?");
          while (ans1 == "" || ans1 == null) {
            ans1 = prompt("Статья необязательных расходов?");
          }
        appData.optionalExpenses[i] = ans1;
      }
    },
    chooseIncome: function() {
      let items = prompt("Что принесет дополнительный доход? (Перечислете через запятую)", '');
      while (typeof (items) !== 'string' || items == '' || items ==null) {
        items = prompt("Что принесет дополнительный доход? (Перечислете через запятую)", '');
      }
        appData.income = items.split(", ");
        appData.income.push(prompt("Может что-то еще?"));
        appData.income.sort();
        appData.income.forEach(function (item, i) {
          let n = i + 1;
          console.log('Способ доп. заработка: ' + n + " - " + item);
        });
    }
};
for (let key in appData) {
  console.log('Наша программа включает в себя данные: ' + key+ ': ' + appData[key]);
}