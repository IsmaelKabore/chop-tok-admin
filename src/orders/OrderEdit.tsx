// src/orders/OrderEdit.tsx
import React from 'react';
import {
  Edit,
  SimpleForm,
  DateInput,
  TextInput,
  SelectInput,
  NumberInput,
  required,
} from 'react-admin';
import { Box } from '@mui/material';

export const OrderEdit: React.FC = props => (
  <Edit {...props} title="Edit Order">
    <SimpleForm
      variant="outlined"
      redirect="list"
      sx={{ '& .MuiFormControl-root': { mb: 2 } }}
    >
      <DateInput source="date" label="Order Date" validate={required()} fullWidth />
      <TextInput
        source="customer_name"
        label="Customer Name"
        validate={required()}
        fullWidth
      />
      <TextInput
        source="items"
        label="Basket Items"
        multiline
        validate={required()}
        fullWidth
      />
      <SelectInput
        source="status"
        label="Status"
        choices={[
          { id: 'pending', name: 'Pending' },
          { id: 'preparing', name: 'Preparing' },
          { id: 'ready', name: 'Ready' },
          { id: 'completed', name: 'Completed' },
        ]}
        validate={required()}
        fullWidth
      />
      <NumberInput
        source="total"
        label="Total (USD)"
        validate={required()}
        fullWidth
      />
    </SimpleForm>
  </Edit>
);
