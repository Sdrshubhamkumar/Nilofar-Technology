import React from "react";
import { FaClipboardList,FaTools, FaUpload, FaSearch, FaPenNib, FaLaptopCode, FaFileAlt } from "react-icons/fa";

const steps = [
  {
    title: "Planning",
    icon: <FaClipboardList className="text-white text-3xl" />,
    description:
      "In this stage, the company's goals and objectives for the website are identified, and a site map is created to outline the website's structure and content.",
  },
  {
    title: "Design",
    icon: <FaPenNib className="text-white text-3xl" />,
    description:
      "In this stage, the website's visual design and user interface are developed, often using wireframes, mockups, or prototypes.",
  },
  {
    title: "Development",
    icon: <FaLaptopCode className="text-white text-3xl" />,
    description:
      "This stage involves the actual coding and programming of the website, using programming languages such as HTML, CSS, JavaScript, or asp.net.",
  },
  {
    title: "Content Creation",
    icon: <FaFileAlt className="text-white text-3xl" />,
    description:
      "In this stage, the website's content is developed, including text, images, videos, and other multimedia elements.",
  },
  {
    title: "Testing",
    icon: <FaSearch className="text-white text-3xl" />,
    description:
      "Before the website is launched, it must undergo rigorous testing to ensure that it functions correctly, is user-friendly, and meets the specified requirements.",
  },
  {
    title: "Deployment",
    icon: <FaUpload className="text-white text-3xl" />,
    description:
      "Once the website is tested and approved, it can be launched and made available to the public.",
  },
  {
    title: "Maintenance",
    icon: <FaTools className="text-white text-3xl" />,
    description:
      "After deployment, ongoing maintenance and updates are required to ensure that the website remains up-to-date and continues to function correctly.",
  },
];

const DevelopmentSteps = () => {
  return (
    <section className="bg-black text-white px-6 py-16">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid md:grid-cols-2 gap-x-10 gap-y-12">
          {steps.map((step, index) => (
            <div key={index}>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">{step.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">{step.title}</h3>
                  <p className="text-gray-300">{step.description}</p>
                </div>
              </div>
              <hr className="border-t border-white my-6" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DevelopmentSteps;
