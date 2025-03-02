// document.getElementById('button-id').addEventListener('click', function(event){
//     event.preventDefault();
//     console.log('hello world')
//     // Number input 
//     const phoneNumber = document.getElementById('Phone-number').value;
//     console.log(phoneNumber)
//     // pin input
//     const pinNumber = document.getElementById('pin-number').value;
//     console.log(pinNumber)
//     if(phoneNumber === '11' && pinNumber === 'foyejkhan'){
//         console.log('foyej khan welcom to my website');
//         window.Location.href = 'js/home.html'
//     }
//     else{
//         alert('wrong phone number or pin')
//     }
// })
document.getElementById('button-id').addEventListener('click', function(event){
    event.preventDefault();
    const phoneNumber = document.getElementById('Phone-number').value;
    // console.log(phoneNumber);
    const pinNumber = document.getElementById('pin-number').value;
    // console.log(pinNumber)
    if(phoneNumber === '11' && pinNumber === '1234'){
        console.log('you are login');
        window.location.href ='js/home.html';
    }
    else{
        alert('somthing wont wrong')
    }
})