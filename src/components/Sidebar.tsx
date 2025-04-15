import React, { useState } from 'react';
import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemButton,
  Divider,
  IconButton,
  styled,
} from '@mui/material';
import {
  Dashboard,
  People,
  LightbulbOutlined,
  Assignment,
  Receipt,
  Description,
  ReceiptLong,
  Payment,
  Email,
  Person,
  Timer,
  Apps,
  Store,
  Menu as MenuIcon,
  KeyboardArrowDown,
} from '@mui/icons-material';

interface NavItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  hasDropdown?: boolean;
}

const navItems: NavItem[] = [
  { id: 'dashboard', label: 'Dashboard', icon: <Dashboard /> },
  { id: 'contacts', label: 'Contacts', icon: <People /> },
  { id: 'opportunities', label: 'Opportunities', icon: <LightbulbOutlined /> },
  { id: 'activities', label: 'Activities', icon: <Assignment /> },
  { id: 'invoices', label: 'Invoices', icon: <Receipt /> },
  { id: 'estimates', label: 'Estimates', icon: <Description /> },
  { id: 'sales-receipts', label: 'Sales Receipts', icon: <ReceiptLong /> },
  { id: 'payments', label: 'Payments', icon: <Payment /> },
  { id: 'email-marketing', label: 'Email Marketing', icon: <Email /> },
  { id: 'donor-pages', label: 'Donor Pages', icon: <Person /> },
  { id: 'time-tracking', label: 'Time Tracking', icon: <Timer /> },
  { id: 'more-apps', label: 'More Apps', icon: <Apps />, hasDropdown: true },
];

const StyledSidebar = styled(Box)(({ theme }) => ({
  width: 280,
  height: '100vh',
  backgroundColor: '#002B66', // Dark blue background
  color: 'white',
  display: 'flex',
  flexDirection: 'column',
  '& .MuiListItemButton-root': {
    padding: '12px 24px',
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.08)',
    },
    '&.Mui-selected': {
      backgroundColor: '#0052CC', // Bright blue for active state
      '&:hover': {
        backgroundColor: '#0052CC',
      },
    },
  },
  '& .MuiListItemIcon-root': {
    color: 'white',
    minWidth: 40,
    '& svg': {
      fontSize: 20,
    },
  },
  '& .MuiListItemText-root': {
    '& .MuiTypography-root': {
      fontSize: '0.875rem',
      fontWeight: 500,
    },
  },
  '& .MuiDivider-root': {
    borderColor: 'rgba(255, 255, 255, 0.12)',
    margin: '8px 0',
  },
}));

const Header = styled(Box)({
  padding: '24px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  '& img': {
    height: 32,
  },
});

export const Sidebar = () => {
  const [selectedItem, setSelectedItem] = useState('dashboard');
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleItemClick = (id: string) => {
    setSelectedItem(id);
  };

  return (
    <StyledSidebar>
      <Header>
        <img src="/method-logo-white.svg" alt="Method" />
        <IconButton
          sx={{ color: 'white', display: { sm: 'none' } }}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <MenuIcon />
        </IconButton>
      </Header>

      <List component="nav" sx={{ flex: 1 }}>
        {navItems.map((item) => (
          <ListItem key={item.id} disablePadding>
            <ListItemButton
              selected={selectedItem === item.id}
              onClick={() => handleItemClick(item.id)}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.label} />
              {item.hasDropdown && <KeyboardArrowDown />}
            </ListItemButton>
          </ListItem>
        ))}
        <Divider />
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Store />
            </ListItemIcon>
            <ListItemText primary="App Marketplace" />
          </ListItemButton>
        </ListItem>
      </List>
    </StyledSidebar>
  );
}; 