console.log('utilites file added')

// function getInputFieldValueById(){
//     console.log('will get value by id');
//     const amountAddMoney = document.getElementById('Amount-input').value;
//     return amountAddMoney;
// }
function getInputFieldValueById(id){
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue);
    return inputNumber;
}
function getTextFieldValueById(id){
    const textValue = document.getElementById(id).innerText;
    const textNumber = parseFloat(textValue);
    return textNumber;
}

function showSectionById(id){
    document.getElementById('add-money-form').classList.add('hidden');
    document.getElementById('cash-out-form').classList.add('hidden');
    document.getElementById('transection').classList.add('hidden');
    // show the section with the provide id as parameter
    document.getElementById(id).classList.remove('hidden');
}
