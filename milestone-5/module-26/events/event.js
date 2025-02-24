const clickMe =document.getElementById('click');
clickMe.onclick= makeRed
function makeRed(){
    document.body.style.backgroundColor ='red';
}
// makeRed()[we will use this sometime]
const mrb = document.getElementById('mrb');
mrb.onclick = function makeGreen(){
    document.body.style.backgroundColor = 'green';
    console.log('hello world')
}

// options 4
const pinkButton = document.getElementById('pink');
       pinkButton.addEventListener('click',pinkbg);
       function pinkbg(){
        // document.body.style.backgroundColor ='pink';
       }
// options 4 anther
const pinkButton2 = document.getElementById('pink');
pinkButton2.addEventListener('click',function(){
    document.body.style.backgroundColor ='pink';
})

// options 4 final
// important : we will use this sometimes
document.getElementById('golden').addEventListener('click',function(){
    document.body.style.backgroundColor = 'goldenrod'
   })
