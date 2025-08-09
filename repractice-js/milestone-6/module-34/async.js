// const { reject } = require("async");

// const forPromese = () =>{
//     return new Promise((resolve, reject) =>{
//         const number = Math.random();
//         if(number <= 0.8){
//             resolve(number)
//         }
//         else{
//             reject(number)
//         }
//     })
// }
// forPromese()
// .then(data => console.log('hello world', data))
// .catch(erre => console.log('reject value', erre))


// const relod = ()=>{
//     return new Promise((resolve, reject) => {
//         const somthing = Math.random();
//         if(somthing <= 0.5){
//             resolve(somthing)
//         }
//         else{
//             reject(somthing)
//         }
//     })
// }
// relod()
// .then(data => console.log('resolve value', data))
// .catch(error => console.log('reject value', error))

const fetchs = () =>{
    return new Promise((resolve, reject) =>{
        const data = fetch('https://jsonplaceholder.typicode.com/users');
        if(!data){
            resolve(data)
        }
        else{
            reject(data)
        }
    })
}
fetchs()
.then(data => console.log('resolve data',data))
.catch(error => console.log('reject data', error))