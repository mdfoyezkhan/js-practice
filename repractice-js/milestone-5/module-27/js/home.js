document.getElementById('add-for-money').addEventListener('click', function (event) {
    event.preventDefault();
    const amountInput = document.getElementById('amount-input').value;
    const pinInput = document.getElementById('pin-input').value;
    if (pinInput === '1234') {
        const showBalance = document.getElementById('show-balance').innerText;
        const forConvert = parseFloat(showBalance);
        const forConvertInput = parseFloat(amountInput);
        const totalBalance = forConvertInput + forConvert;
        document.getElementById('show-balance').innerText = totalBalance;

    }
    else {
        alert('somthing wrong')
    }
})

document.getElementById('cesh-out-btn').addEventListener('click', function (event) {
    event.preventDefault();
    const ceshOutValue = document.getElementById('cesh-amount-input').value;
    const convertNumber = parseFloat(ceshOutValue);
    const ceshPinValue = document.getElementById('cesh-pin-input').value;
    if (ceshPinValue === '1234'){
        const correntBalance = document.getElementById('show-balance').innerText;
        const convertBalance = parseFloat(correntBalance);
        const totalBalances = convertBalance - convertNumber ;
        document.getElementById('show-balance').innerText = totalBalances;
        ceshOutValue.value = '';
    }
    else{
        alert('Cash out not successful !')
    }
});

document.getElementById('add-btn').addEventListener('click',function(){
    const addBtn = document.getElementById('add-money-form');
    addBtn.classList.remove('hidden');
    const ceshBtn = document.getElementById('cesh-out-form');
    ceshBtn.classList.add('hidden')
    
});
document.getElementById('cesh-btn').addEventListener('click',function(){
    const ceshBtn = document.getElementById('cesh-out-form');
    ceshBtn.classList.remove('hidden');
    const addBtn = document.getElementById('add-money-form');
    addBtn.classList.add('hidden');
})

