// import React from "react";

import Footer from "../../home/Footer";
import SoftwareDevelopment from "./SoftwareDevelopment";
import TechnologySection from "../../home/TechnologySection";
import ExpertArea from "../WebsiteDevelopment/ExpertArea";
import { FaHome } from "react-icons/fa";
import BgImage from "../../../assets/chasMunicipal.png"; // Adjust path accordingly

const AboutUsHero = () => {
  return (
    <div>
    <div
      className="w-full bg-cover bg-center h-[300px] relative"
      style={{ backgroundImage: `url(${BgImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-blue-900 bg-opacity-80 flex items-center">
        <div className="max-w-screen-xl mx-auto px-4">
          <h1 className="text-white text-4xl font-bold mb-2">Software Development</h1>
          <div className="flex items-center text-white text-lg gap-2">
            <FaHome />
            <span>Home</span>
            <span className="text-xl font-bold">::</span>
            <span>Software Development</span>
          </div>
        </div>
      
      </div>
   
    </div>
        <SoftwareDevelopment />
        <TechnologySection />   
        <ExpertArea />
         <Footer /> 
    </div>
      
  );
};

export default AboutUsHero;
