// import { FaPlus } from "react-icons/fa6";
// import { Button, FormControl } from "react-bootstrap";

// export default function AssignmentsControls() {
//   return (
//     <div id="wd-assignments">
//       <FormControl
//         type="text"
//         placeholder="Search for Assignments"
//         id="wd-search-assignment"
//         className="mb-3"
//       />

//       <div className="mb-3">
//         <Button id="wd-add-assignment-group" variant="secondary" className="me-2">
//           + Group
//         </Button>
//         <Button id="wd-add-assignment" variant="danger">
//           + Assignment
//         </Button>
//       </div>

//       <h3 id="wd-assignments-title">
//         ASSIGNMENTS 40% of Total{" "}
//         <Button variant="link" size="sm" className="p-0 ms-2">
//           <FaPlus />
//         </Button>
//       </h3>
//     </div>
//   );
// }

import { FaPlus } from "react-icons/fa6";
import { Button, FormControl } from "react-bootstrap";
import React, { useState } from "react";
import AssignmentEditor from "./Editor";  // Assuming you have a modal editor like ModuleEditor

export default function AssignmentControls(
  { assignmentTitle, setAssignmentTitle, addAssignment }:
  { assignmentTitle: string; setAssignmentTitle: (title: string) => void; addAssignment: () => void; }
) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div id="wd-assignments-controls" className="text-nowrap">
      <Button
        variant="danger"
        onClick={handleShow}
        size="lg"
        className="me-1 float-end"
        id="wd-add-assignment-btn"
      >
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Assignment
      </Button>

      <Button
        variant="secondary"
        size="lg"
        className="float-end me-2"
        id="wd-add-assignment-group-btn"
      >
        + Group
      </Button>

      <FormControl
        type="text"
        placeholder="Search for Assignments"
        id="wd-search-assignment"
        className="mb-3 mt-2"
        value={assignmentTitle}
        onChange={(e) => setAssignmentTitle(e.target.value)}
      />

      <h3 id="wd-assignments-title" className="mt-3">
        ASSIGNMENTS 40% of Total
        <Button variant="link" size="sm" className="p-0 ms-2">
          <FaPlus />
        </Button>
      </h3>

      {/* Assuming AssignmentEditor is a modal similar to ModuleEditor */}
      <AssignmentEditor
        show={show}
        handleClose={handleClose}
        assignmentTitle={assignmentTitle}
        setAssignmentTitle={setAssignmentTitle}
        addAssignment={addAssignment}
      />
    </div>
  );
}
