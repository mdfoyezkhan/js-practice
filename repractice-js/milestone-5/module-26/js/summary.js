document.getElementById('change-text').addEventListener('click', function () {
    const byDefult = document.getElementById('defult');
    byDefult.innerText = 'this text update ';
});

document.getElementById('update-text').addEventListener('click', function () {
    const inputText = document.getElementById('input-text');
    const inputValue = inputText.value;
    const updateName = document.getElementById('your-name');
    updateName.innerText = inputValue;
    inputValue.value='';
});