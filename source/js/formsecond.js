const secondFormButton = document.querySelector('.form__button--second');
const secondForm = document.querySelector('.modal-second');
const modalCloseSecond = document.querySelector('.modal-second__close');

const secondLabelAgreement = document.querySelector('.modal-second__agreement-label');

const firstName = document.getElementById('second-form-first-name');
const lastName = document.getElementById('second-form-last-name');
const phoneSecondForm = document.getElementById('second-form-phone');
const emailSecond = document.getElementById('second-form-email');
const companyName = document.getElementById('second-form-company-name');
const secondFormState = document.getElementById('second-form-state');
const agreementSecond = document.getElementById('second-form-agreement');

const firstNameLabel = document.getElementById('second-label-first-name');
const lastNameLabel = document.getElementById('second-label-last-name');
const phoneSecondFormLabel = document.getElementById('second-label-phone');
const emailSecondLabel = document.getElementById('second-label-email');
const companyNameLabel = document.getElementById('second-label-company-name');
const secondFormStateLabel = document.getElementById('second-label-state');
const agreementSecondLabel = document.getElementById('modal-second__agreement-label');

const sendBtnFirst = document.getElementById('send-button-second');

// Находим параграфы ошибок по ID и добавляем класс ошибки

const errorFirstName = document.getElementById('form__first-name-error');
const errorFirstnameClass = errorFirstName.classList.add('form__first-name-error');

const errorLastName = document.getElementById('form__last-name-error');
const errorLastNameClass = errorLastName.classList.add('form__last-name-error');

const errorPhone = document.getElementById('form__phone-error');
const errorPhoneClass = errorPhone.classList.add('form__phone-error');

const errorEmail = document.getElementById('form__email-error');
const errorEmailClass = errorEmail.classList.add('form__email-error');

const errorCompanyName = document.getElementById('form__company-name-error');
const errorCompanyNameClass = errorCompanyName.classList.add('form__company-name-error');

const errorState = document.getElementById('form__state-error');
const errorStateClass = errorState.classList.add('form__state-error');

const errorCheckBox = document.getElementById('form__checkbox-error');
const errorCheckBoxClass = errorCheckBox.classList.add('form__checkbox-error');

// Создаём функции сообщений о неверно заполненном поле

const createErrorFirstName = (label, text) => {
  const thisParagraph = label.querySelector('.form__first-name-error');
  thisParagraph.textContent = text;
  return text;
}

const createErrorLastName = (label, text) => {
  const thisParagraph = label.querySelector('.form__last-name-error');
  thisParagraph.textContent = text;
  return text;
}

const createErrorPhone = (label, text) => {
  const thisParagraph = label.querySelector('.form__phone-error');
  thisParagraph.textContent = text;
  return text;
}

const createErrorEmail = (label, text) => {
  const thisParagraph = label.querySelector('.form__email-error');
  thisParagraph.textContent = text;
  return text;
}

const createErrorCompanyName = (label, text) => {
  const thisParagraph = label.querySelector('.form__company-name-error');
  thisParagraph.textContent = text;
  return text;
}

const createErrorState = (label, text) => {
  const thisParagraph = label.querySelector('.form__state-error');
  thisParagraph.textContent = text;
  return text;
}

const createErrorCheckBox = (label, text) => {
  const thisParagraph = label.querySelector('.form__checkbox-error');
  thisParagraph.textContent = text;
  return text;
}

// Удаление сообщений об ошибках

const removeErrorFirstName = (label) => {
  const paragraph = label.querySelector('.form__first-name-error');
  paragraph.textContent = '';
}

const removeErrorLastName = (label) => {
  const paragraph = label.querySelector('.form__last-name-error');
  paragraph.textContent = '';
}

const removeErrorPhone = (label) => {
  const paragraph = label.querySelector('.form__phone-error');
  paragraph.textContent = '';
}

const removeErrorEmail = (label) => {
  const paragraph = label.querySelector('.form__email-error');
  paragraph.textContent = '';
}

const removeErrorCompanyName = (label) => {
  const paragraph = label.querySelector('.form__company-name-error');
  paragraph.textContent = '';
}

const removeErrorState = (label) => {
  const paragraph = label.querySelector('.form__state-error');
  paragraph.textContent = '';
}

const removeErrorCheckBox = (label) => {
  const paragraph = label.querySelector('.form__checkbox-error');
  paragraph.textContent = '';
}

// Открываем фому

secondFormButton.addEventListener('click', () => {
  secondForm.classList.remove('visually-hidden');
})

// Закрываем форму

