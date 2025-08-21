// import React from "react";
import MobileAppImage from "../../../assets/Mobileapp.jpg"; // Adjust path as needed

const MobileApplicationDevelopment = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center gap-10 px-6 py-12 bg-white shadow-lg rounded-xl">
      
      {/* Image Section */}
      <div className="w-full lg:w-1/2">
        <img
          src={MobileAppImage}
          alt="Mobile App Development"
          className="w-full h-auto rounded-lg shadow-md"
        />
      </div>

      {/* Content Section */}
      <div className="w-full lg:w-1/2">
        <p className="text-blue-500 font-semibold text-sm uppercase mb-2">Our Services</p>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Mobile Application Development</h2>
        
        <p className="text-gray-700 mb-4">
          Webaikon is a leading mobile app development company, we specialize in creating cutting-edge
          mobile applications that cater to the unique needs of our clients. Our mobile app development
          service encompasses a comprehensive approach to deliver high-quality, user-friendly, and
          feature-rich applications.
        </p>

        <p className="text-gray-700">
          Our teams of skilled developers are proficient in mobile app development for various
          platforms, such as iOS, Android, and cross-platform solutions like React Native and Flutter.
          They are well-versed in programming languages like Swift, Kotlin, Java, and JavaScript, as
          well as mobile development frameworks and tools.
        </p>
      </div>
    </div>
  );
};

export default MobileApplicationDevelopment;
