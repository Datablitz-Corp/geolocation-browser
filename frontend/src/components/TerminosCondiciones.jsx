import React, { useState } from 'react';

function TerminosCondiciones({ onAccept, onClose }) {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleSubmit = () => {
    if (isChecked && onAccept) {
      onAccept();  // Llama a onAccept para confirmar los términos
      if (onClose) {
        onClose();  // Cierra el modal después de aceptar
      }
    }
  };

  const handleCancel = () => {
    if (onClose) {
      onClose();  // Cierra el modal sin hacer nada
    }
  };

  return (
    <div style={{ maxHeight: '400px', overflowY: 'auto' }}>
       <p>
        Estos términos de uso (el “Acuerdo”) rigen su uso del presente sitio de internet, los sitios asociados vinculados con el sitio de internet y las aplicaciones (“Sitios de internet”) poseídas u operadas por WD-40 Company o por sus subsidiarias y afiliadas (en su conjunto, “WD-40 Company”, “nosotros” o “nuestro”). El presente Acuerdo también rige los servicios ofrecidos por WD-40 Company (los “Servicios”). El presente Acuerdo provee información acerca de su uso de los Sitios de internet y los Servicios, que se describen a continuación, y puede enmendarse ocasionalmente. Al usar los Sitios de internet y los Servicios, usted acepta los términos y las condiciones del presente Acuerdo y ha leído y entendido la declaración de privacidad de WD-40 (“Declaración de Privacidad”).
      </p>
      <p>
        Solamente aplicable para los residentes de Estados Unidos: tome en cuenta que el presente Acuerdo contiene una disposición sobre arbitraje vinculante. Para ver más información sobre la disposición referente al arbitraje vinculante y cómo excluirse de la misma, consulte la sección 8 más adelante.
      </p>
      <h5>1. Uso de los Sitios de internet y los Servicios.</h5>
      <p>
        (a) Solamente aplicable para los residentes de Estados Unidos: Ley de Protección de la Privacidad de los Niños en Línea. Los Sitios de internet y los Servicios no están destinados a niños menores de 13 años de edad. Debe tener 13 años de edad o más para usar los Sitios de internet y los Servicios. Al registrarse en cualquiera de los Sitios de internet o los Servicios, usted declara y garantiza que tiene 13 años de edad o más. De conformidad con la Ley de Protección de la Privacidad de los Niños en Línea (COPPA, por sus siglas en inglés), no recolectamos ni almacenamos a sabiendas información personal referente a niños menores de 13 años de edad, ni siquiera como datos acumulados. Si descubrimos que hemos recibido información de un niño menor de 13 años de edad, eliminaremos esa información de inmediato. Si cree que tenemos información entregada por, o referente a, cualquier persona menor de 13 años de edad, por favor envíenos un correo electrónico de acuerdo con lo previsto en la sección 16.
      </p>
      <p>
        Solamente aplicable a los residentes de Argentina, Chile, Colombia, Ecuador, México y Venezuela: Requisito de consentimiento de los padres. Los Sitios de internet y los Servicios no están dirigidos a usuarios menores de 18 años de edad. Debe tener 18 años de edad o más para usar los Sitios de internet y los Servicios. Si el padre, la madre o el tutor legal autoriza a un menor, dicha autorización debe hacerse de manera explícita al usar los Sitios de internet o los Servicios. Al registrarse en cualquiera de los Sitios de internet o los Servicios, usted declara y garantiza que tiene 18 años de edad o más; ningún menor de edad tiene permitido registrarse a sí mismo. Si descubrimos que hemos recibido información de un niño o adolescente menor de 18 años de edad, eliminaremos esa información de inmediato. Si cree que tenemos información entregada por, o referente a, cualquier persona menor de 18 años de edad, por favor envíenos un correo electrónico de acuerdo con lo previsto en la sección 16.
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

      <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'space-between' }}>
        <button 
          disabled={!isChecked} 
          style={{ 
            padding: '10px', 
            backgroundColor: isChecked ? '#4CAF50' : '#cccccc', 
            color: 'white', 
            border: 'none', 
            borderRadius: '5px', 
            cursor: isChecked ? 'pointer' : 'not-allowed' 
          }}
          onClick={handleSubmit}
        >
          Aceptar
        </button>
        <button 
          style={{ 
            padding: '10px', 
            backgroundColor: '#f44336', 
            color: 'white', 
            border: 'none', 
            borderRadius: '5px', 
            cursor: 'pointer' 
          }}
          onClick={handleCancel}
        >
          Cancelar
        </button>
      </div>
    </div>
  );
}

export default TerminosCondiciones;
