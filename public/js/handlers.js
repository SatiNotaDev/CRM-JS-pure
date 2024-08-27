// public/js/handlers.js
import { sendClientData } from './clientsApi.js';
import { createClientItem } from './createClientItem.js';
import { deleteClientItem } from './clientsApi.js';

// Функция для добавления нового клиента
export const addClient = async (client) => {
  try {
    const newClient = await sendClientData(client, 'POST');
    return newClient;
  } catch (error) {
    console.error('Ошибка при добавлении клиента:', error);
  }
};

// Функция для редактирования клиента
export const editClient = async (client, clientId) => {
  try {
    const updatedClient = await sendClientData(client, 'PATCH', clientId);
    return updatedClient;
  } catch (error) {
    console.error('Ошибка при редактировании клиента:', error);
  }
};

// Функция для удаления клиента
export const removeClient = async (clientId) => {
  try {
    await deleteClientItem(clientId);
  } catch (error) {
    console.error('Ошибка при удалении клиента:', error);
  }
};
