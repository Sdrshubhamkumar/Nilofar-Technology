import React from "react";

// Add logo images to /assets folder and import them
import dotnet from "../../assets/dotnet.png";
import sqlserver from "../../assets/sqlserver.png";
import css from "../../assets/css.png";
import js from "../../assets/js.png";
import flutter from "../../assets/flutter.png";
import android from "../../assets/android.png";
import angular from "../../assets/angular.png";
import java from "../../assets/java.png";
import html from "../../assets/html.png";
import php from "../../assets/php.png"
const leftTech = [
  { name: ".NET", image: dotnet },
  { name: "SQL Server", image: sqlserver },
  { name: "CSS", image: css },
  { name: "JavaScript", image: js },
  { name: "Flutter", image: flutter },
  { name: "Android Studio", image: android },
];

const rightTech = [
  { name: "Angular", image: angular },
  { name: "Java", image: java },
  { name: "HTML", image: html },
  { name: "PHP", image: php },
];

const TechnologySection = () => {
  return (
    <div className="bg-[#363739] text-white py-16 px-4">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* Left Content */}
        <div>
          <p className="text-cyan-400 font-medium mb-2">Our Technology</p>
          <h2 className="text-3xl font-bold mb-6">Technologies we work on</h2>
          <div className="grid grid-cols-2 gap-6">
            {leftTech.map((tech, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <img src={tech.image} alt={tech.name} className="h-10 object-contain" />
                <p className="text-sm">{tech.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Content */}
        <div>
          <p className="text-gray-300 mb-6">
            We use technology (such as Java, PHP, or JavaScript) and frameworks
            (like .NET, Angular, or Node.js) to develop software applications.
          </p>
          <div className="grid grid-cols-2 gap-6">
            {rightTech.map((tech, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <img src={tech.image} alt={tech.name} className="h-10 object-contain" />
                <p className="text-sm">{tech.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnologySection;
