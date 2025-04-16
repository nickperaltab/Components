import type { Meta, StoryObj } from '@storybook/react';
import { DatePicker } from './DatePicker';

const meta: Meta<typeof DatePicker> = {
  title: 'Components/DatePicker',
  component: DatePicker,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof DatePicker>;

export const Default: Story = {
  args: {
    label: 'Date',
    value: '',
    onChange: (value) => console.log('Date changed:', value),
  },
};

export const WithValue: Story = {
  args: {
    label: 'Date',
    value: '2024-03-15',
    onChange: (value) => console.log('Date changed:', value),
  },
};

export const WithError: Story = {
  args: {
    label: 'Date',
    value: '2024-03-15',
    error: true,
    errorMessage: 'Invalid date',
    onChange: (value) => console.log('Date changed:', value),
  },
};

export const Disabled: Story = {
  args: {
    label: 'Date',
    value: '2024-03-15',
    disabled: true,
    onChange: (value) => console.log('Date changed:', value),
  },
};

export const Required: Story = {
  args: {
    label: 'Date',
    value: '',
    required: true,
    onChange: (value) => console.log('Date changed:', value),
  },
}; 