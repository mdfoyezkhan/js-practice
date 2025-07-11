let x = 10;
let y = 15;
console.log(x,y)
let temp = x;
x = y;
y = temp;
console.log(x, y)

let i = 5;
let n = 10;
console.log(i, n);
[i, n] = [n, i];
console.log(i, n);