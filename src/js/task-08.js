const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);



function onFormSubmit (event) {
  event.preventDefault();

const formElements =  event.currentTarget.elements;

  const email = formElements.email.value;
  const password = formElements.password.value;

const formData = {
  email,
  password,
};

console.log(formData);

if (email.value === '' || password.value === '') {
  alert ('Всі поля повинні бути заповнені');
}
form.reset();
};

// const {
//   email,
//   password,
// } = event.currentTarget.elements;

// console.log('email', email.value);
// console.log('password',password.value);
// console.log(event.currentTarget.elements);

// if (email.value === '' || password.value === '') {
//   alert ('Всі поля повинні бути заповнені');
// }
// form.reset();
// };