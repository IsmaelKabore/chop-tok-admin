import React from 'react';
import { useDataProvider } from 'react-admin';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { CardWithIcon } from './CardWithIcon';

export const NbNewOrders: React.FC = () => {
  const dataProvider = useDataProvider();
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    dataProvider.getList('orders', {
      filter: {},
      pagination: { page: 1, perPage: 1 },
      sort: { field: 'id', order: 'ASC' },
    })
    .then(({ total }) => setCount(total))
    .catch(() => {});
  }, [dataProvider]);

  return <CardWithIcon icon={<ShoppingCartIcon />} title="Total Orders" value={count} />;
};
