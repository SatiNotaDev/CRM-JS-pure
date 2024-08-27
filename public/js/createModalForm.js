import { createContactItem } from "./createContact.js";

export const createClientsForm = () => {
    const form = document.createElement('form');
    const modalClose = document.createElement('button');
    const modalTitle = document.createElement('h2');
    const inputName = document.createElement('input');
    const inputSurname = document.createElement('input');
    const inputLastName = document.createElement('input');
    const contactsBlock = document.createElement('div');
    const addContactBtn = document.createElement('button');
    const saveBtn = document.createElement('button');
    const cancelBtn = document.createElement('button');

    form.classList.add('modal__form');
    modalClose.classList.add('modal__close');
    modalTitle.classList.add('modal__title');
    inputName.classList.add('modal__input');
    inputSurname.classList.add('modal__input');
    inputLastName.classList.add('modal__input');
    contactsBlock.classList.add('modal__contacts');
    addContactBtn.classList.add('modal__btn-contact', 'btn', 'btn-secondary');
    saveBtn.classList.add('modal__btn-save', 'btn', 'btn-primary');
    cancelBtn.classList.add('modal__btn-cancel', 'btn', 'btn-secondary');

    modalClose.innerHTML = '&times;';
    modalTitle.textContent = 'Новый клиент';
    inputName.placeholder = 'Имя';
    inputSurname.placeholder = 'Фамилия';
    inputLastName.placeholder = 'Отчество';
    addContactBtn.textContent = 'Добавить контакт';
    saveBtn.textContent = 'Сохранить';
    cancelBtn.textContent = 'Отмена';

    addContactBtn.addEventListener('click', (e) => {
        e.preventDefault();
        contactsBlock.prepend(createContactItem());
    });

    form.append(modalTitle, inputName, inputSurname, inputLastName, contactsBlock, addContactBtn, saveBtn, cancelBtn);

    return {
        form,
        modalClose,
        modalTitle,
        inputName,
        inputSurname,
        inputLastName,
        contactsBlock,
        addContactBtn,
        saveBtn,
        cancelBtn
    };
};
