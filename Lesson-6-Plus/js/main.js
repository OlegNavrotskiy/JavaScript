'use strict';
let startBtn = document.getElementById('start'),
    budgetValue = document.getElementsByClassName('budget-value')[0],
    dayBudgetValue = document.getElementsByClassName('daybudget-value')[0],
    levelValue = document.getElementsByClassName('level-value')[0],
    expensesValue = document.getElementsByClassName('expenses-value')[0],
    optionalexpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
    incomeValue = document.getElementsByClassName('income-value')[0],
    monthSavingsValue = document.getElementsByClassName('monthsavings-value')[0],
    yearSavingsValue = document.getElementsByClassName('yearsavings-value')[0],

    expensesItem = document.getElementsByClassName('expenses-item'),
    expensesBtn = document.getElementsByTagName('button')[0],    
    optionalExpensesBtn = document.getElementsByTagName('button')[1],
    countBtn = document.getElementsByTagName('button')[2],
    optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
    incomeItem = document.querySelector('.choose-income'),
    checkSavings = document.querySelector('#savings'), 
    sumValue = document.querySelector('.choose-sum'),
    percentValue = document.querySelector('.choose-percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');

let money, time, sum = 0;

startBtn.addEventListener('click', function() {
  time = prompt("Введите дату в формате YYYY-MM-DD", '');
  money = +prompt("Ваш бюджет на месяц?", '');

  while (isNaN(money) || money == "" || money == null) {
    money = +prompt("Ваш бюджет на месяц?", '');
  }
  appData.budget = money;
  appData.timeData = time;
  budgetValue.textContent = money.toFixed();
  yearValue.value = new Date(Date.parse(time)).getFullYear();
  monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
  dayValue.value = new Date(Date.parse(time)).getDate();
  countBtn.disabled = false;
}); 


expensesBtn.disabled = true;

expensesItem[3].addEventListener('input', function () {
  let ans = 0;
for (let i = 0; i < 4; i++) {
  if (expensesItem[i].value.length != 0) {
    ans++;
  }
}
  if (ans > 3) {
    expensesBtn.disabled = false;
  }
});

optionalExpensesBtn.disabled = true;
optionalExpensesItem[2].addEventListener('input', function () {
  let ans = 0;
for (let i = 0; i < 3; i++) {
  if (optionalExpensesItem[i].value.length != 0) {
    ans++;
  }
}
  if (ans > 2) {
    optionalExpensesBtn.disabled = false;
  }
});

for (let i = 1; i < expensesItem.length; i = i+2) {
  expensesItem[i].addEventListener('keyup', function () {
      let x = expensesItem[i].value.charCodeAt(0);
      if (x > 47 && x < 58) {
        console.log("Ура");
      } else {
        alert('Только цифры!');
      }
  });
}

for (let i = 0; i < optionalExpensesItem.length; i++) {
  optionalExpensesItem[i].addEventListener('keyup', function () {
      let x = optionalExpensesItem[i].value.charCodeAt(0);
      if (x < 122) {
          alert('Только русские слова!');
      }
  });
}


countBtn.disabled = true;

expensesBtn.addEventListener('click', function() {
  let sum = 0;
  for (let i = 0; i < expensesItem.length; i++) {
    let a = expensesItem[i].value,
        b = expensesItem[++i].value;
      appData.expenses[a] = b;
      sum += +b;
  }
  expensesValue.textContent = sum;
});



optionalExpensesBtn.addEventListener('click', function() {
  optionalexpensesValue.textContent = '';
  for (let i = 0; i < optionalExpensesItem.length; i++) {
    let opt = optionalExpensesItem[i].value;
    appData.optionalExpenses[i] = opt;
    optionalexpensesValue.textContent += appData.optionalExpenses[i] + " "; 
  }
});

countBtn.addEventListener('click', function() {
  if (appData.budget != undefined) {
    appData.moneyPerDay = ((appData.budget - sum) / 30).toFixed();
    dayBudgetValue.textContent = appData.moneyPerDay;
  
    if (appData.moneyPerDay < 100) {
      levelValue.textContent = "Минимальный уровень достатка";
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
      levelValue.textContent = "Средний уровень достатка";
    } else if (appData.moneyPerDay > 2000) {
      levelValue.textContent = "Высокий уровень достатка";
    } else {
      levelValue.textContent = "Произошла ошибка";
    }
  } else {
    dayBudgetValue.textContent = "Произошла ошибка";
  }
});

incomeItem.addEventListener('input', function() {
  let items = incomeItem.value;
  appData.income = items.split(", ");
  incomeValue.textContent = appData.income;
});

checkSavings.addEventListener('click', function() {
  if (appData.savings == true) {
    appData.savings = false;
  } else {
    appData.savings = true;
  }
});

sumValue.addEventListener('input', function() {
  if (appData.savings == true) {
    let sum = +sumValue.value,
        percent = +percentValue.value;

    appData.monthIncome = sum / 100 / 12 * percent;
    appData.yearIncome = sum / 100 * percent;

    monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
    yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
  }
});

percentValue.addEventListener('input', function() {
  if (appData.savings == true) {
    let sum = +sumValue.value,
        percent = +percentValue.value;

    appData.monthIncome = sum / 100 / 12 * percent;
    appData.yearIncome = sum / 100 * percent;

    monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
    yearSavingsValue.textContent = appData.yearIncome.toFixed(1);    
  }
});

let appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: false,
};