import React from 'react'
import './TaskItem.css';

const TaskItem = ({currentTask, deleteTask}) => {
  return (
    <li className='taskItemCard'>
      <h3>{currentTask.title}</h3>
      <p>{currentTask.description}</p>
      <span>{currentTask.createAt}</span>
      <button
        className='btnFinishTask' 
        onClick={() => deleteTask(currentTask.id)}
      >
        finalizar
      </button>
    </li>
  )
};

export default TaskItem;