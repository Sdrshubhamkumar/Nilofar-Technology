import React from "react";
import {
  FaLaptopCode,
  FaChartBar,
  FaMobileAlt,
  FaUserGraduate,
} from "react-icons/fa";
import wesitebanner from "../../assets/websitebanner.jpg"; // Make sure to update this path

const services = [
  {
    title: "Website Development",
    description:
      "Website development involves the creation and maintenance of websites. This can range from simple static web pages to complex dynamic websites.",
    icon: <FaLaptopCode size={40} className="text-white" />,
  },
  {
    title: "Customized Software Development",
    description:
      "Customized software development involves the creation of software applications or programs.",
    icon: <FaChartBar size={40} className="text-white" />,
  },
  {
    title: "Mobile Application Development",
    description:
      "Mobile apps can be developed for various platforms, including iOS (Apple), Android (Google), and Windows Mobile.",
    icon: <FaMobileAlt size={40} className="text-white" />,
  },
  {
    title: "Training Program",
    description:
      "An IT training program covers programming languages, software development methodologies, database, Software Design, and more.",
    icon: <FaUserGraduate size={40} className="text-white" />,
  },
];

const ServicesAndAbout = () => {
  return (
    <div className="bg-black text-white px-6 py-12">

      {/* SERVICES SECTION FIRST */}
      <div className="text-center mb-16">
        <p className="text-sm text-gray-400">Connecting Business Need With Nilofar Technology</p>
        <h2 className="text-3xl font-bold">
          We provide best <span className="italic text-white">IT Services</span>
        </h2>
        <div className="h-1 w-24 bg-white mx-auto mt-2 rounded"></div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-screen-xl mx-auto mb-20">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-[#1a1a1a] p-6 rounded shadow-md hover:shadow-lg transition duration-300"
          >
            <h3 className="text-lg font-bold mb-2">{service.title}</h3>
            <p className="text-sm text-gray-300 mb-4">{service.description}</p>
            <div className="mb-4">{service.icon}</div>
            <a
              href="#"
              className="text-white underline hover:text-gray-300 text-sm"
            >
              Read More
            </a>
          </div>
        ))}
      </div>

      {/* WHO WE ARE SECTION SECOND */}
      <div className="max-w-screen-xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left: Text */}
        <div>
          <p className="text-blue-400 font-medium mb-2">Who We Are</p>
          <h2 className="text-3xl font-bold mb-4">
            We create <span className="italic text-white">innovation</span> for you
          </h2>
          <p className="text-gray-300 mb-4">
            <span className="font-semibold text-white">Nilofar Technology</span> is a leading software development company that offers Website Development, customized software, Mobile Application solutions to businesses of all sizes. Our goal is to help our clients improve their operational efficiency, reduce costs, and increase revenue by leveraging technology.
          </p>
          <p className="text-gray-300 mb-6">
            Nilofar Technology was founded by a team of experienced software professionals with a vision to build innovative solutions that meet the needs of businesses across industries. Over the years, we have earned a reputation for delivering high-quality software solutions that are reliable, scalable, and cost-effective.
          </p>
          <button className="border border-white px-6 py-2 hover:bg-white hover:text-black transition">
            Read More..
          </button>
        </div>

        {/* Right: Image */}
        <div className="text-center">
          <img src={wesitebanner} alt="Coder" className="mx-auto w-3/4 rounded" />
        </div>
      </div>
    </div>
  );
};

export default ServicesAndAbout;
