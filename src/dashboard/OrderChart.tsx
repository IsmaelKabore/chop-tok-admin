import React, { useEffect, useState } from 'react';
import { useDataProvider } from 'react-admin';
import {
  LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer
} from 'recharts';
import { Card, CardContent, Typography } from '@mui/material';

interface Point { date: string; value: number }

export const OrderChart: React.FC = () => {
  const dp = useDataProvider();
  const [data, setData] = useState<Point[]>([]);

  useEffect(() => {
    dp.getList('orders', {
      filter: {},
      pagination: { page: 1, perPage: 1000 },
      sort: { field: 'date', order: 'ASC' },
    })
    .then(({ data: orders }) => {
      const grouped: Record<string, number> = {};
      orders.forEach((o: any) => {
        const day = o.date.split('T')[0];
        grouped[day] = (grouped[day] || 0) + 1;
      });
      setData(Object.entries(grouped).map(([date, value]) => ({ date, value })));
    })
    .catch(() => {});
  }, [dp]);

  return (
    <Card>
      <CardContent>
        <Typography variant="h6">Orders Over Time</Typography>
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={data}>
            <Line type="monotone" dataKey="value" stroke="#8884d8" />
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};
