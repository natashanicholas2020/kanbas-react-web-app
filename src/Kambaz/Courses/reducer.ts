// src/Kambaz/Courses/reducer.ts

export interface Course {
    _id: string;
    name: string;
    description: string;
  }
  
  export interface CourseState {
    courses: Course[];
    selectedCourse: Course | null;
  }
  
  export const initialCourseState: CourseState = {
    courses: [],
    selectedCourse: null,
  };
  
  export type CourseAction =
    | { type: "SET_COURSES"; payload: Course[] }
    | { type: "ADD_COURSE"; payload: Course }
    | { type: "DELETE_COURSE"; payload: string } // course _id
    | { type: "UPDATE_COURSE"; payload: Course }
    | { type: "SET_SELECTED_COURSE"; payload: Course | null };
  
  export function courseReducer(state: CourseState, action: CourseAction): CourseState {
    switch (action.type) {
      case "SET_COURSES":
        return { ...state, courses: action.payload };
      case "ADD_COURSE":
        return { ...state, courses: [...state.courses, action.payload] };
      case "DELETE_COURSE":
        return { ...state, courses: state.courses.filter(c => c._id !== action.payload) };
      case "UPDATE_COURSE":
        return {
          ...state,
          courses: state.courses.map(c => (c._id === action.payload._id ? action.payload : c)),
          selectedCourse: state.selectedCourse && state.selectedCourse._id === action.payload._id ? action.payload : state.selectedCourse,
        };
      case "SET_SELECTED_COURSE":
        return { ...state, selectedCourse: action.payload };
      default:
        return state;
    }
  }
  