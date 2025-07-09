function numbers(numbers){
    let sum = 0;
    for(const number of numbers ){
        sum = sum + number;
    }
    return sum;

}
const arrayForLoop = [2,  4,  5, 6, 10];
const result = numbers(arrayForLoop)
console.log(result)

function sumOfNumbers(number){
    let sum = 0;
    while( sum > number.length){
        sum = sum + number;
        sum++;
    }
    return sum;

}
const arrayNumber = [23, 45, 67, 89];
const totalSumOfNumbers = sumOfNumbers(arrayNumber)
console.log(totalSumOfNumbers)