// src/components/Basket.tsx
import React from 'react';
import { useRecordContext, FieldProps } from 'react-admin';
import { Box, Typography } from '@mui/material';

export const Basket: React.FC<FieldProps> = () => {
  const record: any = useRecordContext();
  if (!record?.items) return null;
  return (
    <Box>
      {record.items.split(',').map((item: string, i: number) => (
        <Typography key={i} variant="body2">
          • {item.trim()}
        </Typography>
      ))}
    </Box>
  );
};
