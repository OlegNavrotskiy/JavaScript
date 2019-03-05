'use strict';

let friendlyNums = [];

function getFriendlyNumbers(start, end) {
  if (
    typeof start == "number" &&
    typeof end == "number" &&
    1 <= start && start <= end &&
    parseInt(start) == start &&
    parseInt(end) == end ) {
      for (let i = start; i <= end; i++) {
        for (let j = start; j <= i; j++) {
          if (
            getDivisorsSum(j) === i &&
            getDivisorsSum(j) !== j &&
            getDivisorsSum(i) === j &&
            getDivisorsSum(i) !== i &&
            getDivisorsSum(i) > start) 
            {
              friendlyNums.push([i, j].sort());
            }
          }
        }
      } else {
        return false;
      }
      console.log(friendlyNums);
      return friendlyNums;
    }
getFriendlyNumbers(300, 500);


function getDivisors(num) {
  let arrDivisors = [];
  for (let i = 1; i < num; i++) {
    if (num % i == 0) {
      arrDivisors.push(i);
    }
  }
  return arrDivisors;
}

function getSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
function getDivisorsSum(num) {
  return getSum(getDivisors(num));
}
