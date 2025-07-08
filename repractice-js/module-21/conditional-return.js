function evenNumber (num){
    if(num % 2 === 0){
        return 'this is even number', num;
    }
    else{
        return 'not even number';
    }
}
const result = evenNumber(55);
console.log(result)

function oddNumber(number){
    if(number % 2 !== 0){
        return number;
    }
    return 'not odd number';
}
const oddNumbers = oddNumber(23);
const oddNumbers1 = oddNumber(44);
console.log(oddNumbers)
console.log(oddNumbers1)