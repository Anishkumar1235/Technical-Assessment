import { createSlice } from "@reduxjs/toolkit";

const studentsSlice = createSlice({
  name: "students",
  initialState: {
    students: [
      {
        id: 1,
        name: "Anshuman Kashyap",
        cohort: "AY 2024-25",
        courses: ["CBSE 9 Science", "CBSE 9 Math"],
        dateJoined: "17. Nov. 2024",
        lastLogin: "17. Nov. 2024 4:16 PM",
        status: "online",
      },
      {
        id: 2,
        name: "Bansi Dadhaniya",
        cohort: "AY 2024-25",
        courses: ["CBSE 9 Science", "CBSE 9 Math"],
        dateJoined: "17. Nov. 2024",
        lastLogin: "17. Nov. 2024 4:16 PM",
        status: "online",
      },
      {
        id: 3,
        name: "Chandrika Valotia",
        cohort: "AY 2024-25",
        courses: ["CBSE 9 Science", "CBSE 9 Math"],
        dateJoined: "17. Nov. 2024",
        lastLogin: "17. Nov. 2024 4:16 PM",
        status: "offline",
      },
      // Add other students as necessary
    ],
  },
  reducers: {
    addStudent: (state, action) => {
      state.students.push(action.payload);
    },
    updateStudentStatus: (state, action) => {
      const { id, status } = action.payload;
      const student = state.students.find((s) => s.id === id);
      if (student) {
        student.status = status;
      }
    },
  },
});

export const { addStudent, updateStudentStatus } = studentsSlice.actions;
export default studentsSlice.reducer;
