import React from "react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  const footerData = t("footer", { returnObjects: true });
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-gray-400 py-6">
      <div className="container mx-auto px-6">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Links */}
          <div className="flex space-x-6 text-sm">
            {footerData.links.map((link, i) => (
              <a key={i} href={link.url} className="hover:text-green-500">
                {link.label}
              </a>
            ))}
          </div>

          {/* Technical Support */}
          <div className="flex items-end gap-1">
            <p>{footerData.technicalSupport}</p>
            {/* Logo */}
            <img
              src="/assets/np-logo-set.png"
              alt={footerData.logoAlt}
              className="w-56"
            />
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-300 mt-4 pt-4 text-center text-sm">
          {footerData.copyright.replace("{{year}}", currentYear)}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
