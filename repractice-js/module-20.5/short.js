const friends =['salman', 'emon', 'sanam', 'jobber', 'akib', 'bakib', 'dakib'];
const sortAsending = friends.sort();
console.log(sortAsending);

const number = [1,  5, 4, 7, 9, 8, 12, 35, 69]
console.log(number.sort())
const numbers = number.sort(function(a , b){ return a - b });
console.log(numbers)
const num = number.sort(function(a, b){return b -a});
console.log(num)