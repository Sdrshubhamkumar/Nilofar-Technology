// import React from "react";

// Import logo images
import govJharkhand from "../../assets/govjharkhand.png";
import chasMunicipal from "../../assets/chasMunicipal.png";
import optiva from "../../assets/optiva.png";
import stech from "../../assets/stech.png";
import ford from "../../assets/ford.png";

const TrustedClients = () => {
  const clients = [
    { name: "Government of Jharkhand", logo: govJharkhand },
    { name: "Chas Municipal Corporation", logo: chasMunicipal },
    { name: "Optiva", logo: optiva },
    { name: "Stech IVF", logo: stech },
    { name: "Ford Hospital", logo: ford },
  ];

  return (
    <section className="bg-gray-100 text-black px-6 md:px-16 py-14">
      <div className="text-center mb-10">
        <h4 className="text-blue-500 font-medium text-sm">Look At Portfolio</h4>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          People Who Trusted Us
        </h2>
        <div className="h-1 w-14 bg-blue-400 mx-auto mt-2 rounded" />
      </div>

      <div className="flex flex-wrap justify-center items-center gap-8">
        {clients.map((client, index) => (
          <div key={index} className="w-32 h-32 flex items-center justify-center">
            <img
              src={client.logo}
              alt={client.name}
              className="max-h-full max-w-full object-contain grayscale hover:grayscale-0 transition duration-300"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrustedClients;
