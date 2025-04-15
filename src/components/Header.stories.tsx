import type { Meta, StoryObj } from '@storybook/react';
import { Header } from './Header';

const meta: Meta<typeof Header> = {
  title: 'Components/Header',
  component: Header,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'light',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Default: Story = {
  args: {
    title: 'Title',
    avatarSrc: 'https://i.pravatar.cc/32',
    onTitleClick: () => console.log('Title clicked'),
    onSearchClick: () => console.log('Search clicked'),
    onAddClick: () => console.log('Add clicked'),
    onHelpClick: () => console.log('Help clicked'),
    onAvatarClick: () => console.log('Avatar clicked'),
  },
};

// Story showing the header with a custom background to better showcase the border
export const WithBackground: Story = {
  args: {
    ...Default.args,
  },
  decorators: [
    (Story) => (
      <div style={{ background: '#F8FAFC', minHeight: '100vh' }}>
        <Story />
      </div>
    ),
  ],
};

// Story showing the header with a long title
export const LongTitle: Story = {
  args: {
    ...Default.args,
    title: 'Very Long Title That Should Still Look Good',
  },
};

// Story showing hover states
export const WithInteractions: Story = {
  args: {
    ...Default.args,
  },
  parameters: {
    pseudo: {
      hover: ['.MuiButtonBase-root', '.avatar'],
      focus: ['.MuiButtonBase-root'],
    },
  },
}; 