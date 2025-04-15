import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  // You can customize the theme here if needed
});

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <div style={{ width: '320px' }}>
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    placeholder: 'Enter text',
  },
};

export const WithLabel: Story = {
  args: {
    label: 'Label',
    placeholder: 'Enter text',
  },
};

export const Required: Story = {
  args: {
    label: 'Required field',
    placeholder: 'Enter text',
    required: true,
  },
};

export const WithValue: Story = {
  args: {
    label: 'Label',
    value: 'Input text',
  },
};

export const WithError: Story = {
  args: {
    label: 'Label',
    error: true,
    errorMessage: 'Error message goes here',
    value: 'Invalid input',
  },
};

// Show all variants together
export const AllStates: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <Input placeholder="Enter text" />
      <Input label="With label" placeholder="Enter text" />
      <Input label="Required field" required placeholder="Enter text" />
      <Input label="With value" value="Input text" />
      <Input
        label="With error"
        error
        errorMessage="Error message goes here"
        value="Invalid input"
      />
    </div>
  ),
}; 