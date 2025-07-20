// document.getElementById('delete').addEventListener('click', function () {
//     const getInput = document.getElementById('input-fild');
//     const getValue = getInput.value;
//     const getHeadding = document.getElementById('heading');
//     getHeadding.innerText = getValue;
//     getInput.value = '';
// })

// document.getElementById('delete').addEventListener('click', function () {
//     const hidden = document.getElementById('heading');
//     hidden.style.display = 'none';
// })


// document.getElementById('input-fild').addEventListener('keyup', function (events) {
//     const getInputValue = events.target.value;
//     const getDeleteBtn = document.getElementById('delete');
//     if (getInputValue === 'delete') {
//         getDeleteBtn.removeAttribute('disabled');
//     }
//     else {
//         getDeleteBtn.setAttribute('disabled', true)
//     }

// })
// document.getElementById('delete').addEventListener('click', function () {
//     const getHeading = document.getElementById('heading');
//     getHeading.style.display = 'none';
// })

document.getElementById('delete').addEventListener('click', function () {

    const getBody = document.getElementById('body');
    const heading = document.createElement('h1');
    heading.innerText = 'removed this content';
    getBody.appendChild(heading);
    const hidden = document.getElementById('heading');
    hidden.style.display = 'none';
});

document.getElementById('input-fild').addEventListener('keyup', function (event) {
    const getValue = event.target.value;
    const getDeleteBtn = document.getElementById('delete');
    if (getValue === 'delete') {
        getDeleteBtn.removeAttribute('disabled');
    }
    else {
        getDeleteBtn.setAttribute('disabled', true);
    }
})
