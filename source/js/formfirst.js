const firstFormButton = document.querySelector('.form__button--first');
const modalFirstForm = document.querySelector('.modal-first__form');

const modalClose = document.querySelector('.modal-first__close');
const firstForm = document.querySelector('.modal-first');
const firstLabelAgreement = document.querySelector('.modal-first__agreement-label');

const emailFirst = document.getElementById('first-form-email');
const cityFirst = document.getElementById('first-form-city');
const agreementFirst = document.getElementById('first-form-agreement');

const emailLabelFirst = document.getElementById('first-label-email');
const cityLabelFirst = document.getElementById('first-label-city');

const sendBtnFirst = document.getElementById('send-button-first');

// Открываем фому

firstFormButton.addEventListener('click', () => {
  firstForm.classList.remove('visually-hidden');
})

// Закрываем форму

modalClose.addEventListener('click', () => {
  firstForm.classList.add('visually-hidden');
})

// const createErrorMessage = (parent, text) => {
//   let newElement = document.createElement('p');
//   parent.appendChild(newElement);
//   newElement.textContent = text;
//   newElement.style.marginBottom = 0;
//   newElement.style.marginTop = 8 + 'px';
//   newElement.classList.add('form__new-element');
// }

const errorParagraphEmail = document.getElementById('form__new-element');
const errorParagraphClassEmail = errorParagraphEmail.classList.add('form__new-element');

const errorParagraphCity = document.getElementById('form__new-element-city');
const errorParagraphClassCity = errorParagraphCity.classList.add('form__new-element-city');

const errorParagraphCheckBox = document.getElementById('form__new-element-checkbox');
const errorParagraphClassCheckBox = errorParagraphCheckBox.classList.add('form__new-element-checkbox');

// Функция создания сообщений об ошибке

const createErrorMessageEmail = (label, text) => {
  const thisParagraph = label.querySelector('.form__new-element');
  thisParagraph.textContent = text;
  return text;
}

const createErrorMessageCity = (label, text) => {
  const thisParagraph = label.querySelector('.form__new-element-city');
  thisParagraph.textContent = text;
  return text;
}

const createErrorMessageCheckBox = (label, text) => {
  const thisParagraph = label.querySelector('.form__new-element-checkbox');
  thisParagraph.textContent = text;
  return text;
}

// Удаление сообщений об ошибках

const removeThisParagraphEmail = (label) => {
  const paragraph = label.querySelector('.form__new-element');
  paragraph.textContent = '';
}

const removeThisParagraphCity = (label) => {
  const paragraph = label.querySelector('.form__new-element-city');
  paragraph.textContent = '';
}

const removeThisParagraphCheckBox = (label) => {
  const paragraph = label.querySelector('.form__new-element-checkbox');
  paragraph.textContent = '';
}

// Фалидация email на соответствие формату

function validateEmail(email) {
  const regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regEmail.test(String(email).toLowerCase());
}

// Валидация названия города

function validateCity(city) {
  const regCity = /^([а-яА-ЯёЁ]+[-]?[а-яА-ЯёЁ]*[-]?[а-яА-ЯёЁ]*[-]?[а-яА-ЯёЁ]*)$/i;
  return regCity.test(String(city).toLowerCase());
}

// Отправка формы

