//func("ACGTGGTCTTAA");
// результат =>>> "UGCACCAGAAUU"

// G -> C, C -> G, T -> A, A -> U.

let arr = "ACGTGGTCTTAA";

function dnk(arr) {
let a, t, c, g, x;

a = arr.replace(/A/g, 'U');
t = a.replace(/T/g, 'A');
g = t.replace(/G/g, 'X');
c = g.replace(/C/g, 'G');
x = c.replace(/X/g, 'C');

console.log("ДНК: " + arr);
console.log("РНК: " + x);
}
dnk(arr);