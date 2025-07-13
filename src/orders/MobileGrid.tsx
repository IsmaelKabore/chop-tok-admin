import React from 'react';
import {
  SimpleList
} from 'react-admin';

export const MobileGrid: React.FC = props => (
  <SimpleList
    {...props}
    primaryText={record => `${record.customer_name} (${record.status})`}
    secondaryText={record => `Total: $${record.total}`}
    tertiaryText={record => new Date(record.date).toLocaleDateString()}
  />
);
