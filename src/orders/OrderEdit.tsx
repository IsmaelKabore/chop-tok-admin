import React from 'react';
import {
  Edit, SimpleForm, DateInput, TextInput, SelectInput, NumberInput
} from 'react-admin';

export const OrderEdit: React.FC = props => (
  <Edit {...props} title="Edit Order">
    <SimpleForm>
      <DateInput source="date" />
      <TextInput source="customer_name" />
      <TextInput source="items" multiline />
      <SelectInput source="status" choices={[
        { id: 'pending', name: 'Pending' },
        { id: 'preparing', name: 'Preparing' },
        { id: 'ready', name: 'Ready' },
        { id: 'completed', name: 'Completed' },
      ]} />
      <NumberInput source="total" />
    </SimpleForm>
  </Edit>
);
