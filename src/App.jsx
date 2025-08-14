import "./App.css";
import { Container } from "./components/Container";
import AppRoutes from "../routes/AppRoutes";
import { useState } from "react";
import Header from "./shared/Header";
import Sidebar from "./shared/Sidebar";
import { useLocation } from "react-router-dom";

const MainLayout = ({ authentication, onLogout }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  // যেসব পেজে sidebar/header দেখাবো না
  const hideLayoutFor = ["/landing"]; // Landing page path
  const shouldHideLayout = hideLayoutFor.includes(location.pathname);

  if (!authentication || shouldHideLayout) {
    return (
      <Container>
        <AppRoutes authentication={authentication} />
      </Container>
    );
  }

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Main area */}
      <div className="flex flex-col flex-1">
        {/* Header */}
        <Header onMenuClick={() => setSidebarOpen(true)} onLogout={onLogout} />

        {/* Scrollable content */}
        <main className="flex-1 overflow-auto bg-gray-50 mt-14">
          <div className="p-5 overflow-x-auto">
            <AppRoutes authentication={authentication} />
          </div>
        </main>
      </div>
    </div>
  );
};

function App() {
  const authentication = localStorage.getItem("user");

  const onLogout = () => {
    localStorage.removeItem("user");
    window.location.href = "/";
  };

  return <MainLayout authentication={authentication} onLogout={onLogout} />;
}

export default App;
