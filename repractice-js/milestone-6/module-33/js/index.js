function getName(){
    const getUrl ='https://jsonplaceholder.typicode.com/users';
    fetch(getUrl)
    .then(res => res.json())
    .then(data => forName(data))
}
function forName(names){
    const ul = document.getElementById('unorder-list');
    for(const name of names){
        const li = document.createElement('li');
        li.innerText = name.name;
        ul.appendChild(li)
    }
}