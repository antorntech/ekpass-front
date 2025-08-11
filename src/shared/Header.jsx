import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";

const Header = ({ onMenuClick, onLogout }) => {
  return (
    <header className="bg-white text-white flex items-center justify-between p-4 shadow-sm fixed -top-0.5 left-0 right-0 z-40 lg:ml-64">
      {/* Menu icon for mobile */}
      <button
        className="lg:hidden text-2xl"
        onClick={onMenuClick}
        aria-label="Open sidebar"
      >
        <FontAwesomeIcon icon={faBars} />
      </button>

      {/* Page title or other info can go here */}
      <span className="text-lg font-bold"></span>

      {/* Logout */}
      <button
        onClick={onLogout}
        className="cursor-pointerflex items-center gap-2 bg-green-600 hover:bg-green-700 text-white p-2 rounded-md text-sm font-medium"
      >
        <FontAwesomeIcon icon={faRightFromBracket} />
        Logout
      </button>
    </header>
  );
};

export default Header;
