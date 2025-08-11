import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCar,
  faMoneyBillWave,
  faIdCard,
  faClock,
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

const UserDashboard = () => {
  const userName = "Antor"; // Example name

  const stats = [
    { title: "Total Vehicles", value: "45", icon: faCar, color: "bg-blue-300" },
    {
      title: "Total Toll Paid",
      value: "৳ 3,250",
      icon: faMoneyBillWave,
      color: "bg-green-300",
    },
    {
      title: "Active Passes",
      value: "2",
      icon: faIdCard,
      color: "bg-purple-300",
    },
    {
      title: "Last Login",
      value: "Today 9:15 AM",
      icon: faClock,
      color: "bg-orange-300",
    },
  ];

  const payments = [
    {
      id: 1,
      vehicle: "KA-01-AB-1234",
      amount: "৳ 500",
      date: "2025-08-10",
      status: "Paid",
    },
    {
      id: 2,
      vehicle: "KA-05-CD-5678",
      amount: "৳ 700",
      date: "2025-08-09",
      status: "Paid",
    },
    {
      id: 3,
      vehicle: "KA-09-EF-1122",
      amount: "৳ 500",
      date: "2025-08-08",
      status: "Failed",
    },
  ];

  const barData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Toll Paid (৳)",
        data: [1200, 1900, 800, 1500, 2200, 1700],
        backgroundColor: "#4CAF50",
      },
    ],
  };

  const lineData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Vehicles Passed",
        data: [12, 19, 10, 15, 22, 17, 25],
        borderColor: "#2196F3",
        fill: false,
      },
    ],
  };

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <h1 className="text-2xl font-bold">Welcome back, {userName}</h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <div
            key={i}
            className="bg-white shadow rounded-lg p-4 flex items-center gap-4"
          >
            <div className={`${stat.color} text-white p-3 rounded-md text-lg`}>
              <FontAwesomeIcon icon={stat.icon} />
            </div>
            <div>
              <p className="text-gray-500 text-sm">{stat.title}</p>
              <h2 className="text-xl font-bold">{stat.value}</h2>
            </div>
          </div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white shadow rounded-lg p-4">
          <h2 className="text-lg font-semibold mb-4">Monthly Toll Payments</h2>
          <Bar data={barData} />
        </div>
        <div className="bg-white shadow rounded-lg p-4">
          <h2 className="text-lg font-semibold mb-4">Weekly Vehicle Count</h2>
          <Line data={lineData} />
        </div>
      </div>

      {/* Recent Payments Table */}
      <div className="bg-white shadow rounded-lg p-4">
        <h2 className="text-lg font-semibold mb-4">Recent Payments</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="py-3 px-4 text-left">Vehicle</th>
                <th className="py-3 px-4 text-left">Amount</th>
                <th className="py-3 px-4 text-left">Date</th>
                <th className="py-3 px-4 text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              {payments.map((p, i) => (
                <tr
                  key={p.id}
                  className={`${
                    i % 2 === 0 ? "bg-gray-50" : "bg-white"
                  } hover:bg-blue-50`}
                >
                  <td className="py-3 px-4">{p.vehicle}</td>
                  <td className="py-3 px-4 text-green-600 font-semibold">
                    {p.amount}
                  </td>
                  <td className="py-3 px-4">{p.date}</td>
                  <td
                    className={`py-3 px-4 font-semibold ${
                      p.status === "Paid" ? "text-green-500" : "text-red-500"
                    }`}
                  >
                    {p.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const Home = () => {
  return (
    <>
      <UserDashboard />
    </>
  );
};

export default Home;
