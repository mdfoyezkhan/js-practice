function person(height){
    const personHeight = height / 12;
    return personHeight;
}
const forMeter = person(65);
console.log(forMeter);
console.log('this function for string with number');

function stringWithNumber(height){
    const personHeight = height / 12;
    const forInteger = parseInt(personHeight);
    const forInch = height % 12;
    const result = forInteger + ' feet ' + forInch + ' inch.';
    return result;
}
const forResult = stringWithNumber(65);
console.log(forResult)

console.log('this function for mile to kilometre');

function convertKilometre(mile){
    const convertKilo = mile / 1.60934;
    return convertKilo;
}
const kilometre = convertKilometre(2);
console.log(kilometre)
