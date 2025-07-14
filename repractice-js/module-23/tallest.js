const minNumber = [4, 23, 24, 34, 45, 23, 45, 67, 12, 45, 11, 6];
function forMinNumber(numbers){
    let forMin = numbers[0];
    for(const number of numbers){
        if(forMin > number){
            // forMin = number;
        }
    }
    return forMin;
}
const minNum = forMinNumber(minNumber);
console.log(minNum)