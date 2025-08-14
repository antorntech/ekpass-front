import React, { useState } from "react";
import {
  faEnvelope,
  faPhone,
  faComments,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion, AnimatePresence } from "framer-motion";
import AIChatBot from "../../../components/AIChatBot";

const Support = () => {
  const [showChat, setShowChat] = useState(false);

  const contacts = [
    {
      icon: faEnvelope,
      title: "Email Us",
      description: "Get in touch via email for any inquiries.",
      value: "support@ekpass.gov.bd",
      link: "mailto:support@ekpass.gov.bd",
      color: "bg-blue-500",
      type: "email",
    },
    {
      icon: faPhone,
      title: "Call Us",
      description: "Reach our support team directly.",
      value: "333",
      link: "tel:333",
      color: "bg-green-500",
      type: "phone",
    },
    {
      icon: faComments,
      title: "Live Chat",
      description: "Chat with our agents in real-time.",
      value: "Start Chat",
      link: "#",
      color: "bg-purple-500",
      type: "chat",
    },
  ];

  const handleClick = (type, link) => {
    if (type === "chat") {
      setShowChat(true);
    } else {
      window.location.href = link;
    }
  };

  return (
    <div className="space-y-6">
      <AnimatePresence>
        {!showChat ? (
          <motion.div
            key="support-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Support</h1>
              <p className="text-gray-500 text-sm">
                We are here to help you 24/7. Contact us via any method below.
              </p>
            </div>

            {/* Contact Options */}
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {contacts.map((contact, index) => (
                <div
                  key={index}
                  className="rounded-2xl bg-white shadow-sm ring-1 ring-gray-100 hover:shadow-md transition-all p-6 flex flex-col items-center text-center"
                >
                  <div
                    className={`w-12 h-12 flex items-center justify-center rounded-full text-white ${contact.color} shadow-lg mb-4`}
                  >
                    <FontAwesomeIcon icon={contact.icon} className="w-5 h-5" />
                  </div>
                  <h2 className="text-lg font-semibold text-gray-900">
                    {contact.title}
                  </h2>
                  <p className="text-sm text-gray-500 mt-1">
                    {contact.description}
                  </p>
                  <button
                    onClick={() => handleClick(contact.type, contact.link)}
                    className="mt-4 w-full rounded-lg bg-white border border-gray-200 px-4 py-2 text-sm font-medium text-slate-600 hover:bg-green-600 hover:text-white transition-colors"
                  >
                    {contact.value}
                  </button>
                </div>
              ))}
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="chat-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="relative"
          >
            {/* Close Button */}
            <button
              onClick={() => setShowChat(false)}
              className="absolute top-0 right-0 m-2 text-gray-500 hover:text-red-500 p-2"
            >
              <FontAwesomeIcon icon={faTimes} className="w-5 h-5" />
            </button>

            <AIChatBot />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Support;
