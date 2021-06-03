import React, { Fragment } from 'react';

function Form() {
  return (
    <Fragment>
      <form className="row g-3 mt-2">
        <div className="col-auto">
          <label htmlFor="name" className="visually-hidden">
            Nomre
          </label>
          <input
            type="text"
            readonly
            className="form-control"
            name="name"
            placeholder="Escribe tu nombre"
          />
        </div>
        <div className="col-auto">
          <label htmlFor="inputPassword2" className="visually-hidden">
            Descripción
          </label>
          <input
            type="text"
            className="form-control"
            name="description"
            placeholder="Descripción de la tarea"
          />
        </div>
        <div className="col-auto">
          <button type="submit" className="btn btn-primary mb-3">
            Guardar
          </button>
        </div>
      </form>
    </Fragment>
  );
}

export default Form;
