const weight = 60;
const height = 5;
const inch = 3;
const forInch = height * 12 + inch;
const forCentimetre = forInch / 39.37;
const centimetreSquer = forCentimetre * 2;
const bmi = weight / centimetreSquer;
console.log(bmi)

if(bmi < 18.5){
    console.log('You are underweight')
}
else if(bmi >= 18.5 && bmi <= 24.9){
    console.log('You are normal')
}
else if(bmi >= 25 && bmi <= 29.9 ){
    console.log('You are overweight')
}
else{
    console.log('You are obese')
}