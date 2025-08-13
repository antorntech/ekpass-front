import {
  faCar,
  faCreditCard,
  faHistory,
  faMoneyBillWave,
  faPlus,
  faRoad,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const UserDashboard = () => {
  // Demo Data (API থেকে আসবে)
  const totalVehicles = 3;
  const totalTollPaid = 12450;
  const totalTrips = 152;

  const recentTransactions = [
    {
      date: "2025-08-11",
      plaza: "Dhaka Toll Plaza",
      vehicle: "DHA-1234",
      amount: 50,
      status: "Success",
    },
    {
      date: "2025-08-10",
      plaza: "Gazipur Toll Plaza",
      vehicle: "DHA-5678",
      amount: 70,
      status: "Success",
    },
    {
      date: "2025-08-08",
      plaza: "Chittagong Toll Plaza",
      vehicle: "CTG-9876",
      amount: 90,
      status: "Failed",
    },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Welcome to EKPASS</h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow flex items-center gap-4">
          <FontAwesomeIcon icon={faCar} className="text-blue-500 text-3xl" />
          <div>
            <p className="text-gray-600 text-sm">Registered Vehicles</p>
            <h2 className="text-xl font-bold">{totalVehicles}</h2>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow flex items-center gap-4">
          <FontAwesomeIcon
            icon={faMoneyBillWave}
            className="text-green-500 text-3xl"
          />
          <div>
            <p className="text-gray-600 text-sm">Total Toll Paid</p>
            <h2 className="text-xl font-bold">
              ৳{totalTollPaid.toLocaleString()}
            </h2>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow flex items-center gap-4">
          <FontAwesomeIcon icon={faRoad} className="text-purple-500 text-3xl" />
          <div>
            <p className="text-gray-600 text-sm">Total Trips Completed</p>
            <h2 className="text-xl font-bold">{totalTrips}</h2>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white p-6 rounded-xl shadow">
        <h2 className="text-lg font-semibold mb-4">Quick Actions</h2>
        <div className="flex flex-wrap gap-4">
          <Link
            to="/vehicle/add"
            className="flex items-center cursor-pointer gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
          >
            <FontAwesomeIcon icon={faPlus} /> Add Vehicle
          </Link>
          <Link
            to="/payment"
            className="flex items-center cursor-pointer gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            <FontAwesomeIcon icon={faCreditCard} /> Top Up
          </Link>
          <button className="flex items-center cursor-pointer gap-2 bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition">
            <FontAwesomeIcon icon={faHistory} /> View Pass History
          </button>
        </div>
      </div>

      {/* Recent Transactions */}
      {/* <div className="bg-white p-6 rounded-xl shadow overflow-x-auto">
        <h2 className="text-lg font-semibold mb-4">Recent Transactions</h2>
        <table className="min-w-full border-collapse">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="p-3 text-sm font-medium text-gray-600">Date</th>
              <th className="p-3 text-sm font-medium text-gray-600">Plaza</th>
              <th className="p-3 text-sm font-medium text-gray-600">Vehicle</th>
              <th className="p-3 text-sm font-medium text-gray-600">Amount</th>
              <th className="p-3 text-sm font-medium text-gray-600">Status</th>
            </tr>
          </thead>
          <tbody>
            {recentTransactions.map((tx, index) => (
              <tr key={index} className="border-b hover:bg-gray-50 transition">
                <td className="p-3 text-sm">{tx.date}</td>
                <td className="p-3 text-sm">{tx.plaza}</td>
                <td className="p-3 text-sm">{tx.vehicle}</td>
                <td className="p-3 text-sm">৳{tx.amount}</td>
                <td
                  className={`p-3 text-sm font-semibold ${
                    tx.status === "Success" ? "text-green-600" : "text-red-500"
                  }`}
                >
                  {tx.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div> */}
    </div>
  );
};

export default UserDashboard;
