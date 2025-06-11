import React from "react";
import ModulesControls from "./AssignmentControls";
import ModuleControlButtons from "./AssignmentControlButtons";
import LessonControlButtons from "./LessonControlButtons";
import { ListGroup } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";

export default function Assignments() {
  return (
    <div>
      <ModulesControls /><br /><br /><br />
      <ListGroup className="rounded-0" id="wd-assignments">
        <ListGroup.Item className="wd-assignment p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary text-white d-flex justify-content-between align-items-center">
            <div>
              <BsGripVertical className="me-2 fs-3" />
              Assignments
            </div>
            <ModuleControlButtons />
          </div>

          <ListGroup className="wd-assignments rounded-0">
            <ListGroup.Item className="wd-lesson p-3 ps-1 d-flex justify-content-between align-items-center">
              <div>
                <BsGripVertical className="me-2 fs-3" />
                    <a href="#/Kambaz/Courses/1234/Assignments/123"
                className="wd-assignment-link" >
                A1 - ENV + HTML
                </a> 
                    <div> Multiple Modules | <b>Not available until</b> May 6 at 12:00am | </div>
                    <div> <b>Due</b> May 13 at 11:59pm | 100 pts </div>
                </div>
              <LessonControlButtons />
            </ListGroup.Item>

            <ListGroup.Item className="wd-assignment p-3 ps-1 d-flex justify-content-between align-items-center">
              <div>
                <BsGripVertical className="me-2 fs-3" />
                <a href="#/Kambaz/Courses/1234/Assignments/123"
               className="wd-assignment-link" >
              A2 - CSS + BOOTSTRAP
            </a> 
                <div> Multiple Modules | <b>Not available until</b> May 13 at 12:00am | </div>
                <div> <b>Due</b> May 20 at 11:59pm | 100 pts </div>
              </div>
              <LessonControlButtons />
            </ListGroup.Item>

            <ListGroup.Item className="wd-assignment p-3 ps-1 d-flex justify-content-between align-items-center">
              <div>
                <BsGripVertical className="me-2 fs-3" />
                <a href="#/Kambaz/Courses/1234/Assignments/123"
               className="wd-assignment-link" >
              A3 - JAVASCRIPT + REACT
            </a> 
                <div> Multiple Modules | <b>Not available until</b> May 20 at 12:00am | </div>
                <div> <b>Due</b> May 26 at 11:59pm | 100 pts </div>
              </div>
              <LessonControlButtons />
            </ListGroup.Item>
          </ListGroup>
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
}

  