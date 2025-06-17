// import React from "react";
// import ModulesControls from "./AssignmentControls";
// import ModuleControlButtons from "./AssignmentControlButtons";
// import LessonControlButtons from "./LessonControlButtons";
// import { ListGroup } from "react-bootstrap";
// import { BsGripVertical } from "react-icons/bs";
// import { useParams } from "react-router";
// import * as db from "../../Database";

// export default function Assignments() {
//     const { cid } = useParams();

//     const assignments = db.assignments.filter((a) => a.course === cid);

//   return (
//     <div>
//       <ModulesControls />
//       <br /><br /><br />
//       <ListGroup className="rounded-0" id="wd-assignments">
//         {assignments.map((assignment) => (
//           <ListGroup.Item key={assignment._id} className="wd-assignment p-0 mb-5 fs-5 border-gray">
//             <div className="wd-title p-3 ps-2 bg-secondary text-white d-flex justify-content-between align-items-center">
//               <div>
//                 <BsGripVertical className="me-2 fs-3" />
//                 {assignment.title}
//               </div>
//               <ModuleControlButtons />
//             </div>

//             <ListGroup className="wd-lessons rounded-0">
//               <ListGroup.Item className="wd-lesson p-3 ps-1 d-flex justify-content-between align-items-center">
//                 <div>
//                   <BsGripVertical className="me-2 fs-3" />
//                   <a href={`#/Kambaz/Courses/${cid}/Assignments/${assignment._id}`} className="wd-assignment-link">
//                     View Assignment
//                   </a>
//                 </div>
//                 <LessonControlButtons />
//               </ListGroup.Item>
//             </ListGroup>
//           </ListGroup.Item>
//         ))}
//       </ListGroup>
//     </div>
//   );
// }
import { useState } from "react";
import AssignmentControls from "./AssignmentControls";
import AssignmentControlButtons from "./AssignmentControlButtons";
import LessonControlButtons from "./LessonControlButtons";
import { ListGroup, FormControl } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import {
  addAssignment,
  editAssignment,
  updateAssignment,
  deleteAssignment,
} from "./reducer";

export default function Assignments() {
  const { cid } = useParams();

  const [assignmentTitle, setAssignmentTitle] = useState("");

  const { assignments } = useSelector((state: any) => state.assignmentsReducer);
  const dispatch = useDispatch();

  const filteredAssignments = assignments.filter(
    (a: any) =>
      a.course === cid &&
      a.title.toLowerCase().includes(assignmentTitle.toLowerCase())
  );

  return (
    <div>
      <AssignmentControls
        assignmentTitle={assignmentTitle}
        setAssignmentTitle={setAssignmentTitle}
        addAssignment={() => {
          dispatch(
            addAssignment({
              title: assignmentTitle || "New Assignment",
              course: cid,
            })
          );
          setAssignmentTitle("");
        }}
      />

      <br />
      <br />
      <br />

      <ListGroup className="rounded-0" id="wd-assignments">
        {filteredAssignments.map((assignment: any) => (
          <ListGroup.Item
            key={assignment._id}
            className="wd-assignment p-0 mb-5 fs-5 border-gray"
          >
            <div className="wd-title p-3 ps-2 bg-secondary text-white d-flex justify-content-between align-items-center">
              <div>
                <BsGripVertical className="me-2 fs-3" />
                {!assignment.editing && assignment.title}
                {assignment.editing && (
                  <FormControl
                    className="w-50 d-inline-block"
                    defaultValue={assignment.title}
                    onChange={(e) =>
                      dispatch(
                        updateAssignment({ ...assignment, title: e.target.value })
                      )
                    }
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        dispatch(updateAssignment({ ...assignment, editing: false }));
                      }
                    }}
                  />
                )}
              </div>

              <AssignmentControlButtons
                assignmentId={assignment._id}
                deleteAssignment={(id) => dispatch(deleteAssignment(id))}
                editAssignment={(id) => dispatch(editAssignment(id))}
              />
            </div>

            <ListGroup className="wd-lessons rounded-0">
              <ListGroup.Item className="wd-lesson p-3 ps-1 d-flex justify-content-between align-items-center">
                <div>
                  <BsGripVertical className="me-2 fs-3" />
                  <a
                    href={`#/Kambaz/Courses/${cid}/Assignments/${assignment._id}`}
                    className="wd-assignment-link"
                  >
                    View Assignment
                  </a>
                </div>
                <LessonControlButtons />
              </ListGroup.Item>
            </ListGroup>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}
