import { BASE_URL } from '../../constants/url.constants.js';
import createTextInput from '../CreateTextInput/CreateTextInput.js';
import createSubmitButton from '../CreateSubmitButton/CreateSubmitButton.js';
import CreateNotificationBar from '../CreateNotificationBar/CreateNotificationBar.js';

const createForm = (renderList, sendData) => {
  const form = document.createElement('form');
  form.classList.add('form');

  const textField = createTextInput();
  const notifyBar = CreateNotificationBar();
  const submitButton = createSubmitButton();

  textField.addEventListener('input', () => {
    notifyBar.textContent = '';
  });

  form.append(textField);
  form.append(submitButton);
  form.append(notifyBar);

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const { value } = form.text;
    try {
      if (value === '') {
        throw new Error('The input should not be empty');
      }
      const newTodo = {
        id: 'aa',
        value,
      };
      sendData(BASE_URL, newTodo);
      form.text.value = '';
      renderList();
    } catch (err) {
      notifyBar.textContent = err.message;
    }
  });

  return form;
};

export default createForm;
