// import CourseNavigation from "./Navigation";
// import Modules from "./Modules";
// import Home from "./Home";
// import Assignments from "./Assignments";
// import AssignmentEditor from "./Assignments/Editor";
// import Piazza from "./Piazza";
// import Zoom from "./Zoom";
// import Grades from "./Grades";
// import Quizzes from "./Quizzes";
// import PeopleTable from "./People/Table";
// import { Navigate, Route, Routes, useParams } from "react-router";
// import { FaAlignJustify } from "react-icons/fa";
// import { courses } from "../Database";
// export default function Courses() {
//   const { cid } = useParams();
//   const course = courses.find((course) => course._id === cid);
//     return (
// <div id="wd-courses">
//   <h2 className="text-danger">
//       <FaAlignJustify className="me-4 fs-4 mb-1" />
//       {course && course.name}</h2> <hr />
//   <div className="d-flex">
//     <div className="d-none d-md-block">
//       <CourseNavigation />
//     </div>
//     <div className="flex-fill">
//     <Routes>
//       <Route path="Home" element={<Home />} />
//       <Route path="Modules" element={<Modules />} />
//       <Route path="Assignments" element={<Assignments />} />
//       <Route path="Piazza" element={<Piazza />} />
//       <Route path="Zoom" element={<Zoom />} />
//       <Route path="Grades" element={<Grades />} />
//       <Route path="Quizzes" element={<Quizzes />} />
//       <Route path="Assignments/:aid" element={<AssignmentEditor />} />
//       <Route path="People" element={<PeopleTable />} />
//     </Routes>
//     </div></div>
// </div>

//   );}
  
import CourseNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import Piazza from "./Piazza";
import Zoom from "./Zoom";
import Grades from "./Grades";
import Quizzes from "./Quizzes";
import PeopleTable from "./People/Table";
import { Navigate, Route, Routes, useParams, useLocation } from "react-router";
import { FaAlignJustify } from "react-icons/fa";
import { courses } from "../Database";

export default function Courses() {
  const { cid } = useParams();
  const { pathname } = useLocation();
  const course = courses.find((course) => course._id === cid);

  const section = pathname.split("/")[4];

  return (
    <div id="wd-courses">
      <h2 className="text-danger">
        <FaAlignJustify className="me-3 fs-4 mb-1" />
        {course?.name} {section && `> ${section}`}
      </h2>
      <hr />
      <div className="d-flex">
        <div className="d-none d-md-block">
          <CourseNavigation />
        </div>
        <div className="flex-fill">
          <Routes>
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Assignments" element={<Assignments />} />
            <Route path="Piazza" element={<Piazza />} />
            <Route path="Zoom" element={<Zoom />} />
            <Route path="Grades" element={<Grades />} />
            <Route path="Quizzes" element={<Quizzes />} />
            <Route path="Assignments/:aid" element={<AssignmentEditor />} />
            <Route path="People" element={<PeopleTable />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
