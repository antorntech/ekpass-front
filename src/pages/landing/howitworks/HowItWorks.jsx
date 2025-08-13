import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserPlus,
  faCar,
  faWallet,
  faHeadset,
} from "@fortawesome/free-solid-svg-icons";

const steps = [
  {
    step: 1,
    title: "User Registration",
    icon: faUserPlus,
    color: "bg-blue-500",
    points: [
      "Create an account with your phone number & email.",
      "Verify your identity with national ID/passport.",
      "Set up a secure password for login.",
    ],
  },
  {
    step: 2,
    title: "Vehicle Registration",
    icon: faCar,
    color: "bg-green-500",
    points: [
      "Add vehicle details (number plate, type, model).",
      "Upload vehicle ownership documents.",
      "Link the vehicle to your toll account.",
    ],
  },
  {
    step: 3,
    title: "Recharge / Top-up",
    icon: faWallet,
    color: "bg-orange-500",
    points: [
      "Choose payment method (bKash, Nagad, Card, Bank).",
      "Recharge minimum required balance.",
      "Track your balance in real-time from dashboard.",
    ],
  },
  {
    step: 4,
    title: "Support",
    icon: faHeadset,
    color: "bg-purple-500",
    points: [
      "Get 24/7 customer care support.",
      "Report any issues with toll deduction.",
      "Receive instant help via chat, call or email.",
    ],
  },
];

const HowItWorks = () => {
  return (
    <div id="how-it-works" className="container mx-auto px-6 py-12">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-2xl md:text-4xl font-bold text-gray-800">
          How It Works
        </h1>
        <p className="text-gray-500 mt-2">
          Follow these steps to get started with our toll system
        </p>
      </div>

      {/* Steps Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((s) => (
          <div
            key={s.step}
            className="bg-white shadow-lg rounded-xl p-6 border-t-4 hover:shadow-xl transition duration-300"
            style={{ borderTopColor: s.color.replace("bg-", "") }}
          >
            {/* Icon */}
            <div
              className={`${s.color} text-white w-16 h-16 mx-auto flex items-center justify-center rounded-full shadow-lg mb-4`}
            >
              <FontAwesomeIcon icon={s.icon} className="text-2xl" />
            </div>

            {/* Title */}
            <h3 className="text-lg font-semibold text-gray-800 text-center">
              {s.title}
            </h3>

            {/* Points List */}
            <ul className="mt-4 text-gray-600 text-sm list-disc list-inside space-y-1">
              {s.points.map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
