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

const forPhotos = ()=>{
//    const getPhoto = fetch('https://jsonplaceholder.typicode.com/comments');
//    const res = getPhoto.text()
//    console.log(res)
fetch('https://jsonplaceholder.typicode.com/photos')
.then(res => res.json())
.then(data => console.log(data))
}

const photos = async()=>{
    const res =await fetch('https://jsonplaceholder.typicode.com/photos');
    const datas =await res.json();
    getSengelePhoto(datas)
}
const getSengelePhoto = (datas) =>{
    const ul =document.getElementById('ul');
    for(const data of datas ){
        const li = document.createElement('li');
        li.innerText = data.title;
        li.classList.add('cssstyle')
        li.classList.add('gred')
        ul.appendChild (li)

    }
}