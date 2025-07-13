import React from 'react';
import { Admin, Resource } from 'react-admin';
import dataProvider from './dataProvider';
import authProvider from './authProvider';
import Layout from './layout';
import Dashboard from './dashboard/index';
import { ProductList, ProductCreate, ProductEdit } from './products/index';
import { OrderList } from './orders/OrderList';
import { OrderEdit } from './orders/OrderEdit';

const App: React.FC = () => (
  <Admin
    layout={Layout}
    dashboard={Dashboard}
    dataProvider={dataProvider}
    authProvider={authProvider}
  >
    <Resource
      name="general/product"
      list={ProductList}
      create={ProductCreate}
      edit={ProductEdit}
    />
    <Resource
      name="orders"
      list={OrderList}
      edit={OrderEdit}
    />
  </Admin>
);

export default App;
