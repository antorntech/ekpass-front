import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faCar,
  faMoneyBillWave,
  faTicketAlt,
  faPlus,
  faCreditCard,
  faRoad,
  faHistory,
} from "@fortawesome/free-solid-svg-icons";
import { Line, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { useEffect, useState } from "react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

// const UserDashboard = () => {
//   const userName = "Antor"; // Example name

//   const stats = [
//     { title: "Total Vehicles", value: "5", icon: faCar, color: "bg-blue-300" },
//     {
//       title: "Total Toll Paid",
//       value: "৳ 3,250",
//       icon: faMoneyBillWave,
//       color: "bg-green-300",
//     },
//     {
//       title: "Active Passes",
//       value: "2",
//       icon: faIdCard,
//       color: "bg-purple-300",
//     },
//     {
//       title: "Total Balance",
//       value: "৳ 2,500",
//       icon: faBangladeshiTakaSign,
//       color: "bg-orange-300",
//     },
//   ];

//   const payments = [
//     {
//       id: 1,
//       vehicle: "KA-01-AB-1234",
//       amount: "৳ 500",
//       date: "2025-08-10",
//       status: "Paid",
//     },
//     {
//       id: 2,
//       vehicle: "KA-05-CD-5678",
//       amount: "৳ 700",
//       date: "2025-08-09",
//       status: "Paid",
//     },
//     {
//       id: 3,
//       vehicle: "KA-09-EF-1122",
//       amount: "৳ 500",
//       date: "2025-08-08",
//       status: "Failed",
//     },
//   ];

//   const barData = {
//     labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
//     datasets: [
//       {
//         label: "Toll Paid (৳)",
//         data: [1200, 1900, 800, 1500, 2200, 1700],
//         backgroundColor: "#4CAF50",
//       },
//     ],
//   };

//   const lineData = {
//     labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
//     datasets: [
//       {
//         label: "Vehicles Passed",
//         data: [12, 19, 10, 15, 22, 17, 25],
//         borderColor: "#2196F3",
//         fill: false,
//       },
//     ],
//   };

//   return (
//     <div className="space-y-6">
//       {/* Welcome Section */}
//       <h1 className="text-2xl font-bold">Welcome back, {userName}</h1>

//       {/* Stats Cards */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//         {stats.map((stat, i) => (
//           <div
//             key={i}
//             className="bg-white shadow rounded-lg p-4 flex items-center gap-4"
//           >
//             <div className={`${stat.color} text-white p-3 rounded-md text-lg`}>
//               <FontAwesomeIcon icon={stat.icon} />
//             </div>
//             <div>
//               <p className="text-gray-500 text-sm">{stat.title}</p>
//               <h2 className="font-bold text-lg">{stat.value}</h2>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Charts Section */}
//       {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//         <div className="bg-white shadow rounded-lg p-4">
//           <h2 className="text-lg font-semibold mb-4">Monthly Toll Payments</h2>
//           <Bar data={barData} />
//         </div>
//         <div className="bg-white shadow rounded-lg p-4">
//           <h2 className="text-lg font-semibold mb-4">Weekly Vehicle Count</h2>
//           <Line data={lineData} />
//         </div>
//       </div> */}

//       {/* Recent Payments Table */}
//       <div className="bg-white shadow rounded-lg p-4">
//         <h2 className="text-lg font-semibold mb-4">Recent Payments</h2>
//         <div className="overflow-x-auto">
//           <table className="w-full text-sm">
//             <thead>
//               <tr className="bg-gray-100">
//                 <th className="py-3 px-4 text-left">Vehicle</th>
//                 <th className="py-3 px-4 text-left">Amount</th>
//                 <th className="py-3 px-4 text-left">Date</th>
//                 <th className="py-3 px-4 text-left">Status</th>
//               </tr>
//             </thead>
//             <tbody>
//               {payments.map((p, i) => (
//                 <tr
//                   key={p.id}
//                   className={`${
//                     i % 2 === 0 ? "bg-gray-50" : "bg-white"
//                   } hover:bg-blue-50`}
//                 >
//                   <td className="py-3 px-4">{p.vehicle}</td>
//                   <td className="py-3 px-4 text-green-600 font-semibold">
//                     {p.amount}
//                   </td>
//                   <td className="py-3 px-4">{p.date}</td>
//                   <td
//                     className={`py-3 px-4 font-semibold ${
//                       p.status === "Paid" ? "text-green-500" : "text-red-500"
//                     }`}
//                   >
//                     {p.status}
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

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
          <button className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition">
            <FontAwesomeIcon icon={faPlus} /> Add Vehicle
          </button>
          <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
            <FontAwesomeIcon icon={faCreditCard} /> Pay Toll
          </button>
          <button className="flex items-center gap-2 bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition">
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

const AdminDashboard = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Admin Dashboard</h1>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-blue-100 p-6 rounded-xl shadow">
          <p className="text-gray-600">Total Users</p>
          <h2 className="text-3xl font-bold">1,200</h2>
        </div>
        <div className="bg-green-100 p-6 rounded-xl shadow">
          <p className="text-gray-600">Total Revenue</p>
          <h2 className="text-3xl font-bold">৳5,40,000</h2>
        </div>
        <div className="bg-yellow-100 p-6 rounded-xl shadow">
          <p className="text-gray-600">Pending Approvals</p>
          <h2 className="text-3xl font-bold">15</h2>
        </div>
      </div>

      {/* Recent Reports */}
      <div className="bg-white p-6 rounded-xl shadow">
        <h2 className="text-lg font-semibold mb-4">Recent Reports</h2>
        <ul className="space-y-2">
          <li className="p-3 border-b">System Audit Completed - 2025-08-10</li>
          <li className="p-3 border-b">Monthly Revenue Report Generated</li>
        </ul>
      </div>
    </div>
  );
};

const SupportDashboard = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Support Dashboard</h1>

      {/* Open Disputes */}
      <div className="bg-white p-6 rounded-xl shadow">
        <h2 className="text-lg font-semibold mb-4">Open Disputes</h2>
        <ul className="space-y-2">
          <li className="p-3 border-b">Dispute #123 - Overcharged - Pending</li>
          <li className="p-3 border-b">
            Dispute #456 - Wrong Plaza Entry - Investigating
          </li>
        </ul>
      </div>

      {/* Support Tickets */}
      <div className="bg-white p-6 rounded-xl shadow">
        <h2 className="text-lg font-semibold mb-4">Support Tickets</h2>
        <ul className="space-y-2">
          <li className="p-3 border-b">Ticket #789 - Login Issue - Resolved</li>
          <li className="p-3 border-b">Ticket #101 - Payment Failed - Open</li>
        </ul>
      </div>
    </div>
  );
};

const Dashboard = () => {
  const [role, setRole] = useState(null);

  useEffect(() => {
    // এখানে বাস্তবে তোমার backend API কল হবে
    const fakeUser = { name: "Antor", role: "user" };
    setRole(fakeUser.role);
  }, []);

  if (!role) {
    return (
      <div className="flex justify-center items-center min-h-[60vh] text-gray-500">
        Loading dashboard...
      </div>
    );
  }

  return (
    <div>
      {role === "user" && <UserDashboard />}
      {role === "admin" && <AdminDashboard />}
      {role === "support" && <SupportDashboard />}
    </div>
  );
};

const Home = () => {
  return (
    <>
      <Dashboard />
    </>
  );
};

export default Home;
