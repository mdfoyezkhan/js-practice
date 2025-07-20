// document.getElementById('post-btn').addEventListener('click', function () {
//     const textareaInput = document.getElementById('textarea-pera');
//     const textareaInputValue = textareaInput.value;
//     const commentBox = document.getElementById('comment-box');
//     const createComment = document.createElement('p');
//     createComment.innerText = textareaInputValue;
//     const addComment = commentBox.appendChild(createComment);
//     commentBox.value = textareaInputValue;
//     textareaInput.value = '';
// })


document.getElementById('post-btn').addEventListener('click', function () {
    // get textarea value
    const getTextId = document.getElementById('textarea-pera');
    const getTextAreaValue = getTextId.value;
    // get comment 
    const getCommentBox = document.getElementById('comment-box');
    const createComment = document.createElement('p');
    createComment.innerText = getTextAreaValue;
    getCommentBox.appendChild(createComment);
    getTextId.value = '';
})