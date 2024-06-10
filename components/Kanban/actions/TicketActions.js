
export const fetchTickets = async () => {
  const response = await fetch('/api/tickets');
  if (!response.ok) {
    throw new Error('Failed to fetch tickets');
  }
  return await response.json();
};

export const createNewTicket = async (newTicket) => {
  const response = await fetch('/api/tickets', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newTicket),
  });

  if (!response.ok) {
    throw new Error('Failed to create ticket');
  }

  return await response.json();
};

export const setUpdateTicket = async (updatedTicket) => {
  const response = await fetch('/api/tickets', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updatedTicket),
  });

  if (!response.ok) {
    throw new Error('Failed to update ticket');
  }

  return await response.json();
};

export const removeTicket = async (ticketId) => {
  const response = await fetch('/api/tickets', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ id: ticketId }),
  });

  if (!response.ok) {
    throw new Error('Failed to delete ticket');
  }

  return await response.json();
};
