document.getElementById('add-money-btn').addEventListener('click',function(event){
    event.preventDefault();
    const amount = document.getElementById('Amount').value;
    const pinNumber = document.getElementById('pin-number').value;
    console.log(amount,pinNumber)
})