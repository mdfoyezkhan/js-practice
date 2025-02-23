const appendList = document.getElementById('append-list');
const li = document.createElement('li');
li.innerHTML='new line added';
appendList.appendChild(li);
console.log(appendList);

const main = document.getElementById('main');
const inMain =document.createElement('section');
const h1Insection = document.createElement('h1');
h1Insection.innerHTML = 'this is new section';
inMain.appendChild(h1Insection);
console.log(inMain);
const unorderList = document.createElement('ul');

const li1 = document.createElement('li');
li1.innerHTML ='apple';
unorderList.appendChild(li1);
inMain.appendChild(unorderList)
main.appendChild(inMain);

const mainBox = document.getElementById('main');
const forListSection = document.createElement('section');
forListSection.innerHTML =`
<h1>this is secend section</h1>
<ul>
<li>foyej khan</li>
<li>salman khan</li>
<li>emon khan</li>
<li>sanam khan</li>
</ul>
`
mainBox.appendChild(forListSection);

