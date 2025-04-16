import React from 'react';
import { styled } from '@mui/material/styles';
import { TextField, IconButton, InputAdornment } from '@mui/material';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import CloseIcon from '@mui/icons-material/Close';

const StyledTextField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    backgroundColor: theme.palette.background.paper,
    borderRadius: '4px',
    height: '36px',
    '& fieldset': {
      borderColor: theme.palette.divider,
    },
    '&:hover fieldset': {
      borderColor: theme.palette.primary.main,
    },
    '&.Mui-focused fieldset': {
      borderColor: theme.palette.primary.main,
    },
  },
  '& .MuiOutlinedInput-input': {
    padding: '8px 12px',
    fontSize: '0.875rem',
    height: '20px',
    '&::-webkit-calendar-picker-indicator': {
      display: 'none',
    },
  },
  '& .MuiInputAdornment-root': {
    color: theme.palette.text.secondary,
    marginLeft: 0,
    marginRight: 0,
  },
  '& .MuiIconButton-root': {
    padding: '4px',
    marginRight: '4px',
  },
}));

export interface DatePickerProps {
  value: string;
  onChange: (value: string) => void;
  label?: string;
  placeholder?: string;
  error?: boolean;
  errorMessage?: string;
  required?: boolean;
  className?: string;
  disabled?: boolean;
}

export const DatePicker: React.FC<DatePickerProps> = ({
  value,
  onChange,
  label,
  placeholder = 'MM/DD/YYYY',
  error = false,
  errorMessage,
  required = false,
  className,
  disabled = false,
}) => {
  const handleClear = (event: React.MouseEvent) => {
    event.stopPropagation();
    onChange('');
  };

  const formatDate = (dateString: string): string => {
    if (!dateString) return '';
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return dateString;
    return date.toLocaleDateString('en-US', {
      month: '2-digit',
      day: '2-digit',
      year: 'numeric',
    });
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <StyledTextField
      type="date"
      value={value}
      onChange={handleChange}
      label={label}
      placeholder={placeholder}
      error={error}
      helperText={error ? errorMessage : undefined}
      required={required}
      className={className}
      disabled={disabled}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            {value && (
              <IconButton
                size="small"
                onClick={handleClear}
                sx={{
                  '&:hover': {
                    backgroundColor: 'transparent',
                  },
                }}
              >
                <CloseIcon
                  fontSize="small"
                  sx={{ fontSize: '16px' }}
                />
              </IconButton>
            )}
            <CalendarTodayIcon
              sx={{
                fontSize: '20px',
                color: 'text.secondary',
                marginRight: '8px',
              }}
            />
          </InputAdornment>
        ),
      }}
    />
  );
}; 