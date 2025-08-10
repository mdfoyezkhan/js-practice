function a(){
    console.log('a')
    b()
    console.log('aa')
}
function b(){
    console.log('b')
    c()
    console.log('bb')
}
function c(){
    console.log('c')
}

function x(){
    console.log(1)
    y()
    console.log(222)
}
function y(){
    console.log(11)
    z()
    console.log(22)
}
function z(){
    console.log(111)
}

setTimeout(()=>{
    console.log('i am come form set time out')
}, 5000)

fetch('https://jsonplaceholder.typicode.com/users')
.then(res => res.json())
.then(data => console.log(data))

a()
x()
