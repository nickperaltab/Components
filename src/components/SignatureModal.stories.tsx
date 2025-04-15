import type { Meta, StoryObj } from '@storybook/react';
import { SignatureModal } from './SignatureModal';

const meta: Meta<typeof SignatureModal> = {
  title: 'Components/SignatureModal',
  component: SignatureModal,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof SignatureModal>;

export const Default: Story = {
  args: {
    onClose: () => console.log('Modal closed'),
    onSubmit: (data) => console.log('Signature submitted:', data),
  },
};

// Story demonstrating the modal with pre-filled data
export const PreFilled: Story = {
  args: {
    onClose: () => console.log('Modal closed'),
    onSubmit: (data) => console.log('Signature submitted:', data),
  },
  render: (args) => {
    return (
      <div style={{ height: '100vh', background: '#F8FAFC' }}>
        <SignatureModal {...args} />
      </div>
    );
  },
}; 