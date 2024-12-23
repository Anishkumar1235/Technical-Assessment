import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BiSolidBookContent } from "react-icons/bi"; // Students Icon
import { RiBookMarkedLine } from "react-icons/ri"; // Chapter Icon
import img1 from "../assets/Vector.jpg"; // Adjust the path according to your project structure

import {
  faTachometerAlt, // Dashboard Icon (Speedometer)
  faQuestionCircle, // Help Icon
  faChartPie, // Reports Icon
  faCog, // Settings Icon
  faBars, // Hamburger Icon
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  // State for mobile menu toggle
  const [isOpen, setIsOpen] = useState(false);

  // Toggle menu function for mobile
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="relative">
      {/* Hamburger Menu for mobile */}
      <div className="lg:hidden p-4 text-2xl text-black" onClick={toggleMenu}>
        <FontAwesomeIcon icon={faBars} />
      </div>

      {/* Sidebar */}
      <div
        className={`w-64 bg-white shadow-md h-screen flex flex-col fixed inset-0 lg:static transition-all duration-300 ${
          isOpen ? "left-0" : "-left-64"
        } lg:left-0`}
      >
        {/* Logo */}
        <div className="text-black text-2xl font-bold p-4 flex items-center">
          <img src={img1} alt="logo" className="mr-2" />
        </div>

        {/* Navigation */}
        <nav className="mt-4 flex flex-col text-gray-600">
          <a href="#" className="flex items-center px-4 py-2 font-bold mb-1.5">
            <span className="flex items-center w-full rounded-lg hover:bg-gray-100 hover:text-black px-2 py-2 transition-all duration-200">
              <FontAwesomeIcon
                icon={faTachometerAlt}
                className="w-5 h-5 mr-3 transition-all duration-200 hover:scale-110"
              />
              Dashboard
            </span>
          </a>
          <a href="#" className="flex items-center px-4 py-2 font-bold mb-1.5">
            <span className="flex items-center w-full rounded-lg hover:bg-gray-100 hover:text-black px-2 py-2 transition-all duration-200">
              <BiSolidBookContent className="w-5 h-5 mr-3 transition-all duration-200 hover:scale-110" />
              Students
            </span>
          </a>
          <a href="#" className="flex items-center px-4 py-2 font-bold mb-1.5">
            <span className="flex items-center w-full rounded-lg hover:bg-gray-100 hover:text-black px-2 py-2 transition-all duration-200">
              <RiBookMarkedLine className="w-5 h-5 mr-3 transition-all duration-200 hover:scale-110" />
              Chapter
            </span>
          </a>
          <a href="#" className="flex items-center px-4 py-2 font-bold mb-1.5">
            <span className="flex items-center w-full rounded-lg hover:bg-gray-100 hover:text-black px-2 py-2 transition-all duration-200">
              <FontAwesomeIcon
                icon={faQuestionCircle}
                className="w-5 h-5 mr-3 transition-all duration-200 hover:scale-110"
              />
              Help
            </span>
          </a>
          <a href="#" className="flex items-center px-4 py-2 font-bold mb-1.5">
            <span className="flex items-center w-full rounded-lg hover:bg-gray-100 hover:text-black px-2 py-2 transition-all duration-200">
              <FontAwesomeIcon
                icon={faChartPie}
                className="w-5 h-5 mr-3 transition-all duration-200 hover:scale-110"
              />
              Reports
            </span>
          </a>
          <a href="#" className="flex items-center px-4 py-2 font-bold mb-1.5">
            <span className="flex items-center w-full rounded-lg hover:bg-gray-100 hover:text-black px-2 py-2 transition-all duration-200">
              <FontAwesomeIcon
                icon={faCog}
                className="w-5 h-5 mr-3 transition-all duration-200 hover:scale-110"
              />
              Settings
            </span>
          </a>
        </nav>
      </div>

      {/* Overlay for mobile (to close sidebar when clicking outside) */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-10 lg:hidden ${
          isOpen ? "block" : "hidden"
        }`}
        onClick={toggleMenu}
      ></div>
    </div>
  );
};

export default Sidebar;
