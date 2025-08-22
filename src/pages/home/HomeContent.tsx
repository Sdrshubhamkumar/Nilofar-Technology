// import React from "react";
import {
  FaLaptopCode,
  FaChartBar,
  FaMobileAlt,
  // FaUserGraduate,
} from "react-icons/fa";
import wesitebanner from "../../assets/websitebanner.jpg"; // Make sure to update this path

const services = [
  {
    title: "Innovative Software ",
    description:
      "Innovative software involves the creation and maintenance of real life problem based software. This can range from simple software to complex software.",
    icon: <FaLaptopCode size={40} className="text-pink-400" />,
  },
  {
    title: "Customized Software Development",
    description:
      "Customized software development involves the creation of software applications or programs tailored to specific business needs.",
    icon: <FaChartBar size={40} className="text-pink-400" />,
  },
  {
    title: " Web & Mobile Application Development",
    description:
      "Website of static and dynamic has been developed and Mobile apps can be developed for various platforms, including iOS (Apple), Android (Google).",
    icon: <FaMobileAlt size={40} className="text-pink-400" />,
  },
  // {
  //   title: "Training Program",
  //   description:
  //     "An IT training program covers programming languages, software development methodologies, database, Software Design, and more.",
  //   icon: <FaUserGraduate size={40} className="text-white" />,
  // },
];

const ServicesAndAbout = () => {
  return (
    <div className="bg-black text-white px-6 py-12">
      {/* SERVICES SECTION FIRST */}
      <div className="text-center mb-16">     
        <p className="text-sm text-gray-400">
          Connecting Business Need With Nilofar Technology
        </p>
        <h2 className="text-3xl font-bold">
          We provide best{" "}
          <span className="italic bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
            Technology Services
          </span>
        </h2>
        <div className="h-1 w-24 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 mx-auto mt-2 rounded"></div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-screen-xl mx-auto mb-20">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-[#1a1a1a] p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 flex flex-col justify-between h-full"
          >
            <div className="flex flex-col items-center text-center flex-grow space-y-4">
              <div>{service.icon}</div>
              <h3 className="text-lg font-bold">{service.title}</h3>
              <p className="text-sm text-gray-300">{service.description}</p>
            </div>
            <div className="mt-6 text-center">
              <a
                href="#"
                className="text-pink-400 underline hover:text-purple-400 text-sm"
              >
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* WHO WE ARE SECTION SECOND */}
      <div className="max-w-screen-xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Text */}
        <div>
          <p className="text-pink-400 font-medium mb-2">Who We Are</p>
          <h2 className="text-3xl font-bold mb-4">
            We create{" "}
            <span className="italic bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
              innovation
            </span>{" "}
            for you
          </h2>
          <p className="text-gray-300 mb-4">
            <span className="font-semibold text-white">Nilofar Technology</span>{" "}
            is a category of Technology that emphasizes natural harmony, sustainable design, and aesthetic elegance — inspired by the resilience and beauty of the lotus flower.
Often used in reference to biomimetic, eco-friendly, or human-centered innovations that flourish in difficult environments.
          </p>
          <p className="text-gray-300 mb-6">
            Nilofar Technology was founded by a team of experienced software
            professionals with a vision to build innovative solutions that meet
            the needs of real life problem across the world. Like the lotus that blooms in muddy waters, Nilofar Technology suggests creating graceful innovation in difficult environments — combining resilience with elegance.
          </p>
          <button className="border border-pink-400 px-6 py-2 rounded hover:bg-pink-400 hover:text-black transition">
            Read More..
          </button>
        </div>

        {/* Right: Image */}
        <div className="text-center">
          <img
            src={wesitebanner}
            alt="Coder"
            className="mx-auto w-3/4 rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default ServicesAndAbout;
