// import { createSlice } from "@reduxjs/toolkit";
// import { assignments as initialAssignments } from "../../Database"; // assumes your DB file exports `assignments`
// import { v4 as uuidv4 } from "uuid";

// const initialState = {
//   assignments: initialAssignments,
// };

// const assignmentsSlice = createSlice({
//   name: "assignments",
//   initialState,
//   reducers: {
//     addAssignment: (state, { payload: assignment }) => {
//       const newAssignment = {
//         _id: uuidv4(),
//         title: assignment.title,
//         course: assignment.course,
//         description: assignment.description || "",
//         dueDate: assignment.dueDate || null,
//       };
//       state.assignments = [...state.assignments, newAssignment] as any;
//     },

//     deleteAssignment: (state, { payload: assignmentId }) => {
//       state.assignments = state.assignments.filter(
//         (a) => a._id !== assignmentId
//       );
//     },

//     updateAssignment: (state, { payload: assignment }) => {
//       state.assignments = state.assignments.map((a) =>
//         a._id === assignment._id ? assignment : a
//       );
//     },

//     editAssignment: (state, { payload: assignmentId }) => {
//       state.assignments = state.assignments.map((a) =>
//         a._id === assignmentId ? { ...a, editing: true } : a
//       );
//     },
//   },
// });

// export const {
//   addAssignment,
//   deleteAssignment,
//   updateAssignment,
//   editAssignment,
// } = assignmentsSlice.actions;


import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import assignmentsData from "../../Database/assignments.json";

const initialState = {
  assignments: assignmentsData,
};

const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    addAssignment: (state, { payload: assignment }) => {
      const newAssignment = {
        _id: uuidv4(),
        title: assignment.title || "",
        description: assignment.description || "",
        points: assignment.points || 0,
        dueDate: assignment.dueDate || "",
        availableFrom: assignment.availableFrom || "",
        until: assignment.until || "",
        group: assignment.group || "assignment",
        displayGradeAs: assignment.displayGradeAs || "points",
        course: assignment.course || "",
        editing: false, // default editing flag
      };
      state.assignments.push(newAssignment);
    },
    deleteAssignment: (state, { payload: assignmentId }) => {
      state.assignments = state.assignments.filter(a => a._id !== assignmentId);
    },
    updateAssignment: (state, { payload: updatedAssignment }) => {
      state.assignments = state.assignments.map(a =>
        a._id === updatedAssignment._id ? { ...a, ...updatedAssignment } : a
      );
    },
    editAssignment: (state, { payload: assignmentId }) => {
      state.assignments = state.assignments.map(a =>
        a._id === assignmentId ? { ...a, editing: true } : a
      );
    },
  },
});

export const {
  addAssignment,
  deleteAssignment,
  updateAssignment,
  editAssignment,
} = assignmentsSlice.actions;

export default assignmentsSlice.reducer;
