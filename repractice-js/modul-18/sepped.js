const price = 400;
if(price >= 500){
    const discount = price * 10 / 100;
    const payAmount = price - discount;
    console.log(payAmount)
}
else if(price <= 400){
    const discount = price * 5 / 100;
    const payAmount = price - discount;
    console.log(payAmount)
}
else{ 
    console.log(price)
}


const kacciPrice = 500;
if(kacciPrice >= 500){
    const discount = kacciPrice * 20 / 100;
    const payAmount = kacciPrice - discount;
    console.log(payAmount)
}
else if(kacciPrice >= 400){
    const discount = kacciPrice * 10 / 100;
    const payAmount = kacciPrice - discount;
    console.log(payAmount)
}
else{
    console.log(kacciPrice)
}