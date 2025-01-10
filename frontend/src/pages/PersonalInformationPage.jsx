import React, { useState } from 'react';
import TerminosCondiciones from '../components/TerminosCondiciones.jsx'; // Ajusta la ruta si es necesario

function PersonalInformationPage() {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (termsAccepted) {
      console.log('Datos enviados:', formData);
      setFormData({
        name: '',
        email: '',
        phone: '',
      });
    } else {
      console.log('Debe aceptar los términos y condiciones para enviar el formulario.');
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
        <button type="submit" className="btn btn-primary" disabled={!termsAccepted}>
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
    </div>
  );
}

export default PersonalInformationPage;
