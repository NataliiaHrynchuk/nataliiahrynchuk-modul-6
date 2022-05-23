const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.getElementById('ingredients');
const elements = ingredients.map((ingredient) => {
  const newEl = document.createElement('li');
  newEl.classList.add('item');
  newEl.textContent = ingredient;
  return newEl;
 
  });
  console.log(elements);
list.append(...elements);
// =========== Додавання і знімання слухача на кнопки ========

const targetBtn = document.querySelector('.js-target-btn');
const addListenerBtn = document.querySelector('.js-add-listener');
const removeListenerBtn = document.querySelector('.js-remove-listener');

addListenerBtn.addEventListener('click', event => {
  console.log(event);
  console.log('Вiшаю слухача подiї на цiльову кнопку');

  targetBtn.addEventListener('click', onTargetBtnClick);
});
removeListenerBtn.addEventListener('click', event => {
  console.log(event);
  console.log('Знiмаю слухача подiї з цiльової кнопки');
  
  targetBtn.removeEventListener('click', onTargetBtnClick);
});

function onTargetBtnClick(event) {
  console.log(event);
  console.log('Клiк по цiльовiй кнопцi');
}


// ========== Події сабміта і форми ====================
const form = document.querySelector('.js-register-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const formElements = event.currentTarget.elements;

  console.dir(formElements);
  console.log('це сабміт форми');

  // const mail = formElements.email.value;
  // const password = formElements.password.value;
  // const subscription = formElements.subscription.value;

  // const formData = {
  //   mail,
  //   password,
  //   subscription,
  // };
  // console.log(formData);
  const formData = new FormData(event.currentTarget);
  console.log(formData);
  formData.forEach((value, name) => {
    console.log("onFormSubmit -> name", name);
    console.log("onFormSubmit -> value", value);
    
  });

}
 


// =============== <form action=""   autocomplite="off" =======
const refs = {
  input: document.querySelector('.js-input'),
  nameLabel: document.querySelector('.js-button > span'),
  licenseCheckbox: document.querySelector('.js-license'),
  btn: document.querySelector('.js-button'),
};

// refs.input.addEventListener('focus', onInputFocus);
// refs.input.addEventListener('blur', onInputBlur);
// refs.input.addEventListener('change', onInputChange);
// refs.input.addEventListener('input', onInputChange);

refs.input.addEventListener('change', onInputChange);
refs.licenseCheckbox.addEventListener('change', onLicenseChange);
 

function onInputFocus() {
  console.log('Інпут отримав фокус - подія focus');
}

function onInputBlur() {
  console.log('Інпут втратив фокус -  подія blur');
}

function onInputChange(event) {
console.log(event.currentTarget.value);
refs.nameLabel.textContent = event.currentTarget.value;
}
function onLicenseChange(event) {
  console.log(event.currentTarget.checked);
  console.log('refs.btn.disabled:', refs.btn.disabled);
  refs.btn.disabled = !event.currentTarget.checked;
}


// ============ Кнопка очищення поля =========
const refs1 = {
  output: document.querySelector('.js-output'),
  clearBtn: document.querySelector('.js-clear'),

};
// ---- Реагує на всі клавіші, як і keyup ---
window.addEventListener('keydown', onKeypress);

// --- Реагує лише на ті, які генерують якийсь символ ---
// window.addEventListener('keypress', onKeypress);

refs1.clearBtn.addEventListener('click', onClearOutput)

function onKeypress(event) {
// console.log(event);
// console.log('event.key:', event.key);
// console.log('event.key:', event.code);

refs1.output.textContent += event.key;
}
 
function onClearOutput() {
  refs1.output.textContent = '';

}


//===============  Події мишки ===================

const boxRef = document.querySelector('.js-box');

boxRef.addEventListener('mouseenter', onMousEnter);
boxRef.addEventListener('mouseleave', onMouseLeave);
// boxRef.addEventListener('mousemove', onMousMove);
// boxRef.addEventListener('mouseover', onMousEnter);
// boxRef.addEventListener('mouseout', onMouseLeave);

function onMousEnter(event) {
  const box = event.currentTarget;
  box.classList.add('box--active');
}

function onMouseLeave(event) {
  const box = event.currentTarget;
  box.classList.remove('box--active');
}

function onMousMove(event) {
  console.log(event);
}

// =========== Модалка =============
// 1. Відкрити й закрити по кнопці: onModalOpen та onModalClose
// 2. Закрити по кліку в бекдроп: onBackDropClick
// 3. Закрити по ESC: onEscapeKeypress
//  В CSS є клас show-modal, який необхідно додати на body при відкритті модалки

const refs2 = {
  openModalBtn: document.querySelector('[data-action="open-modal"]'),
  closeModalBtn: document.querySelector('[data-action="close-modal"]'),
  backdrop: document.querySelector('.js-backdrop'),
}

refs2.openModalBtn.addEventListener('click', onModalOpen);
refs2.closeModalBtn.addEventListener('click', onModalClose);
refs2.backdrop.addEventListener('click', onBackDropClick);




function onModalOpen() {
  window.addEventListener('keydown', onEscapeKeypress);
  document.body.classList.add('show-modal')
}

function onModalClose() {
  window.removeEventListener('keydown', onEscapeKeypress);
  document.body.classList.remove('show-modal')
}

function onBackDropClick(event) {
  // console.log('клік по бекдропу');
  // console.log(event.currentTarget);
  // console.log(event.target);

  if (event.currentTarget === event.target) {
    console.log('клікнули по бекдропу!!');
    onModalClose();
  }
}

function onEscapeKeypress(event) {
  // console.log(event);
  if (event.code === 'Escape') {
    onModalClose();
  }
  
}

// ====== Modul 7.1 ====
// document.getElementById('test-button').addEventListener('click', () => 
// console.log('click'))

// document.querySelector('body').addEventListener('click', (event) {
//   console.log('---------------');
//   console.log(event.currentTarget);
//   console.log(event.target);
// })
let items = [
  {}
]