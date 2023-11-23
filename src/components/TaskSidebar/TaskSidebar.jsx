import React, { useState } from 'react';
import './TaskSidebar.css';  // Asegúrate de tener un archivo de estilo para la barra lateral
import boys from '../../boys';
import { Link } from 'react-router-dom';

const TaskSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const linkStyle = {
    textDecoration: 'none', // Elimina el subrayado predeterminado
    color: 'white',         // Color del texto
    // Agrega más estilos según sea necesario
  };

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <button className="toggle-btn" onClick={toggleSidebar}>
        ☰
      </button>
      <ul>
      {boys.map((boy, index) => (
          <li key={index}>
        <Link to={`/${boy.name}`} style={linkStyle}>{boy.name}</Link>

            </li>
         
        ))}
        {/* Agrega más elementos según sea necesario */}
      </ul>
    </div>
  );
};

export default TaskSidebar;
