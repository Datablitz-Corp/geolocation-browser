import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify'; // Importa ToastContainer y toast
import 'react-toastify/dist/ReactToastify.css'; // Importa los estilos de react-toastify
import TerminosCondiciones from '../components/TerminosCondiciones.jsx';

function PersonalInformationPage() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/formulario');
  };

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const [isChecked, setIsChecked] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCheckboxChange = () => {
    if (!termsAccepted) {
      setShowModal(true);
    } else {
      setIsChecked(!isChecked);
    }
  };

  const handleCloseModal = (cancel = false) => {
    if (!cancel) {
      setTermsAccepted(true);
      setIsChecked(true);
    }
    setShowModal(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (termsAccepted) {
      try {
        const response = await fetch('http://localhost:8000/personal-info', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
  
        if (response.ok) {
          const result = await response.json();
          console.log('Datos enviados:', result);
          setFormData({
            name: '',
            email: '',
            phone: '',
          });
          toast.success('Datos enviados con éxito');
          handleButtonClick();
        } else {
          toast.error('Error al enviar los datos');
        }
      } catch (error) {
        toast.error('Error al conectar con el servidor');
      }
    } else {
      toast.error('Debe aceptar los términos y condiciones para enviar el formulario.');
    }
};


  return (
    <div className="container my-5">
      <h2>Información Personal</h2>
      <form onSubmit={handleSubmit} className="mt-4">
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Nombre</label>
          <input 
            type="text" 
            className="form-control" 
            id="name" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input 
            type="email" 
            className="form-control" 
            id="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">Teléfono</label>
          <input 
            type="tel" 
            className="form-control" 
            id="phone" 
            name="phone" 
            value={formData.phone} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div className="mb-3">
          <input 
            type="checkbox" 
            id="terms" 
            checked={isChecked} 
            onChange={handleCheckboxChange} 
            disabled={termsAccepted}  
          />
          <label htmlFor="terms" className="form-label ms-2">Acepto los términos y condiciones</label>
        </div>
        <button type="submit" className="btn btn-primary">
          Enviar
        </button>
      </form>

      {showModal && (
        <div className="modal show d-block" tabIndex="-1" role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Términos y Condiciones</h5>
              </div>
              <div className="modal-body">
                <TerminosCondiciones 
                  onAccept={() => handleCloseModal(false)} 
                  onClose={() => handleCloseModal(true)}  
                />
              </div>
              <div className="modal-footer">
                Si no aceptas no podrás enviar el formulario
              </div>
            </div>
          </div>
        </div>
      )}

      <ToastContainer />
    </div>
  );
}

export default PersonalInformationPage;
