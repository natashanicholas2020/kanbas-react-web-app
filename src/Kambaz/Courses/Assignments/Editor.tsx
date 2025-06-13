import React from "react";
import { useParams, Link } from "react-router-dom";
import { Form, Button, Col, Row } from "react-bootstrap";
import * as db from "../../Database";

export default function AssignmentEditor() {
  const { cid, aid } = useParams();

  const assignment = db.assignments.find((a: any) => a._id === aid && a.course === cid);

  if (!assignment) {
    return <div>Assignment not found.</div>;
  }

  return (
    <div id="wd-assignments-editor" className="p-3 border rounded bg-light">
      <Form>
        <Form.Group controlId="wd-name" className="mb-3">
          <Form.Label>Assignment Name</Form.Label>
          <Form.Control type="text" defaultValue={assignment.title} />
        </Form.Group>

        <Form.Group controlId="wd-description" className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            defaultValue={assignment.description || ""}
          />
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="wd-points">
            <Form.Label>Points</Form.Label>
            <Form.Control type="number" defaultValue={assignment.points || 100} />
          </Form.Group>

          <Form.Group as={Col} controlId="wd-assignment-group">
            <Form.Label>Assignment Group</Form.Label>
            <Form.Select defaultValue={assignment.group || "assignment"}>
              <option value="assignment">Assignment</option>
              <option value="exam">Exam</option>
              <option value="quiz">Quiz</option>
            </Form.Select>
          </Form.Group>
        </Row>

        <Form.Group controlId="wd-display-grade-as" className="mb-3">
          <Form.Label>Display Grade As</Form.Label>
          <Form.Select defaultValue={assignment.displayGradeAs || "percentage"}>
            <option value="percentage">Percentage</option>
            <option value="points">Points</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Online Entry Options</Form.Label>
          <div key="inline-checkbox" className="mb-2">
            {["text-entry", "website-url", "media-recordings", "student-annotation", "file-uploads"].map((option) => (
              <Form.Check
                inline
                type="checkbox"
                id={option}
                label={option.replace("-", " ").replace(/\b\w/g, l => l.toUpperCase())}
                key={option}
              />
            ))}
          </div>
        </Form.Group>

        <Form.Group controlId="wd-assign-to" className="mb-3">
          <Form.Label>Assign To</Form.Label>
          <Form.Control type="text" defaultValue="Everyone" />
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="wd-available-from">
            <Form.Label>Available From</Form.Label>
            <Form.Control type="date" defaultValue={assignment.availableFrom || "2024-05-06"} />
          </Form.Group>

          <Form.Group as={Col} controlId="wd-until">
            <Form.Label>Until</Form.Label>
            <Form.Control type="date" defaultValue={assignment.until || "2024-05-20"} />
          </Form.Group>

          <Form.Group as={Col} controlId="wd-due-date">
            <Form.Label>Due</Form.Label>
            <Form.Control type="date" defaultValue={assignment.dueDate || "2024-05-13"} />
          </Form.Group>
        </Row>

        <div className="d-flex gap-2">
          <Link to={`/Kanbas/Courses/${cid}/Assignments`}>
            <Button variant="secondary">Cancel</Button>
          </Link>
          <Link to={`/Kanbas/Courses/${cid}/Assignments`}>
            <Button variant="primary" type="submit">Save</Button>
          </Link>
        </div>
      </Form>
    </div>
  );
}

