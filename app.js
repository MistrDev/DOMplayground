// This is the  RGB button and h3
const button = document.querySelector('button');
const h3 = document.querySelector('h3');
button.addEventListener('click', function () {
  const newColor = randomColor();
  document.body.style.backgroundColor = newColor;
  h3.innerText = newColor;
})

// This function gives us a random color and returns it in rgb 
const randomColor = () => {
  const R = Math.floor(Math.random() * 256);
  const G = Math.floor(Math.random() * 256);
  const B = Math.floor(Math.random() * 256);
    return `rgb(${R}, ${G}, ${B})`;  
}


// several buttons that change colors when clicked
const buttons = document.querySelectorAll('button');

for (let button of buttons) {
    button.addEventListener('click', function() {
        button.style.backgroundColor = randomColor();
        button.style.color = randomColor();
    })
}


// this will take the users input and make a <ul> while preventing the default action
 
const comments = document.querySelector('#comments')
