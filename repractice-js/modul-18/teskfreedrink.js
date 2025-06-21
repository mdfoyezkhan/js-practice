const money = 400;
let burger = 500;
const coke = 30;
if(money > 500){
    let discount = burger + coke;
    let payAmount = discount - coke;
    console.log(payAmount)
}
else if(money > 50){
    console.log('if you want so you can buy 1 letar coke')
}
else{
    console.log(burger + coke)
}