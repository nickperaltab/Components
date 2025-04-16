import type { Meta, StoryObj } from '@storybook/react';
import { SyncWidget } from './SyncWidget';

const meta = {
  title: 'Components/SyncWidget',
  component: SyncWidget,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SyncWidget>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Synced: Story = {
  args: {
    status: 'synced',
  },
};

export const SyncConflict: Story = {
  args: {
    status: 'conflict',
  },
}; 