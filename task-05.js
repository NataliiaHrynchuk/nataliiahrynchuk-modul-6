const refs = {
    nameInput: document.querySelector('#name-input'),
    output: document.querySelector('#name-output'),
}

refs.nameInput.addEventListener("input", onInputChange);

function onInputChange(event) {
    refs.output.textContent = event.currentTarget.value;
    if ( refs.nameInput.value === '') {
        refs.output.textContent = 'Anonymous';

        }
    }