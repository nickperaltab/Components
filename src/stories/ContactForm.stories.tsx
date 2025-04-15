import type { Meta, StoryObj } from '@storybook/react';
import { ContactForm, ContactFormData } from '../components/ContactForm';
import { within, userEvent } from '@storybook/testing-library';

const meta: Meta<typeof ContactForm> = {
  title: 'Components/ContactForm',
  component: ContactForm,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ContactForm>;

export const Empty: Story = {
  args: {
    onSubmit: (data: ContactFormData) => console.log('Form submitted:', data),
  },
};

export const WithValidationErrors: Story = {
  args: {
    onSubmit: (data: ContactFormData) => console.log('Form submitted:', data),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const submitButton = canvas.getByText('Save Contact');
    await userEvent.click(submitButton);
  },
};

export const Prefilled: Story = {
  args: {
    initialData: {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      phone: '+1 234 567 8900',
      company: 'Acme Corp',
      status: 'active',
    },
    onSubmit: (data: ContactFormData) => console.log('Form submitted:', data),
  },
}; 