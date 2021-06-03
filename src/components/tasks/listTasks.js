import React, { Fragment } from 'react';
import Task from './task';

function ListTasks({ tasks }) {
  return (
    <Fragment>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">NOMBRE</th>
            <th scope="col">DESCRIPCIÓN</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map(task => (
            <Task key={task.id} task={task} />
          ))}
        </tbody>
      </table>
    </Fragment>
  );
}

export default ListTasks;
