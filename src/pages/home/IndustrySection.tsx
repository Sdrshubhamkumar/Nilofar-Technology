import React from "react";
import {
  FaHeartbeat,
  FaGraduationCap,
  FaSuitcaseRolling,
  FaIndustry,
  FaShoppingCart,
  FaShippingFast,
  FaLandmark,
  FaHotel,
} from "react-icons/fa";

const industries = [
  { name: "Healthcare", icon: <FaHeartbeat size={50} /> },
  { name: "Education", icon: <FaGraduationCap size={50} /> },
  { name: "Tours & Travels", icon: <FaSuitcaseRolling size={50} /> },
  { name: "Manufacturing", icon: <FaIndustry size={50} /> },
  { name: "E-Commerce", icon: <FaShoppingCart size={50} /> },
  { name: "Logistic & Shipping", icon: <FaShippingFast size={50} /> },
  { name: "Government and Public Sector", icon: <FaLandmark size={50} /> },
  { name: "Hotels & Restaurant", icon: <FaHotel size={50} /> },
];

const IndustrySection = () => {
  return (
    <div className="bg-[#262c3c] text-white py-16 px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold">Industry</h2>
        <p className="text-lg font-semibold mt-2">
          End-end solutions tailored to the needs of diverse industries
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {industries.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center text-center text-cyan-400"
          >
            <div className="mb-3">{item.icon}</div>
            <p className="text-sm font-semibold">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IndustrySection;
