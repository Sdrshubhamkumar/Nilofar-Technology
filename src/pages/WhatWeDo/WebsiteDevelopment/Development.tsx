// import React from 'react';

import webImg from '../../../assets/Nilofarlogo.png'; // Use correct path if renamed

const WebsiteDevelopment = () => {
  return (
    <div className="px-6 py-12 max-w-screen-xl mx-auto">
      <div className="flex flex-col md:flex-row gap-10 items-center">
        {/* Left Image Section */}
        <div className="md:w-1/2">
          <img
            src={webImg}
            alt="Website Development"
            className="rounded-xl shadow-xl w-full"
          />
        </div>

        {/* Right Text Section */}
        <div className="md:w-1/2 text-gray-700 space-y-6">
          <div>
            <h4 className="text-blue-600 font-semibold mb-1">Our Services</h4>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Website <span className="text-blue-600">Development</span>
            </h2>
            <div className="w-16 h-1 bg-blue-500 mb-4"></div>
            <p className="leading-relaxed text-justify">
              A website is an essential tool for any company or organization looking to
              establish a strong online presence and engage with potential customers or clients.
              A well-designed and user-friendly website can serve as a powerful marketing tool,
              allowing companies to showcase their products, services, and brand identity
              to a global audience.
            </p>
            <p className="leading-relaxed text-justify mt-3">
              Website development involves the process of creating a website from scratch,
              starting with the initial design and ending with the launch of the finished product.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebsiteDevelopment;
