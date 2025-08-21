// src/pages/ClinicManagement.jsx
// import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const ClinicManagement = () => {
  return (
    <div className="bg-white text-gray-900 p-6 md:p-12">
      {/* Header Section */}
      <div className="flex flex-col lg:flex-row justify-between gap-10 items-start">
        <div className="lg:w-1/2">
          <p className="text-blue-500 font-semibold mb-2">Clinic Management Software</p>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-900 mb-4">
            The Leading Clinic Management in India Manage Appointments, Bills, Payments and Patient Data with Ease!
          </h1>
          <div className="w-20 h-1 bg-blue-500 mb-6" />

          <p className="text-lg text-gray-700 mb-6">
            Our Clinic Management Software (CMS) is a specialized software solution designed to assist healthcare providers, clinics,
            and medical facilities in managing various administrative, clinical, and operational tasks. It aims to streamline workflows,
            enhance patient care, and optimize the overall efficiency of the clinic.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mb-2">
            Here are some key aspects of Clinic Management Software:
          </h2>
          <ul className="space-y-4 text-base text-gray-800">
            <li className="flex gap-2 items-start">
              <FaCheckCircle className="text-blue-500 mt-1" />
              <span>
                <strong>Appointments:</strong> Set up timings without any hurdle, Manage patient appointments online, Handle the queue in a waiting room instantly.
              </span>
            </li>
            <li className="flex gap-2 items-start">
              <FaCheckCircle className="text-blue-500 mt-1" />
              <span>
                <strong>Billing:</strong> Systematize the recording of payments & creation of bills, Printed receipts signifying the brand name.
              </span>
            </li>
            <li className="flex gap-2 items-start">
              <FaCheckCircle className="text-blue-500 mt-1" />
              <span>
                <strong>Patient Records:</strong> Keep a track of your patient visits & history; easily and digitally!, Printed prescriptions for easy understanding, Improved care.
              </span>
            </li>
            <li className="flex gap-2 items-start">
              <FaCheckCircle className="text-blue-500 mt-1" />
              <span>
                <strong>Safety & Security:</strong> Confidentiality is priority! With the clinic management software, data is safe and secure.
              </span>
            </li>
          </ul>
        </div>

        {/* Form Section */}
        <div className="lg:w-1/2">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Get started with a Webaikon Software Online Demo.
          </h2>
          <form className="space-y-4">
            <div className="flex gap-4">
              <input type="text" placeholder="Name*" className="w-full border p-3 rounded" required />
              <input type="text" placeholder="Organization Name*" className="w-full border p-3 rounded" required />
            </div>
            <input type="text" placeholder="Mobile No.*" className="w-full border p-3 rounded" required />
            <input type="email" placeholder="Email*" className="w-full border p-3 rounded" required />
            <select className="w-full border p-3 rounded" required>
              <option value="">Select Demo For</option>
              <option>Clinic Management</option>
              <option>Hospital ERP</option>
              <option>School ERP</option>
            </select>
            <textarea
              className="w-full border p-3 rounded"
              placeholder="Please share anything that will help prepare for our meeting.*"
              rows={4}
              required
            ></textarea>
            <div className="flex justify-start items-center gap-2">
              <input type="checkbox" required />
              <label className="text-sm text-gray-600">I'm not a robot</label>
            </div>
            <button
              type="submit"
              className="bg-blue-900 text-white py-3 px-6 rounded hover:bg-blue-700 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ClinicManagement;
