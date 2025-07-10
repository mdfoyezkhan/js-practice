function leapYear(year){
    if(year % 4 === 0){
        return true;
    }
    else{
        return false;
    }
}
const leapYear1 = leapYear(2400);
const leapYear2 = leapYear(2000);
const leapYear3 = leapYear(2050);
const leapYear4 = leapYear(2030);
console.log(leapYear1, leapYear2, leapYear3, leapYear4);

console.log('this function for hart logic');

function leap(year){
    if(year % 100 === 0 && year % 4 === 0){
        return true;
    }
    else if(year % 100 === 0 && year % 400 === 0){
        return true;
    }
    else{
        return false;
    }
}
const forLeapYear = leap(2400);
const forLeapYear1 = leap(2030);
const forLeapYear2 = leap(2600);
const forLeapYear3 = leap(2900);
const forLeapYear4 = leap(1900);
console.log(forLeapYear, forLeapYear1, forLeapYear2, forLeapYear3, forLeapYear4)