console.log('Module 6.1');
const items = [
    { id: 1, text: 'молоко', isDone: false },
    { id: 2, text: 'сметана', isDone: true },
    { id: 3, text: 'сир', isDone: false },
    { id: 4, text: 'хліб', isDone: true },
    { id: 5, text: 'масло', isDone: false },
  ];

  const itemTemplate = ({ id, isDone, text }) => `
<li data-id="${id}">
  <label>
    <input type="checkbox" ${isDone ? 'checked' : ''} />
    <span>${text}</span>
  </label>
</li>`; //в інпута якщо isDone true, то стан checked, якщо false, то нічого

const refs = {
    body: document.querySelector('body'),
    };

const createForm = () => {
  const form = document.createElement('form');
  const label = document.createElement('label');
  const span = document.createElement('span');
  const input = document.createElement('input');
  const button = document.createElement('button');

  span.textContent = 'Введіть текст ';
  input.type = 'text'; // або input.setAttribute('type', 'text');
  input.name = 'text'; // або input.setAttribute('name', 'text');

  button.type = 'submit';
  button.textContent = '+ Додати';

  label.append(span, input);
  form.append(label, button);

  refs.body.appendChild(form);

//   console.log(form);
};

const createList = () => {
    const ul = document.createElement('ul');
    const list = items.map(itemTemplate).join(''); 
    // console.log(list);

ul.insertAdjacentHTML('beforeend', list);

refs.body.appendChild(ul);
};
createForm();//якщо ф-цію не викликати, то форма не з'явиться
createList();//якщо ф-цію не викликати, то список не сформується