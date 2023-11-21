import React from 'react'
import { FaPlus } from "react-icons/fa6";
import {v4 as uuidv4} from 'uuid';

const TaskForm = ({addTask}) => {
  // estado que maneja la visibilidad del modal
  const [isOpenModal, setisOpenModal] = useState(false);

  // accion para cerrar el modal
  const handleCloseModal = () => {
    setisOpenModal(false);
  };

  // accion para abrir el modal
  const handleOpenModal = () => {
    setisOpenModal(true);
  };

  const handleSubmitTask = (e) => {
    e.preventDefault();

    // titulo de la tarea
    const titleTask = e.target.title.value;
    // descripcion de la tarea
    const descTask = e.target.description.value;

    // tarea
    const task = {
      titleTask, 
      descTask, 
      date: new Date().toTimeString(), 
      id: uuidv4()
    };

    // funcion pasada por prop que agrega la tarea al estado global
    addTask(task);

    // funciion que cierra el modal
    handleCloseModal();
  };

  return (
    <div>
      <button>
        Nueva Tarea 
        <FaPlus/>
      </button>
      <div className='modal-bg'>
        <div className='modal'>
          <h2>Agregar nueva tarea</h2>
          <form onSubmit={handleSubmitTask}>
            <div>
              <label htmlFor="title">Ingresa el titulo de su tarea</label>
              <input 
                type="text" 
                id='title' 
                name='title'
                placeholder='salir a correr 20 minutos.'/>
            </div>
            <div>
              <label htmlFor="description">ingrese la descripcion para su tarea</label>
              <textarea 
                type="text" 
                name='description' 
                id='description'
                placeholder='describa la descripcion de su tarea'></textarea>
            </div>
            <div>
              <button>Cancelar</button>
              <button>Agregar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
};

export default TaskForm;