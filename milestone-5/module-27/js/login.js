document.getElementById('login-btn').addEventListener('click', function(event){
    event.preventDefault();
    const phoneNumber = document.getElementById('Your-phone').value;
    const yourPassword = document.getElementById('Your-password').value;
    if(phoneNumber === '01771944422' && yourPassword === 'foyej'){
        console.log('your logged');
        window.location.href ='/home.html';
    }
    else{
        alert('Something wont wrong')
    }
})