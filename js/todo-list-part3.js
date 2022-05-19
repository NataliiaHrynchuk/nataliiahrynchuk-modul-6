console.log('Module 6.2');
let items = [
    { id: '1', text: 'молоко', isDone: false },
    { id: '2', text: 'сметана', isDone: true },
    { id: '3', text: 'сир', isDone: false },
    { id: '4', text: 'хліб', isDone: true },
    { id: '5', text: 'масло', isDone: false },
  ];

  const itemTemplate = ({ id, isDone, text }) => `
<li data-id="${id}">
  <label>
    <input type="checkbox" ${isDone ? 'checked' : ''} />
    <span>${text}</span>
  </label>
  <button>x</button>
</li>`; //в інпута якщо isDone true, то стан checked, якщо false, то нічого

const refs = {
    ul: document.querySelector('ul'),
    form: document.querySelector('form'),
    };//Посилання на елементи, які у нас є: список (ul) і форма (form)

//====При кожному додаванні чи видаленні елементу списку будемо 
// видаляти весь список і формувати новий за допомогою ф-ції 
// createList 


const handleIsDoneChange = (event) => {
  const parent = event.target.closest('li');//батьківський елемент клікнутого
  const {id} = parent.dataset;
  items = items.map(item => item.id === id ? {
    ...item,
    isDone: !item.isDone,
  } : item);// Мепаємо наші ітемс. Якщо id поточного item дорівнює id, тоді 
  // повертаємо новий об'єкт, який ми змінимо. В іншому випадку повертаємо те, 
  // що було раніше. В новому об'єкті розпилюємо дані, які були до того, 
  // тільки змінюємо значення isDone на не Done
  console.log(id);//видає батьківський id клікнутого ел-та
  renderList();
};

const handleDeleteItem = (event) => {
  const parent = event.target.closest('li');//батьківський елемент клікнутого
  const {id} = parent.dataset;
  items = items.filter(item => item.id !== id);//У списку залишаються ті, по яких не клацнули
  renderList();
};
// ---Опрацьовуємо івент сабміта-----
const handleSubmit = (event) => {
  event.preventDefault();
  // console.log(event);
  // console.log(event.target);
  // console.log(event.target.elements);
  // console.log(event.target.elements.todoText);
  // console.log(event.target.elements.todoText.value);
  const text = event.target.elements.todoText.value;
  const newItem = {
    id: Date.now().toString(), //к-сть мілісекунд від 01.01.1970 перводимо в текст
    text, 
    isDone: false,
  };
  // console.log(newItem);
  items.push(newItem);
  renderList();
  refs.form.reset();//очищаємо поле для введення після кожного івенту
};

//---Ф-ція, яка буде виконуватись кожного разу, 
//як ми зарендерились, але на наступному занятті ми її видалимо----
const addItemListeners = () => {
  // checkboxes
  const listItems = document.querySelectorAll('input[type="checkbox"]');
  // console.log(listItems); //Список інпутів

  listItems.forEach((item) =>
    item.addEventListener('change', handleIsDoneChange),
  );

  // delete buttons
  const deleteButtons = document.querySelectorAll('li>button');

  deleteButtons.forEach((button) =>
    button.addEventListener('click', handleDeleteItem),
  );
  
};

//-----Ф-ція, яка генерує нам список----------
const renderList = () => {
    
  const list = items.map(itemTemplate).join(''); 
  // console.log(list);
  refs.ul.innerHTML = '';
  refs.ul.insertAdjacentHTML('beforeend', list);
  addItemListeners();
  console.log(items);
};
refs.form.addEventListener('submit', handleSubmit);// Підписка на сабміт


renderList();//Генеруємо список перший раз після старту програми з масиву, який в нас є


