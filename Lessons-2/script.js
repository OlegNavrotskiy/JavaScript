'use strict';
let money = +prompt("Ваш бюджет на месяц?", ''),
    time = prompt("Введите дату в формате YYYY-MM-DD", '');

let appData = {
      budget: money,
      timeData: time,
      expenses: {},
      optionalExpenses: {},
      income: [],
      savings: false
  };

for (let i = 0; i < 2; i++) {
    let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
        b = prompt("Во сколько обойдется?", '');

//Второй способ
/*     let i = 0,
      a, b;
    while (i < 2) {
      a = prompt("Введите обязательную статью расходов в этом месяце", '');
      b = prompt("Во сколько обойдется?", '');
      i++; */
    
//Третий способ (цикл работает, но доп.условия проверки на ввод нужно изменять)
/*     let i = 0,
        a, b;
    do {
      a = prompt("Введите обязательную статью расходов в этом месяце", '');
      b = prompt("Во сколько обойдется?", '');
      i++;
    }
    while (i < 2); */

    if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) !=
      null && a != '' && b != '' && a.length < 50) {
      console.log("Done");
      appData.expenses[a] = b;
    } else {
      console.log("Некоректная информация в ответах группы №" + i);
      console.log(appData.expenses);
      i--;
    }
  } 

appData.moneyPerDay = appData.budget / 30;
alert("Ежедневный бюджет: " + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
  console.log("Минимальный уровень достатка");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
  console.log("Средний уровень достатка");
} else if (appData.moneyPerDay > 2000) {
  console.log("Высокий уровень достатка");
} else {
  console.log("Произошла ошибка");
}