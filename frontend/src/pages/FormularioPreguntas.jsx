import React, { useState } from "react";

const FormularioPreguntas = () => {
  const [formData, setFormData] = useState({
    email: '' 
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email) {
      console.error('El email es requerido');
      return;
    }
    
    try {
      const response = await fetch('http://localhost:8000/questions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log('Questions saved:', data);
    } catch (error) {
      console.error('Error saving questions:', error);
    }
  };

  return (
    <div className="container mt-4">
      <h1 className="text-center">Formulario de Preguntas</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-control"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">1. ¿Estás bien?</label>
          <div>
            <input
              type="radio"
              id="verdadero"
              name="sol"
              value="Verdadero"
              onChange={handleChange}
            />
            <label htmlFor="verdadero" className="ms-2">No</label>
          </div>
          <div>
            <input
              type="radio"
              id="falso"
              name="sol"
              value="Falso"
              onChange={handleChange}
            />
            <label htmlFor="falso" className="ms-2">Sí</label>
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="capital-espana" className="form-label">
            2. Dime una oración.
          </label>
          <input
            type="text"
            id="capital-espana"
            name="capitalEspana"
            className="form-control"
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">3. ¿Cuál de estos es un lenguaje de programación?</label>
          <select
            name="lenguaje"
            className="form-select"
            onChange={handleChange}
          >
            <option value="">Seleccione una opción</option>
            <option value="Python">Python</option>
            <option value="HTML">HTML</option>
            <option value="CSS">CSS</option>
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">4. Seleccione los colores primarios:</label>
          <div>
            <input
              type="checkbox"
              id="color-rojo"
              name="rojo"
              onChange={handleChange}
            />
            <label htmlFor="color-rojo" className="ms-2">Rojo</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="color-verde"
              name="verde"
              onChange={handleChange}
            />
            <label htmlFor="color-verde" className="ms-2">Verde</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="color-azul"
              name="azul"
              onChange={handleChange}
            />
            <label htmlFor="color-azul" className="ms-2">Azul</label>
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="numero-horas" className="form-label">
            5. ¿Cuántas horas tiene un día?
          </label>
          <input
            type="number"
            id="numero-horas"
            name="horas"
            className="form-control"
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="comentario" className="form-label">
            7. Escribe un comentario sobre este formulario:
          </label>
          <textarea
            id="comentario"
            name="comentario"
            rows="3"
            className="form-control"
            onChange={handleChange}
          ></textarea>
        </div>

        <button type="submit" className="btn btn-primary">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default FormularioPreguntas;
