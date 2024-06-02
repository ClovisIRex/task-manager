const mockTickets = {
  'ticket-1': {
    id: 1,
    title: 'Ticket 1',
    owner: 'John',
    status: 'To Do',
    dueDate: '2024-06-01',
    priority: 'Low',
    tasks: [2,3,5]
  },

  'ticket-2': {
    id: 2,
    title: 'Ticket 2',
    owner: 'John',
    status: 'To Do',
    dueDate: '2024-06-01',
    priority: 'Low',
    tasks: [1,4]
  },
}

const mockTasks = {
  'task-1': {
      id: 1,
      title: 'Task 1',
      description: 'task1 desc',
      owner: 'John',
      status: 'To Do',
      dueDate: '2024-06-01',
      priority: 'Low'
  },
  'task-2': {
      id: 2,
      title: 'Task 2',
      description: 'task2 desc',
      owner: 'Jane',
      status: 'To Do',
      dueDate: '2024-06-02',
      priority: 'Medium'
  },
  'task-3': {
      id: 3,
      title: 'Task 3',
      description: 'task3 desc',
      owner: 'Doe',
      status: 'In Progress',
      dueDate: '2024-06-03',
      priority: 'High'
  },
  'task-4': {
      id: 4,
      title: 'Task 4',
      description: 'task4 desc',
      owner: 'Alice',
      status: 'Done',
      dueDate: '2024-06-04',
      priority: 'Critical'
  },

  'task-5': {
    id: 5,
    title: 'Task 5',
    description: 'task5 desc',
    owner: 'Robert',
    status: 'Unassigned',
    dueDate: '2024-06-04',
    priority: 'Critical'
  }
}


export {
  mockTasks,
  mockTickets
};