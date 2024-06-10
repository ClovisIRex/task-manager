const getTasksForTicket = (data, ticket) => {
    if (!ticket.tasks || !Array.isArray(ticket.tasks)) {
      return [];
    }
    let tasksIds = ticket.tasks;
    return data.tasks.filter(task => tasksIds.includes(task.id));
};


const generateUniqueId = () => {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
};

// Function to extract only the date from the date-time string
function extractDate(dateString) {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

// Function to construct a date-time string including the time part
function constructDateTime(dateOnly, time = "00:00:00") {
  const dateTimeString = `${dateOnly}T${time}.000Z`;
  return new Date(dateTimeString);
}


module.exports = {
    getTasksForTicket,
    generateUniqueId,
    extractDate,
    constructDateTime
};