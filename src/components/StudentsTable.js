// import React from "react";
// import { FaBell, FaCog } from "react-icons/fa";
// import img1 from "../assets/Av1.jpg"; // Adjust the path according to your project structure
// import img2 from "../assets/Av2.jpg"; // Adjust the path according to your project structure

// // Sample student data
// const students = [
//   {
//     name: "Anshuman Kashyap",
//     cohort: "AY 2024-25",
//     courses: {
//       science: "https://via.placeholder.com/20/FF0000/FFFFFF?text=S",
//       math: "https://via.placeholder.com/20/00FF00/FFFFFF?text=M",
//     },
//     joined: "17. Nov. 2024",
//     lastLogin: "17. Nov. 2024 4:16 PM",
//     status: "green",
//   },
//   {
//     name: "Bansi Dadhaniya",
//     cohort: "AY 2024-25",
//     courses: {
//       science: "https://via.placeholder.com/20/FF0000/FFFFFF?text=S",
//       math: "https://via.placeholder.com/20/00FF00/FFFFFF?text=M",
//     },
//     joined: "17. Nov. 2024",
//     lastLogin: "17. Nov. 2024 4:16 PM",
//     status: "green",
//   },
//   {
//     name: "Devang Dave",
//     cohort: "AY 2024-25",
//     courses: {
//       science: "https://via.placeholder.com/20/FF0000/FFFFFF?text=S",
//       math: "https://via.placeholder.com/20/00FF00/FFFFFF?text=M",
//     },
//     joined: "17. Nov. 2024",
//     lastLogin: "17. Nov. 2024 4:16 PM",
//     status: "red",
//   },
//   {
//     name: "Anshuman Kashyap",
//     cohort: "AY 2024-25",
//     courses: {
//       science: "https://via.placeholder.com/20/FF0000/FFFFFF?text=S",
//       math: "https://via.placeholder.com/20/00FF00/FFFFFF?text=M",
//     },
//     joined: "17. Nov. 2024",
//     lastLogin: "17. Nov. 2024 4:16 PM",
//     status: "green",
//   },
//   {
//     name: "Devang Dave",
//     cohort: "AY 2024-25",
//     courses: {
//       science: "https://via.placeholder.com/20/FF0000/FFFFFF?text=S",
//       math: "https://via.placeholder.com/20/00FF00/FFFFFF?text=M",
//     },
//     joined: "17. Nov. 2024",
//     lastLogin: "17. Nov. 2024 4:16 PM",
//     status: "red",
//   },
//   {
//     name: "Nita Shah",
//     cohort: "AY 2024-25",
//     courses: {
//       science: "https://via.placeholder.com/20/FF0000/FFFFFF?text=S",
//       math: "https://via.placeholder.com/20/00FF00/FFFFFF?text=M",
//     },
//     joined: "17. Nov. 2024",
//     lastLogin: "17. Nov. 2024 4:16 PM",
//     status: "green",
//   },
// ];

// const StudentsTable = () => {
//   return (
//     <div className="flex flex-col md:flex-row">
//       {/* Main Content */}
//       <div className="w-full bg-white rounded-md">
//         {/* Top Bar */}
//         <div className="flex justify-between items-center p-4 flex-wrap">
//           {/* Cohort Selection on the left */}
//           <div className="flex items-center space-x-4 mb-4 md:mb-0">
//             <select className="border font-bold border-gray-300 bg-gray-100 rounded-md px-3 py-2 w-full md:w-30">
//               <option>AY 2024-25</option>
//             </select>
//             <select className="border font-bold border-gray-300 bg-gray-100 rounded-md px-3 py-2 w-full md:w-30">
//               <option>CBSE 9</option>
//             </select>
//           </div>

//           {/* Add new Student button on the right */}
//           <button className="border font-bold border-gray-300 bg-gray-100 rounded-md px-3 py-2 w-full md:w-auto">
//             + Add new Student
//           </button>
//         </div>

//         {/* Table */}
//         <div className="p-4">
//           <table className="w-full table-auto border-collapse">
//             <thead>
//               <tr className="text-left border-b border-gray-300">
//                 <th className="p-4 font-semibold">Student Name</th>
//                 <th className="font-semibold">Cohort</th>
//                 <th className="font-semibold">Courses</th>
//                 <th className="font-semibold">Date Joined</th>
//                 <th className="font-semibold">Last Login</th>
//                 <th className="font-semibold">Status</th>
//               </tr>
//             </thead>

