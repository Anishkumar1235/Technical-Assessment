import React from "react";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import StudentsTable from "./components/StudentsTable";

function App() {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <Topbar />
        <div className="p-6">
          <StudentsTable />
        </div>
      </div>
    </div>
  );
}

export default App;
