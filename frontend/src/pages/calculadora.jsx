import React from 'react';
import { useNavigate } from 'react-router-dom';

function Calculadora() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/personal_info');
  };

  return (
    <div className="container text-center my-5">
      {/* Titulo 1 */}
      <header className="mb-5">
        <h1 className="mb-3">Calculadora para emprendedores</h1>
      </header>

      {/* Objetivo */}
      <section id="how-it-works" className="mb-5">
        <h2 className="mb-3">Objetivo</h2>
        <div className="d-flex justify-content-center align-items-center mb-5">
          <div className="step-box mx-2">Paso 3</div>
        </div>
      </section>

      {/* Pasos */}
      <section id="steps" className="steps-section py-5">
        <div className="step mb-4">
          <h4>Paso 1: </h4>
          <p>Dar contacto: email o número de teléfono.</p>
        </div>
        <div className="step mb-4">
          <h4>Paso 2: </h4>
          <p>Responder formulario de preguntas.</p>
        </div>
        <div className="step">
          <h4>Paso 3: </h4>
          <p>Recibir respuesta en forma de archivo o llamada.</p>
        </div>
      </section>

      {/* Prueba real */}
      <section id="cta" className="mb-5">
        <h3 className="mb-4">¡Pruébalo Ahora!</h3>
        <button onClick={handleButtonClick} className="btn btn-primary">Entrar</button>
      </section>
    </div>
  );
}

export default Calculadora;
