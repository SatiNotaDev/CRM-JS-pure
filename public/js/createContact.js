// public/js/createContact.js

// Функция создания элемента контакта
export const createContactItem = () => {
  const contact = document.createElement('div');
  const contactType = document.createElement('span');
  const contactInput = document.createElement('input');

  contact.classList.add('contact');
  contactType.classList.add('contact__name');
  contactInput.classList.add('contact__input');

  contact.append(contactType, contactInput);

  return {
      contact,
      contactType,
      contactInput
  };
};

// Остальные функции и экспорты
// Например, если есть другие функции, они могут быть экспортированы так же
export const validateClientContact = (contactType, contactInput) => {
  // Ваша функция валидации контакта
};
