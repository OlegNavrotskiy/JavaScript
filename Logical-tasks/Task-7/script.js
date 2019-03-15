'use strict';


let trans = ([[1,2,3],["a","b","c"]]);

function transpose(array) {
  return array.reduce((prev, next) => next.map((item, i) =>
      (prev[i] || []).concat(next[i])
  ), []);
}
console.log(...trans);
console.log(...transpose(trans));
