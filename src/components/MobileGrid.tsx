// src/components/MobileGrid.tsx
import React from 'react';
import { SimpleList, FieldProps } from 'react-admin';

export const MobileGrid: React.FC<FieldProps> = props => (
  <SimpleList
    {...props}
    primaryText={(record: any) => `${record.customer_name} (${record.status})`}
    secondaryText={(record: any) => `Total: $${record.total}`}
    tertiaryText={(record: any) =>
      new Date(record.date).toLocaleDateString()
    }
  />
);
