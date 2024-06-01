const mockTickets = {
  'ticket-1': {
    id: 1,
    title: 'Ticket 1',
    owner: 'John',
    status: 'To Do',
    dueDate: '2024-06-01',
    priority: 1,
    tasks: [2,3]
  },

  'ticket-2': {
    id: 2,
    title: 'Ticket 2',
    owner: 'John',
    status: 'To Do',
    dueDate: '2024-06-01',
    priority: 1,
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
      priority: 1
  },
  'task-2': {
      id: 2,
      title: 'Task 2',
      description: 'task2 desc',
      owner: 'Jane',
      status: 'To Do',
      dueDate: '2024-06-02',
      priority: 2
  },
  'task-3': {
      id: 3,
      title: 'Task 3',
      description: 'task3 desc',
      owner: 'Doe',
      status: 'In Progress',
      dueDate: '2024-06-03',
      priority: 3
  },
  'task-4': {
      id: 4,
      title: 'Task 4',
      description: 'task4 desc',
      owner: 'Alice',
      status: 'Done',
      dueDate: '2024-06-04',
      priority: 4
  }
}


export {
  mockTasks,
  mockTickets
};