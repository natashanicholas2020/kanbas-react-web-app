import db from "../Database/index.js";
import { v4 as uuidv4 } from "uuid";
import * as courseDao from "../Courses/dao.js";

let { users } = db;
export const createUser = (user) => (users = [...users, { ...user, _id: uuidv4() }]);
export const findAllUsers = () => users;
export const findUserById = (userId) => users.find((user) => user._id === userId);
export const findUserByUsername = (username) => users.find((user) => user.username === username);
export const findUserByCredentials = (username, password) =>
  users.find( (user) => user.username === username && user.password === password );
export const updateUser = (userId, user) => (users = users.map((u) => (u._id === userId ? user : u)));
export const deleteUser = (userId) => (users = users.filter((u) => u._id !== userId));

export default function UserRoutes(app) {

    const findCoursesForEnrolledUser = (req, res) => {
      let { userId } = req.params;
      if (userId === "current") {
        const currentUser = req.session["currentUser"];
        if (!currentUser) {
          res.sendStatus(401);
          return;
        }
        userId = currentUser._id;
      }
      const courses = courseDao.findCoursesForEnrolledUser(userId);
      res.json(courses);
    };
    app.get("/api/users/:userId/courses", findCoursesForEnrolledUser);

  }
  