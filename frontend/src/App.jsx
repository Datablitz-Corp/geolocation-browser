import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Importamos React Router
import NavBar from './components/Nav_Bar';
import MenuPage from './pages/MenuPage';
import QuienesSomosPage from './pages/QuienesSomosPage';
import ContactanosPage from './pages/ContactanosPage';
import Calculadora from './pages/calculadora'; // Asegúrate de importar tu componente de Calculadora
import LocationForm from './pages/LocationForm';
import ConfirmationPage from './pages/ConfirmationPage';
// import './styles/App.css';
import PersonalInformationPage  from './pages/PersonalInformationPage';
import FormularioPreguntas  from './pages/FormularioPreguntas';

const App = () => {
  const [page, setPage] = useState('menu');

  return (
    <Router>  {/* Usamos Router para envolver la aplicación */}
      <div className="app">
        <NavBar setPage={setPage} />
        
        {/* Aquí se definen las rutas */}
        <div className="content">
          <Routes>
            {/* Rutas principales que redirigen a las páginas específicas */}
            <Route path="/" element={<MenuPage />} />
            <Route path="/quienesSomos" element={<QuienesSomosPage />} />
            <Route path="/contactanos" element={<ContactanosPage />} />
            <Route path="/calculadora" element={<Calculadora />} /> {/* Ruta para la página de la calculadora */}
            <Route path="/geolocalizacion" element={<LocationForm />} />
            <Route path="/confirmacion" element={<ConfirmationPage />} />
            <Route path="/personal_info" element={<PersonalInformationPage />} />
            <Route path="/formulario" element={<FormularioPreguntas />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
