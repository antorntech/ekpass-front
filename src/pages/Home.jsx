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
import { Link } from "react-router-dom";
import UserDashboard from "./dashboard/roles/dashboardui/UserDashboard";
import AdminDashboard from "./dashboard/roles/dashboardui/AdminDashboard";
import SupportDashboard from "./dashboard/roles/dashboardui/SupportDashboard";

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
