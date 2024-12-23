import React from "react";
import { QuestionMarkCircleIcon } from "@heroicons/react/24/outline";
import { IoMdNotificationsOutline } from "react-icons/io";
import { BiSearch } from "react-icons/bi";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { LuMessageSquareMore } from "react-icons/lu";
import img1 from "../assets/Av.jpg"; // Adjust the path according to your project structure

const Topbar = () => {
  return (
    <div className="flex justify-between items-center mt-4 px-6 py-2.5 flex-wrap">
      {/* Search Input */}
      <div className="relative flex items-center w-full md:w-[40rem] mb-4 md:mb-0">
        <input
          type="text"
          placeholder="Search your course"
          className="w-full border rounded-md py-2 pl-10 text-gray-700 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
        />
        <span className="absolute left-3 text-gray-600">
          {/* Search Icon */}
          <BiSearch className="w-5 h-5" />
        </span>
      </div>

      {/* Right Section with Icons and Profile */}
      <div className="flex items-center space-x-6 md:space-x-10 lg:space-x-14 text-gray-700">
        {/* Icons with Badge Indicators */}
        <div className="flex space-x-6 items-center">
          {/* Help Icon */}
          <QuestionMarkCircleIcon className="w-6 h-6 cursor-pointer hover:text-indigo-500" />
          {/* Messages Icon */}
          <div className="relative">
            <LuMessageSquareMore className="w-6 h-6 cursor-pointer hover:text-indigo-500" />
            <span className="absolute -top-1 -right-1 h-2.5 w-2.5 bg-red-500 rounded-full"></span>
          </div>
          {/* FaArrowRightArrowLeft Icon */}
          <div className="relative">
            <FaArrowRightArrowLeft className="w-6 h-6 cursor-pointer hover:text-indigo-500" />
          </div>
          {/* Notifications Icon */}
          <div className="relative">
            <IoMdNotificationsOutline className="w-6 h-6 cursor-pointer hover:text-indigo-500" />
            <span className="absolute -top-1 -right-1 h-2.5 w-2.5 bg-red-500 rounded-full"></span>
          </div>
        </div>

        {/* Profile */}
        <div className="flex items-center space-x-4">
          {/* Profile Picture */}
          <div className="w-12 h-12 border border-gray-300 rounded-lg overflow-hidden">
            <img
              src={img1}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="text-gray-700 font-bold hidden md:block">
            Adeline H. Dancy
          </span>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
