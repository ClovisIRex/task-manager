import React, { useState } from 'react';
import Header from './Header';
import KanbanColumn from './KanbanColumn';
import { DragDropContext } from 'react-beautiful-dnd';

const KanbanBoard = () => {
  const getTasksByStatus = (status, tasks) => {
    return Object.values(tasks).filter(task => task.status === status);
  };

  const tasks = {
    'task-1': { id: 'task-1', title: 'Task 1', owner: 'John', status: 'ToDo', dueDate: '2024-06-01' },
    'task-2': { id: 'task-2', title: 'Task 2', owner: 'Jane', status: 'ToDo', dueDate: '2024-06-02' },
    'task-3': { id: 'task-3', title: 'Task 3', owner: 'Doe', status: 'In Progress', dueDate: '2024-06-03' },
    'task-4': { id: 'task-4', title: 'Task 4', owner: 'Alice', status: 'Done', dueDate: '2024-06-04' }
  };

  const [data, setData] = useState({
    tasks: tasks,
    columns: {
      'ToDo': getTasksByStatus('ToDo', tasks),
      'In Progress': getTasksByStatus('In Progress', tasks),
      'Done': getTasksByStatus('Done', tasks)
    },
    colors: {
      'ToDo': "bg-blue-100",
      'In Progress': "bg-yellow-100",
      'Done': "bg-green-100"
    },
    ids: {
      'ToDo': 1,
      'In Progress': 2,
      'Done': 3
    }
  });

  return (
    <div className="p-4">
      <Header />
      <DragDropContext>
        <div className="grid grid-cols-4 gap-4 mt-4">
          {Object.keys(data.columns).map((column) => (
            <KanbanColumn
              key={column}
              title={column}
              tasks={data.columns[column]}
              color={data.colors[column]}
              id={data.ids[column]}
            />
          ))}
        </div>
      </DragDropContext>
    </div>
  );
};

export default KanbanBoard;
