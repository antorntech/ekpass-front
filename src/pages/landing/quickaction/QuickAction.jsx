import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCar,
  faPlus,
  faCreditCard,
  faNotesMedical,
} from "@fortawesome/free-solid-svg-icons";

const QuickAction = () => {
  const actions = [
    {
      icon: faCar,
      title: "Add Vehicle",
      desc: "Register a new vehicle for toll service",
    },
    {
      icon: faCreditCard,
      title: "Recharge Balance",
      desc: "Top-up your toll account instantly",
    },
    { icon: faPlus, title: "Quick Pass", desc: "Get a one-time toll pass" },
    {
      icon: faNotesMedical,
      title: "View Toll History",
      desc: "Access your toll payment history",
    },
  ];

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="text-center mb-10">
        <h1 className="text-2xl md:text-4xl font-bold text-gray-800 mb-2 md:mb-4">
          Quick Action
        </h1>
        <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
          Perform essential actions instantly — add vehicles, recharge balance,
          or get a quick pass.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {actions.map((a, i) => (
          <div
            key={i}
            className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition text-center"
          >
            <FontAwesomeIcon
              icon={a.icon}
              className="text-green-600 text-3xl mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{a.title}</h3>
            <p className="text-gray-500">{a.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuickAction;
