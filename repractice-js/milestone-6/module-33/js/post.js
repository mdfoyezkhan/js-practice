function postForApi(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(posts => forAppend(posts))
}
function forAppend(posts){
    const postContainer = document.getElementById('post-container');
    for(const post of posts){
        const  creatPost = document.createElement('div');
        creatPost.classList.add('post')
        creatPost.innerHTML = `
        <h4>Title:${post.title}</h4>
        <h5>Id:${post.id}</h4>
        <p>discription:${post.body}</p>
        `
        postContainer.appendChild(creatPost)
    }
}
postForApi()