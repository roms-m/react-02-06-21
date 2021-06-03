import React, { Fragment } from 'react';

function Task({ task }) {
  const { id, taskname, description } = task;
  return (
    <Fragment>
      <tr>
        <th>{id}</th>
        <td>{taskname}</td>
        <td>{description}</td>
      </tr>
    </Fragment>
  );
}

export default Task;
