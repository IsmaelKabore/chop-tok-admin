// src/layout/Layout.tsx
import {
  Layout as RaLayout,
  AppBar,
  MenuItemLink,
  UserMenu,
  Notification,
} from 'react-admin';
import {
  Box,
  IconButton,
  TextField,
  Toolbar,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import TableRestaurantIcon from '@mui/icons-material/TableRestaurant';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import HistoryIcon from '@mui/icons-material/History';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import SettingsIcon from '@mui/icons-material/Settings';

const CustomAppBar = (props: any) => (
  <AppBar {...props} elevation={1} sx={{ background: '#fff', color: '#333' }}>
    <Toolbar>
      {/* Search */}
      <Box sx={{ flex: 1, display: 'flex', alignItems: 'center' }}>
        <TextField
          placeholder="Search…"
          variant="outlined"
          size="small"
          sx={{
            borderRadius: 2,
            background: '#f0f0f0',
            '& .MuiOutlinedInput-root': { paddingRight: 0 },
          }}
          InputProps={{
            endAdornment: (
              <IconButton size="small" sx={{ mr: -1 }}>
                <SearchIcon />
              </IconButton>
            ),
          }}
        />
      </Box>
      {/* Right icons */}
      <IconButton>
        {/* locale switcher placeholder */}
        🌐
      </IconButton>
      <Notification />
      <UserMenu />
    </Toolbar>
  </AppBar>
);

const CustomMenu = () => (
  <Box sx={{ mt: 1 }}>
    <MenuItemLink to="/" primaryText="Dashboard" leftIcon={<DashboardIcon />} />
    <MenuItemLink
      to="/orders"
      primaryText="Orders"
      leftIcon={<ReceiptLongIcon />}
    />
    <MenuItemLink
      to="/table"
      primaryText="Table"
      leftIcon={<TableRestaurantIcon />}
    />
    <MenuItemLink
      to="/products"
      primaryText="Menu"
      leftIcon={<MenuBookIcon />}
    />
    <MenuItemLink
      to="/history"
      primaryText="History"
      leftIcon={<HistoryIcon />}
    />
    <MenuItemLink
      to="/wallet"
      primaryText="Wallet"
      leftIcon={<AccountBalanceWalletIcon />}
    />
    <MenuItemLink
      to="/calendar"
      primaryText="Calendar"
      leftIcon={<CalendarTodayIcon />}
    />
    <MenuItemLink
      to="/settings"
      primaryText="Settings"
      leftIcon={<SettingsIcon />}
    />
  </Box>
);

export default (props: any) => (
  <RaLayout {...props} appBar={CustomAppBar} menu={CustomMenu} />
);
