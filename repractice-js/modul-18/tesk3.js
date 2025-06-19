const weight = 70;
const height = 5;
const forInch = height * 12 + 7;
const forMetar = forInch / 39.37;
const metarForSquar = forMetar * 2;
const bmi = weight / metarForSquar;
console.log(bmi)