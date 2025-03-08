document.getElementById('Login-btn').addEventListener('click',function(event){
    event.preventDefault();
    const phoneNumber = document.getElementById('Phone-Number').value;
    // const phoneNumberForFloat = parseFloat(phoneNumber);
    const yourPin = document.getElementById('your-pin').value;
    console.log(typeof phoneNumberForFloat)
    if(yourPin === '1234' && phoneNumber === '01771944422'){
        console.log('your logged')
        window.location.href = 'home.html'
    }
    else{
        alert('something wont wrong')
    }
    
})

// 
document.getElementById('Login-btn').addEventListener('click',function(event){
    event.preventDefault();
    const phoneNumber = document.getElementById('Phone-Number').value;
    // const phoneNumberForFloat = parseFloat(phoneNumber);
    const yourPin = document.getElementById('your-pin').value;
    console.log(typeof phoneNumberForFloat)
    if(yourPin === '1234' && phoneNumber === '01771944422'){
        console.log('your logged')
        console.log('how are you all')
        window.location.href = 'home.html'
    }
    else{
        alert('something wont wrong')
    }
    
})