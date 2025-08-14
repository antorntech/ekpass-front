import React from "react";
import {
  faBell,
  faCheckCircle,
  faExclamationTriangle,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Notification = () => {
  const notifications = [
    {
      id: 1,
      type: "success",
      message: "Your toll payment of 750৳ has been successfully processed.",
      time: "2 mins ago",
    },
    {
      id: 2,
      type: "warning",
      message: "Vehicle KA-01-1234 toll balance is running low.",
      time: "1 hour ago",
    },
    {
      id: 3,
      type: "info",
      message: "Your vehicle registration has been approved.",
      time: "Yesterday",
    },
  ];

  const typeConfig = {
    success: {
      icon: faCheckCircle,
      color: "text-green-500",
      bg: "bg-green-50",
    },
    warning: {
      icon: faExclamationTriangle,
      color: "text-yellow-500",
      bg: "bg-yellow-50",
    },
    info: {
      icon: faInfoCircle,
      color: "text-blue-500",
      bg: "bg-blue-50",
    },
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Notifications</h1>
        <p className="text-gray-500 text-sm">
          Stay updated with the latest alerts and updates
        </p>
      </div>

      <div className="space-y-3">
        {notifications.map((n) => (
          <div
            key={n.id}
            className={`flex items-start gap-3 rounded-xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-all ${
              typeConfig[n.type].bg
            }`}
          >
            <div className="mt-1">
              <FontAwesomeIcon
                icon={typeConfig[n.type].icon}
                className={`w-5 h-5 ${typeConfig[n.type].color}`}
              />
            </div>
            <div className="flex-1">
              <p className="text-sm text-gray-800">{n.message}</p>
              <span className="text-xs text-gray-500">{n.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notification;
