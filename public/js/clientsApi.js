export const getClients = async () => {
  const response = await fetch('/api/clients');
  if (!response.ok) {
    throw new Error(`Ошибка HTTP: ${response.status}`);
  }
  return await response.json();
};


export const sendClientData = async (client, method, id = '') => {
  const response = await fetch(`/api/clients/${id}`, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(client)
  });
  return await response.json();
};

export const deleteClientItem = async (id) => {
  await fetch(`/api/clients/${id}`, { method: 'DELETE' });
};

export const findClient = async (search) => {
  const response = await fetch(`/api/clients?search=${search}`);
  return await response.json();
};
