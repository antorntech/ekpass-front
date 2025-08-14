import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserCircle,
  faEnvelope,
  faCar,
  faMoneyBillWave,
  faG,
} from "@fortawesome/free-solid-svg-icons";
import { motion, AnimatePresence } from "framer-motion";

const VehicleTable = ({ vehicles }) => {
  const [expanded, setExpanded] = useState(false);

  const visibleVehicles = expanded ? vehicles : vehicles.slice(0, 2);

  return (
    <div>
      <div className="mx-auto mt-6 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-black/5">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">
          Your Vehicles
        </h2>

        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
                  Plate Number
                </th>
                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
                  Vehicle ID
                </th>
              </tr>
            </thead>
            <tbody>
              <AnimatePresence initial={false}>
                {visibleVehicles.map((v) => (
                  <motion.tr
                    key={v.id}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="border-t border-gray-100 hover:bg-gray-50"
                  >
                    <td className="px-4 py-2 text-sm text-gray-800">
                      {v.plate}
                    </td>
                    <td className="px-4 py-2 text-sm text-gray-500">{v.id}</td>
                  </motion.tr>
                ))}
              </AnimatePresence>
            </tbody>
          </table>
        </div>

        {vehicles.length > 2 && (
          <div className="mt-4 flex justify-center">
            <button
              onClick={() => setExpanded(!expanded)}
              className="cursor-pointer px-4 py-2 text-sm rounded-lg bg-slate-600 text-white hover:opacity-90 transition-all"
            >
              {expanded ? "Show Less" : "Load More"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default function Profile() {
  const user = {
    name: "John Doe",
    email: "johndoe@gmail.com",
    avatar: "",
    vehicles: [
      { id: "TAG-10021", plate: "DHAKA METRO GA-12-3456" },
      { id: "TAG-10022", plate: "DHAKA METRO BA-09-1122" },
      { id: "TAG-10023", plate: "CHATTOGRAM KA-88-7788" },
    ],
    totalTollPaid: 12450,
  };

  const formatBDT = (n) => {
    const num = isNaN(Number(n)) ? 0 : Number(n);
    return num.toLocaleString("en-IN", { maximumFractionDigits: 0 });
  };

  return (
    <div className="max-w-5xl mx-auto">
      <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-start">
        {/* Avatar */}
        {/* <div className="flex-shrink-0">
              {user.avatar ? (
                <img
                  src={user.avatar}
                  alt="Avatar"
                  className="h-28 w-28 rounded-full border-4 border-white object-cover shadow-lg"
                />
              ) : (
                <FontAwesomeIcon
                  icon={faUserCircle}
                  className="h-28 w-28 text-gray-300 drop-shadow"
                />
              )}
            </div> */}

        {/* Identity */}
        <div className="flex-1 text-center sm:text-left">
          <h1 className="text-2xl font-bold tracking-tight text-gray-900">
            {user.name}
          </h1>
          <div className="mt-2 flex flex-col items-center gap-2 text-sm text-gray-600 sm:flex-row sm:items-center">
            <span className="inline-flex items-center gap-2 rounded-lg bg-gray-50 px-3 py-1 shadow-sm">
              <FontAwesomeIcon icon={faEnvelope} className="text-green-500" />
              <span>{user.email}</span>
            </span>
          </div>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {/* Vehicles Count */}
        <div className="rounded-2xl border border-gray-100 bg-gradient-to-b from-white to-gray-50 p-4 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-wide text-gray-500">
                Vehicles Registered
              </p>
              <p className="mt-1 text-3xl font-bold text-gray-800">
                {user.vehicles.length}
              </p>
            </div>
            <div className="rounded-xl bg-green-50 p-3">
              <FontAwesomeIcon
                icon={faCar}
                className="h-6 w-6 text-green-600"
              />
            </div>
          </div>
          <p className="mt-2 text-xs text-gray-500">Under your account</p>
        </div>

        {/* Total Toll Paid */}
        <div className="rounded-2xl border border-gray-100 bg-gradient-to-b from-white to-gray-50 p-4 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-wide text-gray-500">
                Total Toll Paid
              </p>
              <p className="mt-1 text-3xl font-bold text-gray-800">
                ৳{formatBDT(user.totalTollPaid)}
              </p>
            </div>
            <div className="rounded-xl bg-slate-50 p-3">
              <FontAwesomeIcon
                icon={faMoneyBillWave}
                className="h-6 w-6 text-slate-600"
              />
            </div>
          </div>
          <p className="mt-2 text-xs text-gray-500">All-time payments</p>
        </div>
      </div>
      <VehicleTable vehicles={user.vehicles} />
    </div>
  );
}
