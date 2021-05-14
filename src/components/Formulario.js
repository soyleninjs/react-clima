import React, { useState } from "react";
import Error from "./Error";
import PropTypes from "prop-types";

const Formulario = ({ busqueda, guardarBusqueda, guardarConsultar }) => {
  // State del Error
  const [error, guardarError] = useState(false);

  // estraer ciudad y pais
  const { ciudad, pais } = busqueda;

  // funcion que coloca los elementos en el state
  const handleChange = (event) => {
    // actualizar el state
    guardarBusqueda({
      ...busqueda,
      [event.target.name]: event.target.value,
    });
  };

  // Cuando el usuario hace submit al form
  const handleSubmit = (event) => {
    event.preventDefault();

    // Validar
    if (ciudad.trim() === "" || pais.trim() === "") {
      guardarError(true);
      return;
    }

    guardarError(false);

    guardarConsultar(true)
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <Error mensaje="Todos los campos son obligatorios" />}

      <div className="input-field col s12">
        <input
          type="text"
          name="ciudad"
          id="ciudad"
          value={ciudad}
          onChange={handleChange}
        />
        <label htmlFor="ciudad">Ciudad:</label>
      </div>

      <div className="input-field col s12">
        <select name="pais" id="pais" value={pais} onChange={handleChange}>
          <option value="">-- Seleccione un País --</option>
          <option value="US">Estados Unidos</option>
          <option value="MX">México</option>
          <option value="AR">Argentina</option>
          <option value="CO">Colombia</option>
          <option value="CR">Costa Rica</option>
          <option value="ES">España</option>
          <option value="PE">Perú</option>
        </select>

        <label htmlFor="pais">País: </label>
      </div>

      <div className="input-field col s12">
        <input type="submit" className="btn-large yellow accent-4 col s12" />
      </div>
    </form>
  );
};

Formulario.propTypes = {
  busqueda: PropTypes.object.isRequired,
  guardarBusqueda: PropTypes.func.isRequired,
  guardarConsultar: PropTypes.func.isRequired
};

export default Formulario;
