import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Card, Button, FormControl } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
import * as db from "./Database";

export default function Dashboard(
  { courses, course, setCourse, addNewCourse,
    deleteCourse, updateCourse }: {
    courses: any[]; course: any; setCourse: (course: any) => void;
    addNewCourse: () => void; deleteCourse: (course: any) => void;
    updateCourse: () => void; })
   {
  

  return (
    <div className="p-4" id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />

      <h5>
        New Course
        <Button
          className="btn btn-warning float-end me-2"
          onClick={updateCourse}
          id="wd-update-course-click"
        >
          Update
        </Button>
        <Button
          className="btn btn-primary float-end"
          onClick={addNewCourse}
          id="wd-add-new-course-click"
        >
          Add
        </Button>
      </h5>
      <br />
      <FormControl
        value={course.name}
        className="mb-2"
        placeholder="Course Name"
        onChange={(e) => setCourse({ ...course, name: e.target.value })}
      />
      <FormControl
        value={course.description}
        as="textarea"
        rows={3}
        placeholder="Course Description"
        className="mb-4"
        onChange={(e) => setCourse({ ...course, description: e.target.value })}
      />
      <hr />

      <h2 id="wd-dashboard-published">
        Published Courses ({courses.length})
      </h2>
      <hr />

      <Row xs={1} sm={2} md={3} lg={4} className="g-4">
        {courses.map((course) => (
          <Col key={course._id} className="wd-dashboard-course">
            <Card>
              <Link
                to={`/Kambaz/Courses/${course._id}/Home`}
                className="wd-dashboard-course-link text-decoration-none text-dark"
              >
                <Card.Img
                  src={course.image || "/images/reactjs.jpg"}
                  variant="top"
                  height={160}
                />
              </Link>
              <Card.Body>
                <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">
                  {course.name}
                </Card.Title>
                <Card.Text className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                  {course.description}
                </Card.Text>
                <Button variant="primary" className="me-2">Go</Button>
                <Button
                  variant="warning"
                  className="me-2 float-end"
                  id="wd-edit-course-click"
                  onClick={(event) => {
                    event.preventDefault();
                    setCourse(course);
                  }}
                >
                  Edit
                </Button>
                <Button
                  variant="danger"
                  className="float-end"
                  id="wd-delete-course-click"
                  onClick={(event) => {
                    event.preventDefault();
                    deleteCourse(course._id);
                  }}
                >
                  Delete
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}
