import type { Meta, StoryObj } from '@storybook/react';
import { IconButton } from './IconButton';
import SearchIcon from '@mui/icons-material/Search';
import SettingsIcon from '@mui/icons-material/Settings';
import CloudSyncIcon from '@mui/icons-material/CloudSync';
import GridViewIcon from '@mui/icons-material/GridView';
import Box from '@mui/material/Box';

const meta = {
  title: 'Components/IconButton',
  component: IconButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    icon: <SearchIcon />,
    'aria-label': 'search',
    title: 'Search',
  },
};

export const Primary: Story = {
  args: {
    icon: <CloudSyncIcon />,
    variant: 'primary',
    'aria-label': 'sync',
    title: 'Sync',
  },
};

export const Secondary: Story = {
  args: {
    icon: <SettingsIcon />,
    variant: 'secondary',
    'aria-label': 'settings',
    title: 'Settings',
  },
};

export const Sizes: Story = {
  args: {
    icon: <GridViewIcon />,
  },
  render: () => (
    <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
      <IconButton
        icon={<GridViewIcon />}
        size="small"
        title="Small"
        aria-label="small grid view"
      />
      <IconButton
        icon={<GridViewIcon />}
        size="medium"
        title="Medium"
        aria-label="medium grid view"
      />
      <IconButton
        icon={<GridViewIcon />}
        size="large"
        title="Large"
        aria-label="large grid view"
      />
    </Box>
  ),
};

export const Disabled: Story = {
  args: {
    icon: <SettingsIcon />,
    disabled: true,
    'aria-label': 'settings',
    title: 'Settings (Disabled)',
  },
};

export const AllVariants: Story = {
  args: {
    icon: <SettingsIcon />,
  },
  render: () => (
    <Box sx={{ display: 'flex', gap: 2 }}>
      <IconButton
        icon={<SettingsIcon />}
        variant="default"
        title="Default"
        aria-label="default settings"
      />
      <IconButton
        icon={<SettingsIcon />}
        variant="primary"
        title="Primary"
        aria-label="primary settings"
      />
      <IconButton
        icon={<SettingsIcon />}
        variant="secondary"
        title="Secondary"
        aria-label="secondary settings"
      />
    </Box>
  ),
}; 