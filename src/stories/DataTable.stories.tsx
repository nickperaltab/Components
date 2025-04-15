import type { Meta, StoryObj } from '@storybook/react';
import { DataTable } from '../components/DataTable';

const meta: Meta<typeof DataTable> = {
  title: 'Components/DataTable',
  component: DataTable,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof DataTable>;

const columns = [
  { field: 'name', headerName: 'Name', width: 200 },
  { field: 'email', headerName: 'Email', width: 250 },
  { field: 'status', headerName: 'Status', width: 150 },
  { field: 'lastActive', headerName: 'Last Active', width: 200 },
];

const sampleData = [
  {
    name: 'John Doe',
    email: 'john.doe@example.com',
    status: 'Active',
    lastActive: '2024-04-15',
  },
  {
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    status: 'Inactive',
    lastActive: '2024-04-14',
  },
  {
    name: 'Bob Johnson',
    email: 'bob.johnson@example.com',
    status: 'Active',
    lastActive: '2024-04-15',
  },
];

export const WithData: Story = {
  args: {
    columns,
    data: sampleData,
  },
};

export const Loading: Story = {
  args: {
    columns,
    data: [],
    loading: true,
  },
};

export const Empty: Story = {
  args: {
    columns,
    data: [],
    emptyMessage: 'No contacts found',
  },
}; 