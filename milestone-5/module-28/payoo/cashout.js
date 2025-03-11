document.getElementById('cash-out-btn').addEventListener('click',function(event){
    event.preventDefault();
    const cashOutNumber = getInputFieldValueById('cash-out-Amount-input');
    const cashOutPin = getInputFieldValueById('cash-pin-number-input');
    console.log('event hendler added',cashOutNumber, cashOutPin)
})