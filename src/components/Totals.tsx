// src/components/Totals.tsx
import React from 'react';
import { useRecordContext, FieldProps } from 'react-admin';
import { Typography } from '@mui/material';

export const Totals: React.FC<FieldProps> = () => {
  const record: any = useRecordContext();
  if (!record) return null;
  return (
    <Typography align="right" variant="body2">
      <strong>${record.total.toFixed(2)}</strong>
    </Typography>
  );
};
