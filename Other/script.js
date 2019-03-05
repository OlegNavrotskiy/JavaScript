'use strict';

let arr = [[220, 284],[220, 284], [1184, 1210]];

function working (strings) {

  for (let i=0; i<strings.length; i++) {
    for (let k = i+1; k < strings.length; k++) {
      if (strings[i].join() == strings[k].join()) {
        strings.slice(i);
        console.log(strings);
      } else {
        console.log("Одинаковых элементов нет");
      }
    }
  }
}
working(arr);



