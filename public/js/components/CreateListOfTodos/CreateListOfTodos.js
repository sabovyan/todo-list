import createIndividualTodo from '../CreateIndividualTodo/CreateIndividualTodo.js';

function createListOfTodos(todos) {
  const todosWithHtml = todos.map(createIndividualTodo);

  const listWithTodos = document.createElement('ul');
  listWithTodos.setAttribute('class', 'todo__list');
  todosWithHtml.map((todo) => listWithTodos.append(todo));

  return listWithTodos;
}

export default createListOfTodos;
