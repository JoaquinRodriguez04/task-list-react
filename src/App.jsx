import React, { useState } from 'react';
import './App.css';
import { TaskForm, TaskList } from './components';

function App() {

  // estado global de las tareas
  const [tasks, setTasks] = useState([]);
  const [currentTasks, setCurrentTasks] = useState([]);
  const [searchString, setSearhString] = useState('');

  // funcion que agrega las tareas al estado task
  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  // funcion que elimina las tareas al estado task
  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  // manejador del input de los filtros de las tareas
  const handleChangeFilter = (e) => {
    setSearhString(e.target.value);
  };

  // efecto que recarga el componente cada vez que cambie el estado que contiene el valor del input par buscar FaToiletPaperSlash, o cada vez que se agregue una tarea al estado original
  useEffect(() => {
    // retorna la tarea que incluya el estaado searchString, el cual contiene el string que el usuario escribe en el buscador(el titulo de la tarea y el estado del string se transforma todo en palabras minusculas)
    setCurrentTasks(tasks.filter((task) => task.titleTask.toLoweCase().includes(searchString.toLowerCase())));
  }, [searchString, tasks]);


  return (
    <> 
    <div>
      <input 
        type="text" 
        placeholder='Escriba el nombre de su tarea para buscar...'
        value={searchString}
        onChange={handleChangeFilter} />
    </div>
    <TaskForm addTask={addTask} />
    <TaskList currentTasks={currentTasks} deleteTask={deleteTask}/>
    </>
  )
};

export default App;
