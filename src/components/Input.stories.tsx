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
    placeholder: 'Enter text...',
  },
};

export const WithLabel: Story = {
  args: {
    label: 'Input Label',
    placeholder: 'Enter text...',
  },
};

export const Required: Story = {
  args: {
    label: 'Required Field',
    required: true,
    placeholder: 'Enter text...',
  },
};

export const WithError: Story = {
  args: {
    label: 'Error State',
    error: true,
    errorMessage: 'This field has an error',
    value: 'Invalid input',
  },
};

export const TextArea: Story = {
  args: {
    label: 'Description',
    placeholder: 'Enter your description...',
    multiline: true,
    minRows: 3,
    maxRows: 6,
  },
};

export const TextAreaWithValue: Story = {
  args: {
    label: 'Memo (Internal)',
    placeholder: 'Enter internal notes...',
    multiline: true,
    minRows: 4,
    value: 'This is a longer text that demonstrates how the textarea handles multiple lines of content. It will automatically resize based on content up to the maxRows limit.',
  },
};

export const FixedHeightTextArea: Story = {
  args: {
    label: 'Customer Message',
    placeholder: 'Enter message to customer...',
    multiline: true,
    rows: 4,
    sx: { width: '400px' },
  },
};

export const CharacterLimitedTextArea: Story = {
  args: {
    label: 'Limited Message',
    placeholder: 'Enter your message...',
    multiline: true,
    minRows: 3,
    maxRows: 5,
    inputProps: { maxLength: 200 },
    helperText: '200 character limit',
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