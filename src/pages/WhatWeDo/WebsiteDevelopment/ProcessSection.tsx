// import React from "react";
import bgImage from "../../../assets/Nilofarlogo.png"; // Adjust path if needed

const ProcessSection = () => {
return (
    <section
        className="bg-cover bg-center text-white relative"
        style={{
            backgroundImage: `url(${bgImage})`,
            backgroundColor: "black",
            backgroundBlendMode: "overlay",
        }}
    >
        <div className="max-w-screen-xl mx-auto px-6 py-20 flex flex-col md:flex-row justify-between items-center gap-10">
            {/* Left text */}
            <div className="md:w-1/2">
                <p className="text-lg font-medium text-gray-300">We Make Connections</p>
                <h2 className="text-4xl font-bold">
                    Process of <span className="italic text-white">Website</span>{" "}
                    <span className="italic text-white">Development</span>
                </h2>
            </div>

            {/* Right text */}
            <div className="md:w-1/2 border-l border-gray-400 pl-6">
                <p className="text-gray-200 text-lg leading-relaxed">
                    The process of website development typically involves several stages,
                    including:
                </p>
            </div>
        </div>
        <div className="absolute left-0 bottom-0 w-full h-1 bg-white" />
    </section>
);
};

export default ProcessSection;
