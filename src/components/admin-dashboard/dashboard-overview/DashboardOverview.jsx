import React from 'react';

const DashboardOverview = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-start px-6 lg:px-12">
      <div className="lg:col-span-1">
        <h1 className="text-2xl font-semibold text-[#2C0637] mb-2 font-space-grotesk">Dashboard Overview</h1>
        <p className="text-[#4E148C] mb-1 font-space-grotesk">Welcome back, Sarah.</p>
        <p className="text-[#4E148C] text-sm font-space-grotesk">Here's what's happening today.</p>
      </div>
      <div className="lg:col-span-3 bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="grid grid-cols-3 gap-6 mb-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-900 font-space-grotesk">8h 23m</div>
            <div className="text-sm text-gray-500 font-space-grotesk">Time Logged</div>
          </div>
         
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-900 font-space-grotesk">17</div>
            <div className="text-sm text-gray-500 font-space-grotesk">Tickets Resolved</div>
          </div>
         
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-900 font-space-grotesk">4.8</div>
            <div className="text-sm text-gray-500 font-space-grotesk">Avg Rating</div>
          </div>
        </div>
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-700 font-space-grotesk">Today's Progress</span>
            <span className="text-sm font-medium text-gray-900 font-space-grotesk">85%</span>
          </div>
          <div className="w-full bg-[#858BE380] rounded-full h-2">
            <div className="bg-[#623DC1] h-2 rounded-full" style={{ width: '85%' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardOverview;