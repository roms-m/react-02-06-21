import React, { Fragment, useState } from 'react';
import data from './sample/data.json';
import Form from './components/form/form';
import ListTasks from './components/tasks/listTasks';

export default function App() {
  const [tasks, setTasks] = useState(data);

  return (
    <Fragment>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <Form />
          </div>
          <div className="col-md-8">
            <ListTasks tasks={tasks}/>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
