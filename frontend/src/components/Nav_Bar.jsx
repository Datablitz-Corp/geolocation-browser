import React from 'react';
import { Link } from 'react-router-dom'; // Importa Link para la navegación

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: '#d3d3d3', width: '100%' }}>
      <div className="container-fluid">
        <img src="/logo.png" alt="Logo" className="navbar-brand" style={{ width: '50px' }} /> {/* Ajusta el tamaño del logo */}
        <ul className="navbar-nav ms-auto"> {/* Usa 'ms-auto' para alinear los enlaces a la derecha */}
          <li className="nav-item">
            <Link to="/" className="nav-link">Menú</Link>
          </li>
          <li className="nav-item">
            <Link to="/quienesSomos" className="nav-link">Quiénes Somos</Link>
          </li>
          <li className="nav-item">
            <Link to="/geolocalizacion" className="nav-link">Detección de Localización</Link>
          </li>
          <li className="nav-item">
            <Link to="/contactanos" className="nav-link">Contáctanos</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
