import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ErrorIcon from '@mui/icons-material/Error';

const Container = styled(Box)(({ theme }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  padding: '4px 8px',
  borderRadius: '16px',
  gap: '4px',
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
  fontSize: '14px',
  fontWeight: 500,
  lineHeight: '20px',
}));

export interface SyncWidgetProps {
  status: 'synced' | 'conflict';
}

export const SyncWidget: React.FC<SyncWidgetProps> = ({ status }) => {
  const isSynced = status === 'synced';

  return (
    <Container
      sx={{
        backgroundColor: isSynced ? '#E8F5E9' : '#FFF3E0',
      }}
    >
      {isSynced ? (
        <CheckCircleIcon
          sx={{
            fontSize: 16,
            color: '#2E7D32', // Green
          }}
        />
      ) : (
        <ErrorIcon
          sx={{
            fontSize: 16,
            color: '#ED6C02', // Orange
          }}
        />
      )}
      <StyledTypography
        sx={{
          color: isSynced ? '#2E7D32' : '#ED6C02',
        }}
      >
        {isSynced ? 'Synced' : 'Sync conflict'}
      </StyledTypography>
    </Container>
  );
}; 