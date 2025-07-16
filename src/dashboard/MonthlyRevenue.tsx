import React from 'react';
import { useDataProvider } from 'react-admin';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { CardWithIcon } from './CardWithIcon';

export const MonthlyRevenue: React.FC = () => {
  const dataProvider = useDataProvider();
  const [revenue, setRevenue] = React.useState(0);

  React.useEffect(() => {
    const now = new Date();
    const start = new Date(now.getFullYear(), now.getMonth(), 1);
    dataProvider
      .getList('orders', {
        filter: { date_gte: start.toISOString(), status: 'completed' },
        pagination: { page: 1, perPage: 1000 },
        sort: { field: 'date', order: 'ASC' },
      })
      .then(({ data }) => {
        const sum = data.reduce((acc: any, o: any) => acc + (o.total || 0), 0);
        setRevenue(sum);
      })
      .catch(() => {});
  }, [dataProvider]);

  return (
    <CardWithIcon
      icon={<AttachMoneyIcon />}
      title="This Month’s Revenue"
      value={`$${revenue.toFixed(2)}`}
    />
  );
};
