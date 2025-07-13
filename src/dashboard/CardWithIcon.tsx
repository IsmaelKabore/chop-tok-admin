import React from 'react';
import { Box, Card, CardContent, Typography } from '@mui/material';

export interface CardWithIconProps {
  icon: React.ReactElement;
  title: string;
  value: number | string;
}

export const CardWithIcon: React.FC<CardWithIconProps> = ({ icon, title, value }) => (
  <Card sx={{ display: 'flex', alignItems: 'center', p: 2 }}>
    <Box sx={{ mr: 2 }}>{icon}</Box>
    <CardContent>
      <Typography variant="subtitle2">{title}</Typography>
      <Typography variant="h5">{value}</Typography>
    </CardContent>
  </Card>
);
