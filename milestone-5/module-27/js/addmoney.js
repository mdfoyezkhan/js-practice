document.getElementById('add-money').addEventListener('click', function(event){
    event.preventDefault();
    const addMoney = document.getElementById('input-for-amount').value;
    const addMoneyFloat = parseFloat(addMoney);
    const inputForPin = document.getElementById('input-for-pin').value;
 //    console.log( addMoney, inputForPin)
    if(inputForPin === '1234'){
     const balance = document.getElementById('balance').innerText;
     const addBalance = parseFloat(balance);
     const totalBalance = addMoneyFloat + addBalance; 
     document.getElementById('balance').innerText = totalBalance;
     
    }
    else{
     alert('something wont wrong')
    }
     
 })