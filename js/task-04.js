let counterValue = 0;
const refs = {
    decrement: document.querySelector('[data-action="decrement"]'),
    increment: document.querySelector('[data-action="increment"]'),
    valueEl: document.querySelector('#value'),
}

refs.decrement.addEventListener('click', decValue);
refs.increment.addEventListener('click', incValue);

function incValue()  {
    refs.valueEl.textContent = counterValue += 1;
    }

function decValue()  {
    refs.valueEl.textContent = counterValue -= 1;
   }