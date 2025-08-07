const getComments = () =>{
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(data => console.log(data))
}

const getComments2 = async() => {
    const forfetch = await fetch('https://jsonplaceholder.typicode.com/comments')
    const forRes = await forfetch.json();
    console.log(forRes)
}

const getComments3 = async() =>{
    const res = await fetch('https://jsonplaceholder.typicode.com/comments');
    const data = await res.json();
    console.log(data)
}