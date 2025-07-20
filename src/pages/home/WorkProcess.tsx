import React from "react";

// Import your actual images below
import step1 from "../../assets/step1.jpg";
import step2 from "../../assets/step2.jpg";
import step3 from "../../assets/step3.jpg";
import step4 from "../../assets/step4.jpg";
import step5 from "../../assets/step5.jpg";
import step6 from "../../assets/step6.jpg";

const WorkProcess = () => {
  const steps = [
    {
      img: step1,
      title: "Requirement Gathering",
      desc: "The process begins with gathering and analyzing the requirements of the software.",
    },
    {
      img: step2,
      title: "Design",
      desc: "This includes defining the system architecture, database design, user interface design, and other technical specifications.",
    },
    {
      img: step3,
      title: "Development",
      desc: "In this stage, the actual coding and programming take place. Developers write the source code using programming languages.",
    },
    {
      img: step4,
      title: "Testing",
      desc: "After development, the software goes through rigorous testing to ensure it meets the specified requirements and functions correctly.",
    },
    {
      img: step5,
      title: "Deployment",
      desc: "Once the software passes all tests, it is deployed to the production environment. This involves configuring servers and ensuring readiness.",
    },
    {
      img: step6,
      title: "Maintenance and Support",
      desc: "This includes monitoring performance, addressing bugs, applying updates, and providing technical assistance.",
    },
  ];

  return (
    <section className="text-white bg-black px-6 md:px-16 py-14">
      <div className="text-center mb-10">
        <h3 className="text-blue-500 font-semibold text-sm">How It Work</h3>
        <h2 className="text-4xl font-bold">
          Check Out Our Work <span className="text-blue-400 italic">Process</span>
        </h2>
        <div className="h-1 w-14 bg-blue-400 mx-auto mt-2 rounded" />
      </div>

      <div className="grid gap-10 md:grid-cols-3">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <div className="relative">
              <img
                src={step.img}
                alt={`Step ${index + 1}`}
                className="w-40 h-40 object-contain rounded-full border border-gray-300 shadow-md"
              />
              <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-black text-white w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold">
                0{index + 1}
              </span>
            </div>
            <h3 className="text-xl font-bold text-white mt-4">{step.title}</h3>
            <p className="text-sm text-white mt-2 px-2">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkProcess;
