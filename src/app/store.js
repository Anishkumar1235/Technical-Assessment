import { configureStore } from "@reduxjs/toolkit";
import studentsReducer from "../features/students/studentsSlice";
import uiReducer from "../features/ui/uiSlice";

const store = configureStore({
  reducer: {
    students: studentsReducer,
    ui: uiReducer,
  },
});

export default store;
