import "./App.css";
import { Container } from "./components/Container";
import AppRoutes from "../routes/AppRoutes";
import { useState } from "react";
import Header from "./shared/Header";
import Sidebar from "./shared/Sidebar";

const MainLayout = ({ authentication, onLogout }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  if (!authentication) {
    return (
      <Container>
        <AppRoutes authentication={authentication} />
      </Container>
    );
  }

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar (fixed) */}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Main area */}
      <div className="flex flex-col flex-1">
        {/* Header (fixed) */}
        <Header onMenuClick={() => setSidebarOpen(true)} onLogout={onLogout} />

        {/* Scrollable content */}
        <main className="flex-1 overflow-auto bg-gray-50 mt-14">
          <div className="p-5">
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
    window.location.reload();
  };

  return (
    <>
      <MainLayout authentication={authentication} />
    </>
  );
}

export default App;
