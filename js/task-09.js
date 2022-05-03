const refs = {
  btnChangeColor: document.querySelector(".change-color"),
  body: document.querySelector("body"),
  spanColor: document.querySelector('span.color'),
}

refs.btnChangeColor.addEventListener("click", changeColor);

function changeColor() {
  const currentColor = `${getRandomHexColor()}`;
  refs.body.style.backgroundColor = currentColor;
  refs.spanColor.textContent = currentColor;
}
  
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  
}