import React from 'react';
import {
  List, Datagrid, DateField, TextField, NumberField, EditButton
} from 'react-admin';

export const OrderList: React.FC = props => (
  <List {...props} title="Orders">
    <Datagrid rowClick="edit">
      <DateField source="date" />
      <TextField source="customer_name" label="Customer" />
      <TextField source="items" />
      <TextField source="status" />
      <NumberField source="total" />
      <EditButton />
    </Datagrid>
  </List>
);
