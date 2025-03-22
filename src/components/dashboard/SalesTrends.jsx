"use client";

import { useMemo } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function SalesTrends() {
  // Example data for two lines: current sales vs. forecast
  const data = useMemo(
    () => [
      { month: "Jan", sales: 400, forecast: 450 },
      { month: "Feb", sales: 300, forecast: 350 },
      { month: "Mar", sales: 500, forecast: 480 },
      { month: "Apr", sales: 700, forecast: 680 },
      { month: "May", sales: 600, forecast: 650 },
      { month: "Jun", sales: 800, forecast: 820 },
      { month: "Jul", sales: 750, forecast: 770 },
    ],
    []
  );

  return (
    <div className="p-6 rounded-xl shadow-md bg-white dark:bg-[#2b2b2b] text-gray-800 dark:text-white">
      <h2 className="text-xl font-bold mb-4">Sales Trends</h2>

      {/* Chart Container */}
      <div className="w-full h-64 mb-4">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 20, right: 20, left: 0, bottom: 20 }}
          >
            {/* Grid */}
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#cccccc40" // translucent grid in dark mode
            />
            {/* Axes */}
            <XAxis
              dataKey="month"
              stroke="#888"
              tick={{ fill: "currentColor" }}
            />
            <YAxis stroke="#888" tick={{ fill: "currentColor" }} />
            {/* Tooltip & Legend */}
            <Tooltip
              contentStyle={{
                backgroundColor: "#2b2b2b",
                borderRadius: "8px",
                border: "none",
              }}
              labelStyle={{ color: "#fff" }}
              itemStyle={{ color: "#fff" }}
            />
            <Legend />
            {/* Lines with animations */}
            <Line
              type="monotone"
              dataKey="sales"
              stroke="#8884d8"
              strokeWidth={2}
              dot={false}
              animationBegin={0}
              animationDuration={1000}
              animationEasing="ease-in-out"
            />
            <Line
              type="monotone"
              dataKey="forecast"
              stroke="#82ca9d"
              strokeWidth={2}
              strokeDasharray="5 5" // dotted line for forecast
              dot={false}
              animationBegin={0}
              animationDuration={1000}
              animationEasing="ease-in-out"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Additional Content */}
      <div className="text-sm leading-relaxed">
        <p className="mb-2">
          The chart above illustrates the monthly sales trend along with a
          forecast for the upcoming period. The solid line represents actual
          sales data, while the dotted line indicates our projected forecast
          based on current market analysis.
        </p>
        <p>
          Monitoring sales trends regularly can help you identify opportunities
          to optimize inventory, adjust marketing strategies, and maximize
          revenue potential throughout the year.
        </p>
      </div>
    </div>
  );
}
