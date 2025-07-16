// src/products/VideoField.tsx
import React from 'react';
import { FieldProps } from 'react-admin';
import { Box } from '@mui/material';

export const VideoField: React.FC<FieldProps> = ({ record }) => {
  const src = record?.video as string;
  if (!src) return null;
  return (
    <Box>
      <video
        src={src}
        controls
        style={{
          width: 120,
          height: 80,
          borderRadius: 8,
          objectFit: 'cover',
        }}
      />
    </Box>
  );
};
