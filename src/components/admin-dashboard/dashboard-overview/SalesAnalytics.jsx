import React from 'react';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Area, AreaChart } from 'recharts';

const SalesAnalytics = () => {
  const data = [
    { month: '1M', value: 45000 },
    { month: '2M', value: 52000 },
    { month: '3M', value: 48000 },
    { month: '4M', value: 61000 },
    { month: '5M', value: 55000 },
    { month: '6M', value: 67000 },
    { month: '7M', value: 71000 },
    { month: '8M', value: 45000 },
    { month: '9M', value: 68000 },
    { month: '10M', value: 78000 },
    { month: '11M', value: 82000 },
    { month: '12M', value: 85000 }
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-gray-900">Sales Analytics</h2>
        <div className="flex space-x-2">
          <button className="text-sm text-gray-600 px-3 py-1 rounded hover:bg-gray-100 transition-colors">
            Day
          </button>
          <button className="text-sm bg-[#623DC1] text-white px-3 py-1 rounded hover:bg-[#5230a9] transition-colors">
            Monthly
          </button>
          <button className="text-sm text-gray-600 px-3 py-1 rounded hover:bg-gray-100 transition-colors">
            Annual
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div>
          <div className="text-2xl font-bold text-gray-900">342</div>
          <div className="text-sm text-gray-500">New Customers</div>
          <div className="text-xs text-green-600">+5.7%</div>
        </div>
        
        <div>
          <div className="text-2xl font-bold text-gray-900">94.2%</div>
          <div className="text-sm text-gray-500">Satisfaction</div>
          <div className="text-xs text-green-600">+8%</div>
        </div>
        
        <div>
          <div className="text-2xl font-bold text-gray-900">$1.2M</div>
          <div className="text-sm text-gray-500">This Year</div>
          <div className="text-xs text-green-600">+15%</div>
        </div>
        
        <div>
          <div className="text-2xl font-bold text-gray-900">$127,430</div>
          <div className="text-sm text-gray-500">This Month</div>
          <div className="text-xs text-red-600">-3.5%</div>
        </div>
      </div>

      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#623DC1" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#623DC1" stopOpacity={0.1}/>
              </linearGradient>
            </defs>
            <XAxis 
              dataKey="month" 
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: '#6B7280' }}
            />
            <YAxis hide />
            <Area 
              type="monotone" 
              dataKey="value" 
              stroke="#623DC1" 
              strokeWidth={2}
              fill="url(#colorGradient)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default SalesAnalytics;