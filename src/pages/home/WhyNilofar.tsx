// import React from "react";
import swdevelopmentteams from "../../assets/sw-development-teams.webp"; // Replace with your actual image path

const WhyNilofar  = () => {
  const features = [
    {
      title: "Expertise",
      desc: "We have a team of highly skilled professionals with extensive experience in the IT industry.",
      icon: "🧠",
    },
    {
      title: "Innovation",
      desc: "We are committed to staying at the forefront of technological advancements.",
      icon: "🚀",
    },
    {
      title: "Customization",
      desc: "We understand that every business is unique, and we tailor our solutions to fit your specific requirements.",
      icon: "🛠️",
    },
    {
      title: "Reliability",
      desc: "We prioritize reliability and ensure that our solutions are robust, secure, and scalable.",
      icon: "🖥️",
    },
    {
      title: "Customer Satisfaction:",
      desc: "We prioritize customer satisfaction above all else. We actively listen to our clients, communicate effectively, and provide ongoing support to ensure their needs are met.",
      icon: "🤝",
    },
  ];

  return (
    <section className="bg-[#262c3c] text-white px-6 md:px-16 py-12">
      <h2 className="text-gray-300 text-lg font-semibold">Why Choose Us ?</h2>
      <h1 className="text-4xl font-bold text-white mb-6">Why Nilofar Technology</h1>
      <div className="flex flex-col md:flex-row gap-10">
        {/* Left Features */}
        <div className="flex-1">
          {features.map((item, index) => (
            <div key={index} className="flex gap-4 mb-6 items-start">
              <div className="w-14 h-14 border border-white flex items-center justify-center text-2xl text-white rounded">
                {item.icon}
              </div>
              <div>
                <h3 className="font-bold text-lg text-white">{item.title}</h3>
                <p className="text-gray-300 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Image */}
        <div className="flex-1 flex flex-col items-center">
          <img
            src={swdevelopmentteams}
            alt="Nilofar Technology Team"
            className="rounded-lg w-full object-cover max-h-[400px]"
          />
          <div className="bg-white text-black font-semibold p-6 mt-6 text-center rounded shadow">
            <span className="font-bold">Choosing <span className="text-black">US</span></span> means partnering with a trusted IT provider dedicated to helping your business thrive in the digital landscape.
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyNilofar;
