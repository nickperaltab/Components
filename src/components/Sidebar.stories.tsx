import type { Meta, StoryObj } from '@storybook/react';
import { Sidebar } from './Sidebar';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  // You can customize the theme here if needed
});

const meta: Meta<typeof Sidebar> = {
  title: 'Components/Sidebar',
  component: Sidebar,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Sidebar>;

export const Default: Story = {};

// Show with different active items
export const WithDashboardActive: Story = {
  args: {
    defaultSelected: 'dashboard',
  },
};

export const WithContactsActive: Story = {
  args: {
    defaultSelected: 'contacts',
  },
};

export const WithMoreAppsExpanded: Story = {
  args: {
    defaultSelected: 'more-apps',
    expandedDropdown: true,
  },
}; 