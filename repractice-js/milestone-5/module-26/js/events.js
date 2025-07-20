console.log('this file is made for javascript code practice')
function bgRedButton() {
    document.body.style.background = 'red';
}

const bgBlue = document.getElementById('bgblue');
bgBlue.onclick = bgBlue1;
function bgBlue1() {
    document.body.style.backgroundColor = 'blue';
}

const purple = document.getElementById('purple');
purple.onclick = function () {
    document.body.style.backgroundColor = 'purple';
}

const bgPink = document.getElementById('bg-pink');
bgPink.addEventListener('click', makePink);
function makePink() {
    document.body.style.backgroundColor = 'pink';
}

document.getElementById('tomato').addEventListener('click',function tomato(){
    document.body.style.backgroundColor = 'tomato';
})
