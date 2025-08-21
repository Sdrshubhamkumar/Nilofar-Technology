// import React from "react";

const SchoolManagementBanner = () => {
  return (
    <div className="bg-black text-white py-12 px-6 md:px-16 flex flex-col md:flex-row items-center justify-between">
      
      {/* Left Section */}
      <div className="text-left md:w-1/3 mb-6 md:mb-0">
        <p className="text-sm font-light">Contact For</p>
        <h2 className="text-3xl font-bold">School Management</h2>
        <p className="italic text-xl font-semibold mt-1">ERP</p>
      </div>

      {/* Center Section */}
      <div className="md:w-2/3 text-center md:text-left md:px-8 border-l border-white pl-8">
        <p className="text-white text-md">
          Efficiently manage student information, attendance, grading,
          scheduling, and more with our comprehensive school ERP system.
        </p>
      </div>

      {/* Right Button */}
      <div className="mt-6 md:mt-0 md:ml-auto">
        <button className="border-2 border-white text-white px-6 py-2 rounded hover:bg-white hover:text-cyan-500 transition-all duration-300">
          Demo
        </button>
      </div>
    </div>
  );
};

export default SchoolManagementBanner;
