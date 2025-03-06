document.getElementById('add-money-btn').addEventListener('click',function(event){
    event.preventDefault();
    const amount = document.getElementById('Amount').value;
    const amountConvart = parseFloat(amount);
    const pinNumber = document.getElementById('pin-number').value;
    if(pinNumber === '1234'){
        const balanec = document.getElementById('Balance').innerText;
        const balanceConvart = parseFloat(balanec);
        const totalBalance = amountConvart + balanceConvart;
        document.getElementById('Balance').innerText = totalBalance;
    }
    else{
        alert('try again')
    }
})