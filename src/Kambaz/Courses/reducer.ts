import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

export interface Course {
  _id: string;
  name: string;
  number: string;
  startDate: string;
  endDate: string;
  department: string;
  credits: number;
  description: string;
  author?: string;
}

interface CoursesState {
  courses: Course[];
}

const initialState: CoursesState = {
  courses: [],
};

const coursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    setCourses: (state, action: any) => {
      // action contains the full action object, use action.payload directly
      state.courses = action.payload;
    },
    addCourse: (state, action: any) => {
      const newCourse: Course = {
        _id: uuidv4(),
        ...action.payload, // still need to access payload property
      };
      state.courses.push(newCourse);
    },
    updateCourse: (state, action: any) => {
      const updatedCourse = action.payload;
      const idx = state.courses.findIndex(c => c._id === updatedCourse._id);
      if (idx !== -1) {
        state.courses[idx] = updatedCourse;
      }
    },
    deleteCourse: (state, action: any) => {
      const idToDelete = action.payload;
      state.courses = state.courses.filter(c => c._id !== idToDelete);
    },
  },
});

export const { setCourses, addCourse, updateCourse, deleteCourse } = coursesSlice.actions;
export default coursesSlice.reducer;
