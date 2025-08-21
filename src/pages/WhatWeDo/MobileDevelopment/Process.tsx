// import React from "react";

const MobileAppProcessHero = () => {
  return (
    <div className="w-full bg-black text-white py-16 px-6 lg:px-20 flex flex-col lg:flex-row items-center justify-between gap-10">
      
      {/* Left Content */}
      <div className="lg:w-1/2 text-center lg:text-left">
        <p className="text-lg font-medium mb-2">
          Leading Mobile Application Development Company
        </p>
        <h1 className="text-4xl font-extrabold mb-2">
          Process of <span className="italic font-semibold">Mobile Application</span>
        </h1>
        <h2 className="text-3xl italic font-medium">Development</h2>
      </div>
     
      {/* Right Content */}
      <div className="lg:w-1/2 border-l border-gray-600 pl-8 text-lg">
        <p>
          The process of Mobile Application development typically involves several stages, including:
        </p>
      </div>
      {/* White Horizontal Line at Bottom */}
      <hr className="border-white opacity-50" />
    </div>
    
  );
};

export default MobileAppProcessHero;
