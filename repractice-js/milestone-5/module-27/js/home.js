document.getElementById('add-for-money').addEventListener('click', function (event) {
    event.preventDefault();
    const amountInput = document.getElementById('amount-input').value;
    const pinInput = document.getElementById('pin-input').value;
    if (pinInput === '1234') {
        const showBalance = document.getElementById('show-balance').innerText;
        const forConvert = parseFloat(showBalance);
        const forConvertInput =parseFloat(amountInput);
        const totalBalance = forConvertInput + forConvert ;
        document.getElementById('show-balance').innerText = totalBalance;
        
    }
    else {
        alert('somthing wrong')
    }
})