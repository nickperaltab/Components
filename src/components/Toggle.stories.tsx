import type { Meta, StoryObj } from '@storybook/react';
import { Toggle } from './Toggle.tsx';

const meta: Meta<typeof Toggle> = {
  title: 'Components/Toggle',
  component: Toggle,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Toggle>;

export const EnabledOn: Story = {
  args: {
    checked: true,
    disabled: false,
  },
};

export const EnabledOff: Story = {
  args: {
    checked: false,
    disabled: false,
  },
};

export const DisabledOn: Story = {
  args: {
    checked: true,
    disabled: true,
  },
};

export const DisabledOff: Story = {
  args: {
    checked: false,
    disabled: true,
  },
};

// Interactive story to demonstrate all states
export const Interactive: Story = {
  args: {
    checked: false,
    disabled: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive toggle that can be clicked to change state. Hover and focus states are available.',
      },
    },
  },
}; 