function getTasksForTicket(data, ticket)  {
    if (!ticket.tasks || !Array.isArray(ticket.tasks)) {
      return [];
    }
    let tasksIds = ticket.tasks;
    return data.tasks.filter(task => tasksIds.includes(task.id));
};


module.exports = {
    getTasksForTicket
};