import { Link, useLocation, useParams } from "react-router-dom";
import { courses } from "../Database";

export default function CourseNavigation() {
  const { cid } = useParams();

  const { pathname } = useLocation();

  const course = courses.find((course) => course._id === cid);

  const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades", "People"];
  
  return (
    
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">

      {links.map((label) => {
        const to = `/Kambaz/Courses/${cid}/${label}`;
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
