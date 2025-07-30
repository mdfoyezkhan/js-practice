const numbers = [12, 34, 56, 45, 67 ,78, 90, 80 ];
const forResult1 = numbers.forEach(num => num * 2);
// const forResult = numbers.map(num => num * 2);
console.log(forResult1)
const forFilter = numbers.filter(n => n > 50);
const forFilters = numbers.filter(n => n < 50);
console.log(forFilter)
console.log(forFilters)

const forFind = numbers.find(n => n > 80);
const forFinds = numbers.find(n => n < 80);
console.log(forFind)
console.log(forFinds)