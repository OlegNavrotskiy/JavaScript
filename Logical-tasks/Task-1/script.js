'use strict';
//Напишите функцию которая будет считать через какое время два поезда встретятся.
let speed1 = 300,
    speed2 = 300,
    distance = 600;

function Train(speed1, speed2, distance) {
  let time;
  time = distance / (speed1 + speed2);
  console.log("Два поезда встретятся через " + time);
}
Train(speed1, speed2, distance);