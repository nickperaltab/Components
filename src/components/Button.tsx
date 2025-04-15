import React from 'react';
import { Button as MuiButton, ButtonProps as MuiButtonProps } from '@mui/material';
import { KeyboardArrowDown as KeyboardArrowDownIcon } from '@mui/icons-material';

export interface ButtonProps extends Omit<MuiButtonProps, 'variant'> {
  variant?: 'filled' | 'outlined';
  hasDropdown?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'filled',
  hasDropdown = false,
  children,
  sx,
  ...props
}) => {
  return (
    <MuiButton
      variant={variant === 'filled' ? 'contained' : 'outlined'}
      sx={{
        textTransform: 'none',
        borderRadius: '100px',
        px: 3,
        py: 1,
        fontSize: '0.875rem',
        fontWeight: 500,
        minWidth: 'auto',
        height: 36,
        ...(variant === 'filled' && {
          bgcolor: 'primary.main',
          color: 'white',
          '&:hover': {
            bgcolor: 'primary.dark',
          },
        }),
        ...(variant === 'outlined' && {
          color: 'primary.main',
          borderColor: 'primary.main',
          '&:hover': {
            borderColor: 'primary.dark',
            bgcolor: 'rgba(0, 0, 0, 0.04)',
          },
        }),
        ...sx,
      }}
      endIcon={hasDropdown ? <KeyboardArrowDownIcon /> : undefined}
      {...props}
    >
      {children}
    </MuiButton>
  );
}; 