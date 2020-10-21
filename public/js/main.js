import { doPost } from './services/todos.services.js';

import Form from './components/Form/Form.js';
import List from './components/List/List.js';

const root = document.querySelector('#root');

function Main() {
  const render = () => {
    const list = new List(root);

    const form = new Form();
    form.render(list.render.bind(list, root), root);
    list.render(root);
  };
  function init() {
    render();
  }

  return {
    init,
  };
}

const todoApp = new Main();

todoApp.init();
