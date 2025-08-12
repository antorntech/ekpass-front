import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const LandingHeader = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const myMenus = [
    { name: "Quick Action", path: "/quick-action" },
    { name: "How it Works", path: "/how-it-works" },
    { name: "Toll Rate", path: "/toll-rate" },
    { name: "Support", path: "/support" },
  ];

  return (
    <header className="bg-white shadow-sm fixed top-0 left-0  w-full z-50">
      <div className="max-w-5xl mx-auto px-6 py-2 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-green-600 cursor-pointer">
          <Link to="/">
            <img src="/assets/logo-1.png" alt="logo" className="w-40" />
          </Link>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6 text-gray-700 font-medium">
          {myMenus.map((menu, index) => (
            <Link
              key={index}
              to={menu.path}
              className="hover:text-green-600 transition"
            >
              {menu.name}
            </Link>
          ))}
        </nav>

        {/* Desktop Get Started Button */}
        <button
          onClick={() => navigate("/login")}
          className="cursor-pointer hidden md:block ml-4 bg-green-600 text-white px-5 py-2 rounded-md hover:bg-green-700 transition"
        >
          Login/Signup
        </button>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-2xl text-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md py-4 px-6 space-y-4">
          {myMenus.map((menu, index) => (
            <Link
              key={index}
              to={menu.path}
              className="block text-gray-700 hover:text-green-600 transition"
            >
              {menu.name}
            </Link>
          ))}
          <button
            onClick={() => {
              setMenuOpen(false);
              navigate("/login");
            }}
            className="w-full bg-green-600 text-white px-5 py-2 rounded-md hover:bg-green-700 transition"
          >
            Login/Signup
          </button>
        </div>
      )}
    </header>
  );
};

export default LandingHeader;
