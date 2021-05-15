// hexcode array
const hex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];

// select items
const color = document.querySelector('.color');
const btn = document.getElementById('btn');

// get random hex color number
btn.addEventListener('click', function() {
  let hexColor = '#';
  
  for (i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()];
  } document.body.style.backgroundColor = hexColor;
  color.textContent = hexColor;
})

// get random number
function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}