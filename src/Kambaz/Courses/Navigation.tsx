import { Link, useLocation, useParams } from "react-router-dom";
import { Card, Row, Col } from "react-bootstrap";

export default function CourseNavigation() {
  const { id } = useParams();

  const { pathname } = useLocation();

  const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades", "People"];
  
  return (
    
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">

      {links.map((label) => {
        const to = `/Kambaz/Courses/${id}/${label}`;
        const isActive = pathname.includes(`/${label}`);
        const linkId = `wd-course-${label.toLowerCase()}-link`;

        return (
          <Link
            key={label}
            to={to}
            id={linkId}
            className={`list-group-item border border-0 ${isActive ? "active" : "text-danger"}`}
          >
            {label}
          </Link>
        );
      })}
    </div>
);}
