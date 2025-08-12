import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCar,
  faTags,
  faRoad,
  faMoneyBillWave,
} from "@fortawesome/free-solid-svg-icons";

const steps = [
  {
    step: 1,
    title: "Register Vehicle",
    desc: "Sign up and add your vehicle to our toll system.",
    icon: faCar,
    color: "bg-blue-500",
  },
  {
    step: 2,
    title: "Install Toll Tag",
    desc: "Get your toll tag installed for automatic detection.",
    icon: faTags,
    color: "bg-orange-500",
  },
  {
    step: 3,
    title: "Drive Through",
    desc: "Pass through toll gates without stopping.",
    icon: faRoad,
    color: "bg-green-500",
  },
  {
    step: 4,
    title: "Auto Payment",
    desc: "Your account is charged automatically.",
    icon: faMoneyBillWave,
    color: "bg-purple-500",
  },
];

const HowItWorks = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-2xl md:text-4xl font-bold text-gray-800">
          How It Works
        </h1>
        <p className="text-gray-500 mt-2">
          Follow these simple steps to enjoy a seamless toll experience
        </p>
      </div>

      {/* Steps Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((s) => (
          <div
            key={s.step}
            className="bg-white shadow-lg rounded-xl p-6 text-center border-t-4 hover:shadow-xl transition duration-300"
            style={{ borderTopColor: s.color.replace("bg-", "") }}
          >
            {/* Step Number & Icon */}
            <div
              className={`${s.color} text-white w-16 h-16 mx-auto flex items-center justify-center rounded-full shadow-lg mb-4`}
            >
              <FontAwesomeIcon icon={s.icon} className="text-2xl" />
            </div>

            {/* Title & Description */}
            <h3 className="text-lg font-semibold text-gray-800">{s.title}</h3>
            <p className="text-gray-500 mt-2">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
