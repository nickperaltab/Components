import type { Meta, StoryObj } from '@storybook/react';
import { TextSection } from './TextSection';

const meta: Meta<typeof TextSection> = {
  title: 'Components/TextSection',
  component: TextSection,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof TextSection>;

export const Default: Story = {
  args: {
    subtitle: 'Subtitle Text',
    paragraph: 'Paragraph content goes here',
    title: 'Section Title',
    links: [
      { text: 'First Link', href: '#' },
      { text: 'Second Link', href: '#' },
      { text: 'Third Link', href: '#' },
    ],
  },
};

export const TextOnly: Story = {
  args: {
    subtitle: 'Subtitle Text',
    paragraph: 'Paragraph content goes here',
  },
};

export const LinksOnly: Story = {
  args: {
    title: 'Links Section',
    links: [
      { text: 'Documentation', href: '#' },
      { text: 'Support', href: '#' },
      { text: 'Contact Us', href: '#' },
      { text: 'Hidden Link', href: '#' }, // This will be hidden as per design
      { text: 'Another Hidden', href: '#' }, // This will be hidden as per design
    ],
  },
}; 