import React from 'react';
import { useDataProvider } from 'react-admin';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { CardWithIcon } from './CardWithIcon';

export const NewCustomers: React.FC = () => {
  const dataProvider = useDataProvider();
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    const since = new Date();
    since.setDate(since.getDate() - 7);
    dataProvider.getList('customers', {
      filter: { since: since.toISOString() },
      pagination: { page: 1, perPage: 1 },
      sort: { field: 'id', order: 'ASC' },
    })
    .then(({ total }) => setCount(total))
    .catch(() => {});
  }, [dataProvider]);

  return <CardWithIcon icon={<PersonAddIcon />} title="New Customers (7d)" value={count} />;
};
