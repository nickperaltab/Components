import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Tabs } from './Tabs';

const meta: Meta<typeof Tabs> = {
  title: 'Components/Tabs',
  component: Tabs,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Tabs>;

// Example items that match the design
const donationItems = [
  { id: 'donations', label: 'Donations' },
  { id: 'recurring-plans', label: 'Recurring Plans' },
];

// Interactive story with state management
export const Default = {
  render: () => {
    const [value, setValue] = useState('donations');
    return (
      <Tabs
        items={donationItems}
        value={value}
        onChange={(newValue) => setValue(newValue)}
      />
    );
  },
};

// Story showing more tabs
export const MultipleItems = {
  render: () => {
    const [value, setValue] = useState('overview');
    return (
      <Tabs
        items={[
          { id: 'overview', label: 'Overview' },
          { id: 'details', label: 'Details' },
          { id: 'settings', label: 'Settings' },
          { id: 'history', label: 'History' },
        ]}
        value={value}
        onChange={(newValue) => setValue(newValue)}
      />
    );
  },
}; 