// let htmlCollectionForLi = document.getElementsByTagName('li');
// // console.log(htmlCollectionForLi);
// for(const hcLi of htmlCollectionForLi){
//     console.log(hcLi.innerText)
// }

// let forId = document.getElementById('Lorem1');
// forId = innerText = 'hello world';
// console.log(forId.innerHTML='<h1>hello world</h1>');
// // const forId1 = document.getElementById('Lorem1');
// // console.log(forId1);
// const forClass =document.getElementsByClassName('ipsum');
// console.log(forClass)
// for(const foyez of forClass){
//     console.log(foyez)
// }
// const collection = document.getElementsByClassName("example");
// const getId = document.getElementById('Lorem1');
// console.log(getId);
// let getClass = document.getElementsByClassName('ipsum');

// for(let i = 0; i < getClass.length; i++){
//     console.log(i.length)
// }


// const getQuery = document.querySelector('.ipsum').innerText;
// console.log(getQuery)
const allGetQuery = document.querySelectorAll('.ipsum');
console.log(allGetQuery)
for(const getQuery of allGetQuery){
    console.log(getQuery.innerText)
}
const forStyle = document.getElementById('Lorem1');
forStyle.style.background = '#333';
forStyle.style.color = 'green';
forStyle.innerText='hello world';
forStyle.style.textTransform = 'uppercase';
forStyle.style.fontFamily = 'arial';
forStyle.style.padding = '50px';
forStyle.style.width = '500px';
forStyle.style.borderRadius = '20px';

console.log(forStyle)

const titels = document.getElementById('title');
titels.getAttribute('class');
titels.classList.add('norem');
titels.classList.add('chorem');

titels.classList.remove('morem')
titels.classList.remove('lorem')
titels.classList.remove('chorem')
titels.innerHTML = '<h1>hello world</h1>'
titels.style.background = 'green';
titels.style.padding = '30px';
titels.style.fontSize = '50px';
titels.style.fontFamily = 'arial';
titels.style.width = '600px';
titels.style.borderRadius = '20px';
titels.style.margin = 'auto';
titels.style.listStyle = 'none'
console.log(titels)



