import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  // You can customize the theme here if needed
});

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Filled: Story = {
  args: {
    children: 'Button',
    variant: 'filled',
  },
};

export const Outlined: Story = {
  args: {
    children: 'Button',
    variant: 'outlined',
  },
};

export const FilledWithDropdown: Story = {
  args: {
    children: 'Button',
    variant: 'filled',
    hasDropdown: true,
  },
};

export const OutlinedWithDropdown: Story = {
  args: {
    children: 'Button',
    variant: 'outlined',
    hasDropdown: true,
  },
};

// Show all variants together
export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px' }}>
      <Button variant="filled">Button</Button>
      <Button variant="outlined">Button</Button>
      <Button variant="filled" hasDropdown>Button</Button>
      <Button variant="outlined" hasDropdown>Button</Button>
    </div>
  ),
}; 