import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

const Support = () => {
  const contacts = [
    {
      icon: faEnvelope,
      title: "Email Us",
      value: "support@ekpass.gov.bd",
      link: "mailto:support@ekpass.gov.bd",
      gradient: "from-blue-500 to-blue-400",
    },
    {
      icon: faPhone,
      title: "Call Us",
      value: "333",
      link: "tel:333",
      gradient: "from-green-500 to-green-400",
    },
  ];

  return (
    <div id="support" className="container mx-auto px-6 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-2xl md:text-4xl font-bold text-gray-800">
          Contact Support
        </h1>
        <p className="text-gray-500 mt-2 max-w-xl mx-auto">
          Our support team is always ready to assist you. Choose your preferred
          contact method below.
        </p>
      </div>

      {/* Contact Cards */}
      <div className="grid gap-8 sm:grid-cols-2 max-w-4xl mx-auto">
        {contacts.map((c, i) => (
          <a
            key={i}
            href={c.link}
            className="bg-white border border-gray-100 rounded-2xl p-8 text-center shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            {/* Icon */}
            <div
              className={`bg-gradient-to-r ${c.gradient} w-20 h-20 mx-auto flex items-center justify-center rounded-full text-white shadow-lg mb-5`}
            >
              <FontAwesomeIcon icon={c.icon} className="text-3xl" />
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
