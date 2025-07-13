import React from 'react';
import { useDataProvider } from 'react-admin';
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';
import { CardWithIcon } from './CardWithIcon';

export const PendingOrders: React.FC = () => {
  const dataProvider = useDataProvider();
  const [pending, setPending] = React.useState(0);

  React.useEffect(() => {
    dataProvider.getList('orders', {
      filter: { status: 'pending' },
      pagination: { page: 1, perPage: 1 },
      sort: { field: 'id', order: 'ASC' },
    })
    .then(({ total }) => setPending(total))
    .catch(() => {});
  }, [dataProvider]);

  return <CardWithIcon icon={<HourglassEmptyIcon />} title="Pending Orders" value={pending} />;
};
