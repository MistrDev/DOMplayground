// This is the  RGB button and h3
const button = document.querySelector('button');
const h3 = document.querySelector('h3');
button.addEventListener('click', function () {
  const newColor = randomColor();
  document.body.style.backgroundColor = newColor;
  h3.innerText = newColor;
})

// This function gives us a random color and returns it in rgb also a global function for a random color
const randomColor = () => {
  const R = Math.floor(Math.random() * 256);
  const G = Math.floor(Math.random() * 256);
  const B = Math.floor(Math.random() * 256);
    return `rgb(${R}, ${G}, ${B})`;  
}


// ALL buttons on page change colors when clicked used the randomColor function
const buttons = document.querySelectorAll('button');

for (let button of buttons) {
    button.addEventListener('click', function() {
        button.style.backgroundColor = randomColor();
        button.style.color = randomColor();
    })
}


// this will take the users input and make a <ul> while preventing the default action
const commentForm = document.querySelector('#commentForm');
commentForm.addEventListener('submit' , function(e) {
e.preventDefault();
const usernameInput = commentForm.elements.username;
const commentsInput = commentForm.elements.comment;
addComment(usernameInput.value ,commentsInput.value)
// empty strings to reset the inputs after you post a comment
usernameInput.value = '';
commentsInput.value = '';
});

// this makes a new <b> tag and <li> and posts the users comment below.
const addComment = (username,comments) => {
 const newComment = document.createElement('li');
 const bTag = document.createElement('b');
 bTag.append(username)
 newComment.append(bTag);
 newComment.append(`- ${comments}`)
 commentsContainer.append(newComment);
}


const input = document.querySelector('#inputEvt'); 
input.addEventListener('input' , function(e){
    console.log('is this working?');
})