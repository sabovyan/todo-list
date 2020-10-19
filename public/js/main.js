import { doPost } from './services/api.helper.js';

import Form from './components/Form/Form.js';
import List from './components/List/List.js';

const root = document.querySelector('#root');

function Main() {
  const render = () => {
    const list = new List(root);
    const form = new Form(list.render, root, doPost);
    form.render();
    list.render();
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
