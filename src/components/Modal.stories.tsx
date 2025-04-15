import type { Meta, StoryObj } from '@storybook/react';
import { Modal } from './Modal';
import { Typography } from '@mui/material';

const meta = {
  title: 'Components/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const EmailConfirmation: Story = {
  args: {
    open: true,
    title: 'Are you sure you would like to send this email?',
    children: (
      <>
        <Typography variant="body1" gutterBottom>
          This email will be sent to 50 recipients. The email contains personalized content and will be delivered immediately.
        </Typography>
        <Typography variant="body1">
          Please confirm that you have reviewed the content and are ready to proceed with sending this email campaign.
        </Typography>
      </>
    ),
    primaryButtonText: 'Yes',
    secondaryButtonText: 'No',
    onPrimaryClick: () => console.log('Email confirmed'),
    onSecondaryClick: () => console.log('Email cancelled'),
    onClose: () => console.log('Modal closed'),
  },
};

export const Default: Story = {
  args: {
    open: true,
    title: 'Modal Title',
    children: (
      <Typography>
        This is the content of the modal. You can put any React components here.
      </Typography>
    ),
    onClose: () => console.log('Modal closed'),
  },
};

export const CustomButtons: Story = {
  args: {
    open: true,
    title: 'Delete Item',
    children: (
      <Typography>
        Are you sure you want to delete this item? This action cannot be undone.
      </Typography>
    ),
    primaryButtonText: 'Delete',
    secondaryButtonText: 'Cancel',
    onPrimaryClick: () => console.log('Delete confirmed'),
    onSecondaryClick: () => console.log('Delete cancelled'),
    onClose: () => console.log('Modal closed'),
  },
}; 