// import React from "react";
// import { FaSearch, FaPlus } from "react-icons/fa";
// import { Button, Form } from "react-bootstrap";
// import { useParams, useNavigate } from "react-router";
// import { useSelector } from "react-redux";

// export default function Assignments() {
//   const { cid } = useParams<{ cid: string }>();
//   const navigate = useNavigate();

//   // Simple selector with minimal typing
//   const assignments = useSelector((state: any) =>
//     state.assignments.assignments.filter((a: any) => a.course === cid)
//   );

//   return (
//     <div id="wd-assignments" className="p-3">
//       <div className="d-flex align-items-center mb-3">
//         <Form.Control
//           placeholder="Search for Assignments"
//           id="wd-search-assignment"
//           className="me-2"
//         />
//         <FaSearch className="fs-5 text-secondary" />
//       </div>

//       <div className="d-flex justify-content-end mb-3">
//         <Button variant="success" id="wd-add-assignment-group" className="me-2">
//           <FaPlus className="me-2" /> Group
//         </Button>
//         <Button
//           variant="primary"
//           id="wd-add-assignment"
//           onClick={() => navigate(`/courses/${cid}/assignments/new`)}
//         >
//           <FaPlus className="me-2" /> Assignment
//         </Button>
//       </div>

//       <h3
//         id="wd-assignments-title"
//         className="d-flex justify-content-between align-items-center"
//       >
//         ASSIGNMENTS 40% of Total
//         <Button variant="success" className="p-0 px-2 py-1">
//           <FaPlus className="fs-5" />
//         </Button>
//       </h3>

//       <ul id="wd-assignment-list" className="list-unstyled">
//         {assignments.map((assignment: any) => (
//           <li
//             key={assignment._id}
//             className="wd-assignment-list-item d-flex align-items-center mb-3"
//           >
//             <div className="border-start border-3 border-success ps-3 pe-3">
//               <a
//                 href={`#/courses/${cid}/assignments/${assignment._id}`}
//                 className="wd-assignment-link fs-5 text-decoration-none text-dark"
//               >
//                 {assignment.title}
//               </a>
//               <div className="wd-assignment-meta text-muted">
//                 {assignment.description || "No description"} |{" "}
//                 <b>Not available until</b>{" "}
//                 {assignment.availableFrom
//                   ? new Date(assignment.availableFrom).toLocaleString()
//                   : "N/A"}{" "}
//                 |
//               </div>
//               <div>
//                 <b>Due</b>{" "}
//                 {assignment.dueDate
//                   ? new Date(assignment.dueDate).toLocaleString()
//                   : "N/A"}{" "}
//                 | {assignment.points ?? 100} pts
//               </div>
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

import React, { useState } from "react";
import { FaSearch, FaPlus, FaTrash } from "react-icons/fa";
import { Button, Form, Modal } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { deleteAssignment } from "./reducer"; // adjust path as needed

export default function Assignments() {
  const { cid } = useParams<{ cid: string }>();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const assignments = useSelector((state: any) =>
    state.assignments.assignments.filter((a: any) => a.course === cid)
  );

  // State for delete confirmation dialog
  const [showConfirm, setShowConfirm] = useState(false);
  const [assignmentToDelete, setAssignmentToDelete] = useState<string | null>(null);

  // Open confirmation dialog
  const handleDeleteClick = (id: string) => {
    setAssignmentToDelete(id);
    setShowConfirm(true);
  };

  // Confirm delete
  const handleConfirmDelete = () => {
    if (assignmentToDelete) {
      dispatch(deleteAssignment(assignmentToDelete));


    }
    setShowConfirm(false);
    setAssignmentToDelete(null);
  };

  // Cancel delete
  const handleCancelDelete = () => {
    setShowConfirm(false);
    setAssignmentToDelete(null);
  };

  return (
    <div id="wd-assignments" className="p-3">
      <div className="d-flex align-items-center mb-3">
        <Form.Control
          placeholder="Search for Assignments"
          id="wd-search-assignment"
          className="me-2"
        />
        <FaSearch className="fs-5 text-secondary" />
      </div>

      <div className="d-flex justify-content-end mb-3">
        <Button variant="success" id="wd-add-assignment-group" className="me-2">
          <FaPlus className="me-2" /> Group
        </Button>
        <Button
          variant="primary"
          id="wd-add-assignment"
          onClick={() => navigate(`/courses/${cid}/assignments/new`)}
        >
          <FaPlus className="me-2" /> Assignment
        </Button>
      </div>

      <h3
        id="wd-assignments-title"
        className="d-flex justify-content-between align-items-center"
      >
        ASSIGNMENTS 40% of Total
        <Button variant="success" className="p-0 px-2 py-1">
          <FaPlus className="fs-5" />
        </Button>
      </h3>

      <ul id="wd-assignment-list" className="list-unstyled">
        {assignments.map((assignment: any) => (
          <li
            key={assignment._id}
            className="wd-assignment-list-item d-flex align-items-center justify-content-between mb-3"
          >
            <div className="d-flex border-start border-3 border-success ps-3 pe-3 flex-grow-1">
              <a
                href={`#/courses/${cid}/assignments/${assignment._id}`}
                className="wd-assignment-link fs-5 text-decoration-none text-dark"
              >
                {assignment.title}
              </a>
              <div className="wd-assignment-meta text-muted ms-3">
                {assignment.description || "No description"} |{" "}
                <b>Not available until</b>{" "}
                {assignment.availableFrom
                  ? new Date(assignment.availableFrom).toLocaleString()
                  : "N/A"}{" "}
                |
              </div>
              <div className="ms-3">
                <b>Due</b>{" "}
                {assignment.dueDate
                  ? new Date(assignment.dueDate).toLocaleString()
                  : "N/A"}{" "}
                | {assignment.points ?? 100} pts
              </div>
            </div>

            {/* Delete button */}
            <Button
              variant="danger"
              size="sm"
              className="ms-3"
              onClick={() => handleDeleteClick(assignment._id)}
              aria-label={`Delete assignment ${assignment.title}`}
            >
              <FaTrash />
            </Button>
          </li>
        ))}
      </ul>

      {/* Confirmation Modal */}
      <Modal show={showConfirm} onHide={handleCancelDelete} centered>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to remove this assignment?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCancelDelete}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleConfirmDelete}>
            Yes, Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

