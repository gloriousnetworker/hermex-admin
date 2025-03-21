"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Cookies from "js-cookie";
import Navbar from '../../components/dashboard/Navbar';
import Sidebar from '../../components/dashboard/Sidebar';
import Footer from '../../components/dashboard/Footer';
import Overview from '../../components/dashboard/Overview';
import SalesTrends from '../../components/dashboard/SalesTrends';
import UserGrowth from '../../components/dashboard/UserGrowth';
import CategoryDistribution from '../../components/dashboard/CategoryDistribution';
import DataTable from '../../components/dashboard/DataTable';
import Settings from '../../components/dashboard/Settings';
import Notifications from '../../components/dashboard/Notifications';
import Profile from '../../components/dashboard/Profile';
import Loader from '../../components/loader/Loader';

export default function DashboardPage() {
  const [activeSection, setActiveSection] = useState('overview');
  const [loading, setLoading] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [currentUserName, setCurrentUserName] = useState("John Doe");
  const router = useRouter();

  useEffect(() => {
    const storedName = localStorage.getItem("userName");
    if (storedName && storedName !== "undefined") {
      setCurrentUserName(storedName);
    }
  }, []);

  const handleNavigation = (section) => {
    setLoading(true);
    setTimeout(() => {
      setActiveSection(section);
      setLoading(false);
    }, 1000);
  };

  const handleLogout = () => {
    Cookies.remove("authToken");
    localStorage.removeItem("keepLoggedIn");
    localStorage.removeItem("userName");
    router.push('/signin/login');
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const renderContent = () => {
    switch (activeSection) {
      case 'overview':
        return <Overview />;
      case 'sales-trends':
        return <SalesTrends />;
      case 'user-growth':
        return <UserGrowth />;
      case 'category-distribution':
        return <CategoryDistribution />;
      case 'data-table':
        return <DataTable />;
      case 'settings':
        return <Settings />;
      case 'notifications':
        return <Notifications />;
      case 'profile':
        return <Profile />;
      default:
        return <Overview />;
    }
  };

  useEffect(() => {
    const keepLoggedIn = localStorage.getItem("keepLoggedIn") === "true";
    if (!keepLoggedIn) {
      let timer;
      const resetTimer = () => {
        clearTimeout(timer);
        timer = setTimeout(() => {
          handleLogout();
        }, 60000);
      };
      window.addEventListener('mousemove', resetTimer);
      window.addEventListener('keypress', resetTimer);
      resetTimer();
      return () => {
        clearTimeout(timer);
        window.removeEventListener('mousemove', resetTimer);
        window.removeEventListener('keypress', resetTimer);
      };
    }
  }, [router]);

  return (
    <div className="flex min-h-screen">
      {isSidebarOpen && (
        <Sidebar onNavigate={handleNavigation} onLogout={handleLogout} />
      )}
      <div className="flex-1 flex flex-col">
        <Navbar
          toggleSidebar={toggleSidebar}
          activeSection={activeSection}
          onNavigate={handleNavigation}
          userName={currentUserName}
        />
        <main className="flex-1 p-4">
          {loading ? (
            <div className="flex items-center justify-center h-full">
              <Loader />
            </div>
          ) : (
            renderContent()
          )}
        </main>
        <Footer />
      </div>
    </div>
  );
}
