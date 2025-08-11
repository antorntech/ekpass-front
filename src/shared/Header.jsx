import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBangladeshiTakaSign,
  faBars,
  faRightFromBracket,
  faWallet,
} from "@fortawesome/free-solid-svg-icons";

const Header = ({ onMenuClick, onLogout }) => {
  const balance = 2500;
  return (
    <header className="bg-white flex items-center justify-between p-4 shadow-sm fixed -top-0.5 left-0 right-0 z-40 lg:ml-64">
      {/* Sidebar Toggle Button */}
      <button
        className="lg:hidden text-2xl"
        onClick={onMenuClick}
        aria-label="Open sidebar"
      >
        <FontAwesomeIcon icon={faBars} className="text-black" />
      </button>

      {/* Empty space for logo/title */}
      <span className="text-lg font-bold"></span>

      {/* Right side: Balance + Logout */}
      <div className="flex items-center gap-4">
        {/* Balance */}
        <div className="flex items-center gap-1 bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium shadow-sm">
          {/* <FontAwesomeIcon icon={faWallet} /> */}
          Balance:
          <div>
            <FontAwesomeIcon icon={faBangladeshiTakaSign} />
            <span>{balance ? balance : 0}</span>
          </div>
        </div>

        {/* Logout */}
        <button
          onClick={onLogout}
          className="cursor-pointer flex items-center gap-2 bg-slate-600 hover:bg-slate-700 text-white px-3 py-2 rounded-md text-sm font-medium"
        >
          <FontAwesomeIcon icon={faRightFromBracket} />
          Logout
        </button>
      </div>
    </header>
  );
};

export default Header;
