import { BASE_URL } from '../../constants/url.constants.js';
import createTextInput from '../CreateTextInput/CreateTextInput.js';
import createSubmitButton from '../CreateSubmitButton/CreateSubmitButton.js';
import CreateNotificationBar from '../CreateNotificationBar/CreateNotificationBar.js';

const createForm = (renderList, sendData) => {
  const form = document.createElement('form');
  form.classList.add('form');
  form.setAttribute('autocomplete', 'off');

  const textField = createTextInput();
  const notifyBar = CreateNotificationBar();
  const submitButton = createSubmitButton();

  form.append(textField);
  form.append(submitButton);
  form.append(notifyBar);

  form.addEventListener('input', () => {
    notifyBar.textContent = '';
  });

  const handleSubmitForm = (e) => {
    e.preventDefault();
    const { value } = form.text;
    try {
      if (value === '') {
        throw new Error('The input should not be empty');
      }
      const newTodo = {
        id: _.uniqueId('todo_'),
        value,
        isEdit: false,
      };
      sendData(BASE_URL, newTodo);
      form.text.value = '';

      renderList();
    } catch (err) {
      notifyBar.textContent = err.message;
    }
  };

  form.addEventListener('submit', (e) => {
    handleSubmitForm(e);
  });

  return form;
};

export default createForm;
