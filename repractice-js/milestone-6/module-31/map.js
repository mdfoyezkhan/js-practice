// let sum = [];
// function double (num){
//     const sum = num *2;
//     sum.push(sum)
// }
// const result = numbers.map(double)
// console.log(result)
const numbers = [12, 23, 34, 45, 56];
let sum = [];
for (const number of numbers) {
    const double = number * 2;
    sum.push(double)
}
console.log('this result for loop', sum)

function doubled(num) {
    return num * 2;
}
const sumOfNumber = numbers.map(doubled);
console.log('this result come from function', sumOfNumber);

const arrayF = (num) => num * 2;
const arrays = numbers.map(arrayF);
console.log('this result array function', arrays)

const short = numbers.map(n => n * 2);
console.log('this result short function',short)
