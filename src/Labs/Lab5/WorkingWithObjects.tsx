import React, { useState } from "react";
const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;

import { FormControl } from "react-bootstrap"; 
export default function WorkingWithObjects() {
  const [assignment, setAssignment] = useState({
    id: 1, title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10", completed: false, score: 0,
  });
  const ASSIGNMENT_API_URL = `${REMOTE_SERVER}/lab5/assignment`

  const [module, setModule] = useState({
    id: "",
    name: "",
    description: "",
    course: "",
  });
  const MODULE_API_URL = `${REMOTE_SERVER}/lab5/module`;
  
  return (
    <div>
      <h3 id="wd-working-with-objects">Working With Objects</h3>
      <h4>Modifying Properties</h4>
      <a id="wd-update-assignment-title"
         className="btn btn-primary float-end"
         href={`${ASSIGNMENT_API_URL}/title/${assignment.title}`}>
        Update Title
      </a>
      <FormControl className="w-75" id="wd-assignment-title"
        defaultValue={assignment.title} onChange={(e) =>
          setAssignment({ ...assignment, title: e.target.value })}/>
      <hr />

      <h4>Retrieving Objects</h4>
      <a id="wd-retrieve-assignments" className="btn btn-primary"
         href={`${REMOTE_SERVER}/lab5/assignment`}>
        Get Assignment
      </a><hr/>
      <h4>Retrieving Properties</h4>
      <a id="wd-retrieve-assignment-title" className="btn btn-primary"
         href={`${REMOTE_SERVER}/lab5/assignment/title`}>
        Get Title
      </a><hr/>

      <h4>Working With Module</h4>

<a id="wd-get-module" className="btn btn-primary me-2"
   href={`${MODULE_API_URL}`}>
  Get Module
</a>

<a id="wd-get-module-name" className="btn btn-primary me-2"
   href={`${MODULE_API_URL}/name`}>
  Get Module Name
</a>

<FormControl
  className="my-2 w-75"
  value={module.name}
  onChange={(e) =>
    setModule({ ...module, name: e.target.value })
  }
  placeholder="Edit module name"
/>
<button
  id="wd-update-module-name"
  className="btn btn-success"
  onClick={() => {
    const encoded = encodeURIComponent(module.name);
    fetch(`${MODULE_API_URL}/name/${encoded}`)
      .then(res => res.json())
      .then(data => setModule(data));
  }}
>
  Update Module Name
</button>

<FormControl
  className="my-2 w-75"
  value={module.description}
  onChange={(e) =>
    setModule({ ...module, description: e.target.value })
  }
  placeholder="Edit module description"
/>
<button
  id="wd-update-module-description"
  className="btn btn-success"
  onClick={() => {
    const encoded = encodeURIComponent(module.description);
    fetch(`${MODULE_API_URL}/description/${encoded}`)
      .then(res => res.json())
      .then(data => setModule(data));
  }}
>
  Update Module Description
</button>

<pre>{JSON.stringify(module, null, 2)}</pre>


<h4>Update Assignment Score & Completion</h4>

<FormControl
  type="number"
  value={assignment.score}
  onChange={(e) =>
    setAssignment({ ...assignment, score: Number(e.target.value) })
  }
  placeholder="New Score"
/>
<button
  className="btn btn-warning my-2"
  onClick={() => {
    fetch(`${ASSIGNMENT_API_URL}/score/${assignment.score}`)
      .then(res => res.json())
      .then(data => setAssignment(data));
  }}
>
  Update Score
</button>

<div className="form-check">
  <input
    className="form-check-input"
    type="checkbox"
    checked={assignment.completed}
    id="completed-checkbox"
    onChange={(e) =>
      setAssignment({ ...assignment, completed: e.target.checked })
    }
  />
  <label className="form-check-label" htmlFor="completed-checkbox">
    Completed
  </label>
</div>

<button
  className="btn btn-warning my-2"
  onClick={() => {
    fetch(`${ASSIGNMENT_API_URL}/completed/${assignment.completed}`)
      .then(res => res.json())
      .then(data => setAssignment(data));
  }}
>
  Update Completion Status
</button>

    </div>
);}
