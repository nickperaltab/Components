import type { Meta, StoryObj } from '@storybook/react';
import { Pill } from './Pill';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { FiberManualRecord as DotIcon } from '@mui/icons-material';

const theme = createTheme({
  // You can customize the theme here if needed
});

const meta: Meta<typeof Pill> = {
  title: 'Components/Pill',
  component: Pill,
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
type Story = StoryObj<typeof Pill>;

export const Default: Story = {
  args: {
    label: 'Label',
    type: 'default',
    leadingIcon: DotIcon,
  },
};

export const Blue: Story = {
  args: {
    label: 'Label',
    type: 'blue',
    leadingIcon: DotIcon,
  },
};

export const Red: Story = {
  args: {
    label: 'Label',
    type: 'red',
    leadingIcon: DotIcon,
  },
};

export const Green: Story = {
  args: {
    label: 'Label',
    type: 'green',
    leadingIcon: DotIcon,
  },
};

export const Yellow: Story = {
  args: {
    label: 'Label',
    type: 'yellow',
    leadingIcon: DotIcon,
  },
};

// Show all variants together
export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Pill label="Label" type="default" leadingIcon={DotIcon} />
      <Pill label="Label" type="blue" leadingIcon={DotIcon} />
      <Pill label="Label" type="red" leadingIcon={DotIcon} />
      <Pill label="Label" type="green" leadingIcon={DotIcon} />
      <Pill label="Label" type="yellow" leadingIcon={DotIcon} />
    </div>
  ),
}; 