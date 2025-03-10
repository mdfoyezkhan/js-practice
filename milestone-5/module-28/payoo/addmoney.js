document.getElementById('add-money-btn').addEventListener('click',function(event){
    event.preventDefault();
    // const addMoney = getInputFieldValueById();
    // console.log('add money value', addMoney);
    const inputAddNumber = getInputFieldValueById('Amount-input');
    const inputValue = getInputFieldValueById('pin-number-input')
    console.log(inputAddNumber, inputValue)
    if(inputValue === 1234){
        const balance = getTextFieldValueById('balance');
       const totalBalance = balance + inputAddNumber;
       const innerTextNumber = getTextFieldValueById('balance').innerText = totalBalance;
       console.log(innerTextNumber)

    }
    else{
        alert('something wont rong')
    }
})