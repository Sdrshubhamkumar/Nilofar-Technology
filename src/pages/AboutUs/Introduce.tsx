import React from 'react';
import aboutImg from '../../assets/Nilofarlogo.png'; // Use correct path if you renamed/moved the image

const Introduction = () => {
  return (
    <div className="px-6 py-10 max-w-screen-xl mx-auto">
      {/* Heading */}
      <p className="text-blue-600 font-semibold text-sm mb-1">Introduction</p>
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        About <span className="text-blue-500 italic">Nilofar</span>
      </h2>
      <div className="w-16 h-1 bg-blue-500 mb-8"></div>

      {/* Content */}
      <div className="flex flex-col md:flex-row items-center gap-10">
        {/* Left Text Section */}
        <div className="md:w-1/2 text-gray-700 space-y-5 text-justify">
          <p>
            We are a leading technology company that specializes in providing innovative solutions for businesses of all sizes.
            Our team of experienced and skilled professionals is committed to delivering cutting-edge IT services and solutions
            to our clients.
          </p>
          <p>
            Our services include Software Development, Web Design and Development, Mobile App Development, Training Programme,
            and IT consulting. We work closely with our clients to understand their unique business needs and deliver customized
            solutions that meet their specific requirements.
          </p>
          <p>
            Our software development team is proficient in a wide range of programming languages and technologies.
            We follow .NET and Angular methodologies to ensure that our software development projects are completed
            on time and within budget.
          </p>
          <p>
            At Nilofar, we are committed to delivering high-quality services and solutions that help businesses stay competitive
            in today's rapidly evolving digital landscape. Contact us today to learn more about our services and how we can help
            your business succeed.
          </p>
        </div>

        {/* Right Image Section */}
        <div className="md:w-1/2 flex justify-center">
          <img src={aboutImg} alt="About Nilofar" className="w-full max-w-md rounded-lg" />
        </div>
      </div>
    </div>
  );
};

export default Introduction;