firstForm.onsubmit = function (e) {

  const emailFirstVal = emailFirst.value,
        cityFirstVal = cityFirst.value;

  // Проверка на пустые поля почты и названия города

  const emailName = () => {
    if(emailFirstVal === '') {
      emailFirst.classList.add('form__error-input');
      removeThisParagraphEmail(emailLabelFirst);
      createErrorMessageEmail(emailLabelFirst, 'Поле не может быть пустым');

      return false;

      } else {
        emailFirst.classList.remove('form__error-input');
        removeThisParagraphEmail(emailLabelFirst);
        return true;
      }
  }

  // Валидация почты

  const emailNameFoo = () => {
    if(emailName() === true) {
      if(!validateEmail(emailFirstVal)) {
        emailFirst.classList.add('form__error-input');
        removeThisParagraphEmail(emailLabelFirst);
        createErrorMessageEmail(emailLabelFirst, 'Неверный формат почты');
        return false;
      } else {
        emailFirst.classList.remove('form__error-input');
        removeThisParagraphEmail(emailLabelFirst);
        return true;
      }
    }
  }

  // Базовая валидация названия города

  const cityName = () => {
    if(
      cityFirstVal === ''
      || cityFirstVal.length < 3
      || cityFirstVal === '  ') {
      cityFirst.classList.add('form__error-input');
      removeThisParagraphCity(cityLabelFirst);
      createErrorMessageCity(cityLabelFirst, 'Поле не может быть пустым, иметь менее трёх символов или содержать два пробела подряд');
      return false;

      } else {
        cityFirst.classList.remove('form__error-input');
        removeThisParagraphCity(cityLabelFirst);
        return true;
      }
  }

  // Валидация названия города

  const cityNameFoo = () => {
    if(cityName() === true) {
      if(!validateCity(cityFirstVal)) {
        cityFirst.classList.add('form__error-input');
        removeThisParagraphCity(cityLabelFirst);
        createErrorMessageCity(cityLabelFirst, 'Проверьте правильность названия города: название должно быть на русском языке, допустимо использование дефиса в названии. Например, "Ростов-на-Дону"');

        return false;

      } else {
        cityFirst.classList.remove('form__error-input');
        removeThisParagraphCity(cityLabelFirst);
        return true;
      }
    }
  }

  // Проверка состояния чекбокса

  const cityNameCheckbox = () => {
    if(!agreementFirst.checked) {
      firstLabelAgreement.classList.add('form__error-checkbox-label');
      removeThisParagraphCheckBox(firstLabelAgreement);
      createErrorMessageCheckBox(firstLabelAgreement, 'Вы должны принять соглашение');

      return false;

    } else {
      firstLabelAgreement.classList.remove('form__error-checkbox-label');
      removeThisParagraphCheckBox(firstLabelAgreement);
      return true;
    }
  }

  // Проверяем соблюдение условий

  if (
    emailName() !== true
    || cityName() !== true
    || cityNameCheckbox() !== true
    || emailNameFoo() !== true
    || cityNameFoo() !== true
  ) {
    console.log(
    emailName(),
    cityName(),
    cityNameCheckbox(),
    emailNameFoo(),
    cityNameFoo(),
    )

    e.preventDefault()

    } else if (
      emailName() === true
      && cityName() === true
      && cityNameCheckbox() === true
      && emailNameFoo() === true
      && cityNameFoo() === true
    ) {
      e.preventDefault()

      console.log(
        `Почтовый ящик: ${emailFirst.value};
Город: ${cityFirst.value};
Соглашение принято (on/off): ${agreementFirst.value}`
      )
      // SubmitEvent();
    }
}

// Удаление ошибок по событию инпут

firstForm.oninput = function (e) {

  const emailFirstVal = emailFirst.value,
  cityFirstVal = cityFirst.value;

  if(emailFirst.classList.contains('form__error-input')) {
    if(validateEmail(emailFirstVal) === true
    && emailFirstVal.length >= 3) {
      emailFirst.classList.remove('form__error-input');
      removeThisParagraphEmail(emailLabelFirst);
      return true;
      }
    }

    if(cityFirst.classList.contains('form__error-input')) {
      if(validateCity(cityFirstVal) === true
      && cityFirstVal.length >= 3) {
        cityFirst.classList.remove('form__error-input');
        removeThisParagraphCity(cityLabelFirst);
        return true;
        }
      }

    if(agreementFirst.checked) {
      firstLabelAgreement.classList.remove('form__error-checkbox-label');
      removeThisParagraphCheckBox(firstLabelAgreement);
      return true;
    }
  }
