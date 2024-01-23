import { useState } from "react";
import {
  FiHome,
  FiShoppingCart,
  FiTag,
  FiMail,
  FiHeadphones,
  FiUser,
  FiInstagram,
  FiFacebook,
} from "react-icons/fi";
import { NavLink } from "react-router-dom"; // Import NavLink for routing

const Sidebar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const CustomTwitterIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      className="h-4 w-6" // Adjust the size as needed
    >
      <path
        d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"
        fill="currentColor"
      />
    </svg>
  );

  // Toggle the sidebar
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div>
      {/* Toggle Button */}
      <button
        onClick={toggleNav}
        className={`fixed z-30 top-4 left-4 text-2xl text-white ${
          isNavOpen ? "bg-transparent" : "bg-dark-secondary"
        } p-2 rounded-full`}
      >
        {isNavOpen ? "✕" : "☰"}
      </button>

      {/* Side Navigation */}
      <div
        className={`fixed inset-y-0 left-0 transform bg-gray-950 border-r border-red-500 p-4 w-64 ${
          isNavOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-20`}
      >
        <nav className="mt-14 space-y-6">
          {/* Navigation Links */}
          <NavLink
            to="/"
            className="flex items-center space-x-2 p-2 rounded-md text-white hover:bg-gray-800 transition duration-300"
          >
            <FiHome />
            <span>Home</span>
          </NavLink>

          <NavLink
            to="/costco-next"
            className="flex items-center space-x-2 p-2 rounded-md text-white hover:bg-gray-800 transition duration-300"
          >
            <FiShoppingCart />
            <span>Costco Next</span>
          </NavLink>

          <NavLink
            to="/supplies-last"
            className="flex items-center space-x-2 p-2 rounded-md text-white hover:bg-gray-800 transition duration-300"
          >
            <FiTag />
            <span>While Supplies Last</span>
          </NavLink>

          <NavLink
            to="/new-prices"
            className="flex items-center space-x-2 p-2 rounded-md text-white hover:bg-gray-800 transition duration-300"
          >
            <FiMail />
            <span>New Lower Prices</span>
          </NavLink>

          <NavLink
            to="/whats-new"
            className="flex items-center space-x-2 p-2 rounded-md text-white hover:bg-gray-800 transition duration-300"
          >
            <FiHeadphones />
            <span>What&apos;s New</span>
          </NavLink>

          <NavLink
            to="/email-offers"
            className="flex items-center space-x-2 p-2 rounded-md text-white hover:bg-gray-800 transition duration-300"
          >
            <FiMail />
            <span>Get Email Offers</span>
          </NavLink>

          <NavLink
            to="/customer-service"
            className="flex items-center space-x-2 p-2 rounded-md text-white hover:bg-gray-800 transition duration-300"
          >
            <FiHeadphones />
            <span>Customer Service</span>
          </NavLink>
        </nav>
        {/* Additional Details at the bottom */}
        <div className="absolute bottom-6 w-full px-4">
          <div className="border-t border-gray-700 pt-4">
            <div className="flex items-center space-x-3 mb-3">
              <FiUser className="text-lg text-white hover:text-blue-500" />
              <span className="text-white text-sm hover:text-blue-500">
                Craig Jelinek
              </span>
            </div>
            <div className="flex space-x-2 justify-start">
              <a href="#" className="text-white text-lg hover:text-red-500">
                <FiInstagram />
              </a>
              <a
                href="https://twitter.com"
                className="text-white text-lg hover:text-red-500"
              >
                <CustomTwitterIcon />
              </a>
              <a href="#" className="text-white text-lg hover:text-red-500">
                <FiFacebook />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay when nav is open */}
      {isNavOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10 transition-opacity duration-500"
          onClick={toggleNav}
        />
      )}
    </div>
  );
};

export default Sidebar;
