// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBars, faTimes, faGlobe } from "@fortawesome/free-solid-svg-icons";
// import { Link as ScrollLink } from "react-scroll";
// import { useTranslation } from "react-i18next";

// const LandingHeader = () => {
//   const navigate = useNavigate();
//   const [menuOpen, setMenuOpen] = useState(false);
//   const { t, i18n } = useTranslation();

//   const myMenus = [
//     { name: t("landingheader.how_it_works"), path: "how-it-works" },
//     { name: t("landingheader.toll_rate"), path: "toll-rate" },
//     { name: t("landingheader.support"), path: "support" },
//   ];

//   // Language toggle
//   const toggleLanguage = () => {
//     const newLang = i18n.language === "en" ? "bn" : "en";
//     i18n.changeLanguage(newLang);
//   };

//   return (
//     <header className="bg-white shadow-sm fixed top-0 left-0 w-full z-50">
//       <div className="container mx-auto px-6 py-2 flex justify-between items-center">
//         {/* Logo */}
//         <div className="text-2xl font-bold text-green-600 cursor-pointer">
//           <img
//             src="/assets/logo-1.png"
//             alt="logo"
//             className="w-40"
//             onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
//           />
//         </div>

//         {/* Desktop Menu */}
//         <nav className="hidden md:flex space-x-6 text-gray-700 font-medium">
//           {myMenus.map((menu, index) => (
//             <ScrollLink
//               key={index}
//               to={menu.path}
//               smooth={true}
//               duration={600}
//               offset={-70}
//               className="cursor-pointer hover:text-green-600 transition"
//             >
//               {menu.name}
//             </ScrollLink>
//           ))}
//         </nav>

//         <div className="flex items-center">
//           {/* Language Toggle (Desktop) */}
//           <button
//             onClick={toggleLanguage}
//             className="cursor-pointer inline-flex items-center px-3 py-2"
//           >
//             <FontAwesomeIcon icon={faGlobe} className="mr-2" />
//             {i18n.language === "en" ? "বাংলা" : "English"}
//           </button>

//           {/* Desktop Login/Signup */}
//           <button
//             onClick={() => navigate("/login")}
//             className="cursor-pointer hidden md:block ml-4 bg-green-600 text-white px-5 py-2 rounded-md hover:bg-green-700 transition"
//           >
//             {t("landingheader.login_signup")}
//           </button>
//         </div>

//         {/* Mobile Menu Toggle */}
//         <button
//           className="md:hidden text-2xl text-gray-700"
//           onClick={() => setMenuOpen(!menuOpen)}
//         >
//           <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
//         </button>
//       </div>

//       {/* Mobile Menu Drawer */}
//       {menuOpen && (
//         <div className="md:hidden bg-white shadow-md py-4 px-6 space-y-4">
//           {myMenus.map((menu, index) => (
//             <ScrollLink
//               key={index}
//               to={menu.path}
//               smooth={true}
//               duration={600}
//               offset={-70}
//               onClick={() => setMenuOpen(false)}
//               className="block text-gray-700 hover:text-green-600 transition"
//             >
//               {menu.name}
//             </ScrollLink>
//           ))}

//           {/* Language Toggle (Mobile) */}
//           <div className="border-t pt-4">
//             <button
//               onClick={() => {
//                 toggleLanguage();
//                 setMenuOpen(false);
//               }}
//               className="w-full border px-3 py-2 rounded hover:bg-gray-100"
//             >
//               {i18n.language === "en" ? "বাংলা" : "English"}
//             </button>
//           </div>

//           {/* Login/Signup Button */}
//           <button
//             onClick={() => {
//               setMenuOpen(false);
//               navigate("/login");
//             }}
//             className="w-full bg-green-600 text-white px-5 py-2 rounded-md hover:bg-green-700 transition"
//           >
//             {t("landingheader.login_signup")}
//           </button>
//         </div>
//       )}
//     </header>
//   );
// };

// export default LandingHeader;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes, faGlobe } from "@fortawesome/free-solid-svg-icons";
import { Link as ScrollLink } from "react-scroll";
import { useTranslation } from "react-i18next";

const LandingHeader = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();

  // Check if user is logged in
  const user = JSON.parse(localStorage.getItem("user"));

  const myMenus = [
    { name: t("landingheader.how_it_works"), path: "how-it-works" },
    { name: t("landingheader.toll_rate"), path: "toll-rate" },
    { name: t("landingheader.support"), path: "support" },
  ];

  // Language toggle
  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "bn" : "en";
    i18n.changeLanguage(newLang);
  };

  const handleAvatarClick = () => {
    // যদি dashboard route থাকে, সেদিকে যাবে
    navigate("/dashboard");
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
          {/* Language Toggle (Desktop) */}
          <button
            onClick={toggleLanguage}
            className="cursor-pointer inline-flex items-center px-3 py-2"
          >
            <FontAwesomeIcon icon={faGlobe} className="mr-2" />
            {i18n.language === "en" ? "বাংলা" : "English"}
          </button>

          {/* Desktop Login/Avatar */}
          {!user ? (
            <button
              onClick={() => navigate("/login")}
              className="cursor-pointer hidden md:block ml-4 bg-green-600 text-white px-5 py-2 rounded-md hover:bg-green-700 transition"
            >
              {t("landingheader.login_signup")}
            </button>
          ) : (
            <img
              src={user.avatar || "/assets/default-avatar.png"}
              alt="avatar"
              onClick={handleAvatarClick}
              className="hidden md:block ml-4 w-8 h-8 rounded-full cursor-pointer border border-green-500 hover:ring-2 hover:ring-green-500"
            />
          )}
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

          {/* Language Toggle (Mobile) */}
          <div className="border-t pt-4">
            <button
              onClick={() => {
                toggleLanguage();
                setMenuOpen(false);
              }}
              className="w-full border px-3 py-2 rounded hover:bg-gray-100"
            >
              {i18n.language === "en" ? "বাংলা" : "English"}
            </button>
          </div>

          {/* Mobile Login/Avatar */}
          {!user ? (
            <button
              onClick={() => {
                setMenuOpen(false);
                navigate("/login");
              }}
              className="w-full bg-green-600 text-white px-5 py-2 rounded-md hover:bg-green-700 transition"
            >
              {t("landingheader.login_signup")}
            </button>
          ) : (
            <div className="flex justify-center pt-4">
              <img
                src={user.avatar || "/assets/default-avatar.png"}
                alt="avatar"
                onClick={() => {
                  setMenuOpen(false);
                  handleAvatarClick();
                }}
                className="w-8 h-8 rounded-full cursor-pointer border border-gray-300 hover:ring-2 hover:ring-green-500"
              />
            </div>
          )}
        </div>
      )}
    </header>
  );
};

export default LandingHeader;
