document.getElementById('add-money').addEventListener('click', function(event){
event.preventDefault();
const inputForAmount = document.getElementById('input-for-amount').value;
const inputForPin = document.getElementById('input-for-pin').value;
console.log(inputForAmount,inputForPin)
})