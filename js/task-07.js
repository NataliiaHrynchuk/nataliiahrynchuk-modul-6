const fontSizeControl = document.querySelector('#font-size-control');
const text = document.querySelector('#text');



fontSizeControl.addEventListener('input', changeText);
text.style.fontSize = "56px";

function changeText(event) {
    text.style.fontSize = `${event.currentTarget.value}px`;
    
}