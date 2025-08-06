const url2 = 'https://jsonplaceholder.typicode.com/users';
fetch(url2)
.then(res => res.json())
.then(data => console.log(data))

function dataLoding(){
    fetch(url2)
    .then(res => res.json())
    .then(data => getData(data))
}
function getData(data){
    for(let i = 0; i < data.length; i++){
        console.log(data[i])
        document.getElementById('div').innerText = data[i];
    }
}