import React from 'react';
import { Card, CardContent, Box, Typography, useTheme } from '@mui/material';

export interface CardWithIconProps {
  icon: React.ReactNode;
  title: string;
  value: number | string;
  diff?: string;
}

export const CardWithIcon: React.FC<CardWithIconProps> = ({
  icon,
  title,
  value,
  diff,
}) => {
  const theme = useTheme();
  return (
    <Card sx={{ borderRadius: 2, boxShadow: 1, p: 2 }}>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Box sx={{ mr: 2, color: theme.palette.primary.main }}>{icon}</Box>
        <Box>
          <Typography variant="subtitle2" color="textSecondary">
            {title}
          </Typography>
          <Typography variant="h5">{value}</Typography>
          {diff && (
            <Typography
              variant="caption"
              color={diff.startsWith('+') ? 'success.main' : 'error.main'}
            >
              {diff}
            </Typography>
          )}
        </Box>
      </Box>
    </Card>
  );
};
