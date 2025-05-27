import { Link } from "react-router-dom";

export default function CourseNavigation() {
  const links = [
    "Home",
    "Modules",
    "Piazza",
    "Zoom",
    "Assignments",
    "Quizzes",
    "Grades",
    "People",
  ];

  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      {links.map((label, index) => {
        const path = `/Kambaz/Courses/1234/${label}`;
        const id = `wd-course-${label.toLowerCase()}-link`;
        const className = `list-group-item border border-0${
          label === "Home" ? " active" : " text-danger"
        }`;

        return (
          <Link to={path} id={id} className={className} key={label}>
            {label}
          </Link>
        );
      })}
    </div>
  );
}


