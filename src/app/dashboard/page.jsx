"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
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
  const router = useRouter();

  // Handle sidebar navigation with a loader
  const handleNavigation = (section) => {
    setLoading(true);
    setTimeout(() => {
      setActiveSection(section);
      setLoading(false);
    }, 1000);
  };

  // Handle logout (navigate to /login)
  const handleLogout = () => {
    router.push('/signin/login');
  };

  // Toggle sidebar open/close for mobile
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Render content based on active section
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

  return (
    <div className="flex min-h-screen">
      {/* Sidebar: conditionally rendered on mobile */}
      {isSidebarOpen && (
        <Sidebar 
          onNavigate={handleNavigation} 
          onLogout={handleLogout} 
        />
      )}
      <div className="flex-1 flex flex-col">
        <Navbar 
          toggleSidebar={toggleSidebar} 
          activeSection={activeSection}
          onNavigate={handleNavigation} 
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
