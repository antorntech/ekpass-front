import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTachometerAlt,
  faCar,
  faCreditCard,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = ({ isOpen, onClose }) => {
  const location = useLocation();

  const navItems = [
    { name: "Dashboard", path: "/", icon: faTachometerAlt },
    { name: "Vehicle", path: "/vehicle", icon: faCar },
    { name: "Payment", path: "/payment", icon: faCreditCard },
  ];

  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-white/20 backdrop-blur-2xl z-30 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full bg-white shadow-sm z-50 transform transition-transform duration-200
        ${isOpen ? "translate-x-0" : "-translate-x-full"} 
        lg:translate-x-0 lg:static lg:block w-64`}
      >
        {/* Logo */}
        <div className="flex items-center justify-center p-4 border-b border-gray-200 relative">
          <img src="/assets/logo-1.png" alt="logo" className="w-32" />
          {/* Close button (mobile) */}
          <div className="lg:hidden absolute top-6 right-4">
            <button onClick={onClose} className="flex items-center gap-2">
              <FontAwesomeIcon icon={faTimes} className="text-lg" />
            </button>
          </div>
        </div>

        {/* Nav items */}
        <nav className="mt-4">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-slate-400 hover:text-white transition
                ${
                  location.pathname === item.path
                    ? "bg-slate-600 text-white"
                    : ""
                }`}
            >
              <FontAwesomeIcon icon={item.icon} />
              {item.name}
            </Link>
          ))}
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
