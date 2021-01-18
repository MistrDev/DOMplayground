const button = document.querySelector('button');
const h1 = document.querySelector('h1');
button.addEventListener('click', function () {
  const newColor = randomColor();
  document.body.style.backgroundColor = newColor;
  h1.innerText = newColor;
})


const randomColor = () => {
  const R = Math.floor(Math.random() * 256);
  const G = Math.floor(Math.random() * 256);
  const B = Math.floor(Math.random() * 256);
    return `rgb(${R}, ${G}, ${B})`;  
}