import React, { useState } from 'react';
import Header from './Header';
import KanbanColumn from './KanbanColumn';
import EditTaskModal from '../Modals/EditTask';
import { DragDropContext } from 'react-beautiful-dnd';
import { mockTasks, mockTickets } from '@/mock/mockTasks';

const KanbanBoard = () => {
  const getTasksByStatus = (status, tasks) => {
    return Object.values(tasks).filter(task => task.status === status);
  };

  const tasks = mockTasks;

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
    },
    selectedTask: null, // State to store the selected task
    isEditModalOpen: false // State to manage the modal visibility
  });

  // Function to open the edit task modal and set the selected task
  const openEditModal = (task) => {
    console.log(task);
    setData(prevData => ({ ...prevData, selectedTask: task, isEditModalOpen: true }));
  };

  // Function to close the edit task modal
  const closeEditModal = () => {
    setData(prevData => ({ ...prevData, isEditModalOpen: false }));
  };

  return (
    <div className="p-4">
      <Header />
      <div className="grid grid-cols-4 gap-4 mt-4">
        {Object.keys(data.columns).map((column) => (
          <KanbanColumn
            key={column}
            title={column}
            tasks={data.columns[column]}
            color={data.colors[column]}
            id={data.ids[column]}
            openEditModal={openEditModal} // Pass the function to the KanbanColumn
          />
        ))}
      </div>
      {/* {data.isEditModalOpen && (
        <EditTaskModal
          task={data.selectedTask}
          onClose={closeEditModal} // Pass the close function to the modal
        />
      )} */}
    </div>
  );
};

export default KanbanBoard;
