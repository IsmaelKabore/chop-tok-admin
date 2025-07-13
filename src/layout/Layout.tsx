import React from 'react';
import {
  Layout as RaLayout,
  AppBar,
  Sidebar,
  MenuItemLink,
} from 'react-admin';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import DashboardIcon from '@mui/icons-material/Dashboard';

const CustomMenu: React.FC = () => (
  <Sidebar>
    <MenuItemLink to="/" primaryText="Dashboard" leftIcon={<DashboardIcon />} />
    <MenuItemLink to="/general/product" primaryText="Menu" leftIcon={<RestaurantMenuIcon />} />
    <MenuItemLink to="/orders" primaryText="Orders" leftIcon={<ShoppingCartIcon />} />
  </Sidebar>
);

const Layout: React.FC = props => (
  <RaLayout
    {...props}
    appBar={AppBar}
    menu={CustomMenu}
  />
);

export default Layout;
