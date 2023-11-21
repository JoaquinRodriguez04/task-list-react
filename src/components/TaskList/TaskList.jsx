import React from 'react'
import TaskItem from '../TaskItem/TaskItem';

const TaskList = ({currentTasks, deleteTask}) => {
  
  return (
    <ul>
      {currentTasks.map((currentTask) => (
        <TaskItem 
          currentTask={currentTask} 
          key={currentTask.id}
          deleteTask={deleteTask}
        />
      ))}
    </ul>
  )
};

export default TaskList;