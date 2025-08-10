
const task1 = document.getElementById('task1');
setTimeout(()=>{
    const li = document.createElement('li');
    li.innerText='hello i am come form task 1';
    task1.appendChild(li)
}, 5000);

function delayGreeting(name, delayTime){
    setTimeout(()=>{
        const li = document.createElement('li');
        li.innerHTML =`hello:${name}`;
        task1.appendChild(li)
    }, delayTime)
}
delayGreeting('Alice', 2000)