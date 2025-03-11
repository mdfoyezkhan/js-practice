document.getElementById('cash-out-btn').addEventListener('click',function(event){
    event.preventDefault();
    const cashOutNumber = getInputFieldValueById('cash-out-Amount-input');
    const cashOutPin = getInputFieldValueById('cash-pin-number-input');
   if(cashOutPin === 1234){
    const cashOutBalance = getTextFieldValueById('balance');
    const availableBalance = cashOutBalance - cashOutNumber;
    document.getElementById('balance').innerText = availableBalance;
   }
   else{
    alert('something wont rong')
   }
})