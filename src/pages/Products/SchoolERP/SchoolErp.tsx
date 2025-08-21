// import React from "react";

const SchoolErp = () => {
  return (
    <div className="w-full bg-white text-gray-800 py-16 px-6 lg:px-20">
      <div className="max-w-screen-xl mx-auto grid lg:grid-cols-2 gap-10">

        {/* Left Side Content */}
        <div>
          <p className="text-sky-600 font-medium mb-2">School ERP</p>
          <h2 className="text-4xl font-extrabold text-gray-900 leading-tight mb-4">
            Our School ERP Software is Designed to Manage the Daily Operations
            of Educational Institutions Efficiently and Effectively.
          </h2>
          <div className="w-20 h-1 bg-sky-500 mb-6"></div>
          <p className="mb-4">
            Our School ERP makes running a school much smoother by organizing all the different parts and tasks, making sure everyone has the right information, and helping everyone work together more easily.
          </p>
          <p className="mb-4">
            Our School ERP (Enterprise Resource Planning) software is like a digital assistant for schools and educational institutions. It helps teachers, students, parents, and administrators by keeping everything organized and easy to manage.
          </p>
          <p>
            Our School ERP is a specialized software system that helps educational institutions manage their day-to-day operations efficiently. It integrates various functions like student information, attendance tracking, academic planning, communication, fee management, and more into a unified platform. This technology streamlines administrative tasks, enhances communication, and simplifies processes for teachers, students, parents, and administrators, contributing to smoother school management and improved learning experiences.
          </p>
        </div>

        {/* Right Side Form */}
        <div>
          <h3 className="text-2xl font-bold mb-6">
            Get started with a Webaikon Software Online Demo.
          </h3>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="col-span-1">
              <label className="block text-sm font-medium mb-1">Name<span className="text-red-500">*</span></label>
              <input type="text" className="w-full border border-gray-300 px-4 py-2" />
            </div>
            <div className="col-span-1">
              <label className="block text-sm font-medium mb-1">Organization Name<span className="text-red-500">*</span></label>
              <input type="text" className="w-full border border-gray-300 px-4 py-2" />
            </div>
            <div className="col-span-2">
              <label className="block text-sm font-medium mb-1">Mobile No.<span className="text-red-500">*</span></label>
              <input type="text" className="w-full border border-gray-300 px-4 py-2" />
            </div>
            <div className="col-span-2">
              <label className="block text-sm font-medium mb-1">Email<span className="text-red-500">*</span></label>
              <input type="email" className="w-full border border-gray-300 px-4 py-2" />
            </div>
            <div className="col-span-2">
              <label className="block text-sm font-medium mb-1">Demo For<span className="text-red-500">*</span></label>
              <select className="w-full border border-gray-300 px-4 py-2">
                <option>Select Demo For</option>
                <option>School</option>
                <option>College</option>
                <option>University</option>
              </select>
            </div>
            <div className="col-span-2">
              <label className="block text-sm font-medium mb-1">Please share anything that will help prepare for our meeting.<span className="text-red-500">*</span></label>
              <textarea rows={4} className="w-full border border-gray-300 px-4 py-2"></textarea>
            </div>
            <div className="col-span-2">
              {/* Placeholder for reCAPTCHA */}
              <div className="border border-gray-300 p-4 flex items-center gap-3">
                <input type="checkbox" />
                <span>I’m not a robot</span>
              </div>
            </div>
            <div className="col-span-2">
              <button type="submit" className="bg-blue-900 text-white px-6 py-2 font-semibold hover:bg-blue-800 transition">
                Submit
              </button>
            </div>
          </form>
        </div>

      </div>
    </div>
  );
};

export default SchoolErp;
