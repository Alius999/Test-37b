const form = document.getElementById('myForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const checkboxInput = document.getElementById('checkbox');
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const checkboxError = document.getElementById('checkboxError');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  validateForm();
});

function validateForm() {
  // Validate name field
  const nameValue = nameInput.value.trim();
  if (nameValue.length < 3 || !/^[а-яА-ЯёЁ]+$/.test(nameValue)) {
    nameError.innerText = 'Некорректно заполненное поле';
    nameError.style.color = 'red';
  } else {
    nameError.innerText = '';
  }

  // Validate email field
  const emailValue = emailInput.value.trim();

if (emailValue.length === 0) {
  emailError.innerText = 'Поле обязательно для заполнения';
  emailError.style.color = 'red';
  } else if (!/^\S+@\S+.\S+$/.test(emailValue)) {
  emailError.innerText = 'Некорректно заполненное поле';
  emailError.style.color = 'red';
  } else {
  emailError.innerText = '';
  }

  // Validate checkbox field
  if (!checkboxInput.checked) {
  checkboxError.innerText = 'Необходимо подтвердить согласие';
  checkboxError.style.color = 'red';
  } else {
  checkboxError.innerText = '';
  }

  // Submit form if all fields are valid
  if (nameError.innerText === '' && emailError.innerText === '' && checkboxError.innerText === '') {
  form.submit();
  }
  }

  // Add event listeners to inputs to clear error messages on input
  nameInput.addEventListener('input', function() {
  nameError.innerText = '';
  });

  emailInput.addEventListener('input', function() {
  emailError.innerText = '';
  });

  checkboxInput.addEventListener('change', function() {
  checkboxError.innerText = '';
  });


// В этом примере мы сначала получаем ссылки на все необходимые элементы формы с помощью метода `getElementById`. Затем мы добавляем обработчик события `submit` на форму, который вызывает функцию `validateForm`.
//
// Функция `validateForm` валидирует каждое поле формы, проверяя соответствие определенным критериям. Если поле заполнено неверно, то мы устанавливаем соответствующее сообщение об ошибке, а если поле заполнено верно, то сообщение об ошибке удаляется.
//
// После валидации всех полей, если все поля заполнены верно, мы отправляем форму с помощью метода `submit`.
//
// Также мы добавляем обработчики событий `input` и `change` на каждый из входных элементов, чтобы очищать сообщения об ошибках при вводе пользователем в поле.
