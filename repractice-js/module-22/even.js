function even(numbers){
    const forEvenNumber = [];
    for(const number of numbers){
        if(number % 2 === 0){
            forEvenNumber.push(number);
        }
    }
    let sum = 0;
    for(const forEven of forEvenNumber){
        sum = sum + forEven;
    }
    const evenArrayLength = forEvenNumber.length;
    const result = sum / evenArrayLength;
    // console.log(sum, evenArrayLength)
    return result;
}
const anArray = [12, 23, 34, 45, 56, 78, 89, 30, 76, 68];
const sumOfEvenNumber = even(anArray);
console.log(sumOfEvenNumber);
