import { FaSearch, FaPlus } from "react-icons/fa";
import { Button, Form } from "react-bootstrap";
import { useParams } from "react-router";
import * as db from "../../Database";

export default function Assignments() {
  const { cid } = useParams();
  const assignments = db.assignments;
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
        <Button
          variant="success"
          id="wd-add-assignment-group"
          className="me-2"
        >
          <FaPlus className="me-2" /> Group
        </Button>
        <Button
          variant="primary"
          id="wd-add-assignment"
        >
          <FaPlus className="me-2" /> Assignment
        </Button>
      </div>

      <h3 id="wd-assignments-title" className="d-flex justify-content-between align-items-center">
        ASSIGNMENTS 40% of Total
        <Button variant="success" className="p-0 px-2 py-1">
          <FaPlus className="fs-5" />
        </Button>
      </h3>
            

      <ul id="wd-assignment-list" className="list-unstyled">
      {assignments
          .filter((assignments: any) => assignments.course === cid)
          .map((assignments: any) => (
        <li className="wd-assignment-list-item d-flex align-items-center mb-3">
          <div className="border-start border-3 border-success ps-3 pe-3">
            <a
              href="#/Kambaz/Courses/1234/Assignments/123"
              className="wd-assignment-link fs-5 text-decoration-none text-dark"
            >
              {assignments._id && assignments.title}
            </a>
            <div className="wd-assignment-meta text-muted">
              Multiple Modules | <b>Not available until</b> May 6 at 12:00 AM |
            </div>
            <div>
              <b>Due</b> May 13 at 11:59 PM | 100 pts
            </div>
          </div>
        </li>
              ))}
      </ul>
  </div>
  );
}
