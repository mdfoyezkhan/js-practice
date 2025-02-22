console.log('hello javascript');
console.log(document)
console.log(document.getElementsByTagName('li.innerText'))
const liCollection =document.getElementsByTagName('li');
// console.log(liCollection)
for(const li of liCollection){
    // console.log(li.innerText)
}
const heading = document.getElementsByTagName('h1');
// console.log(heading.innerText)
for(const h1 of heading){
    // console.log(h1.innerText)
}

const foyejs =document.getElementsByClassName('foyej');
// console.log(foyejs.innerText);
for(const foyej of foyejs ){
    // console.log(foyej.innerText)
};
const foyej =document.getElementById('foyej');
// console.log(foyej.innerText)

const htmlCl = document.querySelectorAll('.html-collection')
// console.log(htmlCl);
for(const thml of htmlCl){
    console.log(thml)
}
