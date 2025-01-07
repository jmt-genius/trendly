'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', views: 4000, engagement: 2400 },
  { name: 'Feb', views: 3000, engagement: 1398 },
  { name: 'Mar', views: 2000, engagement: 9800 },
  { name: 'Apr', views: 2780, engagement: 3908 },
  { name: 'May', views: 1890, engagement: 4800 },
  { name: 'Jun', views: 2390, engagement: 3800 },
];

export function PerformanceChart() {
  return (
    <Card className="col-span-3">
      <CardHeader>
        <CardTitle>Performance Overview</CardTitle>
      </CardHeader>
      <CardContent className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="views" stroke="hsl(var(--chart-1))" />
            <Line type="monotone" dataKey="engagement" stroke="hsl(var(--chart-2))" />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}