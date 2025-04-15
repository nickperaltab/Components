import React from 'react';
import { styled } from '@mui/material/styles';
import MuiIconButton from '@mui/material/IconButton';
import { alpha } from '@mui/material/styles';

const StyledIconButton = styled(MuiIconButton, {
  shouldForwardProp: (prop) => prop !== 'variant' && prop !== 'size',
})<{
  variant?: 'default' | 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
}>(({ theme, variant = 'default', size = 'medium' }) => ({
  padding: size === 'small' ? 6 : size === 'medium' ? 8 : 12,
  color: variant === 'primary' 
    ? theme.palette.primary.main
    : variant === 'secondary'
    ? theme.palette.secondary.main
    : theme.palette.text.secondary,
  
  '&:hover': {
    backgroundColor: variant === 'primary'
      ? alpha(theme.palette.primary.main, 0.08)
      : variant === 'secondary'
      ? alpha(theme.palette.secondary.main, 0.08)
      : theme.palette.action.hover,
  },

  '&:active': {
    backgroundColor: variant === 'primary'
      ? alpha(theme.palette.primary.main, 0.16)
      : variant === 'secondary'
      ? alpha(theme.palette.secondary.main, 0.16)
      : theme.palette.action.selected,
  },

  '& .MuiSvgIcon-root': {
    fontSize: size === 'small' ? 20 : size === 'medium' ? 24 : 28,
  },

  '&.Mui-disabled': {
    opacity: 0.5,
    color: variant === 'default' 
      ? theme.palette.text.disabled
      : 'inherit',
  },
}));

export interface IconButtonProps {
  icon: React.ReactNode;
  onClick?: () => void;
  variant?: 'default' | 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  title?: string;
  className?: string;
  'aria-label'?: string;
}

export const IconButton: React.FC<IconButtonProps> = ({
  icon,
  onClick,
  variant = 'default',
  size = 'medium',
  disabled = false,
  title,
  className,
  'aria-label': ariaLabel,
}) => {
  return (
    <StyledIconButton
      onClick={onClick}
      variant={variant}
      size={size}
      disabled={disabled}
      title={title}
      className={className}
      aria-label={ariaLabel}
    >
      {icon}
    </StyledIconButton>
  );
};

export default IconButton; 