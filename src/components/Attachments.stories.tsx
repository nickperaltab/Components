import type { Meta, StoryObj } from '@storybook/react';
import { Attachments } from './Attachments';

const meta = {
  title: 'Components/Attachments',
  component: Attachments,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Attachments>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Empty: Story = {
  args: {
    files: [],
    onFilesSelected: (files: File[]) => console.log('Files selected:', files),
  },
};

export const WithFiles: Story = {
  args: {
    files: [
      new File(['test content'], 'document.pdf', { type: 'application/pdf' }),
      new File(['test content'], 'image.jpg', { type: 'image/jpeg' }),
    ],
    onFilesSelected: (files: File[]) => console.log('Files selected:', files),
  },
}; 