import React from 'react';
import { Autocomplete, AutocompleteRenderInputParams, Box, Typography, styled } from '@mui/material';
import { Input } from './Input';
import ClearIcon from '@mui/icons-material/Clear';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export interface DropdownOption {
  label: string;
  value: string | number;
  subtitle?: string;
  date?: string;
  isNew?: boolean;
  [key: string]: any;
}

export interface DropdownProps {
  label?: string;
  required?: boolean;
  error?: boolean;
  errorMessage?: string;
  options: DropdownOption[];
  value: DropdownOption | null;
  onChange: (option: DropdownOption | null) => void;
  placeholder?: string;
  disabled?: boolean;
  showNewAction?: boolean;
  onNewAction?: () => void;
  newActionLabel?: string;
  getOptionLabel?: (option: DropdownOption) => string;
  renderOption?: (props: React.HTMLAttributes<HTMLLIElement>, option: DropdownOption) => React.ReactNode;
}

const StyledAutocomplete = styled(Autocomplete<DropdownOption>)({
  '& .MuiOutlinedInput-root': {
    paddingRight: 0,
  },
  '& .MuiAutocomplete-endAdornment': {
    right: 8,
  },
  '& .MuiAutocomplete-popupIndicator': {
    color: '#111827',
  },
  '& .MuiAutocomplete-clearIndicator': {
    color: '#111827',
  },
  '& .MuiAutocomplete-option': {
    padding: '8px 16px',
    '&[aria-selected="true"]': {
      backgroundColor: '#F3F4F6',
    },
    '&.Mui-focused': {
      backgroundColor: '#F9FAFB',
    },
  },
});

export const Dropdown: React.FC<DropdownProps> = ({
  label,
  required,
  error,
  errorMessage,
  options,
  value,
  onChange,
  placeholder,
  disabled,
  showNewAction,
  onNewAction,
  newActionLabel = 'New Customer',
  getOptionLabel,
  renderOption,
}) => {
  // Insert the "New" action at the top if needed
  const displayOptions = showNewAction
    ? [{ label: newActionLabel, value: '__new__', isNew: true }, ...options]
    : options;

  return (
    <StyledAutocomplete
      options={displayOptions}
      value={value}
      onChange={(_, newValue) => {
        if (newValue?.isNew && onNewAction) {
          onNewAction();
        } else {
          onChange(newValue);
        }
      }}
      getOptionLabel={getOptionLabel || ((option: DropdownOption) => option.label)}
      isOptionEqualToValue={(option, value) => option.value === value.value}
      disabled={disabled}
      clearOnEscape
      popupIcon={<ArrowDropDownIcon />}
      clearIcon={<ClearIcon />}
      renderInput={(params: AutocompleteRenderInputParams) => (
        <Input
          {...params}
          label={label}
          required={required}
          error={error}
          errorMessage={errorMessage}
          placeholder={placeholder}
        />
      )}
      renderOption={
        renderOption ||
        ((props, option) =>
          option.isNew ? (
            <Box component="li" {...props}>
              <Typography color="primary" fontWeight={500}>
                {option.label}
              </Typography>
            </Box>
          ) : (
            <Box component="li" {...props}>
              <Box>
                <Typography>{option.label}</Typography>
                {option.subtitle && (
                  <Typography variant="body2" color="text.secondary">
                    {option.subtitle}
                  </Typography>
                )}
              </Box>
            </Box>
          ))
      }
      fullWidth
    />
  );
};

export default Dropdown; 