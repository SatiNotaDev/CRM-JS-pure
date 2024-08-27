import { createClientsHeader } from "./createHeader.js";
import { createClientsSection } from "./createClientSeaction.js";
import { getClients } from "./clientsApi.js";
import { createClientItem } from "./createClientItem.js";
import { sortTable } from "./sortClientsTable.js";
import { searchClients } from "./searchClient.js";
import { addClientModal } from "./addClient.js";

document.addEventListener('DOMContentLoaded', async () => {
  const app = document.getElementById('app');

  const header = createClientsHeader();
  const clientSection = createClientsSection();
  app.append(header, clientSection.main);

  const preloader = document.querySelector('.preloader');
  const tableWrapper = document.querySelector('.clients__wrapper');

  try {
      tableWrapper.style.overflow = 'visible';
      const clients = await getClients();
      searchClients(clients);

      for (const client of clients) {
          document.querySelector('.clients__tbody').append(createClientItem(client));
      }
  } catch (error) {
      console.error(error);
  } finally {
      if (preloader) preloader.remove();
      tableWrapper.style.overflow = 'auto';
  }

  sortTable();

  // Добавляем обработчик для кнопки добавления клиента
  const addClientButton = document.querySelector('.clients__btn');
  if (addClientButton) {
      addClientButton.addEventListener('click', (e) => {
          e.preventDefault();
          addClientModal();
      });
  } else {
      console.error("Add client button not found");
  }
});
