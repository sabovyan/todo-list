const createTextInput = () => {
  const input = document.createElement('input');
  input.setAttribute('class', 'form__input');
  input.setAttribute('type', 'text');
  input.setAttribute('name', 'text');
  input.setAttribute('id', 'text');
  input.setAttribute('autofocus', true);

  return input;
};

export default createTextInput;
