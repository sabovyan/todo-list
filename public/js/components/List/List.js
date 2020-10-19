import { doGet } from '../../services/api.helper.js';
import { BASE_URL } from '../../constants/url.constants.js';
import { removeListFromRoot } from './List.helper.js';
import createListOfTodos from '../CreateListOfTodos/CreateListOfTodos.js';

export default function List(root) {
  const render = async () => {
    const todos = await doGet(BASE_URL);
    const listOfTodos = createListOfTodos(todos);

    removeListFromRoot(root);

    root.append(listOfTodos);
  };

  return {
    render,
  };
}
