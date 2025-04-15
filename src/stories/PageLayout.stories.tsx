import type { Meta, StoryObj } from '@storybook/react';
import { PageLayout } from '../components/PageLayout';
import { Box, Typography, Paper } from '@mui/material';

const meta: Meta<typeof PageLayout> = {
  title: 'Components/PageLayout',
  component: PageLayout,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof PageLayout>;

const SampleContent = () => (
  <Box sx={{ p: 3 }}>
    <Paper sx={{ p: 3, mb: 3 }}>
      <Typography variant="h6" gutterBottom>
        Sample Content
      </Typography>
      <Typography>
        This is a sample content area that demonstrates how the PageLayout component
        handles different types of content. The layout includes a responsive sidebar
        and a top app bar with navigation controls.
      </Typography>
    </Paper>
    
    <Paper sx={{ p: 3 }}>
      <Typography variant="h6" gutterBottom>
        Additional Section
      </Typography>
      <Typography>
        You can add multiple sections of content within the main area. The layout
        will automatically adjust to accommodate the content while maintaining the
        proper spacing and structure.
      </Typography>
    </Paper>
  </Box>
);

export const Default: Story = {
  args: {
    title: 'Dashboard',
    children: <SampleContent />,
  },
};

export const WithLongTitle: Story = {
  args: {
    title: 'Very Long Page Title That Might Need to Be Truncated',
    children: <SampleContent />,
  },
}; 