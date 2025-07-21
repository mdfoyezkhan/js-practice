document.getElementById('login-btn').addEventListener('click', function (event) {
    event.preventDefault();
    const getInputNumber = document.getElementById('input-number').value;
    const getInputPin = document.getElementById('input-pin').value;
    if(getInputNumber === getInputNumber && getInputPin === '1234'){
        // console.log('your login');
        window.location.assign('./home.html')
        // window.location.replace("./../home.html")
    }
    else{
        alert('somthing wont wrog');
    };

})