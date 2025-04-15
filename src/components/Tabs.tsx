import React from 'react';
import { Box, Tab as MuiTab, Tabs as MuiTabs, styled } from '@mui/material';

interface TabItem {
  id: string;
  label: string;
}

interface TabsProps {
  items: TabItem[];
  value: string;
  onChange: (value: string) => void;
}

const StyledTabs = styled(MuiTabs)(({ theme }) => ({
  minHeight: 'unset',
  '& .MuiTabs-indicator': {
    height: 2,
    backgroundColor: '#0066FF',
  },
}));

const StyledTab = styled(MuiTab)({
  textTransform: 'none',
  minHeight: 'unset',
  padding: '12px 16px',
  fontWeight: 500,
  fontSize: '0.875rem',
  color: '#64748B',
  '&.Mui-selected': {
    color: '#0066FF',
    fontWeight: 600,
  },
});

export const Tabs = ({ items, value, onChange }: TabsProps) => {
  const handleChange = (_: React.SyntheticEvent, newValue: string) => {
    onChange(newValue);
  };

  return (
    <Box sx={{ borderBottom: 1, borderColor: '#E2E8F0' }}>
      <StyledTabs
        value={value}
        onChange={handleChange}
        aria-label="navigation tabs"
      >
        {items.map((item) => (
          <StyledTab
            key={item.id}
            value={item.id}
            label={item.label}
            disableRipple
          />
        ))}
      </StyledTabs>
    </Box>
  );
}; 