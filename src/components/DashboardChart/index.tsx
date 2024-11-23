import React from "react";
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

const DashboardChart = ({ metrics }: { metrics: any }) => {
  const data = [
    { name: "Listados", value: metrics.totalListings },
    { name: "Usuarios", value: metrics.totalUsers },
    { name: "Transacciones", value: metrics.totalTransactions },
  ];

  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="value" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default DashboardChart;
