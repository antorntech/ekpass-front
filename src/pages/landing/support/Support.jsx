import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";

const iconMap = {
  faEnvelope: faEnvelope,
  faPhone: faPhone,
};

const Support = () => {
  const { t } = useTranslation();
  const supportData = t("support", { returnObjects: true });

  return (
    <div id="support" className="container mx-auto px-6 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-2xl md:text-4xl font-bold text-gray-800">
          {supportData.title}
        </h1>
        <p className="text-gray-500 mt-2 max-w-xl mx-auto">
          {supportData.subtitle}
        </p>
      </div>

      {/* Contact Cards */}
      <div className="grid gap-8 sm:grid-cols-2 max-w-4xl mx-auto">
        {supportData.methods.map((c, i) => (
          <a
            key={i}
            href={c.link}
            className="bg-white border border-gray-100 rounded-2xl p-8 text-center shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            {/* Icon */}
            <div
              className={`bg-gradient-to-r ${c.gradient} w-20 h-20 mx-auto flex items-center justify-center rounded-full text-white shadow-lg mb-5`}
            >
              <FontAwesomeIcon icon={iconMap[c.icon]} className="text-3xl" />
            </div>

            {/* Title */}
            <h3 className="text-xl font-semibold text-gray-800">{c.title}</h3>

            {/* Value */}
            <p className="text-gray-600 mt-2 font-medium">{c.value}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Support;
