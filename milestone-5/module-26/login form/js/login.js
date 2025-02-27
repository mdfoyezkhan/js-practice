document.getElementById('button-id').addEventListener('click', function(event){
    event.preventDefault();
    console.log('hello world')
    // Number input 
    const phoneNumber = document.getElementById('Phone-number').value;
    console.log(phoneNumber)
})