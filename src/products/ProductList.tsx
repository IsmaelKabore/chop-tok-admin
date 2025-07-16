// src/products/ProductList.tsx
import React from 'react';
import {
  List,
  Datagrid,
  TextField,
  NumberField,
  EditButton,
  SimpleList,
} from 'react-admin';
import { useTheme, useMediaQuery } from '@mui/material';
import { VideoField } from './VideoField';

export const ProductList: React.FC = props => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <List {...props} perPage={10} title="Menu">
      {isSmall ? (
        <SimpleList
          primaryText={record => record.name}
          secondaryText={record => `$${record.price}`}
          tertiaryText={record =>
            new Date(record.created_at || record.updated_at).toLocaleDateString()
          }
        />
      ) : (
        <Datagrid
          rowClick="edit"
          sx={{ '& .RaDatagrid-tbody tr:hover': { background: '#e6f7f4' } }}
        >
          <TextField source="id" label="ID" />
          <TextField source="name" label="Dish Name" />
          <NumberField
            source="price"
            label="Price"
            options={{ style: 'currency', currency: 'USD' }}
          />
          <VideoField source="video" label="Video" />
          <EditButton />
        </Datagrid>
      )}
    </List>
  );
};
