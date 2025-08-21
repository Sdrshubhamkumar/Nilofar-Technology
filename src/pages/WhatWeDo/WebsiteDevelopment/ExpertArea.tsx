// import React from "react";

const expertise = [
  "School Websites",
  "Hotel Websites",
  "Hospital Websites",
  "Business Websites",
  "College Websites",
  "Restaurant Websites",
  "Govt Websites",
  "Coaching Websites",
  "Construction Websites",
  "E-Commerce Websites",
  "MLM Websites",
  "Event Websites",
  "Tour & Travel Websites",
];

const ExpertArea = () => {
  return (
    <section className="bg-black text-white px-6 py-16">
    <div className="max-w-screen-xl mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-10">Our Expert Area</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {expertise.map((item, index) => (
        <div
          key={index}
          className="border border-white px-4 py-3 rounded-md font-semibold cursor-pointer transition duration-300 hover:bg-white hover:text-black"
        >
          {item}
        </div>
        ))}
      </div>
      <hr className="border-t border-white mt-12" />
    </div>
    </section>
  );
};

export default ExpertArea;
