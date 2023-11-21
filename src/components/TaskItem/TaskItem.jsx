import React from 'react';

const TaskItem = ({currentTasks, deleteTask}) => {
  return (
    <li>
      <div>
        <h2>{currentTasks.titleTask}</h2>
        <p>{currentTasks.descTask}</p>
        <span>{currentTasks.date}</span>
      </div>
      <button onClick={() => deleteTask(task.id)}>Finalizar Tarea</button>
    </li>
  )
};

export default TaskItem;