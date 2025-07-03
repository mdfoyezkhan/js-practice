const numbers = [1, 2, 3, 4, 5, 6, 7,];
// console.log(number)
// // console.log(number.reverse())
// const reversed = number.reverse();
// console.log(reversed)
let reversed = [];
for(let number of numbers){
    // console.log(number)
    const rev = reversed.push(number);

}
console.log(reversed)

const  friends =['salman', 'emon', 'sanam', 'jobber'];
let revs = [];
for(let number of friends){
    const revers = revs.unshift(number)
}
console.log(revs)

let x = [];
for(let friend of friends){
    const bondu = x.push(friend);
}
console.log(x)

console.log('for loop start here');

const  bondu =['salman', 'emon', 'sanam', 'jobber'];

let dust = [];
for( let i = 0; i < bondu.length; i++){
    const friend = dust.push(bondu[i]) ;
    // console.log(bondu[i])
}
console.log(dust)
let fd = [];
for(let x = 0; x < bondu.length; x++){
    const friend = fd.unshift(bondu[x]);
}
console.log(fd)

console.log('for loop reverse')

const  brothers =['salman', 'emon', 'sanam', 'jobber'];
let brother = [];
for(let i = brothers.length -1; i >= 0; i--){
    const bro = brother.push(brothers[i])
}
console.log(brother)