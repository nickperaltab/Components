import type { Meta, StoryObj } from '@storybook/react';
import { EditableGrid, type Column } from './EditableGrid';

const meta = {
  title: 'Components/EditableGrid',
  component: EditableGrid,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof EditableGrid>;

export default meta;
type Story = StoryObj<typeof meta>;

const columns: Column[] = [
  { field: 'item', headerName: 'Item', width: 200, editable: true },
  { field: 'description', headerName: 'Description', width: 300, editable: true },
  { field: 'qty', headerName: 'QTY', width: 100, editable: true, type: 'number' },
  { field: 'rate', headerName: 'Rate', width: 100, editable: true, type: 'number' },
  { 
    field: 'status', 
    headerName: 'Status', 
    width: 120, 
    editable: true, 
    type: 'select',
    options: ['Pending', 'In Progress', 'Completed']
  },
];

const sampleRows = [
  {
    id: 1,
    item: 'Website Design',
    description: 'Custom website design and development',
    qty: 1,
    rate: 1500,
    status: 'In Progress',
  },
  {
    id: 2,
    item: 'Logo Design',
    description: 'Brand logo design with multiple revisions',
    qty: 1,
    rate: 500,
    status: 'Completed',
  },
  {
    id: 3,
    item: 'SEO Package',
    description: 'Monthly SEO optimization service',
    qty: 3,
    rate: 300,
    status: 'Pending',
  },
];

export const Editable: Story = {
  args: {
    columns,
    rows: sampleRows,
    onRowUpdate: (newRow) => console.log('Row updated:', newRow),
    onRowDelete: (id) => console.log('Row deleted:', id),
    isReadOnly: false,
  },
};

export const ReadOnly: Story = {
  args: {
    columns,
    rows: sampleRows,
    isReadOnly: true,
  },
};

export const Empty: Story = {
  args: {
    columns,
    rows: [],
    isReadOnly: false,
  },
};

export const SingleRow: Story = {
  args: {
    columns,
    rows: [sampleRows[0]],
    onRowUpdate: (newRow) => console.log('Row updated:', newRow),
    onRowDelete: (id) => console.log('Row deleted:', id),
    isReadOnly: false,
  },
}; 