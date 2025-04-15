import React from 'react';
import { Box, Typography, styled } from '@mui/material';
import { SvgIconComponent } from '@mui/icons-material';

export type PillType = 'default' | 'blue' | 'red' | 'green' | 'yellow';

export interface PillProps {
  /**
   * The type of pill to display
   * Use 'default' when more than 4 statuses are available
   */
  type?: PillType;
  /**
   * The text to display in the pill
   */
  label: string;
  /**
   * Optional leading icon
   */
  leadingIcon?: SvgIconComponent;
  /**
   * Optional trailing icon
   */
  trailingIcon?: SvgIconComponent;
}

const StyledPill = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'pillType',
})<{ pillType: PillType }>(({ theme, pillType }) => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '0px 8px',
  gap: '8px',
  height: '16px',
  borderRadius: '100px',
  backgroundColor: '#F8FAFC', // Light background for all pills
  '& .MuiSvgIcon-root': {
    fontSize: '8px', // Smaller dot size to match design
    color: (() => {
      switch (pillType) {
        case 'blue':
          return '#2196F3'; // Bright blue
        case 'red':
          return '#F44336'; // Bright red
        case 'green':
          return '#4CAF50'; // Bright green
        case 'yellow':
          return '#FFC107'; // Yellow/amber
        default:
          return '#9E9E9E'; // Grey
      }
    })(),
  },
  '& .MuiTypography-root': {
    fontSize: '11px',
    lineHeight: '16px',
    fontWeight: 500,
    color: '#1A202C', // Dark grey text for all pills
  },
}));

export const Pill: React.FC<PillProps> = ({
  type = 'default',
  label,
  leadingIcon: LeadingIcon,
  trailingIcon: TrailingIcon,
}) => {
  return (
    <StyledPill pillType={type}>
      {LeadingIcon && <LeadingIcon />}
      <Typography variant="caption">{label}</Typography>
      {TrailingIcon && <TrailingIcon />}
    </StyledPill>
  );
}; 