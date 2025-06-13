import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as db from "./Database";
import { v4 as uuidv4 } from "uuid";
import { FormControl } from "react-bootstrap";


export default function Dashboard() {
  const [courses, setCourses] = useState<any[]>(db.courses);

  const [course, setCourse] = useState<any>({
    _id: "0", name: "New Course", number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15",
    image: "/images/reactjs.jpg", description: "New Description"
  });

  const addNewCourse = () => {
    const newCourse = { ...course, _id: uuidv4() };
    setCourses([...courses, newCourse ]);
  };

  const deleteCourse = (courseId: string) => {
    setCourses(courses.filter((course) => course._id !== courseId));
  };

  return (
    <div className="p-4" id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      <h5>New Course
          <button className="btn btn-primary float-end"
                  id="wd-add-new-course-click"
                  onClick={addNewCourse} > Add </button>
      </h5>
      <br />
      <FormControl value={course.name} className="mb-2" 
      onChange={(e) => setCourse({ ...course, name: e.target.value }) } />
      <FormControl as="textarea" value={course.description} rows={3} 
      onChange={(e) => setCourse({ ...course, description: e.target.value }) } />
      <hr />
      <h2 id="wd-dashboard-published">
        Published Courses ({courses.length})
      </h2>
      <hr />
      <div className="row" id="wd-dashboard-courses">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {courses.map((course) => (
            <div key={course._id} className="col" style={{ width: "300px" }}>
              <div className="card">
                <Link
                  to={`/Kambaz/Courses/${course._id}/Home`}
                  className="wd-dashboard-course-link text-decoration-none text-dark"
                >
                  <img
                    src="/images/reactjs.jpg"
                    alt={`${course.name} cover`}
                    className="card-img-top"
                    style={{ height: 160, objectFit: "cover" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title text-nowrap overflow-hidden">
                      {course.name}
                    </h5>
                    <p
                      className="card-text overflow-hidden"
                      style={{ height: "100px" }}
                    >
                      {course.description}
                    </p>
                    <button className="btn btn-primary">Go</button>
                    <button onClick={(event) => {
                      event.preventDefault();
                      deleteCourse(course._id);
                    }} className="btn btn-danger float-end"
                    id="wd-delete-course-click">
                    Delete
            </button>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
