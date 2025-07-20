import React, { useState } from "react";
import { HiOutlineMenu, HiX } from "react-icons/hi";
import Nilofarlogo from "../../assets/Nilofarlogo.png";

const MainNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Sticky Main Navbar below Top Navbar */}
      <nav className="bg-white shadow-sm sticky top-[0px] z-40">
        <div className="max-w-screen-xl mx-auto px-4 flex items-center justify-between py-3">
          {/* Logo and Company Name */}
          <div className="flex items-center gap-3">
            <img
              src={Nilofarlogo}
              alt="Nilofar Logo"
              className="h-14 w-14 rounded-full object-cover"
            />
            <h1 className="text-xl sm:text-2xl font-bold text-blue-500">
              Nilofar Technology
            </h1>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-6 font-medium text-gray-800">
            <li className="text-blue-500 font-bold cursor-pointer">Home</li>
            <li className="hover:text-blue-500 cursor-pointer">About Us</li>
            <li className="hover:text-blue-500 cursor-pointer">What We Do</li>
            <li className="hover:text-blue-500 cursor-pointer">Products</li>
            <li className="hover:text-blue-500 cursor-pointer">Career</li>
            <li className="hover:text-blue-500 cursor-pointer">Contact Us</li>
          </ul>

          {/* Hamburger Menu (Mobile) */}
          <div className="md:hidden">
            <button onClick={toggleSidebar}>
              {isOpen ? (
                <HiX className="text-3xl text-blue-500" />
              ) : (
                <HiOutlineMenu className="text-3xl text-blue-500" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Sidebar for Mobile */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="px-6 py-4 border-b flex items-center justify-between">
          <h2 className="text-xl font-bold text-blue-500">Menu</h2>
          <HiX className="text-2xl text-gray-700 cursor-pointer" onClick={toggleSidebar} />
        </div>
        <ul className="flex flex-col p-6 gap-4 text-gray-800 font-medium">
          <li className="text-blue-500 font-bold cursor-pointer">Home</li>
          <li className="hover:text-blue-500 cursor-pointer">About Us</li>
          <li className="hover:text-blue-500 cursor-pointer">What We Do</li>
          <li className="hover:text-blue-500 cursor-pointer">Products</li>
          <li className="hover:text-blue-500 cursor-pointer">Career</li>
          <li className="hover:text-blue-500 cursor-pointer">Contact Us</li>
        </ul>
      </div>

      {/* Overlay to close sidebar */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-40 z-30"
          onClick={toggleSidebar}
        />
      )}
    </>
  );
};

export default MainNavbar;
