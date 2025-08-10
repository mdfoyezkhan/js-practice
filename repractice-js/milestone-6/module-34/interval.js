
// let sum = 0
// const clock = setInterval(()=>{
//     sum++;
// if(sum >= 5){
//     clearInterval(clock)
// }

// console.log(clock,sum)

// },2000)
let total = 0;
const stops = setInterval(()=>{
    total++;
    if(total >= 10){
        clearInterval(stops)
    }
    console.log(stops, total)
    
}, 1000)

let x = 11;
const upnumber = setInterval(()=>{
    x++;
    if(x >= 20){
        clearInterval(upnumber)
    }
    console.log(upnumber, x)
}, 4000)