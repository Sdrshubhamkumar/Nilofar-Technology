import React from "react";

const CareerSection = () => {
  return (
    <section className="px-8 py-12 md:px-16 lg:px-32 bg-white text-gray-800">
      <h2 className="text-3xl font-bold text-[#1A237E] mb-2">Join our Team:</h2>
      <p className="text-gray-600 mb-10">
        If you are passionate about technology, creativity, and making a positive impact through
        software development, we'd love to hear from you. Explore our open positions and apply now
        to be a part of our exciting journey.
      </p>

      <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200">
        <h3 className="text-2xl font-bold text-[#1A237E] mb-1">
          Sales & Marketing Executive - Open Position
        </h3>
        <p className="text-gray-600 mb-4">
          Passionate about a career in Marketing & Sales?
        </p>

        <ul className="text-gray-800 space-y-2">
          <li><strong>Role Category:</strong> Sales & Marketing Executive</li>
          <li><strong>Role:</strong> Manage all sales and Marketing</li>
          <li>
            <strong>Required Skill Set:</strong> Understand the products and services, learn the ins
            and out, and present them to potential clients.
          </li>
          <li>
            <strong>Relevant Industry:</strong> Fresher / Experience in any Field
          </li>
          <li><strong>Education:</strong> MBA/BBA/Any Graduates</li>
        </ul>

        <h4 className="font-semibold text-xl mt-6 mb-2">Roles & Responsibilities:</h4>
        <ul className="list-disc pl-6 text-[#0D47A1] space-y-2">
          <li>Contributing to the development of marketing strategies.</li>
          <li>Conducting market research on rival products.</li>
          <li>Designing and implementing marketing plans for company products.</li>
          <li>Working for sales to achieve targeted sales.</li>
          <li>Answering client queries about product specifications and uses.</li>
          <li>Maintaining client relations.</li>
          <li>Tracking sales data to ensure the company meets sales quotas.</li>
          <li>Creating and presenting sales performance reports.</li>
        </ul>

        <h4 className="font-semibold text-xl mt-6 mb-2">Interview Process:</h4>
        <ul className="list-decimal pl-6 text-gray-700 space-y-1">
          <li>Personal Interview</li>
          <li>HR Interview</li>
        </ul>
      </div>

      <div className="bg-[#E3F2FD] mt-8 p-4 border-t-4 border-blue-500 rounded">
        <p className="text-gray-700">
          <strong className="mr-1">📅</strong>
          At Webaikon, your skills and ideas will shape the future of software development. Let's
          build something incredible together! <span className="text-blue-600 font-semibold">Apply Now</span>
        </p>
      </div>
    </section>
  );
};

export default CareerSection;
