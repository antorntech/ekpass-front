import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCar,
  faTruck,
  faMotorcycle,
  faBus,
  faVanShuttle,
} from "@fortawesome/free-solid-svg-icons";
import { motion, AnimatePresence } from "framer-motion";
import { tollRates } from "../../../libs/tollrates";

const TollRate = () => {
  const [expandedTable, setExpandedTable] = useState(null);

  const getIcon = (vehicleClass) => {
    const lower = vehicleClass.toLowerCase();
    if (lower.includes("motorcycle")) return faMotorcycle;
    if (lower.includes("car") || lower.includes("jeep")) return faCar;
    if (
      lower.includes("pickup") ||
      lower.includes("van") ||
      lower.includes("microbus")
    )
      return faVanShuttle;
    if (lower.includes("bus")) return faBus;
    if (lower.includes("truck")) return faTruck;
    return faCar;
  };

  const handleToggle = (tableId) => {
    setExpandedTable((prev) => (prev === tableId ? null : tableId));
  };

  return (
    <div id="toll-rate" className="container mx-auto px-4 sm:px-6 py-12">
      {/* Page Header */}
      <div className="text-center mb-8">
        <h1 className="text-2xl md:text-4xl font-bold text-gray-800">
          Toll Rates by Authority & Bridge
        </h1>
        <p className="text-gray-500 mt-2 text-sm sm:text-base">
          Updated toll rates for different vehicle types, categorized by
          authority and bridge.
        </p>
      </div>

      {/* Loop Through Authorities */}
      {tollRates.map((authorityObj, idx) => {
        const authorityName = Object.keys(authorityObj)[0];
        const bridges = authorityObj[authorityName];

        return (
          <div key={idx} className="mb-12">
            {/* Authority Header */}
            <h2 className="text-xl sm:text-2xl font-bold text-green-700 mb-6 border-b-2 border-green-200 pb-2">
              {authorityName}
            </h2>

            {/* Loop Through Bridges */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {bridges.map((bridge, bIdx) => {
                const tableId = `${authorityName}-${bIdx}`;
                const isExpanded = expandedTable === tableId;
                const rowsToShow = isExpanded
                  ? bridge.toll_rates
                  : bridge.toll_rates.slice(0, 2);

                return (
                  <div
                    key={bIdx}
                    className=" bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden"
                  >
                    <div className="bg-green-50 px-4 py-3 border-b border-gray-200">
                      <h3 className="text-lg font-semibold text-green-800">
                        {bridge.name}
                      </h3>
                    </div>

                    {/* Smooth table body */}
                    <div className="overflow-x-auto">
                      <table className="w-full min-w-[350px]">
                        <thead className="bg-green-600 text-white">
                          <tr>
                            <th className="p-3 sm:p-4 text-left">
                              Vehicle Class
                            </th>
                            <th className="p-3 sm:p-4 text-left">Rate</th>
                          </tr>
                        </thead>
                      </table>

                      <AnimatePresence initial={false}>
                        <motion.div
                          key={isExpanded ? "expanded" : "collapsed"}
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <table className="w-full min-w-[350px]">
                            <tbody>
                              {rowsToShow.map((r, i) => (
                                <tr
                                  key={i}
                                  className="border-b border-gray-200 hover:bg-green-50 transition duration-200 last:border-0"
                                >
                                  <td className="p-3 sm:p-4 flex items-center gap-2 text-gray-700">
                                    <FontAwesomeIcon
                                      icon={getIcon(r.vehicle)}
                                      className="text-green-500"
                                    />
                                    {r.vehicle}
                                  </td>
                                  <td className="p-3 sm:p-4 font-semibold text-green-700">
                                    ৳{r.rate}
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </motion.div>
                      </AnimatePresence>
                    </div>

                    {/* Load More Button */}
                    {bridge.toll_rates.length > 2 && (
                      <div className="px-4 py-3 bg-gray-50 text-center">
                        <button
                          onClick={() => handleToggle(tableId)}
                          className="cursor-pointer text-green-600 font-medium hover:underline"
                        >
                          {isExpanded ? "Show Less" : "Load More"}
                        </button>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}

      {/* Footer Note */}
      <div className="mt-6 text-xs sm:text-sm text-gray-500 text-center">
        *Rates are subject to change based on government policy and special
        events.
      </div>
    </div>
  );
};

export default TollRate;
