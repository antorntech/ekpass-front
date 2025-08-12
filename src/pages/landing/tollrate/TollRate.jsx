// import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCar, faTruck } from "@fortawesome/free-solid-svg-icons";

// const TollRate = () => {
//   const rates = [
//     { zone: "Zone A", class: "Car", rate: "৳ 100", icon: faCar },
//     { zone: "Zone A", class: "Truck", rate: "৳ 250", icon: faTruck },
//     { zone: "Zone B", class: "Car", rate: "৳ 80", icon: faCar },
//     { zone: "Zone B", class: "Truck", rate: "৳ 200", icon: faTruck },
//   ];

//   return (
//     <div className="container mx-auto px-6 py-12">
//       <div className="text-center mb-10">
//         <h1 className="text-4xl font-bold text-gray-800">Toll Rates</h1>
//         <p className="text-gray-500 mt-2">
//           Check the latest toll rates for different vehicle types and zones
//         </p>
//       </div>

//       <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
//         <table className="w-full">
//           <thead className="bg-green-600 text-white">
//             <tr>
//               <th className="p-4 text-left">Zone</th>
//               <th className="p-4 text-left">Vehicle Class</th>
//               <th className="p-4 text-left">Rate</th>
//             </tr>
//           </thead>
//           <tbody>
//             {rates.map((r, i) => (
//               <tr
//                 key={i}
//                 className="border-b hover:bg-green-50 transition duration-200 last:border-0"
//               >
//                 <td className="p-4 font-medium text-gray-800">{r.zone}</td>
//                 <td className="p-4 flex items-center gap-2 text-gray-600">
//                   <FontAwesomeIcon icon={r.icon} className="text-green-500" />
//                   {r.class}
//                 </td>
//                 <td className="p-4 font-semibold text-green-600">{r.rate}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       <div className="mt-6 text-sm text-gray-500 text-center">
//         *Rates may vary depending on government policy and special events.
//       </div>
//     </div>
//   );
// };

// export default TollRate;

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCar, faTruck } from "@fortawesome/free-solid-svg-icons";

const TollRate = () => {
  const rates = [
    { zone: "Zone A", class: "Car", rate: "৳ 100", icon: faCar },
    { zone: "Zone A", class: "Truck", rate: "৳ 250", icon: faTruck },
    { zone: "Zone B", class: "Car", rate: "৳ 80", icon: faCar },
    { zone: "Zone B", class: "Truck", rate: "৳ 200", icon: faTruck },
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 py-12">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-2xl md:text-4xl font-bold text-gray-800">
          Toll Rates
        </h1>
        <p className="text-gray-500 mt-2 text-sm sm:text-base">
          Check the latest toll rates for different vehicle types and zones
        </p>
      </div>

      {/* Responsive Table Wrapper */}
      <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[500px]">
            <thead className="bg-green-600 text-white">
              <tr>
                <th className="p-3 sm:p-4 text-left">Zone</th>
                <th className="p-3 sm:p-4 text-left">Vehicle Class</th>
                <th className="p-3 sm:p-4 text-left">Rate</th>
              </tr>
            </thead>
            <tbody>
              {rates.map((r, i) => (
                <tr
                  key={i}
                  className="border-b hover:bg-green-50 transition duration-200 last:border-0"
                >
                  <td className="p-3 sm:p-4 font-medium text-gray-800">
                    {r.zone}
                  </td>
                  <td className="p-3 sm:p-4 flex items-center gap-2 text-gray-600">
                    <FontAwesomeIcon icon={r.icon} className="text-green-500" />
                    {r.class}
                  </td>
                  <td className="p-3 sm:p-4 font-semibold text-green-600">
                    {r.rate}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Footer Note */}
      <div className="mt-6 text-xs sm:text-sm text-gray-500 text-center">
        *Rates may vary depending on government policy and special events.
      </div>
    </div>
  );
};

export default TollRate;
