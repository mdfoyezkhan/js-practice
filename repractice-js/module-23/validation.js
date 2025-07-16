function validation(num1, num2){
    if(typeof num1 !== 'number' || typeof num2 !== 'number'){
        console.log('please provide a number');
    }
    const sum = num1 * num2;
    return sum;
}
// const validate = validation('1', 'seven');
// console.log(validate)

function forstring(num1, num2){
    if(typeof num1 !== 'string'){
        console.log('please provide a string')
    }
    else if(typeof num2 !== 'string'){
        console.log('please provide a string')
    }
    const sum = num1 + ' ' + num2;
    return sum;
}
// const result = forstring( 2, 'seven');
// console.log(result);

function validationForObject(num1){
    if(typeof num1 !== 'object'){
        console.log('please provide an object');
    }
    const sum = num1.price;
    return sum;
}
const forObject = validationForObject({name:'foyej',price: 400});
const forObject2 = validationForObject('hello');
console.log(forObject)
console.log(forObject2)

function validationForArray(num1){
    if(Array.isArray(num1) === false){
        console.log('please provide an array');
    }
    const sum = num1[2];
    return sum;
}
const arrays= validationForArray([12, 34, 56, 78, 12])
const arrays1= validationForArray(12)
console.log(arrays)

