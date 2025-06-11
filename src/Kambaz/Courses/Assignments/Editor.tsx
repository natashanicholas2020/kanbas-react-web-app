import React from "react";
import { Form, Button, Col, Row } from "react-bootstrap";

export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor" className="p-3 border rounded bg-light">
      <Form>
        <Form.Group controlId="wd-name" className="mb-3">
          <Form.Label>Assignment Name</Form.Label>
          <Form.Control type="text" defaultValue="A1 - ENV + HTML" />
        </Form.Group>

        <Form.Group controlId="wd-description" className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            defaultValue="The assignment is available online Submit a link to the landing page of"
          />
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="wd-points">
            <Form.Label>Points</Form.Label>
            <Form.Control type="number" defaultValue={100} />
          </Form.Group>

          <Form.Group as={Col} controlId="wd-assignment-group">
            <Form.Label>Assignment Group</Form.Label>
            <Form.Select defaultValue="assignment" name="assignmentGroup">
              <option value="assignment">Assignment</option>
              <option value="exam">Exam</option>
              <option value="quiz">Quiz</option>
            </Form.Select>
          </Form.Group>
        </Row>

        <Form.Group controlId="wd-display-grade-as" className="mb-3">
          <Form.Label>Display Grade As</Form.Label>
          <Form.Select defaultValue="percentage" name="displayGradeAs">
            <option value="percentage">Percentage</option>
            <option value="points">Points</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Online Entry Options</Form.Label>
          <div key="inline-checkbox" className="mb-2">
            <Form.Check
              inline
              type="checkbox"
              id="text-entry"
              label="Text Entry"
              name="entryOptions"
              value="text-entry"
            />
            <Form.Check
              inline
              type="checkbox"
              id="website-url"
              label="Website URL"
              name="entryOptions"
              value="website-url"
            />
            <Form.Check
              inline
              type="checkbox"
              id="media-recordings"
              label="Media Recordings"
              name="entryOptions"
              value="media-recordings"
            />
            <Form.Check
              inline
              type="checkbox"
              id="student-annotation"
              label="Student Annotation"
              name="entryOptions"
              value="student-annotation"
            />
            <Form.Check
              inline
              type="checkbox"
              id="file-uploads"
              label="File Uploads"
              name="entryOptions"
              value="file-uploads"
            />
          </div>
        </Form.Group>

        <Form.Group controlId="wd-assign-to" className="mb-3">
          <Form.Label>Assign To</Form.Label>
          <Form.Control type="text" defaultValue="Everyone" name="assignTo" />
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="wd-available-from">
            <Form.Label>Available From</Form.Label>
            <Form.Control type="date" defaultValue="2024-05-06" name="availableFrom" />
          </Form.Group>

          <Form.Group as={Col} controlId="wd-until">
            <Form.Label>Until</Form.Label>
            <Form.Control type="date" defaultValue="2024-05-20" name="until" />
          </Form.Group>

          <Form.Group as={Col} controlId="wd-due-date">
            <Form.Label>Due</Form.Label>
            <Form.Control type="date" defaultValue="2024-05-13" name="dueDate" />
          </Form.Group>
        </Row>

        <Button variant="primary" type="submit">
          Save Changes
        </Button>
      </Form>
    </div>
  );
}
