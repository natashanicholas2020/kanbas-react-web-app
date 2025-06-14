import { Modal, FormControl, Form, Button, Col, Row } from "react-bootstrap";

export default function Editor({
  show,
  handleClose,
  dialogTitle,
  assignment,
  setAssignment,
  saveAssignment,
}: any) {
  const onlineOptions = [
    "text-entry",
    "website-url",
    "media-recordings",
    "student-annotation",
    "file-uploads",
  ];

  if (!assignment) return null;

  function toggleOption(option: string) {
    setAssignment({
      ...assignment,
      onlineEntryOptions: {
        ...assignment.onlineEntryOptions,
        [option]: !assignment.onlineEntryOptions?.[option],
      },
    });
  }

  return (
    <Modal show={show} onHide={handleClose} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>{dialogTitle}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="assignment-title" className="mb-3">
            <Form.Label htmlFor="assignment-title">Assignment Name</Form.Label>
            <FormControl
              id="assignment-title"
              name="title"
              type="text"
              value={assignment.title}
              onChange={(e) => setAssignment({ ...assignment, title: e.target.value })}
            />
          </Form.Group>

          <Form.Group controlId="assignment-description" className="mb-3">
            <Form.Label htmlFor="assignment-description">Description</Form.Label>
            <FormControl
              id="assignment-description"
              name="description"
              as="textarea"
              rows={3}
              value={assignment.description || ""}
              onChange={(e) => setAssignment({ ...assignment, description: e.target.value })}
            />
          </Form.Group>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="assignment-points">
              <Form.Label htmlFor="assignment-points">Points</Form.Label>
              <FormControl
                id="assignment-points"
                name="points"
                type="number"
                value={assignment.points ?? 100}
                onChange={(e) =>
                  setAssignment({ ...assignment, points: Number(e.target.value) })
                }
              />
            </Form.Group>

            <Form.Group as={Col} controlId="assignment-group">
              <Form.Label htmlFor="assignment-group">Assignment Group</Form.Label>
              <Form.Select
                id="assignment-group"
                name="group"
                value={assignment.group || "assignment"}
                onChange={(e) => setAssignment({ ...assignment, group: e.target.value })}
              >
                <option value="assignment">Assignment</option>
                <option value="exam">Exam</option>
                <option value="quiz">Quiz</option>
              </Form.Select>
            </Form.Group>
          </Row>

          <Form.Group controlId="assignment-display-grade" className="mb-3">
            <Form.Label htmlFor="assignment-display-grade">Display Grade As</Form.Label>
            <Form.Select
              id="assignment-display-grade"
              name="displayGradeAs"
              value={assignment.displayGradeAs || "percentage"}
              onChange={(e) =>
                setAssignment({ ...assignment, displayGradeAs: e.target.value })
              }
            >
              <option value="percentage">Percentage</option>
              <option value="points">Points</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Online Entry Options</Form.Label>
            <div key="inline-checkbox" className="mb-2">
              {onlineOptions.map((option) => (
                <Form.Check
                  inline
                  type="checkbox"
                  id={`online-${option}`}
                  name={`online-${option}`}
                  label={option.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase())}
                  key={option}
                  checked={assignment.onlineEntryOptions?.[option] || false}
                  onChange={() => toggleOption(option)}
                />
              ))}
            </div>
          </Form.Group>

          <Form.Group controlId="assignment-assign-to" className="mb-3">
            <Form.Label htmlFor="assignment-assign-to">Assign To</Form.Label>
            <FormControl
              id="assignment-assign-to"
              name="assignTo"
              type="text"
              value={assignment.assignTo || "Everyone"}
              onChange={(e) => setAssignment({ ...assignment, assignTo: e.target.value })}
            />
          </Form.Group>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="assignment-available-from">
              <Form.Label htmlFor="assignment-available-from">Available From</Form.Label>
              <FormControl
                id="assignment-available-from"
                name="availableFrom"
                type="date"
                value={assignment.availableFrom || ""}
                onChange={(e) => setAssignment({ ...assignment, availableFrom: e.target.value })}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="assignment-until">
              <Form.Label htmlFor="assignment-until">Until</Form.Label>
              <FormControl
                id="assignment-until"
                name="until"
                type="date"
                value={assignment.until || ""}
                onChange={(e) => setAssignment({ ...assignment, until: e.target.value })}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="assignment-due-date">
              <Form.Label htmlFor="assignment-due-date">Due</Form.Label>
              <FormControl
                id="assignment-due-date"
                name="dueDate"
                type="date"
                value={assignment.dueDate || ""}
                onChange={(e) => setAssignment({ ...assignment, dueDate: e.target.value })}
              />
            </Form.Group>
          </Row>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancel
        </Button>
        <Button
          variant="primary"
          onClick={() => {
            saveAssignment();
            handleClose();
          }}
        >
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
