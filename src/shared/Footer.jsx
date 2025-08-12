import React from "react";

const Footer = () => {
  return (
    <footer className=" text-gray-400 py-6">
      <div className="container mx-auto px-6">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Links */}
          <div className="flex space-x-6 text-sm">
            <a href="/privacy-policy" className="hover:text-green-500">
              Privacy Policy
            </a>
            <a href="/terms-and-conditions" className="hover:text-green-500">
              Terms & Conditions
            </a>
          </div>
          <div className="flex items-end gap-1">
            <p>Technical Support:</p>
            {/* Logo */}
            <img src="/assets/np-logo-set.png" alt="logo" className="w-56" />
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-4 pt-4 text-center text-sm">
          © {new Date().getFullYear()} EKPASS. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
