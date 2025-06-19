let price = 1100;
const isSalman = true;
// if(isSalman == true){
//     price = 0;
// }
// else{
//     price = price + 100;
// }
// console.log(price)
// price = isSalman == true ? 0 : price = price + 100;
// console.log(price)

// if(isSalman === true){
//     if(price > 1000){
//         price = price / 2;
//     }
//     else{
//         price = 0;
//     }
// }
// else{
//     price = price + 200;
// }
// console.log(price)
price = isSalman === true ? price >1000 ? price / 2 : 0 : price = price + 100;
console.log(price)