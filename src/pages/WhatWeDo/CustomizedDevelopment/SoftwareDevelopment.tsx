// import React from 'react';
import softwareImg from '../../../assets/Nilofarlogo.png'; // Adjust path as needed

const SoftwareDevelopment = () => {
  return (
    <section className="bg-black text-white px-6 py-16">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center gap-10">
        <div className="md:w-1/2">
          <img
            src={softwareImg}
            alt="Software Development"
            className="rounded-xl shadow-xl"
          />
        </div>
        <div className="md:w-1/2">
          <p className="text-sm uppercase text-blue-400 font-semibold mb-2">Our Services</p>
          <h2 className="text-3xl font-bold mb-4">Software Development</h2>
          <div className="h-1 w-16 bg-white mb-6"></div>

          <p className="mb-4 text-gray-300">
            Our software development services are tailored to meet the specific
            needs and requirements of our customers. We take a customer-centric
            approach, ensuring that we understand your goals and objectives
            before embarking on the development process. Our team of skilled
            developers is experienced in a wide range of programming languages
            and technologies, enabling us to create customized solutions that
            align with your business needs.
          </p>
          <p className="text-gray-300">
            Throughout the development lifecycle, we maintain open lines of
            communication, keeping you updated on the progress and incorporating
            your feedback. With a strong focus on quality assurance and testing,
            we ensure that the software we deliver is robust, reliable, and
            user-friendly. Customer satisfaction is our top priority, and we
            strive to exceed your expectations by delivering high-quality
            software solutions that drive your business forward.
          </p>
        </div>
      </div>

      {/* Optional horizontal white line at bottom */}
      <hr className="mt-12 border-white opacity-20" />
    </section>
  );
};

export default SoftwareDevelopment;
