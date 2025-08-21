// import { CheckCircle2 } from "lucide-react";
import { FaCheckCircle } from "react-icons/fa";
import { useState } from "react";

type FeatureProps = {
  text: string;
};

const Feature = ({ text }: FeatureProps) => (
  <li className="flex items-start space-x-2">
    {/* <CheckCircle2 className="text-sky-500 mt-1" /> */}
      <FaCheckCircle className="text-sky-500 mt-1 mr-2" />
    <span className="text-gray-700">{text}</span>
  </li>
);

export default function DemoFormPage() {
  // eslint-disable-next-line no-empty-pattern
  const [] = useState({
    name: "",
    org: "",
    phone: "",
    email: "",
    demoFor: "",
    notes: "",
  });

  const features = [
    "Room Reservation",
    "Front Office Management",
    "Point Of Sale",
    "Material Management",
    "Food & Beverages Costing",
    "Banquet & Conference",
    "Housekeeping",
    "Financial Accounting",
    "SMS Alert",
  ];

  return (
    <div className="flex flex-col md:flex-row p-8 bg-white min-h-screen text-gray-800">
      {/* Left Section */}
      <div className="md:w-1/2 pr-8">
        <p className="text-sky-500 font-semibold text-sm mb-2">
          Hotel Management Software
        </p>
        <h1 className="text-3xl md:text-4xl font-bold leading-snug text-gray-900 mb-4">
          One solution for all your hotel management needs
        </h1>
        <div className="w-16 h-1 bg-sky-500 mb-4" />
        <p className="text-gray-600 mb-4">
          Our Hotel Management Software offers a wide range of features to assist
          hoteliers in efficiently managing their properties and providing excellent
          guest experiences.
        </p>
        <p className="text-gray-600 mb-6">
          All Webaikon solutions are seamlessly integrated to meet hotel and
          restaurant needs for providing the best user experience and streamlining
          property operations. Our offer includes everything from desktop and
          cloud-based hotel management solutions to channel manager, booking engine
          and restaurant management solutions.
        </p>
        <h2 className="font-semibold text-lg mb-2">
          Modules and features of Webaikon Hotel ERP:
        </h2>
        <ul className="space-y-2">
          {features.map((item, index) => (
            <Feature key={index} text={item} />
          ))}
        </ul>
      </div>

      {/* Right Section */}
      <div className="md:w-1/2 bg-gray-50 p-6 rounded-md shadow-md mt-10 md:mt-0">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Get started with a Webaikon Software Online Demo.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Name*"
            className="p-2 border border-gray-300 rounded"
          />
          <input
            type="text"
            placeholder="Organization Name*"
            className="p-2 border border-gray-300 rounded"
          />
        </div>
        <input
          type="text"
          placeholder="Mobile No.*"
          className="w-full mt-4 p-2 border border-gray-300 rounded"
        />
        <input
          type="email"
          placeholder="Email*"
          className="w-full mt-4 p-2 border border-gray-300 rounded"
        />
        <select className="w-full mt-4 p-2 border border-gray-300 rounded text-gray-500">
          <option value="">Select Demo For</option>
          <option>Hotel Management</option>
          <option>Clinic Management</option>
          <option>Restaurant Billing</option>
        </select>
        <textarea
          placeholder="Please share anything that will help prepare for our meeting.*"
          className="w-full mt-4 p-2 border border-gray-300 rounded"
          rows={4}
        ></textarea>
        <div className="mt-4">
          <label className="inline-flex items-center">
            <input type="checkbox" className="form-checkbox mr-2" /> I'm not a robot
          </label>
        </div>
        <button className="mt-4 bg-blue-900 text-white px-6 py-2 rounded hover:bg-blue-800">
          Submit
        </button>
      </div>
    </div>
  );
}
