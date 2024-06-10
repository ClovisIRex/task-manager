const mockTickets = [
  {
    title: 'Ticket 1',
    owner: 'John',
    status: 'To Do',
    dueDate: '2024-06-01',
    priority: 'Low',
    tasks: [2, 3, 5]
  },
  {
    title: 'Ticket 2',
    owner: 'John',
    status: 'To Do',
    dueDate: '2024-05-01',
    priority: 'Low',
    tasks: [1, 4]
  },
  {
    id: 'lx3b3alf4fqjsebfbzs',
    title: 'Ticket 3',
    owner: 'John',
    status: 'To Do',
    dueDate: '2024-07-03',
    priority: 'Low',
    tasks: []
  }
];

const mockTasks = [
  {
    id: 1,
    title: 'Task 1',
    description: 'task1 desc',
    owner: 'John',
    status: 'To Do',
    dueDate: '2024-06-01',
    priority: 'Low'
  },
  {
    id: 2,
    title: '.json(updatedTicket)',
    description: 'task2 desc',
    owner: 'Jane',
    status: 'To Do',
    dueDate: '2024-06-02',
    priority: 'Medium'
  },
  {
    id: 3,
    title: 'Task 3',
    description: 'task3 desc',
    owner: 'Doe',
    status: 'In Progress',
    dueDate: '2024-06-03',
    priority: 'High'
  },
  {
    id: 4,
    title: 'Task 4',
    description: 'task4 desc',
    owner: 'Alice',
    status: 'Done',
    dueDate: '2024-06-04',
    priority: 'Critical'
  },
  {
    id: 5,
    title: 'Task 5',
    description: 'task5 desc',
    owner: 'Robert',
    status: 'Unassigned',
    dueDate: '2024-06-04',
    priority: 'Critical'
  }
];

export {
  mockTasks,
  mockTickets
};
