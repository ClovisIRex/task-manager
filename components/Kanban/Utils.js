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


module.exports = {
    getTasksForTicket,
    generateUniqueId
};