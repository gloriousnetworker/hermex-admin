"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { useMemo } from "react";

export default function Overview() {
  // Example data for the Bar Chart (User Growth)
  const userGrowthData = useMemo(
    () => [
      { name: "Jan", value: 200 },
      { name: "Feb", value: 500 },
      { name: "Mar", value: 300 },
      { name: "Apr", value: 600 },
      { name: "May", value: 400 },
      { name: "Jun", value: 700 },
    ],
    []
  );

  // Example data for the Pie Chart (Category Distribution)
  const categoryData = useMemo(
    () => [
      { name: "Category A", value: 400 },
      { name: "Category B", value: 300 },
      { name: "Category C", value: 200 },
      { name: "Category D", value: 100 },
    ],
    []
  );

  // Colors for the Pie slices
  const pieColors = ["#4caf50", "#f44336", "#2196f3", "#ff9800"];

  return (
    <div className="space-y-6">
      {/* Metrics Summary */}
      <div className="p-6 rounded-xl shadow-md bg-white dark:bg-[#2b2b2b] text-gray-800 dark:text-white">
        <h2 className="text-xl font-bold mb-4">METRICS SUMMARY</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Card 1 */}
          <div className="p-4 rounded-lg bg-gray-100 dark:bg-[#1f1f1f] flex flex-col items-start">
            <p className="text-sm uppercase text-gray-500 dark:text-gray-400 mb-2">
              Total Users
            </p>
            <p className="text-3xl font-semibold text-gray-800 dark:text-white">
              1,234
            </p>
          </div>
          {/* Card 2 */}
          <div className="p-4 rounded-lg bg-gray-100 dark:bg-[#1f1f1f] flex flex-col items-start">
            <p className="text-sm uppercase text-gray-500 dark:text-gray-400 mb-2">
              Active Sessions
            </p>
            <p className="text-3xl font-semibold text-gray-800 dark:text-white">
              567
            </p>
          </div>
          {/* Card 3 */}
          <div className="p-4 rounded-lg bg-gray-100 dark:bg-[#1f1f1f] flex flex-col items-start">
            <p className="text-sm uppercase text-gray-500 dark:text-gray-400 mb-2">
              Sales Revenue
            </p>
            <p className="text-3xl font-semibold text-gray-800 dark:text-white">
              ₹12,300
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* User Growth (Bar Chart) */}
        <div className="p-6 rounded-xl shadow-md bg-white dark:bg-[#2b2b2b] text-gray-800 dark:text-white">
          <h3 className="text-lg font-bold mb-4">USER GROWTH</h3>
          <div className="w-full h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={userGrowthData}
                margin={{ top: 20, right: 20, left: 0, bottom: 20 }}
              >
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="#cccccc40" // translucent grid in dark mode
                />
                <XAxis
                  dataKey="name"
                  stroke="#888"
                  tick={{ fill: "currentColor" }}
                />
                <YAxis stroke="#888" tick={{ fill: "currentColor" }} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#2b2b2b",
                    borderRadius: "8px",
                    border: "none",
                  }}
                  labelStyle={{ color: "#fff" }}
                  itemStyle={{ color: "#fff" }}
                />
                <Bar
                  dataKey="value"
                  fill="#4caf50"
                  radius={[5, 5, 0, 0]}
                  animationBegin={0}
                  animationDuration={1000}
                  animationEasing="ease-in-out"
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Category Distribution (Pie Chart) */}
        <div className="p-6 rounded-xl shadow-md bg-white dark:bg-[#2b2b2b] text-gray-800 dark:text-white">
          <h3 className="text-lg font-bold mb-4">CATEGORY DISTRIBUTION</h3>
          <div className="w-full h-64 flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={categoryData}
                  dataKey="value"
                  nameKey="name"
                  outerRadius={80}
                  innerRadius={50}
                  fill="#8884d8"
                  paddingAngle={3}
                  labelLine={false}
                  animationBegin={0}
                  animationDuration={1000}
                  animationEasing="ease-in-out"
                >
                  {categoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={pieColors[index % pieColors.length]} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#2b2b2b",
                    borderRadius: "8px",
                    border: "none",
                  }}
                  labelStyle={{ color: "#fff" }}
                  itemStyle={{ color: "#fff" }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
