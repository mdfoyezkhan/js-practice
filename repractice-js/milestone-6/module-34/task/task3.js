const loadApi = async()=>{
    const res = await fetch('https://v2.jokeapi.dev/joke/Programming?type=single');
    const data = await res.json();
    const datas = forLoop(data)
    console.log(data)
}
const forLoop = (datas)=>{
    const div = document.getElementById('div');
    const apiData = datas.category;
    div.innerText=apiData;
}