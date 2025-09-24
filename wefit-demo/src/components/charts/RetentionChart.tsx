import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface RetentionChartProps {
  data: {
    month1: number;
    month3: number;
    month6: number;
    industryBenchmark: number[];
  };
}

export const RetentionChart: React.FC<RetentionChartProps> = ({ data }) => {
  const chartData = [
    { month: 'Month 1', weFit: data.month1 * 100, industry: data.industryBenchmark[0] * 100, soloApps: 23 },
    { month: 'Month 3', weFit: data.month3 * 100, industry: data.industryBenchmark[1] * 100, soloApps: 12 },
    { month: 'Month 6', weFit: data.month6 * 100, industry: data.industryBenchmark[2] * 100, soloApps: 8 },
    { month: 'Month 9', weFit: 43, industry: data.industryBenchmark[3] * 100, soloApps: 5 },
    { month: 'Month 12', weFit: 38, industry: data.industryBenchmark[4] * 100, soloApps: 3 }
  ];

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={chartData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis label={{ value: 'Retention %', angle: -90, position: 'insideLeft' }} domain={[0, 100]} />
        <Tooltip formatter={(value) => [`${value}%`, '']} />
        <Legend />
        <Line type="monotone" dataKey="weFit" stroke="#2ECC71" strokeWidth={3} name="weFit Users" />
        <Line type="monotone" dataKey="industry" stroke="#A0A0A0" strokeDasharray="5 5" name="Industry Average" />
        <Line type="monotone" dataKey="soloApps" stroke="#E74C3C" strokeWidth={2} name="Solo Fitness Apps" />
      </LineChart>
    </ResponsiveContainer>
  );
};
