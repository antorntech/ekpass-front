import React, { useState } from "react";
import {
  faWallet,
  faPlusCircle,
  faClock,
  faCheckCircle,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TollRecharge = () => {
  const [amount, setAmount] = useState("");

  const handleTopUp = () => {
    if (!amount || isNaN(amount) || Number(amount) <= 0) {
      alert("Please enter a valid recharge amount!");
      return;
    }
    console.log(`EkPay API called for recharge: ${amount} BDT`);
    alert(`Recharge request of ${amount} BDT sent to EkPay API`);
    setAmount("");
  };

  // Static demo recharge history
  const historyData = [
    {
      id: 1,
      date: "2025-08-10",
      amount: 500,
      method: "bKash",
    },
    {
      id: 2,
      date: "2025-08-09",
      amount: 1000,
      method: "Nagad",
    },
    {
      id: 3,
      date: "2025-08-08",
      amount: 750,
      method: "Card",
    },
  ];

  return (
    <div className="max-w-4xl">
      {/* Header */}
      <div className="mb-6 flex items-center gap-3">
        <FontAwesomeIcon icon={faWallet} className="text-green-600 text-2xl" />
        <h1 className="text-2xl font-bold text-gray-800">Toll Recharge</h1>
      </div>

      {/* Recharge Input */}
      <div className="flex flex-col sm:flex-row items-center gap-4 mb-8">
        <input
          type="number"
          placeholder="Enter amount (BDT)"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-green-500"
        />
        <button
          onClick={handleTopUp}
          className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-2 rounded-lg flex items-center gap-2 transition-all"
        >
          <FontAwesomeIcon icon={faPlusCircle} />
          Top Up
        </button>
      </div>

      {/* Recharge History */}
      <h2 className="text-xl font-semibold text-gray-700 mb-4">
        Recharge History
      </h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left border-collapse">
          <thead>
            <tr className="bg-gray-100 text-gray-700">
              <th className="px-4 py-2">Date & Time</th>
              <th className="px-4 py-2">Amount (BDT)</th>
              <th className="px-4 py-2">Method</th>
            </tr>
          </thead>
          <tbody>
            {historyData.map((item) => (
              <tr
                key={item.id}
                className="border-b border-gray-200 hover:bg-gray-50 transition-colors"
              >
                <td className="px-4 py-2">{item.date}</td>
                <td className="px-4 py-2 font-medium">
                  {item.amount.toLocaleString()}
                </td>
                <td className="px-4 py-2">{item.method}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TollRecharge;