//             <tbody>
//               {students.map((student, index) => (
//                 <tr
//                   key={index}
//                   className="hover:bg-gray-50 border-b border-gray-200"
//                 >
//                   <td className="p-4">{student.name}</td>
//                   <td>{student.cohort}</td>
//                   <td className="py-2">
//                     <div className="flex flex-wrap">
//                       {/* Flexbox for the courses in the same row */}
//                       <div className="flex items-center space-x-2 bg-gray-100 px-2 py-1 rounded-md mr-4 mb-2">
//                         <img
//                           src={img2}
//                           alt="Science Icon"
//                           className="w-6 h-6"
//                         />
//                         <span>CBSE 9 Science</span>
//                       </div>
//                       <div className="flex items-center pl-4 space-x-2 bg-gray-100 px-2 py-1 rounded-md mb-2">
//                         <img src={img1} alt="Math Icon" className="w-6 h-6" />
//                         <span>CBSE 9 Math</span>
//                       </div>
//                     </div>
//                   </td>
//                   <td>{student.joined}</td>
//                   <td>{student.lastLogin}</td>
//                   <td>
//                     <span
//                       className={`block w-4 mb-4 h-4 ml-4 rounded-full ${
//                         student.status === "green"
//                           ? "bg-green-500"
//                           : "bg-red-500"
//                       }`}
//                     ></span>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default StudentsTable;

import React, { useState } from "react";
import img1 from "../assets/Av1.jpg"; // Adjust the path according to your project structure
import img2 from "../assets/Av2.jpg"; // Adjust the path according to your project structure

// Sample student data
const initialStudents = [
  {
    name: "Anshuman Kashyap",
    cohort: "AY 2024-25",
    courses: [
      { name: "CBSE 9 Science", icon: img2 },
      { name: "CBSE 9 Math", icon: img1 },
    ],
    joined: "17. Nov. 2024",
    lastLogin: "17. Nov. 2024 4:16 PM",
    status: "green",
  },
  {
    name: "Bansi Dadhaniya",
    cohort: "AY 2024-25",
    courses: [
      { name: "CBSE 9 Science", icon: img2 },
      { name: "CBSE 9 Math", icon: img1 },
    ],
    joined: "17. Nov. 2024",
    lastLogin: "17. Nov. 2024 4:16 PM",
    status: "green",
  },
  {
    name: "Anshuman Kashyap",
    cohort: "AY 2024-25",
    courses: [
      { name: "CBSE 9 Science", icon: img2 },
      { name: "CBSE 9 Math", icon: img1 },
    ],
    joined: "17. Nov. 2024",
    lastLogin: "17. Nov. 2024 4:16 PM",
    status: "red",
  },
  {
    name: "Bansi Dadhaniya",
    cohort: "AY 2024-25",
    courses: [
      { name: "CBSE 9 Science", icon: img2 },
      { name: "CBSE 9 Math", icon: img1 },
    ],
    joined: "17. Nov. 2024",
    lastLogin: "17. Nov. 2024 4:16 PM",
    status: "green",
  },
];

