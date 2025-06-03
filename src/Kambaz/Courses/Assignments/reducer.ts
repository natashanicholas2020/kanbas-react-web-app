import { createSlice } from "@reduxjs/toolkit";
import { assignments as initialAssignments } from "../../Database";
import { v4 as uuidv4 } from "uuid";

interface Assignment {
  _id: string;
  title: string;
  course: string;
  editing?: boolean;
}

interface AssignmentsState {
  assignments: Assignment[];
}

const initialState: AssignmentsState = {
  assignments: initialAssignments,
};

const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    deleteAssignment: (state, action: { payload: string }) => {
        state.assignments = state.assignments.filter(
          (a) => a._id !== action.payload
        );
      },
      addAssignment: (state, action: { payload: { title: string; course: string } }) => {
        const newAssignment: Assignment = {
          _id: uuidv4(),
          title: action.payload.title,
          course: action.payload.course,
        };
        state.assignments.push(newAssignment);
      },
      
      updateAssignment: (state, action: { payload: Assignment }) => {
        state.assignments = state.assignments.map((a) =>
          a._id === action.payload._id ? action.payload : a
        );
      },
      
      editAssignment: (state, action: { payload: string }) => {
        state.assignments = state.assignments.map((a) =>
          a._id === action.payload ? { ...a, editing: true } : a
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
