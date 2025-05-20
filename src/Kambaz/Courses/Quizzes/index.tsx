import { FaPlus } from "react-icons/fa";
import { Button} from "react-bootstrap";

export default function Quizzes() {
  return (
    <div id="wd-quizzes" className="p-3">

      <h3 id="wd-quizz-title" className="d-flex justify-content-between align-items-center">
        QUIZZES 60% of Total
        <Button variant="success" className="p-0 px-2 py-1">
          <FaPlus className="fs-5" />
        </Button>
      </h3>

      <ul id="wd-quiz-list" className="list-unstyled">
        <li className="wd-quiz-list-item d-flex align-items-center mb-3">
          <div className="border-start border-3 border-success ps-3 pe-3">
            <a
              href="#/Kambaz/Courses/1234/Assignments/123"
              className="wd-quiz-link fs-5 text-decoration-none text-dark"
            >
              Q1
            </a>
            <div className="wd-quiz-meta text-muted">
              <b>Not available until</b> May 6 at 12:00 AM |
            </div>
            <div>
              <b>Due</b> May 13 at 11:59 PM | 100 pts
            </div>
          </div>
        </li>

        <li className="wd-quiz-list-item d-flex align-items-center mb-3">
          <div className="border-start border-3 border-success ps-3 pe-3">
            <a
              href="#/Kambaz/Courses/1234/Assignments/123"
              className="wd-quiz-link fs-5 text-decoration-none text-dark"
            >
              Q2
            </a>
            <div className="wd-quiz-meta text-muted">
              <b>Not available until</b> May 13 at 12:00 AM |
            </div>
            <div>
              <b>Due</b> May 20 at 11:59 PM | 100 pts
            </div>
          </div>
        </li>

        <li className="wd-quiz-list-item d-flex align-items-center mb-3">
          <div className="border-start border-3 border-success ps-3 pe-3">
            <a
              href="#/Kambaz/Courses/1234/Assignments/123"
              className="wd-quiz-link fs-5 text-decoration-none text-dark"
            >
              Q3
            </a>
            <div className="wd-quiz-meta text-muted">
              <b>Not available until</b> May 20 at 12:00 AM |
            </div>
            <div>
              <b>Due</b> May 27 at 11:59 PM | 100 pts
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}