const StudentsTable = () => {
  const [students, setStudents] = useState(initialStudents);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [newStudent, setNewStudent] = useState({
    name: "",
    cohort: "AY 2024-25",
    courses: [],
    joined: "",
    lastLogin: "",
    status: "green",
  });
  const [courseInput, setCourseInput] = useState("");

  // Handle form input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewStudent((prev) => ({ ...prev, [name]: value }));
  };

  // Handle adding a new course
  const addCourse = () => {
    if (courseInput.trim() !== "") {
      const newCourse = { name: courseInput, icon: img1 }; // Default icon, can be customized
      setNewStudent((prev) => ({
        ...prev,
        courses: [...prev.courses, newCourse],
      }));
      setCourseInput(""); // Clear course input
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setStudents((prev) => [...prev, newStudent]);
    setNewStudent({
      name: "",
      cohort: "AY 2024-25",
      courses: [],
      joined: "",
      lastLogin: "",
      status: "green",
    });
    setIsPopupOpen(false);
  };

  return (
    <div className="flex flex-col md:flex-row">
      {/* Main Content */}
      <div className="w-full bg-white rounded-md">
        {/* Top Bar */}
        <div className="flex justify-between items-center p-4 flex-wrap">
          {/* Cohort Selection */}
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <select className="border font-bold border-gray-300 bg-gray-100 rounded-md px-3 py-2 w-full md:w-40">
              <option>AY 2024-25</option>
            </select>
            <select className="border font-bold border-gray-300 bg-gray-100 rounded-md px-3 py-2 w-full md:w-30">
              <option>CBSE 9</option>
            </select>
          </div>

          {/* Add new Student button */}
          <button
            className="border font-bold border-gray-300 bg-gray-100 rounded-md px-3 py-2 w-full md:w-auto"
            onClick={() => setIsPopupOpen(true)}
          >
            + Add new Student
          </button>
        </div>

        {/* Table */}
        <div className="p-4">
          <table className="w-full table-auto border-collapse">
            <thead>
              <tr className="text-left border-b border-gray-300">
                <th className="p-4 font-semibold">Student Name</th>
                <th className="font-semibold">Cohort</th>
                <th className="font-semibold">Courses</th>
                <th className="font-semibold">Date Joined</th>
                <th className="font-semibold">Last Login</th>
                <th className="font-semibold">Status</th>
              </tr>
            </thead>

            <tbody>
              {students.map((student, index) => (
                <tr
                  key={index}
                  className="hover:bg-gray-50 border-b border-gray-200"
                >
                  <td className="p-4">{student.name}</td>
                  <td>{student.cohort}</td>
                  <td className="py-2">
                    <div className="flex flex-wrap">
                      {student.courses.map((course, i) => (
                        <div
                          key={i}
                          className="flex items-center space-x-2 bg-gray-100 px-2 py-1 rounded-md mr-4 mb-2"
                        >
                          <img
                            src={course.icon}
                            alt={`${course.name} Icon`}
                            className="w-6 h-6"
                          />
                          <span>{course.name}</span>
                        </div>
                      ))}
                    </div>
                  </td>
                  <td>{student.joined}</td>
                  <td>{student.lastLogin}</td>
                  <td>
                    <span
                      className={`block w-4 mb-4 h-4 ml-4 rounded-full ${
                        student.status === "green"
                          ? "bg-green-500"
                          : "bg-red-500"
                      }`}
                    ></span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Popup */}
      {isPopupOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg w-96">
            <h2 className="text-lg font-semibold mb-4">Add New Student</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">
                  Student Name
                </label>
                <input
                  type="text"
                  name="name"
                  className="border border-gray-300 rounded-md px-3 py-2 w-full"
                  value={newStudent.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Cohort</label>
                <input
                  type="text"
                  name="cohort"
                  className="border border-gray-300 rounded-md px-3 py-2 w-full"
                  value={newStudent.cohort}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">
                  Date Joined
                </label>
                <input
                  type="date"
                  name="joined"
                  className="border border-gray-300 rounded-md px-3 py-2 w-full"
                  value={newStudent.joined}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">
                  Last Login
                </label>
                <input
                  type="datetime-local"
                  name="lastLogin"
                  className="border border-gray-300 rounded-md px-3 py-2 w-full"
                  value={newStudent.lastLogin}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">
                  Courses
                </label>
                <div className="flex space-x-2">
                  <input
                    type="text"
                    className="border border-gray-300 rounded-md px-3 py-2 w-full"
                    value={courseInput}
                    onChange={(e) => setCourseInput(e.target.value)}
                  />
                  <button
                    type="button"
                    className="border font-bold border-gray-300 bg-blue-500 text-white rounded-md px-3 py-2"
                    onClick={addCourse}
                  >
                    Add
                  </button>
                </div>
                <div className="mt-2">
                  {newStudent.courses.map((course, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-2 bg-gray-100 px-2 py-1 rounded-md mb-2"
                    >
                      <img
                        src={course.icon}
                        alt={`${course.name} Icon`}
                        className="w-6 h-6"
                      />
                      <span>{course.name}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Status</label>
                <select
                  name="status"
                  className="border border-gray-300 rounded-md px-3 py-2 w-full"
                  value={newStudent.status}
                  onChange={handleChange}
                  required
                >
                  <option value="green">Green</option>
                  <option value="red">Red</option>
                </select>
              </div>
              <div className="flex justify-end space-x-2">
                <button
                  type="button"
                  className="border font-bold border-gray-300 bg-gray-100 rounded-md px-3 py-2"
                  onClick={() => setIsPopupOpen(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="border font-bold border-gray-300 bg-blue-500 text-white rounded-md px-3 py-2"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default StudentsTable;
