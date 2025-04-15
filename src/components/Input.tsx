import React from 'react';
import { TextField, TextFieldProps, styled } from '@mui/material';

export interface InputProps extends Omit<TextFieldProps, 'variant'> {
  error?: boolean;
  errorMessage?: string;
  label?: string;
  required?: boolean;
}

const StyledTextField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    backgroundColor: theme.palette.background.paper,
    borderRadius: '4px',
    '& fieldset': {
      borderColor: theme.palette.divider,
    },
    '&:hover fieldset': {
      borderColor: theme.palette.primary.main,
    },
    '&.Mui-focused fieldset': {
      borderColor: theme.palette.primary.main,
    },
    '&.Mui-error fieldset': {
      borderColor: theme.palette.error.main,
    },
  },
  '& .MuiOutlinedInput-input': {
    padding: '8px 12px',
    fontSize: '0.875rem',
  },
  '& .MuiFormLabel-root': {
    fontSize: '0.875rem',
    '&.Mui-error': {
      color: theme.palette.error.main,
    },
  },
  '& .MuiFormHelperText-root': {
    marginLeft: 0,
    '&.Mui-error': {
      color: theme.palette.error.main,
    },
  },
}));

export const Input: React.FC<InputProps> = ({
  error = false,
  errorMessage,
  label,
  required = false,
  ...props
}) => {
  return (
    <StyledTextField
      variant="outlined"
      error={error}
      helperText={error ? errorMessage : undefined}
      label={label}
      required={required}
      fullWidth
      {...props}
    />
  );
}; 