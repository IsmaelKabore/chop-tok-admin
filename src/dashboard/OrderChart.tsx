import React, { useEffect, useState } from 'react';
import { useDataProvider } from 'react-admin';
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { Card, CardContent, Typography } from '@mui/material';

interface Point { date: string; value: number; }

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
        setData(
          Object.entries(grouped).map(([date, value]) => ({ date, value }))
        );
      })
      .catch(() => {});
  }, [dp]);

  return (
    <Card sx={{ borderRadius: 2, boxShadow: 1 }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Orders Over Time
        </Typography>
        <ResponsiveContainer width="100%" height={240}>
          <LineChart data={data}>
            <CartesianGrid stroke="#eee" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#3fb7a4"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};
