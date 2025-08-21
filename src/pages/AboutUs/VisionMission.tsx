// import React from 'react';
import visionImg from '../../assets/Nilofarlogo.png'; // Use correct path if you renamed the image

const VisionMission = () => {
  return (
    <div className="px-6 py-12 max-w-screen-xl mx-auto">
      <div className="flex flex-col md:flex-row gap-10 items-center">
        {/* Left Image Section */}
        <div className="relative md:w-1/2">
          <img
            src={visionImg}
            alt="Vision"
            className="rounded-lg w-full h-auto object-cover"
          />
          <div className="absolute bottom-4 left-4 bg-white px-6 py-4 shadow-lg border-l-4 border-blue-500 rounded-md">
            <h2 className="text-blue-600 text-2xl font-bold">100+</h2>
            <p className="text-gray-600 text-sm">Successfully<br />Projects</p>
          </div>
        </div>

        {/* Right Text Section */}
        <div className="md:w-1/2 text-gray-700 space-y-10">
          {/* Vision */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              Our <span className="text-blue-600">Vision</span>
            </h2>
            <div className="w-16 h-1 bg-blue-500 mb-4"></div>
            <p className="text-justify leading-relaxed">
              Our vision is to be the trusted partner that empowers our customers with exceptional IT services.
              We strive to deliver personalized solutions, outstanding customer support, and seamless experiences.
              By understanding our customers' unique needs, we aim to provide them with innovative technology solutions
              that drive their success. With a relentless focus on customer satisfaction, we are committed to building
              long-term relationships based on trust, reliability, and superior service. Together, we envision a future
              where our customers thrive in the digital landscape, supported by our unwavering dedication to their satisfaction.
            </p>
          </div>

          {/* Mission */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              Our <span className="text-blue-600">Mission</span>
            </h2>
            <div className="w-16 h-1 bg-blue-500 mb-4"></div>
            <p className="text-justify leading-relaxed">
              Our mission is to provide our customers with outstanding IT services that enhance their productivity, efficiency,
              and overall success. We are committed to delivering reliable solutions tailored to their specific needs,
              ensuring seamless integration and maximum value.
            </p>
            <p className="text-justify leading-relaxed mt-3">
              Our focus is on delivering exceptional customer experiences through proactive support, timely communication,
              and personalized attention.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisionMission;
