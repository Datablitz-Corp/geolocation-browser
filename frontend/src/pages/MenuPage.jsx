import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';  // Asegúrate de importar Bootstrap

function MenuPage () {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    navigate("/calculadora");
  };

  return (
    <div className="container">
      {/* Primer segmento: Imagen con un botón */}
  
      <div className="row my-5 align-items-center">
        {/* Imagen a la izquierda */}
        <div className="col-6">
          <img src="/calcu.png" alt="Imagen" className="img-fluid mb-3 w-50" />
        </div>

        {/* Columna a la derecha con texto y botón */}
        <div className="col-6">
        <div className="mb-3">
          <p>
          <span style={{ fontFamily: 'Fredoka One, cursive', fontSize: '40px'  }}>
              Calculadora para emprendedores</span><br />
            Pruebalo ya !!! <br />
          </p>
        </div>


          <button className="btn btn-primary" onClick={handleSubmit}>Calculadora</button>
        </div>
      </div>

      {/* Segundo segmento: 2 filas con 4 botones */}
      <div className="text-center my-5">
        <div className="row">

        <div className="col-3 mb-3">
          <button className="btn btn-outline-secondary w-100">
            <img src="/basedatos.png" alt="Opción 1" className="img-fluid mb-2 w-25" />  {/* Cambié la clase w-50 por w-25 */}
            Opción 1
          </button>
        </div>

        <div className="col-3 mb-3">
          <button className="btn btn-outline-secondary w-100">
            <img src="/basedatos.png" alt="Opción 1" className="img-fluid mb-2 w-25" />  {/* Cambié la clase w-50 por w-25 */}
            Opción 2
          </button>
        </div>


        <div className="col-3 mb-3">
          <button className="btn btn-outline-secondary w-100">
            <img src="/basedatos.png" alt="Opción 1" className="img-fluid mb-2 w-25" />  {/* Cambié la clase w-50 por w-25 */}
            Opción 3
          </button>
        </div>


        <div className="col-3 mb-3">
          <button className="btn btn-outline-secondary w-100">
            <img src="/basedatos.png" alt="Opción 1" className="img-fluid mb-2 w-25" />  {/* Cambié la clase w-50 por w-25 */}
            Opción 4
          </button>
        </div>


        </div>
        <div className="row">


        <div className="col-3 mb-3">
          <button className="btn btn-outline-secondary w-100">
            <img src="/basedatos.png" alt="Opción 1" className="img-fluid mb-2 w-25" />  {/* Cambié la clase w-50 por w-25 */}
            Opción 5
          </button>
        </div>


        <div className="col-3 mb-3">
          <button className="btn btn-outline-secondary w-100">
            <img src="/basedatos.png" alt="Opción 1" className="img-fluid mb-2 w-25" />  {/* Cambié la clase w-50 por w-25 */}
            Opción 6
          </button>
        </div>


        <div className="col-3 mb-3">
          <button className="btn btn-outline-secondary w-100">
            <img src="/basedatos.png" alt="Opción 1" className="img-fluid mb-2 w-25" />  {/* Cambié la clase w-50 por w-25 */}
            Opción 7
          </button>
        </div>


        <div className="col-3 mb-3">
          <button className="btn btn-outline-secondary w-100">
            <img src="/basedatos.png" alt="Opción 1" className="img-fluid mb-2 w-25" />  {/* Cambié la clase w-50 por w-25 */}
            Opción 8
          </button>
        </div>


        </div>
      </div>

      {/* Tercer segmento: Otra imagen */}
      <div className="text-center my-5">
        <div>
          <img src="/Imagen.png" alt="Imagen" className="img-fluid mb-3" />  
        </div>
      </div>
    </div>
  );
}

export default MenuPage;
