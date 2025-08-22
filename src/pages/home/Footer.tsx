// import React from "react";
import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
// import Nilofarlogo from "../../assets/Nilofarlogo.png"; // Update with correct logo path

const Footer = () => {
  return (
    <footer className="bg-black text-white px-6 md:px-16 py-12">
      <div className="grid md:grid-cols-4 gap-10 border-b border-gray-700 pb-10">
        {/* About */}
        <div>
          {/* <img src={Nilofarlogo} alt="Nilofar Technology Logo" className="w-36 mb-4" /> */}
          {/* <p className="text-sm leading-6 text-gray-300">
            <strong>Nilofar Technology</strong> is a leading software development company
            that offers Website Development, customized software, Mobile
            Application solutions to businesses of all sizes.
          </p> */}
          <div className="mt-6 flex items-center gap-4 p-4 border border-gray-600 rounded-md bg-gray-900">
            <div className="text-2xl">📞</div>
            <div>
              <p className="text-sm text-gray-400">Talk To Our Support</p>
              <p className="font-bold text-white">+91 8925298777</p>
            </div>
          </div>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Services</h3>
          <ul className="text-sm space-y-2 text-gray-400">
             <li>Innovative Technology Development</li>
             <li>IT Consultancy</li>
             <li>Website Development</li>
             <li>Software Development</li>
             <li>Mobile Application Development</li>
          
          </ul>
        </div>

        {/* Products */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Products</h3>
          <ul className="text-sm space-y-2 text-gray-400">
            <li>School ERP</li>
            <li>Hospital ERP</li>
            <li>Clinic Management</li>
            <li>Restaurant Billing Software</li>
            <li>Hotel Management</li>
            <li>Inventory Management</li>
            <li>Library Management</li>
         
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Get In Touch</h3>
          <ul className="text-sm text-gray-400 space-y-4">
            <li className="flex items-start gap-2">
              <FaMapMarkerAlt className="mt-1" />
              <span>
                At Bendi Tand, Jodhadih More, Near Neelam Hospital, Chas,
                Bokaro-827013 (Jharkhand), India.
              </span>
            </li>
            <li className="flex items-center gap-2">
              <FaPhoneAlt /> +91 8925298777, 7463064198, 8207397299
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope /> contacts.nilofar@gmail.com
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="mt-6 flex flex-col md:flex-row items-center justify-between text-gray-500 text-sm">
        <p>
          Copyright © 2025 <strong className="text-white">Nilofar Technology</strong>. Design
          & Developed by <strong className="text-white">Nilofar Technology</strong>
        </p>
       <div className="flex gap-4 mt-4 md:mt-0">
  <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-white">
    <FaFacebookF />
  </a>
  <a href="https://www.instagram.com/?hl=en" target="_blank" rel="noopener noreferrer" className="hover:text-white">
    <FaInstagram />
  </a>
  <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-white">
    <FaTwitter />
  </a>
  <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-white">
    <FaLinkedinIn />
  </a>
</div>

      </div>
    </footer>
  );
};

export default Footer;
