import { useParams } from "react-router";
import * as db from "../../Database";
import { ListGroup } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";

export default function AssignmentEditor() {
  const { cid } = useParams();
  const assignments = db.assignments;

  return (
    <div>
      <h2>Assignments</h2>
      <ListGroup className="rounded-0" id="wd-assignments">
        {assignments
          .filter((assignment: any) => assignment.course === cid)
          .map((assignment: any) => (
            <ListGroup.Item
              key={assignment._id}
              className="wd-assignment p-3 fs-5 border-gray"
            >
              <BsGripVertical className="me-2 fs-3" />
              {assignment.title}
            </ListGroup.Item>
          ))}
      </ListGroup>
    </div>
  );
}
