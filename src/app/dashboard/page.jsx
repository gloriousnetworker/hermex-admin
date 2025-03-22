"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

// Components
import Navbar from "../../components/dashboard/Navbar";
import Sidebar from "../../components/dashboard/Sidebar";
import Footer from "../../components/dashboard/Footer";
import Overview from "../../components/dashboard/Overview";
import SalesTrends from "../../components/dashboard/SalesTrends";
import UserGrowth from "../../components/dashboard/UserGrowth";
import CategoryDistribution from "../../components/dashboard/CategoryDistribution";
import DataTable from "../../components/dashboard/DataTable";
import Settings from "../../components/dashboard/Settings";
import Notifications from "../../components/dashboard/Notifications";
import Profile from "../../components/dashboard/Profile";
import Loader from "../../components/loader/Loader";

export default function DashboardPage() {
  const [activeSection, setActiveSection] = useState("overview");
  const [loading, setLoading] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [currentUserName, setCurrentUserName] = useState("John Doe");
  const router = useRouter();

  // Load username from localStorage
  useEffect(() => {
    const storedName = localStorage.getItem("userName");
    if (storedName && storedName !== "undefined") {
      setCurrentUserName(storedName);
    }
  }, []);

  // Simulate loading on navigation
  const handleNavigation = (section) => {
    setLoading(true);
    setTimeout(() => {
      setActiveSection(section);
      setLoading(false);
    }, 1000);
  };

  // Logout logic
  const handleLogout = () => {
    Cookies.remove("authToken");
    localStorage.removeItem("keepLoggedIn");
    localStorage.removeItem("userName");
    router.push("/signin/login");
  };

  // Toggle sidebar (mobile)
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Render content based on active section
  const renderContent = () => {
    switch (activeSection) {
      case "overview":
        return <Overview />;
      case "sales-trends":
        return <SalesTrends />;
      case "user-growth":
        return <UserGrowth />;
      case "category-distribution":
        return <CategoryDistribution />;
      case "data-table":
        return <DataTable />;
      case "settings":
        return <Settings />;
      case "notifications":
        return <Notifications />;
      case "profile":
        return <Profile />;
      default:
        return <Overview />;
    }
  };

  // Auto-logout if keepLoggedIn is false
  useEffect(() => {
    const keepLoggedIn = localStorage.getItem("keepLoggedIn") === "true";
    if (!keepLoggedIn) {
      let timer;
      const resetTimer = () => {
        clearTimeout(timer);
        timer = setTimeout(() => {
          handleLogout();
        }, 60000); // 1 minute inactivity
      };
      window.addEventListener("mousemove", resetTimer);
      window.addEventListener("keypress", resetTimer);
      resetTimer();
      return () => {
        clearTimeout(timer);
        window.removeEventListener("mousemove", resetTimer);
        window.removeEventListener("keypress", resetTimer);
      };
    }
  }, [router]);

  return (
    <div
      className="
        relative
        min-h-screen
        bg-gradient-to-tr
        from-gray-100
        to-gray-200
        dark:from-[#121212]
        dark:via-[#1b1b1b]
        dark:to-[#2a2a2a]
      "
    >
      {/* Sidebar fixed on large screens */}
      <div className="hidden md:block fixed top-0 left-0 w-72 h-screen z-50">
        <Sidebar
          isOpen={true}
          onCloseSidebar={() => {}}
          onNavigate={handleNavigation}
          onLogout={handleLogout}
          activeSection={activeSection}
        />
      </div>

      {/* Mobile Sidebar */}
      <div className="md:hidden">
        <Sidebar
          isOpen={isSidebarOpen}
          onCloseSidebar={() => setIsSidebarOpen(false)}
          onNavigate={handleNavigation}
          onLogout={handleLogout}
          activeSection={activeSection}
        />
      </div>

      {/* Main Content Area: use margin-left on larger screens */}
      <div className="flex flex-col md:ml-72 h-screen">
        <Navbar
          toggleSidebar={toggleSidebar}
          activeSection={activeSection}
          onNavigate={handleNavigation}
          userName={currentUserName}
        />
        {/* Scrollable content */}
        <div className="flex-1 overflow-y-auto">
          <main className="p-4">
            {loading ? (
              <div className="flex items-center justify-center h-full">
                <Loader />
              </div>
            ) : (
              renderContent()
            )}
          </main>
        </div>
        <Footer />
      </div>
    </div>
  );
}
