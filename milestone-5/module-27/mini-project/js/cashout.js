document.getElementById('cashout-btn').addEventListener('click', function(event){
    event.preventDefault();
    const addAmount = document.getElementById('Amount-input-cashout').value;
    const addAmountForFloat = parseFloat(addAmount);
    const pinInput = document.getElementById('pin-input-cashout').value;
    if(pinInput === '1234'){
        const balance = document.getElementById('balance').innerText;
        const balanceForFloat = parseFloat(balance);
        const totalAmount = balanceForFloat - addAmountForFloat;
        // console.log(totalAmount)
        document.getElementById('balance').innerText = totalAmount;
    }
    else{
        alert('something wont wrong')
    }
})