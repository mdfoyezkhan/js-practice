const sentences = 'i am learning web dev';
// console.log(sentences);
// let reverse = '';
// for(const letter of sentences){
//     // console.log(letter)
//     reverse = letter + reverse;

// }
// console.log(reverse)


// let rev = '';
// for(let i = 0; i < sentences.length; i++){
//     // console.log(i)
//     rev = sentences[i] + rev;
// }
// console.log(rev)
let reverse = '';
for(let i = 0; i < sentences.length; i++){
    // console.log(i)
    reverse = sentences[i] + reverse;
}
console.log(reverse)

const reverse2 = sentences.split('').reverse().join('');
console.log(reverse2)
console.log(sentences.split('').reverse().join(''))
let rev2 = '';
for(const letter of sentences){
    // console.log(letter)
    rev2 = letter + rev2;
}
console.log(rev2)

let rev3 = '';
for(let i = 0; i < sentences.length; i++){
    // console.log(i)
    // let reverse = reverse + sentences[i];
    rev3 = sentences[i] + rev3;
}
console.log(rev3)

const rev4 = sentences.split('').reverse().join('')
console.log(rev4);
console.log(sentences.split('').reverse().join(''))
