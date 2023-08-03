const buttonLeft = document.querySelector('.button-arrow.-left');
const buttonRight = document.querySelector('.button-arrow.-right');
const elements = document.querySelector('.elements');
let pixels = 100;

buttonLeft.addEventListener('click', function() {
    pixels = pixels - 100;
    elements.style = `transform: translateX(${pixels}px)`;
})

buttonRight.addEventListener('click', function() {
    pixels = pixels + 100;
    elements.style = `transform: translateX(${pixels}px)`;
 })

 