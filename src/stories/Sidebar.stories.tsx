import type { Meta, StoryObj } from '@storybook/react';
import { Sidebar, SidebarProps } from '../components/Sidebar';
import { useState } from 'react';

const meta: Meta<typeof Sidebar> = {
  title: 'Components/Sidebar',
  component: Sidebar,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Sidebar>;

const SidebarWithState = (args: Partial<SidebarProps>) => {
  const [expanded, setExpanded] = useState(args.expanded ?? true);
  return (
    <Sidebar
      {...args}
      expanded={expanded}
      onToggle={() => setExpanded(!expanded)}
    />
  );
};

export const Expanded: Story = {
  render: (args) => <SidebarWithState {...args} expanded={true} />,
};

export const Collapsed: Story = {
  render: (args) => <SidebarWithState {...args} expanded={false} />,
}; 