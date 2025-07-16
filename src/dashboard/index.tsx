import { Box, Grid } from '@mui/material';
import { NbNewOrders } from './NbNewOrders';
import { PendingOrders } from './PendingOrders';
import { NewCustomers } from './NewCustomers';
import { MonthlyRevenue } from './MonthlyRevenue';
import { OrderChart } from './OrderChart';

export default function Dashboard() {
  return (
    <Box p={2}>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <NbNewOrders />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <PendingOrders />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <NewCustomers />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <MonthlyRevenue />
        </Grid>
      </Grid>

      <Grid container spacing={2} sx={{ mt: 2 }}>
        <Grid size={{ xs: 12, md: 8 }}>
          <OrderChart />
        </Grid>
      </Grid>
    </Box>
  );
}
