function getFriendlyNumbers(start, end) {
// Проверка на правильность ввода аргументов функции
let friendlyNums = [];
  if (
    typeof start == "number" &&
    typeof end == "number" &&
    1 <= start && start <= end &&
    parseInt(start) == start &&
    parseInt(end) == end ) {
//Ищем два элемента
      for (let i = start; i <= end; i++) {
        for (let j = start; j <= i; j++) {
          if (
//Проверяем через созданую функцию сумм делителей на повторение
            getDivisorsSum(j) === i &&
            getDivisorsSum(j) !== j &&
            getDivisorsSum(i) === j &&
            getDivisorsSum(i) !== i &&
            getDivisorsSum(i) > start) 
            {
//Записываем массив с элементами в массив дружественных чисел
            friendlyNums.push([i, j].sort());
            }
          }
        }
      } else {
//Возвращаем false если главные условие не выполняются
        return false;
      }
//Выводим в консоль наш полученный массив
      console.log(friendlyNums);
      return friendlyNums;
    }
//Проверка на работоспособность
getFriendlyNumbers(1, 1);





//Массив делителей
function getDivisors(num) {
  let arrDivisors = [];
  for (let i = 1; i < num; i++) {
    if (num % i == 0) {
      arrDivisors.push(i);
    }
  }
  return arrDivisors;
}

//Сумма элементов массива
function getSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

//Сумма делителей
function getDivisorsSum(num) {
  return getSum(getDivisors(num));
}

module.exports = {
    firstName: 'Oleg',
    secondName: 'Navrotskiy',
    task: getFriendlyNumbers
}