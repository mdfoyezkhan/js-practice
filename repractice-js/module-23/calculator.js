function add( num1 , num2){
    const sum = num1 + num2;
    return sum;
}
function multiply( num1 , num2){
    const sum = num1 * num2;
    return sum;
}
function divide( num1 , num2){
    const sum = num1 / num2;
    return sum;
}
function subtract( num1 , num2){
    const sum = num1 - num2;
    return sum;
}
function forCalculator(num1, num2, operation){
    if(operation === 'add'){
        const sum = add(num1, num2)
        return sum;
    }
    else if(operation === 'subtract'){
        const sum = subtract( num1 , num2);
        return sum;
    }
    else if(operation === 'multiply'){
        const sum = multiply(num1, num2);
        return sum;
    }
    else if(operation === 'divide'){
        const sum = divide(num1, num2);
        return sum;
    }
    else{
        return 'somthing wont wrong!'
    }
}
const forSum = forCalculator( 10, 20, 'add');
console.log(forSum);
const forSum2 = forCalculator( 10, 20, 'multiply');
console.log(forSum2);
const forSum3 = forCalculator( 10, 20, 'divide');
console.log(forSum3);
const forSum1 = forCalculator( 30, 20, 'subtract');
console.log(forSum1);
