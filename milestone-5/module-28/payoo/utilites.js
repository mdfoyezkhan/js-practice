console.log('utilites file added')

// function getInputFieldValueById(){
//     console.log('will get value by id');
//     const amountAddMoney = document.getElementById('Amount-input').value;
//     return amountAddMoney;
// }
function getInputFieldValueById(id){
    const inputValue = document.getElementById(id).value;
    return inputValue;
}