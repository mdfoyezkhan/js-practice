document.getElementById('cash-out-btn').addEventListener('click',function(event){
    event.preventDefault();
    const cashOutNumber = getInputFieldValueById('cash-out-Amount-input');
    if(isNaN(cashOutNumber)){
        alert('something wont wrong');
        return;
    }
    const cashOutPin = getInputFieldValueById('cash-pin-number-input');
   if(cashOutPin === 1234){
    const cashOutBalance = getTextFieldValueById('balance');
    if(cashOutBalance <= cashOutNumber){
        alert('You have no money')
        return;
    }
    const availableBalance = cashOutBalance - cashOutNumber;
    document.getElementById('balance').innerText = availableBalance;
    // transaction history added
    // const p = document.createElement('p');
    // p.innerText = `CashOut:${cashOutNumber } Available Balance:${availableBalance}`;
    // document.getElementById('transection-history').appendChild(p);
    const div = document.createElement('div');
    div.classList.add('bg-yellow-300');
    div.innerHTML= `
    <h4 class='text-2xl font-semibold'>Cash Out</h4>
    <p>${cashOutNumber} withdraw. New Balance ${availableBalance}</p>
    `;
    document.getElementById('transection-history').appendChild(div);

   }
   else{
    alert('something wont rong')
   }
})