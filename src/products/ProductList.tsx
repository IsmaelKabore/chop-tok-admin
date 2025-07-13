import React from 'react';
import {
  List, Datagrid, TextField, NumberField, EditButton, UrlField
} from 'react-admin';

export const ProductList: React.FC = props => (
  <List {...props} title="Menu">
    <Datagrid rowClick="edit">
      <TextField source="name" />
      <NumberField source="price" options={{ style: 'currency', currency: 'USD' }} />
      <UrlField source="videoUrl" label="Video URL" />
      <EditButton />
    </Datagrid>
  </List>
);
