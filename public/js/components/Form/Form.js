import createForm from '../CreateForm/CreateForm.js';

class Form {
  render(renderList, root, sendData) {
    const form = createForm(renderList, sendData);
    root.append(form);
  }
}

export default Form;
