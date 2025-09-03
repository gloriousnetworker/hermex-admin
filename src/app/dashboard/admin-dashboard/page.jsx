'use client';
import React from 'react';
import Navbar from '../../../components/admin-dashboard/dashboard-overview/Navbar';
import DashboardOverview from '../../../components/admin-dashboard/dashboard-overview/DashboardOverview';
import DomainViews from '../../../components/admin-dashboard/dashboard-overview/DomainViews';
import CompanyOverview from '../../../components/admin-dashboard/dashboard-overview/CompanyOverview';
import SalesAnalytics from '../../../components/admin-dashboard/dashboard-overview/SalesAnalytics';

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-space-grotesk">
      <Navbar />
      <div className="pt-8 p-4 md:p-6 space-y-6">
        <DashboardOverview />
        <div className="flex justify-center">
          <DomainViews />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <CompanyOverview />
        </div>
        <SalesAnalytics />
      </div>
    </div>
  );
};

export default AdminDashboard;