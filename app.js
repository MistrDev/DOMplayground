const button = document.querySelector('button');
const h3 = document.querySelector('h3');
button.addEventListener('click', function () {
  const newColor = randomColor();
  document.body.style.backgroundColor = newColor;
  h3.innerText = newColor;
})


const randomColor = () => {
  const R = Math.floor(Math.random() * 256);
  const G = Math.floor(Math.random() * 256);
  const B = Math.floor(Math.random() * 256);
    return `rgb(${R}, ${G}, ${B})`;  
}



const buttons = document.querySelectorAll('button');

for (let button of buttons) {
    button.addEventListener('click', function() {
        button.style.backgroundColor = randomColor();
        button.style.color = randomColor();
    })
}


