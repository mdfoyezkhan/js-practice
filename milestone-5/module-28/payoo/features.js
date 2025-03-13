document.getElementById('add-money').addEventListener('click',function(){
    console.log('add money button added');
    showSectionById('add-money-form')
    
});
document.getElementById('cash-out').addEventListener('click',function(){
    showSectionById('cash-out-form')
});
document.getElementById('transection-btn').addEventListener('click',function(){
    showSectionById('transection')
})