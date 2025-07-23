// document.getElementById('add-money-btn').addEventListener('click',function(events){
//     events.preventDefault();
//     const getAmount = getInputValue();
    
// })
// add money function start here
document.getElementById('add-money-btn').addEventListener('click',function(events){
    events.preventDefault();
    const getAmount = getInputValue('amount-input');
    const getAmountConvert =parseFloat(getAmount);
    const getPin = getInputValue('pin-input');
    if(getPin === '1234'){
        const getAvalableBalance =getInnerText('show-value');
        console.log(getAvalableBalance)
        const convertAvalableBalance =parseFloat(getAvalableBalance);
        const totalBalance =getAmountConvert + convertAvalableBalance;
        const showTotal = document.getElementById('show-value').innerText = totalBalance;
        return showTotal;
    }
    else{
        alert('please try agin')
    }
});
// add money function end 

// cash out function start here
document.getElementById('cash-out-btn').addEventListener('click',function(events){
    events.preventDefault();
    const getCashAmount = getInputValue('cash-amount-input');
    const getCAConvert =parseFloat(getCashAmount);
    const getCPin = getInputValue('cash-pin-input');
    if(getCPin === '1234'){
        const getShowBalance = getInnerText('show-value');
        const convertShowBalance = parseFloat(getShowBalance);
        const totalBalance = convertShowBalance - getCAConvert;
        const getBalance = document.getElementById('show-value').innerText = totalBalance;
        return getBalance;
    }
})
// cash out function end here

// click event added in add money btn
document.getElementById('add-btn').addEventListener('click',function(){
    const getAddMoneyForm = document.getElementById('add-money-form');
    getAddMoneyForm.classList.remove('hidden');
    const cashOutForm = document.getElementById('cash-out-form');
    cashOutForm.classList.add('hidden')
})
// click event added in cash out btn
document.getElementById('cash-btn').addEventListener('click',function(){
    const cashOutForm = document.getElementById('cash-out-form');
    cashOutForm.classList.remove('hidden')
    const getAddMoneyForm = document.getElementById('add-money-form');
    getAddMoneyForm.classList.add('hidden');
})
