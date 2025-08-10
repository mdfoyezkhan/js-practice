
console.log(1)
console.log(2)
setTimeout(()=>{
    console.log('i am come form settimeout')}, 2000);
setTimeout(() => {
    console.log('i am come form set time out')
}, 5000);
console.log(4)
console.log(5)

const setPromise = () =>{
    return new Promise((resolve, reject)=>{
        const jsonText = fetch('https://jsonplaceholder.typicode.com/users');
        if(jsonText){
            const loops = resolve(jsonText);
            for(const loop of loops){
                console.log(loop)
            }
        }
        else{
            reject(jsonText)
        }
    })
}
setPromise()
.then(data => console.log('resolve value', data))
.catch(error => console.log('reject value', error))
