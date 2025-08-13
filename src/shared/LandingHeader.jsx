import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes, faGlobe } from "@fortawesome/free-solid-svg-icons";
import { Link as ScrollLink } from "react-scroll";
import { useTranslation } from "react-i18next";

const LandingHeader = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const myMenus = [
    { name: t("landingheader.how_it_works"), path: "how-it-works" },
    // { name: t("landingheader.quick_action"), path: "quick-action" },
    { name: t("landingheader.toll_rate"), path: "toll-rate" },
    { name: t("landingheader.support"), path: "support" },
  ];

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setLangOpen(false);
  };

  return (
    <header className="bg-white shadow-sm fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto px-6 py-2 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-green-600 cursor-pointer">
          <img
            src="/assets/logo-1.png"
            alt="logo"
            className="w-40"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          />
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6 text-gray-700 font-medium">
          {myMenus.map((menu, index) => (
            <ScrollLink
              key={index}
              to={menu.path}
              smooth={true}
              duration={600}
              offset={-70}
              className="cursor-pointer hover:text-green-600 transition"
            >
              {menu.name}
            </ScrollLink>
          ))}
        </nav>

        <div className="flex items-center">
          {/* Language Dropdown (Desktop) */}
          <div className="relative hidden md:block">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="cursor-pointer inline-flex items-center px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50"
            >
              <FontAwesomeIcon icon={faGlobe} className="mr-2" />
              {t("landingheader.language")}
            </button>
            {langOpen && (
              <div className="absolute right-0 mt-2 w-32 bg-white border rounded-md shadow-lg z-50">
                <button
                  onClick={() => changeLanguage("en")}
                  className="cursor-pointer block rounded-md w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 text-left"
                >
                  English
                </button>
                <button
                  onClick={() => changeLanguage("bn")}
                  className="cursor-pointer block rounded-md w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 text-left"
                >
                  বাংলা
                </button>
              </div>
            )}
          </div>

          {/* Desktop Login/Signup */}
          <button
            onClick={() => navigate("/login")}
            className="cursor-pointer hidden md:block ml-4 bg-green-600 text-white px-5 py-2 rounded-md hover:bg-green-700 transition"
          >
            {t("landingheader.login_signup")}
          </button>
        </div>

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
            <ScrollLink
              key={index}
              to={menu.path}
              smooth={true}
              duration={600}
              offset={-70}
              onClick={() => setMenuOpen(false)}
              className="block text-gray-700 hover:text-green-600 transition"
            >
              {menu.name}
            </ScrollLink>
          ))}

          {/* Language Selector (Mobile) */}
          <div className="border-t pt-4">
            <p className="text-gray-500 mb-2">{t("landingheader.language")}</p>
            <div className="flex gap-2">
              <button
                onClick={() => changeLanguage("en")}
                className="flex-1 border px-3 py-1 rounded hover:bg-gray-100"
              >
                English
              </button>
              <button
                onClick={() => changeLanguage("bn")}
                className="flex-1 border px-3 py-1 rounded hover:bg-gray-100"
              >
                বাংলা
              </button>
            </div>
          </div>

          <button
            onClick={() => {
              setMenuOpen(false);
              navigate("/login");
            }}
            className="w-full bg-green-600 text-white px-5 py-2 rounded-md hover:bg-green-700 transition"
          >
            {t("landingheader.login_signup")}
          </button>
        </div>
      )}
    </header>
  );
};

export default LandingHeader;
