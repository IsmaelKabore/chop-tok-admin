import React from 'react';
import { Grid } from '@mui/material';
import { Title } from 'react-admin';
import { NbNewOrders } from './NbNewOrders';
import { PendingOrders } from './PendingOrders';
import { NewCustomers } from './NewCustomers';
import { MonthlyRevenue } from './MonthlyRevenue';

const Dashboard: React.FC = () => (
  <>
    <Title title="Restaurant Dashboard" />
    <Grid container spacing={2}>
      <Grid size={{ xs: 12, md: 3 }}><NbNewOrders /></Grid>
      <Grid size={{ xs: 12, md: 3 }}><PendingOrders /></Grid>
      <Grid size={{ xs: 12, md: 3 }}><NewCustomers /></Grid>
      <Grid size={{ xs: 12, md: 3 }}><MonthlyRevenue /></Grid>
    </Grid>
  </>
);

export default Dashboard;
