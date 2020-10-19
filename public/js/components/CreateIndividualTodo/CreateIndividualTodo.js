const createTextValue = (value) => {
  const span = document.createElement('span');
  span.textContent = value;
  return span;
};

const createDeleteButton = (innerText, className) => {
  const button = document.createElement('button');
  button.setAttribute('class', className);
  button.append(innerText);
  return button;
};

function createIndividualTodo(todo) {
  const li = document.createElement('li');
  li.classList.add('todo__item');
  const textValue = createTextValue(todo.value);
  const button = createDeleteButton('delete', 'todo__delete');
  li.append(textValue);
  li.append(button);
  return li;
}

export default createIndividualTodo;
