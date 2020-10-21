import createForm from '../CreateForm/CreateForm.js';

class Form {
  handleSubmitEvent(e, form, notifyBar, renderList, sendData) {
    e.preventDefault();
    const { value } = text;
    try {
      if (value === '') {
        throw new Error('The input should not be empty');
      }
      const newTodo = {
        id: 'aa',
        value,
        isEdit: false,
      };
      sendData(BASE_URL, newTodo);
      form.text.value = '';
      renderList();
    } catch (err) {
      notifyBar.textContent = err.message;
    }
  }

  render(renderList, root, sendData) {
    const form = createForm(renderList, sendData);
    root.append(form);
  }
}

export default Form;
