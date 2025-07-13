import React from 'react';
import { TableCell } from '@mui/material';

export const TableCellRight: React.FC = ({ children }) => (
  <TableCell align="right">{children}</TableCell>
);
