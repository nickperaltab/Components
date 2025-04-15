import type { Meta, StoryObj } from '@storybook/react';
import { Dropdown } from './Dropdown';

const meta = {
  title: 'Components/Dropdown',
  component: Dropdown,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ width: '320px' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

const customers = [
  { value: '1', label: 'Billy Gates', subtitle: 'Customer' },
  { value: '2', label: 'Brian Meadows', subtitle: 'Customer' },
  { value: '3', label: 'Brian Payments', subtitle: 'Customer' },
  { value: '4', label: 'Diego', subtitle: 'Customer' },
];

const proposals = [
  { 
    value: '7', 
    label: '7', 
    subtitle: 'This is a proposal made by Jake',
    date: 'Jan-10-2023'
  },
];

export const CustomerDropdown: Story = {
  args: {
    label: 'Customer',
    required: true,
    options: customers,
    value: customers[0],
    onChange: (option) => console.log('Selected:', option),
    showNewAction: true,
    onNewAction: () => console.log('New Customer clicked'),
  },
};

export const CustomerDropdownEmpty: Story = {
  args: {
    label: 'Customer',
    required: true,
    options: customers,
    value: null,
    onChange: (option) => console.log('Selected:', option),
    showNewAction: true,
    onNewAction: () => console.log('New Customer clicked'),
  },
};

export const CustomerDropdownOpen: Story = {
  args: {
    label: 'Customer',
    required: true,
    options: customers,
    value: customers[0],
    onChange: (option) => console.log('Selected:', option),
    showNewAction: true,
    onNewAction: () => console.log('New Customer clicked'),
  },
  parameters: {
    pseudo: { focus: true },
  },
};

export const ProposalDropdown: Story = {
  args: {
    label: 'Proposal',
    options: proposals,
    value: proposals[0],
    onChange: (option) => console.log('Selected:', option),
  },
};

export const OpportunityDropdown: Story = {
  args: {
    label: 'Opportunity',
    options: [],
    value: null,
    onChange: (option) => console.log('Selected:', option),
  },
}; 