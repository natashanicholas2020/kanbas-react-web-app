import { FaPlus } from "react-icons/fa6";
import { Button, FormControl } from "react-bootstrap";

export default function AssignmentsControls() {
  return (
    <div id="wd-assignments">
      <FormControl
        type="text"
        placeholder="Search for Assignments"
        id="wd-search-assignment"
        className="mb-3"
      />

      <div className="mb-3">
        <Button id="wd-add-assignment-group" variant="secondary" className="me-2">
          + Group
        </Button>
        <Button id="wd-add-assignment" variant="danger">
          + Assignment
        </Button>
      </div>

      <h3 id="wd-assignments-title">
        ASSIGNMENTS 40% of Total{" "}
        <Button variant="link" size="sm" className="p-0 ms-2">
          <FaPlus />
        </Button>
      </h3>
    </div>
  );
}