import createForm from '../CreateForm/CreateForm.js';

class Form {
  render(renderList, root) {
    const form = createForm(renderList);
    root.append(form);
  }
}

export default Form;
