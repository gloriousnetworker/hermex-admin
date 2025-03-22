"use client";

import {
  PieChart,
  Pie,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

const data = [
  { name: "Category A", value: 400 },
  { name: "Category B", value: 300 },
  { name: "Category C", value: 300 },
  { name: "Category D", value: 200 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

export default function CategoryDistribution() {
  return (
    <div className="min-h-screen p-8 bg-white dark:bg-[#2b2b2b] text-gray-800 dark:text-white">
      <h2 className="text-2xl font-bold mb-6 text-center">Category Distribution</h2>
      
      {/* Chart Container */}
      <div className="w-full h-[60vh] mb-8">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              outerRadius="80%"
              innerRadius="60%"
              fill="#8884d8"
              label
              animationBegin={0}
              animationDuration={1000}
              animationEasing="ease-in-out"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
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

      {/* Additional Descriptive Content */}
      <div className="max-w-2xl mx-auto text-center">
        <p className="mb-4">
          This donut chart represents the distribution of different categories within our data. Each segment indicates the proportion of its respective category relative to the whole.
        </p>
        <p>
          Hover over each segment for more detailed information. The dynamic data updates in real-time, providing you with the latest insights to drive informed decisions.
        </p>
      </div>
    </div>
  );
}
