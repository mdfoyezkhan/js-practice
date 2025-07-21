
const minBox1 = document.getElementById('minbox');
const section = document.createElement('section');
const heading = document.createElement('h1');
heading.innerText = 'hello javascript';
section.append(heading);
const forUl = document.createElement('ul');
section.append(forUl)
console.log(section)
const li = document.createElement('li');
li.innerText = 'i am here to javascript';
forUl.append(li);
minBox1.append(section);
const li2 = document.createElement('li');
li2.innerText = 'i am here to javascript2';
const li3 = document.createElement('li');
li3.innerText = 'i am here to javascript3';
const li4 = document.createElement('li');
li4.innerText = 'i am here to javascript3';
forUl.append(li2, li3, li4);

const section2 = document.createElement('section');
section2.innerHTML = `
<h1> hello world</h1>
<ul>
<li>hello1</li>
<li>hello2</li>
<li>hello3</li>
<li>hello4</li>
</ul>
`;
minBox1.appendChild(section2)