/* func([2,3,2,4,5,12,2,3,3,3,12])
результат -> [3,3,3,3,2,2,2,12,12,4,5]
[12, 12, 2, 2, 2, 3, 3, 3, 3, 4, 5] */

let arr = [2,3,2,4,5,12,2,3,3,3,12],
    arr2 =[],
    arr3 =[],
    result = {};
arr.forEach(function(a){
    if (result[a] != undefined) {
      ++result[a];
    }
    else {
      result[a] = 1;
    }
});
for (let key in result) {
  arr2.push(result[key] + key);
}
arr2.sort();
console.log(arr2.sort());

console.log(arr2[0].charAt(0));
function newArr(a,b) {
  for (let i=0; i < b; i++) {
    arr3.push(arr[a].chart(1));
  }
}
newArr(0,arr2[0].charAt(0));
console.log(arr3);