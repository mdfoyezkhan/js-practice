// function onlyForEvenNumber(numbers){
//     let evens = [];
//     for(const number of numbers){
//         if(number % 2 === 0){
//             console.log(number)
//             evens.push(number)
           
//         }
        
//     }
//     return evens;
     
// }
// const numbers = [12, 34, 43, 55,  66, 78, 77, 99]
// const outPut = onlyForEvenNumber(numbers)
// console.log(outPut)
function sumOfEvenNumber (numbers){
    let sum = 0;
    for(const number of numbers){
        if(number % 2 === 0){
            console.log(number)
            sum = sum + number;
            
        }
    }
    return sum;
}
const num = [12, 34, 43, 55,  66, 78, 77, 99, 120]
const outPut = sumOfEvenNumber(num)
console.log(outPut)