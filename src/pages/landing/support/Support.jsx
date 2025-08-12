import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faComments,
} from "@fortawesome/free-solid-svg-icons";

const Support = () => {
  const contacts = [
    {
      icon: faEnvelope,
      title: "Email Us",
      value: "support@ekpass.gov.bd",
      link: "mailto:support@ekpass.gov.bd",
      color: "bg-blue-500",
    },
    {
      icon: faPhone,
      title: "Call Us",
      value: "+880 1700 000 000",
      link: "tel:+8801700000000",
      color: "bg-green-500",
    },
    {
      icon: faComments,
      title: "Live Chat",
      value: "Available during working hours",
      link: "#",
      color: "bg-orange-500",
    },
  ];

  return (
    <div className="container mx-auto px-6 py-12">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-2xl md:text-4xl font-bold text-gray-800">
          Support
        </h1>
        <p className="text-gray-500 mt-2">
          Need help? Contact our support team through any of the following
          channels.
        </p>
      </div>

      {/* Contact Cards */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {contacts.map((c, i) => (
          <a
            key={i}
            href={c.link}
            className="bg-white border border-gray-200 rounded-xl p-6 text-center hover:shadow-xl transition duration-300"
          >
            {/* Icon */}
            <div
              className={`${c.color} w-16 h-16 mx-auto flex items-center justify-center rounded-full text-white shadow-lg mb-4`}
            >
              <FontAwesomeIcon icon={c.icon} className="text-2xl" />
            </div>

            {/* Title */}
            <h3 className="text-lg font-semibold text-gray-800">{c.title}</h3>

            {/* Value */}
            <p className="text-gray-600 mt-2 font-medium">{c.value}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Support;
