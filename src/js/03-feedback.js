
import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const EmailInput = form.querySelector('input');
const MessageTextarea = form.querySelector('textarea');

fillForm();

form.addEventListener('submit', FormSubmit);
form.addEventListener('input', throttle(FormInput, 500));

function FormSubmit(e) {
  e.preventDefault();
  console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
  e.target.reset();
  localStorage.removeItem('feedback-form-state');
}
function FormInput(e) {
  const formData = {
    email: EmailInput.value,
    message: MessageTextarea.value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}
function fillForm() {
  const saveData = localStorage.getItem('feedback-form-state');
  if (saveData) {
    const parsedFormData = JSON.parse(saveData);
    EmailInput.value = parsedFormData.email;
    MessageTextarea.value = parsedFormData.message;
  }
}