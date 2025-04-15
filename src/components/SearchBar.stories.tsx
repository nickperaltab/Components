import type { Meta, StoryObj } from '@storybook/react';
import { SearchBar } from './SearchBar';

const meta = {
  title: 'Components/SearchBar',
  component: SearchBar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SearchBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Search',
    showAdvanced: true,
    onChange: (value) => console.log('Search value:', value),
    onAdvancedClick: () => console.log('Advanced clicked'),
  },
};

export const WithoutAdvanced: Story = {
  args: {
    placeholder: 'Search items...',
    showAdvanced: false,
    onChange: (value) => console.log('Search value:', value),
  },
};

export const WithValue: Story = {
  args: {
    placeholder: 'Search',
    value: 'Example search term',
    showAdvanced: true,
    onChange: (value) => console.log('Search value:', value),
    onAdvancedClick: () => console.log('Advanced clicked'),
  },
};

export const CustomWidth: Story = {
  args: {
    placeholder: 'Search estimates...',
    showAdvanced: true,
    onChange: (value) => console.log('Search value:', value),
    onAdvancedClick: () => console.log('Advanced clicked'),
  },
  decorators: [
    (Story) => (
      <div style={{ width: '600px' }}>
        <Story />
      </div>
    ),
  ],
}; 