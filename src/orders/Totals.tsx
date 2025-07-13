import React from 'react';
import { useRecordContext } from 'react-admin';
import { Typography } from '@mui/material';

export const Totals: React.FC = () => {
  const record: any = useRecordContext();
  if (!record) return null;
  return <Typography variant="body1">Total: ${record.total.toFixed(2)}</Typography>;
};
