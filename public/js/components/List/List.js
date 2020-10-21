import { doGet, doDelete, doPut } from '../../services/todos.services.js';
import { BASE_URL } from '../../constants/url.constants.js';
import { removeListFromRoot } from './List.helper.js';

class List {
  createTextValue({ value }) {
    const span = document.createElement('span');
    span.classList.add('todo__text');
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
    const editButton = this.createButton('✂', 'todo__button todo__edit', id);
    const deleteButton = this.createButton(
      '🗑',
      'todo__button todo__delete',
      id
    );

    fragment.append(editButton);
    fragment.append(deleteButton);
    return fragment;
  }

  createEditForm(todo, root) {
    const form = document.createElement('form');
    form.classList.add('edit__form');
    const input = document.createElement('input');
    input.setAttribute('class', 'edit__field');
    input.setAttribute('name', 'editField');
    input.setAttribute('type', 'text');
    input.setAttribute('autofocus', true);
    input.value = todo.value;
    const btn = this.createButton('✉', 'edit__button', todo.id);
    form.append(input);
    form.append(btn);

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const data = {
        value: form.editField.value,
        isEdit: false,
      };
      if (form.editField.value === '') {
        data.value = todo.value;
      }

      doPut(`${BASE_URL}/${todo.id}`, data);
      this.render(root);
    });
    return form;
  }

  createIndividualTodo(root) {
    return (todo) => {
      if (todo.isEdit) {
        const form = this.createEditForm(todo, root);
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
        if (e.target.classList.contains('todo__delete')) {
          doDelete(`${BASE_URL}/${id}`);
          this.render(root);
        }
        if (e.target.classList.contains('todo__edit')) {
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
