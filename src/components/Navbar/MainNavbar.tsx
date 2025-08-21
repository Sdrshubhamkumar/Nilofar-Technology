import  { useState } from "react";
import { HiOutlineMenu, HiX } from "react-icons/hi";
import { Link } from "react-router-dom";
import Nilofarlogo from "../../assets/Nilofarlogo.png";

type ListItemProps = {
  text: string;
  children?: { label: string; path: string }[];
};

const ListItem = ({ text, children }: ListItemProps) => {
  return (
    <li className="relative group cursor-pointer">
      <span className="hover:text-blue-500">{text}</span>
      {children && (
        <ul className="absolute left-0 top-full bg-white shadow-lg p-2 hidden group-hover:block z-50 text-sm">
          {children.map((item, i) => (
            <li key={i} className="py-1 px-3 hover:bg-gray-100 whitespace-nowrap">
              <Link to={item.path} className="block">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

type MobileListItemProps = {
  text: string;
  children?: { label: string; path: string }[];
};

const MobileListItem = ({ text, children }: MobileListItemProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <li>
      <div
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex justify-between items-center cursor-pointer"
      >
        <span>{text}</span>
        {children && <span>{isExpanded ? "▲" : "▼"}</span>}
      </div>
      {children && isExpanded && (
        <ul className="pl-4 mt-1 space-y-1 text-sm">
          {children.map((item, index) => (
            <li key={index} className="hover:text-blue-400">
              <Link to={item.path}>{item.label}</Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

const MainNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Sticky Navbar */}
      <nav className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-screen-xl mx-auto px-4 flex items-center justify-between py-3">
          {/* Logo */}
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
            <li className="relative group cursor-pointer">
              <Link to="/" className="hover:text-blue-500">
                Home
              </Link>
            </li>
            <ListItem
              text="About"
              children={[
                { label: "Introduction", path: "/introduction" },
                { label: "Vision & Mission", path: "/Vision&Mission" },
                { label: "Why Choose Us", path: "/why-choose-us" },
              ]}
            />
            <ListItem
              text="What We Do"
              children={[
                { label: "Website Development", path: "/website-development" },
                { label: "Customized Software Development", path: "/custom-software" },
                { label: "Mobile Application Development", path: "/mobile-apps" },
                { label: "Training Programme", path: "/training" },
              ]}
            />
            <ListItem
              text="Products"
              children={[
                { label: "School ERP", path: "/school-erp" },
                { label: "Hospital ERP", path: "/hospital-erp" },
                { label: "Clinic Management", path: "/clinic-management" },
                { label: "Restaurant Billing Software", path: "/restaurant-billing" },
                { label: "Hotel Management", path: "/hotel-management" },
                { label: "Inventory Management", path: "/inventory-management" },
              ]}
            />
          <Link to="/career" className="hover:text-blue-500">
                Career
              </Link>
           <Link to="/Contact" className="hover:text-blue-500">
                Contact US
              </Link>
          </ul>

          {/* Mobile Hamburger */}
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
          <MobileListItem
            text="About"
            children={[
              { label: "Introduction", path: "/introduction" },
              { label: "Vision & Mission", path: "/Vision&Mission" },
              { label: "Why Choose Us", path: "/why-choose-us" },
            ]}
          />
          <MobileListItem
            text="What We Do"
            children={[
              { label: "Website Development", path: "/website-development" },
              { label: "Customized Software Development", path: "/custom-software" },
              { label: "Mobile Application Development", path: "/mobile-apps" },
              { label: "Training Programme", path: "/training" },
            ]}
          />
          <MobileListItem
            text="Products"
            children={[
              { label: "School ERP", path: "/school-erp" },
              { label: "Hospital ERP", path: "/hospital-erp" },
              { label: "Clinic Management", path: "/clinic-management" },
              { label: "Restaurant Billing Software", path: "/restaurant-billing" },
              { label: "Hotel Management", path: "/hotel-management" },
              { label: "Inventory Management", path: "/inventory-management" },
            ]}
          />
          <MobileListItem text="Career" children={[{ label: "Career", path: "/career" }]} />
          <MobileListItem text="Contact Us" children={[{ label: "Contact", path: "/contact" }]} />
        </ul>
      </div>

      {/* Overlay */}
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
