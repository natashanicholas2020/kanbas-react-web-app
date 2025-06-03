// import { useParams } from "react-router";
// import * as db from "../../Database";
// import { ListGroup } from "react-bootstrap";
// import { BsGripVertical } from "react-icons/bs";

// export default function AssignmentEditor() {
//   const { cid } = useParams();
//   const assignments = db.assignments;

//   return (
//     <div>
//       <h2>Assignments</h2>
//       <ListGroup className="rounded-0" id="wd-assignments">
//         {assignments
//           .filter((assignment: any) => assignment.course === cid)
//           .map((assignment: any) => (
//             <ListGroup.Item
//               key={assignment._id}
//               className="wd-assignment p-3 fs-5 border-gray"
//             >
//               <BsGripVertical className="me-2 fs-3" />
//               {assignment.title}
//             </ListGroup.Item>
//           ))}
//       </ListGroup>
//     </div>
//   );
// }
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { addAssignment, editAssignment, updateAssignment, deleteAssignment } from "./reducer";
import { Form, Button } from "react-bootstrap";

interface Assignment {
  _id: string;
  title: string;
  description?: string;
  points?: number;
  dueDate?: string;
  availableFrom?: string;
  availableUntil?: string;
  course: string;
}

export default function AssignmentEditor() {
  const { cid, aid } = useParams<{ cid: string; aid: string }>();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Select assignment by _id
  const assignment = useSelector((state: any) =>
    state.assignments.assignments.find((a: Assignment) => a._id === aid)
  );

  // Local state for editing fields
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [points, setPoints] = useState<number | "">("");
  const [dueDate, setDueDate] = useState("");
  const [availableFrom, setAvailableFrom] = useState("");
  const [availableUntil, setAvailableUntil] = useState("");

  // Initialize local state when assignment loads or changes
  useEffect(() => {
    if (assignment) {
      setTitle(assignment.title || "");
      setDescription(assignment.description || "");
      setPoints(assignment.points ?? "");
      setDueDate(assignment.dueDate ? assignment.dueDate.slice(0, 16) : ""); // format for datetime-local input
      setAvailableFrom(assignment.availableFrom ? assignment.availableFrom.slice(0, 16) : "");
      setAvailableUntil(assignment.availableUntil ? assignment.availableUntil.slice(0, 16) : "");
    }
  }, [assignment]);

  if (!assignment) {
    return <div>Assignment not found.</div>;
  }

  const handleSave = () => {
    dispatch(
      updateAssignment({
        ...assignment,
        title,
        description,
        points: points === "" ? undefined : Number(points),
        dueDate: dueDate ? new Date(dueDate).toISOString() : undefined,
        availableFrom: availableFrom ? new Date(availableFrom).toISOString() : undefined,
        availableUntil: availableUntil ? new Date(availableUntil).toISOString() : undefined,
        course: cid!, 
      })
    );
    
    navigate(`/courses/${cid}/assignments`);
  };

  const handleCancel = () => {
    navigate(`/courses/${cid}/assignments`);
  };

  return (
    <div className="p-3">
      <h2>Edit Assignment</h2>
      <Form>
        <Form.Group className="mb-3" controlId="assignmentTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="assignmentDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="assignmentPoints">
          <Form.Label>Points</Form.Label>
          <Form.Control
            type="number"
            min={0}
            value={points}
            onChange={(e) => setPoints(e.target.value === "" ? "" : Number(e.target.value))}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="assignmentDueDate">
          <Form.Label>Due Date</Form.Label>
          <Form.Control
            type="datetime-local"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="assignmentAvailableFrom">
          <Form.Label>Available From</Form.Label>
          <Form.Control
            type="datetime-local"
            value={availableFrom}
            onChange={(e) => setAvailableFrom(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="assignmentAvailableUntil">
          <Form.Label>Available Until</Form.Label>
          <Form.Control
            type="datetime-local"
            value={availableUntil}
            onChange={(e) => setAvailableUntil(e.target.value)}
          />
        </Form.Group>

        <div className="d-flex justify-content-end">
          <Button variant="secondary" className="me-2" onClick={handleCancel}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save
          </Button>
        </div>
      </Form>
    </div>
  );
}
