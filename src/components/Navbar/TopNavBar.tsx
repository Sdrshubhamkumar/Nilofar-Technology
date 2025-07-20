import React from "react";
import {
  FaPhoneAlt,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { MdEmail, MdAccessTime } from "react-icons/md";

const TopNavbar = () => {
  return (
    <div className="bg-black text-white text-sm">
      <div className="max-w-screen-xl mx-auto px-4 py-2 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Contact Info (Left Side) */}
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center md:text-left">
          <div className="flex items-center gap-2">
            <FaPhoneAlt />
            <span>+91 7209189151, 9398578331, 7004943471</span>
          </div>
          <div className="flex items-center gap-2 sm:border-l sm:pl-4 border-white">
            <MdEmail className="text-lg" />
            <span>contacts.nilofar@gmail.com</span>
          </div>
        </div>

        {/* Right Section: Office Hour, Social Icons, Button */}
        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 text-center md:text-right">
          {/* Office Hours */}
          <div className="flex items-center gap-2 sm:border-r sm:pr-4 border-white">
            <MdAccessTime className="text-lg" />
            <span>Office Hour: 10:00am - 7:00pm</span>
          </div>

          {/* Social Icons */}
          <div className="flex gap-3">
            <FaFacebookF className="hover:text-gray-300 cursor-pointer" />
            <FaInstagram className="hover:text-gray-300 cursor-pointer" />
            <FaLinkedinIn className="hover:text-gray-300 cursor-pointer" />
            <FaYoutube className="hover:text-gray-300 cursor-pointer" />
          </div>

          {/* Get A Quote Button */}
          <button className="bg-white text-black font-semibold px-4 py-1 rounded hover:bg-gray-200 transition whitespace-nowrap">
            Get A Quote
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
