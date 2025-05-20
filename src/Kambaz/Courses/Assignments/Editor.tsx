import { Form, Button, Col, Row } from "react-bootstrap";

export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor" className="container">
      <h2>Edit Assignment</h2>
      <Form>
        <Form.Group controlId="wd-name" className="mb-3">
          <Form.Label>Assignment Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Assignment Name" defaultValue="A1 - ENV + HTML" />
        </Form.Group>

        <Form.Group controlId="wd-description" className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control as="textarea" rows={5} placeholder="Enter Assignment Description" defaultValue="The assignment is available online Submit a link to the landing page of your Web application running on Netlify. The landing page should include the following: Your full name and section Links to each of the lab assignments, link to the Kambaz application Links to all relevant source repositories The Kambas application should include a link to navigate back to the landing page." />
        </Form.Group>

        <Row>
          <Col sm={6}>
            <Form.Group controlId="wd-points" className="mb-3">
              <Form.Label>Points</Form.Label>
              <Form.Control type="number" placeholder="Enter Points" defaultValue={100} />
            </Form.Group>
          </Col>

          <Col sm={6}>
            <Form.Group controlId="wd-due-date" className="mb-3">
              <Form.Label>Due Date</Form.Label>
              <Form.Control type="date" defaultValue="2025-05-13" />
            </Form.Group>
          </Col>
        </Row>

        <Form.Group controlId="wd-select-group" className="mb-3">
          <Form.Label>Assignment Type</Form.Label>
          <Form.Control as="select" defaultValue="ASSIGNMENT">
            <option value="TEST">Test</option>
            <option value="QUIZ">Quiz</option>
            <option value="ASSIGNMENT">Assignment</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="wd-display-grade-as" className="mb-3">
          <Form.Label>Display Grade As</Form.Label>
          <Form.Control as="select" defaultValue="PERCENTAGE">
            <option value="POINTS">Points</option>
            <option value="PERCENTAGE">Percentage</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="wd-submission-type" className="mb-3">
          <Form.Label>Submission Type</Form.Label>
          <Form.Control as="select" defaultValue="ONLINE">
            <option value="INPERSON">In Person</option>
            <option value="ONLINE">Online</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="wd-assign-to" className="mb-3">
          <Form.Label>Assign Assignment to</Form.Label>
          <Form.Control type="text" placeholder="Everyone" />
        </Form.Group>

        <Form.Group controlId="wd-online-entry-options" className="mb-3">
          <Form.Label>Online Entry Options</Form.Label>
          <Form.Check type="checkbox" label="Text Entry" />
          <Form.Check type="checkbox" label="Website URL" />
          <Form.Check type="checkbox" label="Media Recordings" />
          <Form.Check type="checkbox" label="Student Annotation" />
          <Form.Check type="checkbox" label="File Uploads" />
        </Form.Group>

        <Row>
          <Col>
            <Button variant="secondary" type="button" onClick={() => alert("Canceled")} className="w-100">
              Cancel
            </Button>
          </Col>
          <Col>
            <Button variant="primary" type="submit" onClick={() => alert("Saved")} className="w-100">
              Save
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
}

