import createForm from '../CreateForm/CreateForm.js';

export default function Form(renderList, root, sendData) {
  const render = () => {
    const form = createForm(renderList, sendData);
    root.append(form);
  };

  return {
    render,
  };
}
