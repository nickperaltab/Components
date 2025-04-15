import type { Meta, StoryObj } from '@storybook/react';
import { SignatureBox } from './SignatureBox';

const meta: Meta<typeof SignatureBox> = {
  title: 'Components/SignatureBox',
  component: SignatureBox,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof SignatureBox>;

export const Empty: Story = {
  args: {
    onClick: () => console.log('Add signature clicked'),
  },
};

export const Filled: Story = {
  args: {
    signature: {
      name: 'A name',
      date: 'Apr-15-2025',
      id: '4cecc07b95e949e9a44a0997b427fd9d',
    },
    onEdit: () => console.log('Edit signature clicked'),
    onClick: () => console.log('Signature box clicked'),
  },
}; 