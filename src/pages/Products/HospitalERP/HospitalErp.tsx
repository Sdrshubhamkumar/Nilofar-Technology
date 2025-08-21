// File: src/pages/HospitalERP.jsx

import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const features = [
  "Reception Management",
  "Outpatient Management",
  "Inpatient Management",
  "Ward Management",
  "Laboratory Management",
  "OT Management",
  "Appointment Scheduling",
  "Doctor Module",
  "Billing",
  "Pharmacy Management",
  "Staff, HR & Payroll",
  "Leave & Attendance",
  "Inventory Management & Purchase",
  "Ambulance Management",
  "Canteen Management",
  "Financial Accounting",
  "MIS Reports",
];

const HospitalERP = () => {
  return (
    <div className="bg-white text-black min-h-screen px-6 py-12 lg:px-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

        {/* Left Section */}
        <div>
          <p className="text-sky-400 font-medium mb-2">Hospital Management Software</p>
          <h1 className="text-4xl font-extrabold leading-tight mb-4">
            One solution for all your hotel <br /> management needs
          </h1>
          <div className="w-12 h-1 bg-sky-400 mb-6"></div>
          <p className="text-black-600 mb-4">
            Webaikon Hospital ERP Solution provides the benefits of streamlined operations, excellent patient care,
            effective cost control and very importantly enhanced and secured administration & control. Our HMS is robust,
            interactive, user-friendly, flexible and is designed and developed to deliver real benefits to all level of
            Hospitals i.e. from multispecialty hospitals to small clinics.
          </p>
          <p className="text-black-600 mb-6">
            Webaikon Hospital ERP is a complete Web Based Hospital Management System that provides end-to-end customer
            services and a very good facility of recording information and maintaining records, thus reducing errors. It
            can be used either of both, online or offline.
          </p>

          <h3 className="text-xl font-bold mb-3">Modules and features of Webaikon Hospital ERP :</h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
            {features.map((item, index) => (
              <li key={index} className="flex items-center gap-2">
                <FaCheckCircle className="text-sky-400" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Section */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Get started with a Webaikon Software Online Demo.</h2>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4 text-black">
            <input type="text" placeholder="Name*" className="p-3 rounded w-full" required />
            <input type="text" placeholder="Organization Name*" className="p-3 rounded w-full" required />
            <input type="text" placeholder="Mobile No.*" className="p-3 rounded w-full md:col-span-2" required />
            <input type="email" placeholder="Email*" className="p-3 rounded w-full md:col-span-2" required />
            <select className="p-3 rounded w-full md:col-span-2" required>
              <option>Select Demo For</option>
              <option>Hospital</option>
              <option>Clinic</option>
            </select>
            <textarea
              placeholder="Please share anything that will help prepare for our meeting.*"
              className="p-3 rounded w-full md:col-span-2"
              rows="4"
              required
            ></textarea>
            <div className="md:col-span-2">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="accent-sky-400" required />
                I'm not a robot
              </label>
            </div>
            <button
              type="submit"
              className="bg-sky-600 hover:bg-sky-700 text-white py-2 px-6 rounded font-semibold md:col-span-2"
            >
              Submit
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default HospitalERP;
