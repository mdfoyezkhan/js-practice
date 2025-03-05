document.getElementById('cashout').addEventListener('click',function(){
    document.getElementById('cashout-form').classList.remove('hidden');
    document.getElementById('add-money').classList.add('hidden');

})
document.getElementById('addMoney').addEventListener('click',function(){
    document.getElementById('add-money').classList.remove('hidden');
    document.getElementById('cashout-form').classList.add('hidden');

})