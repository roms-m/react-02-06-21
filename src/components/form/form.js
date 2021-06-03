import React, { Fragment, useState } from 'react';

function Form(props) {
  const initialFormState = { id: null, taskname: '', description: '' };
  const [task, setTask] = useState({});

  const onChange = event => {
    const { name, value } = event.target;

    setTask({
      ...task,
      [name]: value
    });
  };

  const handleAddTask = event => {
    event.preventDefault();
    props.addTask(task);
    setTask(initialFormState);
  };

  return (
    <Fragment>
      <form className="row g-3 mt-2" onSubmit={handleAddTask}>
        <div className="col-auto">
          <label htmlFor="taskname" className="visually-hidden">
            Nomre
          </label>
          <input
            type="text"
            className="form-control"
            name="taskname"
            placeholder="Escribe tu nombre"
            onChange={onChange}
          />
        </div>
        <div className="col-auto">
          <label htmlFor="description" className="visually-hidden">
            Descripción
          </label>
          <input
            type="text"
            className="form-control"
            name="description"
            placeholder="Descripción de la tarea"
            onChange={onChange}
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
