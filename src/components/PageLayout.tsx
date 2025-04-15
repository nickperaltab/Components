import React from 'react';
import { Box, AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import {
  Menu as MenuIcon,
  Notifications as NotificationsIcon,
  AccountCircle as AccountCircleIcon,
} from '@mui/icons-material';
import { Sidebar } from './Sidebar';

export interface PageLayoutProps {
  title: string;
  children: React.ReactNode;
}

export const PageLayout: React.FC<PageLayoutProps> = ({ title, children }) => {
  const [sidebarExpanded, setSidebarExpanded] = React.useState(true);

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      <Sidebar
        expanded={sidebarExpanded}
        onToggle={() => setSidebarExpanded(!sidebarExpanded)}
      />
      
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${sidebarExpanded ? 240 : 64}px)` },
          ml: { sm: `${sidebarExpanded ? 240 : 64}px` },
          transition: 'margin 0.2s, width 0.2s',
        }}
      >
        <AppBar
          position="fixed"
          sx={{
            width: { sm: `calc(100% - ${sidebarExpanded ? 240 : 64}px)` },
            ml: { sm: `${sidebarExpanded ? 240 : 64}px` },
            transition: 'margin 0.2s, width 0.2s',
          }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              edge="start"
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            
            <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
              {title}
            </Typography>
            
            <IconButton color="inherit">
              <NotificationsIcon />
            </IconButton>
            
            <IconButton color="inherit">
              <AccountCircleIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        
        <Toolbar /> {/* Spacer for AppBar */}
        
        <Box sx={{ mt: 2 }}>
          {children}
        </Box>
      </Box>
    </Box>
  );
}; 