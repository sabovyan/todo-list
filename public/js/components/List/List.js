import { doGet, doDelete, doPut } from '../../services/todos.services.js';
import { BASE_URL } from '../../constants/url.constants.js';
import { removeListFromRoot } from './List.helper.js';
import createForm from '../CreateForm/CreateForm.js';

class List {
  createTextValue({ value, id }) {
    const span = document.createElement('span');
    span.textContent = value;
    return span;
  }

  createButton(innerText, className, id) {
    const button = document.createElement('button');
    button.setAttribute('class', className);
    button.setAttribute('data-id', id);
    button.append(innerText);

    return button;
  }

  createButtonGroup(id) {
    const fragment = document.createDocumentFragment();
    const editButton = this.createButton('edit', 'todo__edit', id);
    const deleteButton = this.createButton('delete', 'todo__delete', id);

    fragment.append(editButton);
    fragment.append(deleteButton);
    return fragment;
  }

  createIndividualTodo(root) {
    return (todo) => {
      if (todo.isEdit) {
        const form = document.createElement('form');
        const input = document.createElement('input');
        input.setAttribute('class', 'edit__field');
        input.setAttribute('name', 'editField');
        input.setAttribute('type', 'text');
        input.value = todo.value;
        const btn = this.createButton('submit', 'edit__submit', todo.id);
        form.append(input);
        form.append(btn);

        form.addEventListener('submit', (e) => {
          e.preventDefault();
          if (input.value === '') {
            throw new Error('please fill in the input');
          }
          const data = {
            value: form.editField.value,
            isEdit: false,
          };
          doPut(`${BASE_URL}/${todo.id}`, data);
          this.render(root);
        });
        return form;
      }
      const li = document.createElement('li');
      li.classList.add('todo__item');
      const textValue = this.createTextValue(todo);
      const buttonGroup = this.createButtonGroup(todo.id);

      li.append(textValue);
      li.append(buttonGroup);
      return li;
    };
  }

  createUnorderedList() {
    const listWithTodos = document.createElement('ul');
    listWithTodos.setAttribute('class', 'todo__list');
    return listWithTodos;
  }

  createListOfTodos(todos, root) {
    const todosWithHtml = todos.map(this.createIndividualTodo(root));

    const listWithTodos = this.createUnorderedList();

    todosWithHtml.map((todo) => listWithTodos.append(todo));

    listWithTodos.addEventListener('click', (e) => {
      if (e.target.tagName === 'BUTTON') {
        const id = e.target.getAttribute('data-id');
        if (e.target.className === 'todo__delete') {
          doDelete(`${BASE_URL}/${id}`);
          this.render(root);
        }
        if (e.target.className === 'todo__edit') {
          doPut(`${BASE_URL}/${id}`);
          this.render(root);
        }
      }
    });

    return listWithTodos;
  }

  async render(root) {
    const todos = await doGet(BASE_URL);

    const listOfTodos = this.createListOfTodos(todos, root);

    removeListFromRoot(root);

    root.append(listOfTodos);
  }
}

export default List;
