import React, { useState } from 'react'; // Importa useState aquí

function TerminosCondiciones() {
  const [isChecked, setIsChecked] = useState(false);
  const [isSubmitEnabled, setIsSubmitEnabled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(true); // Estado para controlar la visibilidad del modal

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    setIsSubmitEnabled(!isSubmitEnabled);
  };

  const handleSubmit = () => {
    // Cerrar el modal al hacer clic en el botón "Enviar"
    setIsModalOpen(false);
  };

  if (!isModalOpen) {
    return null; // No renderiza nada si el modal está cerrado
  }

  return (
    <div style={{ maxHeight: '400px', overflowY: 'auto' }}>
      <h4>Términos y Condiciones</h4>
      <p>
        Estos términos de uso (el “Acuerdo”) rigen su uso del presente sitio de internet...
        {/* Resto del contenido */}
      </p>

      <div style={{ marginTop: '20px' }}>
        <label>
          <input 
            type="checkbox" 
            checked={isChecked} 
            onChange={handleCheckboxChange} 
          />
          He leído y acepto los Términos y Condiciones.
        </label>
      </div>

      <button 
        disabled={!isChecked} 
        style={{ marginTop: '10px', padding: '10px', backgroundColor: isChecked ? '#4CAF50' : '#cccccc' }}
        onClick={handleSubmit}
      >
        Enviar
      </button>
    </div>
  );
}

export default TerminosCondiciones;
