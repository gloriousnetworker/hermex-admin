"use client";

import { useMemo } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function UserGrowth() {
  // Example data for two bars: new users vs. returning users
  const data = useMemo(
    () => [
      { month: "Jan", newUsers: 200, returningUsers: 100 },
      { month: "Feb", newUsers: 300, returningUsers: 120 },
      { month: "Mar", newUsers: 400, returningUsers: 150 },
      { month: "Apr", newUsers: 500, returningUsers: 180 },
      { month: "May", newUsers: 600, returningUsers: 220 },
      { month: "Jun", newUsers: 700, returningUsers: 250 },
    ],
    []
  );

  return (
    <div className="p-6 rounded-xl shadow-md bg-white dark:bg-[#2b2b2b] text-gray-800 dark:text-white">
      <h2 className="text-xl font-bold mb-4">User Growth</h2>

      {/* Chart Container */}
      <div className="w-full h-64 mb-4">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 20, right: 20, left: 0, bottom: 20 }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#cccccc40" // subtle grid lines for dark mode
            />
            <XAxis
              dataKey="month"
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
            <Legend />
            {/* Bars with animations */}
            <Bar
              dataKey="newUsers"
              fill="#82ca9d"
              animationBegin={0}
              animationDuration={1000}
              animationEasing="ease-in-out"
              radius={[4, 4, 0, 0]}
            />
            <Bar
              dataKey="returningUsers"
              fill="#8884d8"
              animationBegin={0}
              animationDuration={1000}
              animationEasing="ease-in-out"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Additional Content */}
      <div className="text-sm leading-relaxed">
        <p className="mb-2">
          This chart compares <strong>new users</strong> with <strong>returning users</strong> over the past few months, providing insights into user acquisition and retention.
        </p>
        <p>
          Tracking user growth trends can help you identify high-growth periods, evaluate the impact of marketing campaigns, and plan future strategies to drive sustainable platform adoption.
        </p>
      </div>
    </div>
  );
}
