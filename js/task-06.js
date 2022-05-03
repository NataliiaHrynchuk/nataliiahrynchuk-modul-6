const input = document.querySelector('#validation-input');
const datasetLength = Number(input.dataset.length);
let inputValue = "";
let lengthValue = 0;

input.addEventListener("input", inpValidation);
input.addEventListener("blur", blValidation);

function inpValidation(event) {
    inputValue = event.currentTarget.value;
    lengthValue = inputValue.length;
    
}

function blValidation() {
    if (lengthValue < datasetLength && lengthValue > 0|| lengthValue > datasetLength) {
        input.classList.remove('valid');
        input.classList.add('invalid');
    }
    if (lengthValue === datasetLength) {
        input.classList.remove('invalid');
    input.classList.add('valid');
    }
    if (lengthValue === 0) {
        input.classList.remove('invalid');
    }
    
    }