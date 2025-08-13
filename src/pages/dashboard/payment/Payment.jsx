import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faTimesCircle,
  faPlusCircle,
} from "@fortawesome/free-solid-svg-icons";

const mfsList = [
  { name: "bKash", logo: "/assets/bkash.png" },
  { name: "Nagad", logo: "/assets/nagad.png" },
  { name: "Rocket", logo: "/assets/rocket.png" },
  { name: "Upay", logo: "/assets/upay.png" },
];

// Demo registered numbers
const registeredNumbers = ["01795937735", "01608081907", "01721974369"];

export default function Payment() {
  const [accounts, setAccounts] = useState({});
  const [selectedMfs, setSelectedMfs] = useState(null);
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");
  const [modal, setModal] = useState(null);

  const handleAddAccount = () => {
    // এখানে API call এর পরিবর্তে demo check হবে
    if (registeredNumbers.includes(number)) {
      setAccounts({ ...accounts, [selectedMfs]: number });
      setModal({
        type: "success",
        title: "Successfully Added",
        text: `Your ${selectedMfs} account has been added successfully.`,
      });
      setMessage("");
      setSelectedMfs(null); // ✅ Add হওয়ার পর ফর্ম hide হয়ে যাবে
    } else {
      setMessage("This number is not registered for this MFS.");
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Payment</h1>
        <p className="text-gray-500">Add your payment accounts</p>
      </div>

      <div className="space-y-4 max-w-md">
        {mfsList.map((mfs) => (
          <div
            key={mfs.name}
            className="flex items-center justify-between border-b border-gray-200 pb-2"
          >
            <div className="flex items-center gap-3">
              <img
                src={mfs.logo}
                alt={mfs.name}
                className="w-12 h-8 object-contain"
              />
              <div>
                <p className="font-semibold">{mfs.name}</p>
                <p className="text-sm text-gray-500">
                  {accounts[mfs.name]
                    ? `*******${accounts[mfs.name].slice(-4)}`
                    : "Not Added"}
                </p>
              </div>
            </div>

            {accounts[mfs.name] ? (
              <div className="flex items-center gap-3">
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  className="text-green-500 text-xl"
                />
                <button
                  className="cursor-pointer bg-red-600 text-white px-3 py-1 rounded-md text-sm hover:bg-red-700 flex items-center gap-1"
                  onClick={() => {
                    setAccounts((prevAccounts) => {
                      const updatedAccounts = { ...prevAccounts };
                      delete updatedAccounts[mfs.name];
                      return updatedAccounts;
                    });
                    setModal({
                      type: "success",
                      title: "Successfully Removed",
                      text: `Your ${mfs.name} account has been removed successfully.`,
                    });
                  }}
                >
                  Remove
                </button>
              </div>
            ) : (
              <button
                onClick={() => {
                  setSelectedMfs(mfs.name);
                  setNumber("");
                  setMessage("");
                }}
                className="cursor-pointer text-green-600 hover:underline flex items-center gap-1"
              >
                <FontAwesomeIcon icon={faPlusCircle} /> Add
              </button>
            )}
          </div>
        ))}
      </div>

      {/* Input Form */}
      {selectedMfs && (
        <div className="mt-6 border-t border-gray-200 pt-4">
          <h2 className="font-semibold mb-2">Add {selectedMfs} Account</h2>
          <input
            type="text"
            placeholder="Enter Mobile Number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            className="max-w-md border border-gray-300 p-2 rounded w-full mb-2 focus:outline-none focus:border-green-600"
          />
          {message && (
            <p className="text-red-500 text-sm mb-2 flex items-center gap-1">
              <FontAwesomeIcon icon={faTimesCircle} /> {message}
            </p>
          )}
          <div className="flex gap-2">
            <button
              onClick={handleAddAccount}
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
            >
              Confirm
            </button>
            <button
              onClick={() => setSelectedMfs(null)}
              className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Success Modal */}
      {modal && modal.type === "success" && (
        <div className="p-5 fixed inset-0 flex items-center justify-center bg-white/30 backdrop-blur-2xl">
          <div className="bg-white rounded-lg p-6 text-center max-w-sm w-full shadow-lg">
            <FontAwesomeIcon
              icon={faCheckCircle}
              className="text-green-500 text-5xl mx-auto mb-3"
            />
            <h2 className="text-xl font-bold mb-2">{modal.title}</h2>
            <p className="text-gray-600 mb-4">{modal.text}</p>
            <button
              onClick={() => setModal(null)}
              className="bg-slate-600 text-white px-4 py-2 rounded hover:bg-slate-700"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
