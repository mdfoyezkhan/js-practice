document.getElementById('cashout').addEventListener('click', function(event){
    event.preventDefault();
    const inputForAmount = document.getElementById('input-for-amount').value;
    const inputfloat = parseFloat(inputForAmount);
    const inputForPin = document.getElementById('input-for-pin').value;
    
    if(inputForPin === 'foyej'){
        const balance = document.getElementById('balance').innerText;
        console.log('hello',balance)
        const newBalance = parseFloat(balance);
        const totalBalance = newBalance + inputfloat;
        document.getElementById('balance').innerText = totalBalance;
    }
    else{
        alert('something wont wrong? try again')
    }
})