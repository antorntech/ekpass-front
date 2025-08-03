import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const myMenus = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
  ];

  const handleLogout = () => {
    localStorage.removeItem("user");
    window.location.reload();
  };

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`w-full fixed top-0 left-0 z-50 transition-shadow duration-300 `}
    >
      <div
        className={`max-w-5xl mx-auto flex items-center justify-between p-3 ${
          isScrolled ? "shadow-md bg-white" : "bg-white"
        }`}
      >
        <Link to="/">
          <img src="/assets/logo-1.png" alt="logo" className="w-28 md:w-32" />
        </Link>

        <ul className="hidden md:flex items-center gap-6">
          {myMenus.map((menu) => (
            <li key={menu.name}>
              <Link
                to={menu.path}
                className="hover:text-green-600 transition font-medium"
              >
                {menu.name}
              </Link>
            </li>
          ))}
          <li>
            <button
              onClick={handleLogout}
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
            >
              Logout
            </button>
          </li>
        </ul>

        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} size="lg" />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden px-4 py-4 bg-white shadow-md rounded-b">
          <ul className="flex flex-col gap-4">
            {myMenus.map((menu) => (
              <Link
                key={menu.name}
                to={menu.path}
                onClick={() => setMenuOpen(false)}
                className="text-gray-700 hover:text-green-600"
              >
                {menu.name}
              </Link>
            ))}
            <button
              onClick={() => {
                handleLogout();
                setMenuOpen(false);
              }}
              className="bg-green-600 text-white py-2 rounded hover:bg-green-700"
            >
              Logout
            </button>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
