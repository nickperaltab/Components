import type { Meta, StoryObj } from '@storybook/react';
import ContactsGrid from './ContactsGrid';

const meta: Meta<typeof ContactsGrid> = {
  title: 'Components/Grid',
  component: ContactsGrid,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    onContactClick: { action: 'clicked' },
    onPageChange: { action: 'page changed' },
  },
};

export default meta;
type Story = StoryObj<typeof ContactsGrid>;

// Sample data for stories
const sampleContacts = [
  {
    id: '1',
    name: 'Amber Ellis',
    title: 'Account Representative',
    email: 'amber.bdsd@gg.com',
    company: 'Blue District School Board',
    phone: '(262)-841-3527',
    tags: ['VIP'],
  },
  {
    id: '2',
    name: 'Amy Ford',
    title: 'Marketing Director',
    email: 'amy.ford@sandfordand company.com',
    company: 'Sandford and Company',
    phone: '(723)-095-0934',
    tags: ['Australia'],
  },
  {
    id: '3',
    name: 'Annie Sutton',
    title: 'Senior Financial Analyst',
    email: 'sutton.annie@meezy.com',
    company: 'Meezy',
    phone: '(435)-504-5432',
    tags: ['VIP'],
  },
  {
    id: '4',
    name: 'Donald Reid',
    title: 'Teacher',
    email: 'donalreid@exploringtheartic.com',
    company: 'Exploring the Artic',
    phone: '(365)-734-9793',
    tags: ['Australia'],
  },
  {
    id: '5',
    name: 'Keith Stephens',
    title: 'Mechanical Systems',
    email: 'keith.stephens@doors.com',
    company: 'Doors, Doors, Doors',
    phone: '(101)-207-6836',
    tags: ['VIP'],
  },
  {
    id: '6',
    name: 'Marian Larson',
    title: 'Recruiter',
    email: 'marian.larson@twitterlistbust.com',
    company: 'Twitterlist Bust',
    phone: '(135)-840-7718',
  },
  {
    id: '7',
    name: 'Patrick Ross',
    title: 'Mechanical Systems',
    email: 'patrickross@browserzoom.com',
    company: 'Broserzoom',
    phone: '(504)-525-9168',
    tags: ['VIP'],
  },
  {
    id: '8',
    name: 'Roberts Carpenter',
    title: 'Account Representative',
    email: 'carpenter@jaloo.us',
    company: 'Jaloo',
    phone: '(814)-048-7077',
  },
  {
    id: '9',
    name: 'Suzanne Parker',
    title: 'Compensations Analyst',
    email: 'parker.suzanne@closeproximity.org',
    company: 'Close Proximity',
    phone: '(321)-240-4717',
    tags: ['Canada'],
  },
  {
    id: '10',
    name: 'Jake Day',
    title: 'Data Coordinator',
    email: 'tomday@linkbridge.io',
    company: 'Linkbridge',
    phone: '(028)-411-2178',
    tags: ['VIP'],
  },
];

export const Default: Story = {
  args: {
    contacts: sampleContacts,
    currentPage: 1,
    totalItems: sampleContacts.length,
    itemsPerPage: 10,
  },
};

export const Empty: Story = {
  args: {
    contacts: [],
    currentPage: 1,
    totalItems: 0,
    itemsPerPage: 10,
  },
};

export const SinglePage: Story = {
  args: {
    contacts: sampleContacts.slice(0, 3),
    currentPage: 1,
    totalItems: 3,
    itemsPerPage: 10,
  },
};

export const LastPage: Story = {
  args: {
    contacts: sampleContacts.slice(-2),
    currentPage: 2,
    totalItems: sampleContacts.length,
    itemsPerPage: 8,
  },
}; 