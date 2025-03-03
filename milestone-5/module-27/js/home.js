document.getElementById('add-money').addEventListener('click', function(event){
    event.preventDefault();
    const inputForAmount = document.getElementById('input-for-amount').value;
    const inputForPin = document.getElementById('input-for-pin').value;
    
    if(inputForPin === '1234'){
        const balance = document.getElementById('balance').innerText;
        console.log(balance)
        // const newBalance = balance + inputForAmount;
        const inputAmountForIntiger = parseFloat(inputForAmount);
        const balanceForIntiger = parseFloat(balance);
        const totalBalance = balanceForIntiger + inputAmountForIntiger;
        document.getElementById('balance').innerText = totalBalance;
        
        
    }
    else{
        alert('something wont wrong! try again')
    }
    })