modalCloseSecond.addEventListener('click', () => {
  secondForm.classList.add('visually-hidden');
})

  // Валидация полей на соответствие формату

  function validateFirstName(firstName) {
    const regFirstName = /^[а-яА-ЯёЁ]+/g;
    return regFirstName.test(String(firstName).toLowerCase());
  }

  function validateLastName(lastName) {
    const regLastName = /^([а-яА-ЯёЁ]+[-]?[а-яА-ЯёЁ]*[-]?[а-яА-ЯёЁ]*[-]?[а-яА-ЯёЁ]*)$/i;
    return regLastName.test(String(lastName).toLowerCase());
  }

  function validatePhone(phone) {
    const regPhone = /^\+?[78][-\(]?\d{3}\)?-?\d{3}-?\d{2}-?\d{2}$/;
    return regPhone.test(String(phone).toLowerCase());
  }

  function validateEmailSecond(email) {
    const regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regEmail.test(String(email).toLowerCase());
  }

  function validateCompanyName(companyName) {
    const regCompanyName = /^([a-zA-Zа-яА-ЯёЁ]+[-]?[a-zA-Zа-яА-ЯёЁ]*[-]?[a-zA-Zа-яА-ЯёЁ]*[-]?[a-zA-Zа-яА-ЯёЁ]*)$/i;
    return regCompanyName.test(String(companyName).toLowerCase());
  }

  function validateState(state) {
    const regState = /^([а-яА-ЯёЁ]+[-]?[а-яА-ЯёЁ]*[-]?[а-яА-ЯёЁ]*[-]?[а-яА-ЯёЁ]*)$/i;
    return regState.test(String(state).toLowerCase());
  }

// Отправка формы

secondForm.onsubmit = function (e) {

  const firstNameVal = firstName.value,
        lastNameVal = lastName.value,
        phoneSecondFormVal = phoneSecondForm.value,
        emailSecondVal = emailSecond.value,
        companyNameVal = companyName.value,
        secondFormStateVal = secondFormState.value;

  // Валидация имени

  const checkFirstName = () => {
    if(!validateFirstName(firstNameVal)
      || firstNameVal === ''
      || firstNameVal.length < 3) {
      firstName.classList.add('form__error-input');
      removeErrorFirstName(firstNameLabel);
      createErrorFirstName(firstNameLabel, 'Некорректное имя. Поле не может быть пустым или иметь менее 3-х символов. Разрешена только кириллица');
      return false;

      } else {
        firstName.classList.remove('form__error-input');
        removeErrorFirstName(firstNameLabel);
        return true;
      }
  }

  // Валидация фамилии

  const checkLastName = () => {
    if(!validateLastName(lastNameVal)
      || lastNameVal === ''
      || lastNameVal.length < 3) {
      lastName.classList.add('form__error-input');
      removeErrorLastName(lastNameLabel);
      createErrorLastName(lastNameLabel, 'Некорректная фамилия. Поле не может быть пустым или иметь менее 3-х символов. Разрешена только кириллица.');
      return false;

      } else {
        lastName.classList.remove('form__error-input');
        removeErrorLastName(lastNameLabel);
        return true;
      }
  }

  // Валидация телефона

  const checkPhone = () => {
    if(!validatePhone(phoneSecondFormVal)
      || phoneSecondFormVal === ''
      || phoneSecondFormVal.length < 3) {
      phoneSecondForm.classList.add('form__error-input');
      removeErrorPhone(phoneSecondFormLabel);
      createErrorPhone(phoneSecondFormLabel, 'Некорректный номер, разрешены только цифры и знак "+". Например: +79995557722');
      return false;

      } else {
        phoneSecondForm.classList.remove('form__error-input');
        removeErrorPhone(phoneSecondFormLabel);
        return true;
      }
  }

  // Валидация почты

  const checkEmail = () => {
    if(!validateEmailSecond(emailSecondVal)
      || emailSecondVal === ''
      || emailSecondVal.length < 3) {
      emailSecond.classList.add('form__error-input');
      removeErrorEmail(emailSecondLabel);
      createErrorEmail(emailSecondLabel, 'Неверный формат почты. Поле не может быть пустым');
      return false;
    } else {
      emailSecond.classList.remove('form__error-input');
      removeErrorEmail(emailSecondLabel);
      return true;
    }
  }

  // Базовая валидация названия компании

  const checkCompanyName = () => {
    if(!validateCompanyName(companyNameVal)
      || companyNameVal === ''
      || companyNameVal.length < 2) {
      companyName.classList.add('form__error-input');
      removeErrorCompanyName(companyNameLabel);
      createErrorCompanyName(companyNameLabel, 'Некорректное название. Поле не может быть пустым или иметь менее 3-х символов. Название Допустима латиница и кириллица. Без спец символов. Разрешен дефис');
      return false;
    } else {
      companyName.classList.remove('form__error-input');
      removeErrorCompanyName(companyNameLabel);
      return true;
    }
  }

  // Валидация названия региона

  const checkState = () => {
      if(!validateState(secondFormStateVal)
        || secondFormStateVal === ''
        || secondFormStateVal.length < 3) {
        secondFormState.classList.add('form__error-input');
        removeErrorState(secondFormStateLabel);
        createErrorState(secondFormStateLabel, 'Проверьте правильность названия города: поле не может быть пустым или иметь менее 3-х символов. Название должно быть на русском языке, допустимо использование дефиса в названии. Например, "Ростов-на-Дону"');

        return false;

      } else {
        secondFormState.classList.remove('form__error-input');
        removeErrorState(secondFormStateLabel);
        return true;
      }
  }

  // Проверка состояния чекбокса

  const validateCheckbox = () => {
    if(!agreementSecond.checked) {
      agreementSecondLabel.classList.add('form__error-checkbox-label');
      removeErrorCheckBox(agreementSecondLabel);
      createErrorCheckBox(agreementSecondLabel, 'Вы должны принять соглашение');

      return false;

    } else {
      agreementSecondLabel.classList.remove('form__error-checkbox-label');
      removeErrorCheckBox(agreementSecondLabel);
      return true;
    }
  }

  // Проверяем соблюдение условий

  if (
    checkFirstName() !== true
    || checkLastName() !== true
    || checkPhone() !== true
    || checkEmail() !== true
    || checkCompanyName() !== true
    || checkState() !== true
    || validateCheckbox() !== true
  ) {
    console.log(
      checkFirstName(),
      checkLastName(),
      checkPhone(),
      checkEmail(),
      checkCompanyName(),
      checkState(),
      validateCheckbox(),
    )

    e.preventDefault()

    } else if (
      checkFirstName() === true
      && checkLastName() === true
      && checkPhone() === true
      && checkEmail() === true
      && checkCompanyName() === true
      && checkState() === true
      && validateCheckbox() === true
    ) {

      e.preventDefault()

      console.log(
        `Имя: ${firstName.value};
Фамилия: ${lastName.value};
Телефон: ${phoneSecondForm.value}
Почта: ${emailSecond.value};
Название компании: ${companyName.value}
Регион: ${secondFormState.value};
Соглашение принято (on/off): ${agreementSecond.value}`
      )
      // SubmitEvent();
    }
}

