const createSubmitButton = () => {
  const button = document.createElement('button');
  button.setAttribute('type', 'submit');
  button.setAttribute('class', 'form__button');
  button.textContent = 'Submit';

  return button;
};

export default createSubmitButton;
