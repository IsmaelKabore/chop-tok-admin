import React from 'react';
import { useRecordContext } from 'react-admin';
import { Box, Typography } from '@mui/material';

export const Basket: React.FC = () => {
  const record: any = useRecordContext();
  if (!record) return null;
  return (
    <Box>
      <Typography variant="h6">Items</Typography>
      {record.items.split(',').map((i: string, idx: number) => (
        <Typography key={idx}>• {i.trim()}</Typography>
      ))}
    </Box>
  );
};