// Удаление ошибок по событию инпут

secondForm.oninput = function (e) {

  const firstNameVal = firstName.value,
        lastNameVal = lastName.value,
        phoneSecondFormVal = phoneSecondForm.value,
        emailSecondVal = emailSecond.value,
        companyNameVal = companyName.value,
        secondFormStateVal = secondFormState.value;

  if(firstName.classList.contains('form__error-input')) {
    if(
      validateFirstName(firstNameVal)
      && firstNameVal !== ''
      && firstNameVal.length >= 3
      ) {
        firstName.classList.remove('form__error-input');
        removeErrorFirstName(firstNameLabel);
        return true;
    }
  }

  if(lastName.classList.contains('form__error-input')) {
    if(
      validateLastName(lastNameVal)
      && lastNameVal !== ''
      && lastNameVal.length >= 3
      ) {
        lastName.classList.remove('form__error-input');
        removeErrorLastName(lastNameLabel);
        return true;
    }
  }

  if(phoneSecondForm.classList.contains('form__error-input')) {
    if(
      validatePhone(phoneSecondFormVal)
      && phoneSecondFormVal !== ''
      && phoneSecondFormVal.length >= 3
      ) {
        phoneSecondForm.classList.remove('form__error-input');
        removeErrorPhone(phoneSecondFormLabel);
        return true;
    }
  }

  if(emailSecond.classList.contains('form__error-input')) {
    if(
      validateEmailSecond(emailSecondVal)
      && emailSecondVal !== ''
      && emailSecondVal.length >= 3
      ) {
      emailSecond.classList.remove('form__error-input');
      removeErrorEmail(emailSecondLabel);
      return true;
    }
  }

  if(companyName.classList.contains('form__error-input')) {
    if(
      validateCompanyName(companyNameVal)
      && companyNameVal !== ''
      && companyNameVal.length >= 2
      ) {
      companyName.classList.remove('form__error-input');
      removeErrorCompanyName(companyNameLabel);
      return true;
    }
  }

  if(secondFormState.classList.contains('form__error-input')) {
    if(
      validateState(secondFormStateVal)
      && secondFormStateVal !== ''
      && secondFormStateVal.length >= 3
      ) {
      secondFormState.classList.remove('form__error-input');
      removeErrorState(secondFormStateLabel);
      return true;
    }
  }

   if(agreementSecond.checked) {
     agreementSecondLabel.classList.remove('form__error-checkbox-label');
     removeErrorCheckBox(agreementSecondLabel);
     return true;
   }
}
