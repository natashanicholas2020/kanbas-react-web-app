import { Link, useLocation } from "react-router-dom";

export default function CourseNavigation() {
  const { pathname } = useLocation();
  const courseId = "1234"; // You can dynamically pass this as a prop if needed
  const links = [
    { label: "Home",        id: "wd-course-home-link" },
    { label: "Modules",     id: "wd-course-modules-link" },
    { label: "Piazza",      id: "wd-course-piazza-link" },
    { label: "Zoom",        id: "wd-course-zoom-link" },
    { label: "Assignments", id: "wd-course-quizzes-link" },
    { label: "Quizzes",     id: "wd-course-assignments-link" },
    { label: "Grades",      id: "wd-course-grades-link" },
    { label: "People",      id: "wd-course-people-link" },
  ];

  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      {links.map(({ label, id }) => {
        const path = `/Kambaz/Courses/${courseId}/${label}`;
        const isActive = pathname.includes(label);
        return (
          <Link
            key={label}
            to={path}
            id={id}
            className={`list-group-item border border-0 ${isActive ? "active" : "text-danger"}`}
          >
            {label}
          </Link>
        );
      })}
    </div>
  );
}
