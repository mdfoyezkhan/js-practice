// for(let i = 10; i < 20 ; i++){
//     if( i % 2 === 0){
//         console.log(i);
//     }
// }
// console.log('total')
// for(let i = 0; i < 20; i++){
//     if(i % 2 === 1){
//         console.log(i)
//     }
// }
let sum = 0;
for(let i = 12; i > 0; i--){
    if(i % 2 === 0){
        console.log(sum);
        sum = sum + i;
    }

}
console.log('total', sum)