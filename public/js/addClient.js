import { createClientsForm } from "./createModalForm.js";
import { addClient } from "./handlers.js";
import { validateClientForm } from "./validateForm.js";
import { validateClientContact } from "./validateContact.js";
import { createClientItem } from "./createClientItem.js";

export const addClientModal = () => {
    console.log("addClientModal function called");
    const modal = document.createElement('div');
    const modalContent = document.createElement('div');
    const createForm = createClientsForm();

    console.log("Modal elements created");

    modal.classList.add('modal', 'site-modal', 'modal-active');
    modalContent.classList.add('modal__content', 'site-modal__content', 'modal-active');

    createForm.modalClose.addEventListener('click', () => {
        console.log("Close button clicked");
        modal.remove();
    });

    createForm.form.addEventListener('submit', async (e) => {
        e.preventDefault();
        if (!validateClientForm()) {
            return;
        }

        const contactTypes = document.querySelectorAll('.contact__name');
        const contactValues = document.querySelectorAll('.contact__input');
        let contacts = [];
        let client = {};

        for (let i = 0; i < contactTypes.length; i++) {
            if (!validateClientContact(contactTypes[i], contactValues[i])) {
                return;
            }
            contacts.push({
                type: contactTypes[i].innerHTML,
                value: contactValues[i].value
            });
        }

        client.name = createForm.inputName.value;
        client.surname = createForm.inputSurname.value;
        client.lastName = createForm.inputLastName.value;
        client.contacts = contacts;

        try {
            const newClient = await addClient(client);
            document.querySelector('.clients__tbody').append(createClientItem(newClient));
            modal.remove();
        } catch (error) {
            console.error('Ошибка при добавлении клиента:', error);
        }
    });

    modalContent.append(createForm.modalClose, createForm.modalTitle, createForm.form);
    modal.append(modalContent);

    console.log("Appending modal to body");
    document.body.append(modal);
    console.log("Modal appended to body");
};
