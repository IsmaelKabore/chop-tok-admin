// src/orders/OrderList.tsx
import React from 'react';
import {
  List,
  Datagrid,
  DateField,
  TextField,
  EditButton,
  SimpleList,
} from 'react-admin';
import { useTheme, useMediaQuery } from '@mui/material';
import { Basket } from '../components/Basket';
import { Totals } from '../components/Totals';

export const OrderList: React.FC = props => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <List {...props} perPage={25} title="Orders">
      {isSmall ? (
        <SimpleList
          primaryText={(record: any) =>
            `${record.customer_name} — $${record.total}`
          }
          secondaryText={(record: any) => record.items}
          tertiaryText={(record: any) =>
            new Date(record.date).toLocaleDateString()
          }
        />
      ) : (
        <Datagrid
          rowClick="edit"
          sx={{
            '& .RaDatagrid-tbody tr:hover': { background: '#e6f7f4' },
          }}
        >
          <DateField source="date" label="Date" />
          <TextField source="customer_name" label="Customer" />
          <Basket source="items" label="Items" />
          <TextField source="status" label="Status" />
          <Totals source="total" label="Total" />
          <EditButton />
        </Datagrid>
      )}
    </List>
  );
};
