// import React from "react";
import Introduce from "./Introduce"; 
import IndustrySection from "../home/IndustrySection";
import TechnologySection from "../home/TechnologySection";
import TrustedClients from "../home/TrustedClients";
import Footer from "../home/Footer";
import { FaHome } from "react-icons/fa";
import BgImage from "../../assets/chasMunicipal.png"; // Adjust path accordingly

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
          <h1 className="text-white text-4xl font-bold mb-2">About Us</h1>
          <div className="flex items-center text-white text-lg gap-2">
            <FaHome />
            <span>Home</span>
            <span className="text-xl font-bold">::</span>
            <span>About Us</span>
          </div>
        </div>
      
      </div>
   
    </div>
       <Introduce />
       <IndustrySection />
       <TechnologySection />
         <TrustedClients />
         <Footer /> 
    </div>
      
  );
};

export default AboutUsHero;
