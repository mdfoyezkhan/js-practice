const { forChild } = require("./childnode");

const minBox = document.getElementById('minbox');
minBox.classList.add('for-flax');
minBox.classList.remove('for-flax')
minBox.classList.add('for-flax')
console.log(minBox)
const sections = document.querySelectorAll('section');
console.log(sections);
for(let section of sections){
   section.style.background = 'green';
   section.style.margin = '10px';
   section.style.padding = '20px';
   section.style.borderRadius = '20px';
   section.style.fontFamily = 'arial';
};
const forCreatElement = forChild.document.creatElement();
