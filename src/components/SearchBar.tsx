import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const SearchContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  maxWidth: '400px',
  backgroundColor: theme.palette.background.paper,
  borderRadius: '4px',
  border: `1px solid ${theme.palette.divider}`,
  '&:hover': {
    borderColor: theme.palette.primary.main,
  },
  '&:focus-within': {
    borderColor: theme.palette.primary.main,
    boxShadow: `0 0 0 2px ${theme.palette.primary.main}25`,
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 2),
    width: '100%',
    '&::placeholder': {
      color: theme.palette.text.secondary,
    },
  },
}));

const SearchIconWrapper = styled(Box)(({ theme }) => ({
  padding: theme.spacing(0, 2),
  display: 'flex',
  alignItems: 'center',
  color: theme.palette.text.secondary,
}));

const AdvancedButton = styled(Button)(({ theme }) => ({
  minWidth: 'auto',
  padding: theme.spacing(0.5, 2),
  borderLeft: `1px solid ${theme.palette.divider}`,
  borderRadius: 0,
  textTransform: 'none',
  color: theme.palette.primary.main,
  '&:hover': {
    backgroundColor: theme.palette.action.hover,
  },
}));

export interface SearchBarProps {
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  onAdvancedClick?: () => void;
  showAdvanced?: boolean;
  className?: string;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  placeholder = 'Search',
  value = '',
  onChange,
  onAdvancedClick,
  showAdvanced = true,
  className,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(event.target.value);
  };

  return (
    <SearchContainer className={className}>
      <StyledInputBase
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        fullWidth
      />
      {showAdvanced && (
        <AdvancedButton
          onClick={onAdvancedClick}
          disableRipple
        >
          Advanced
        </AdvancedButton>
      )}
      <SearchIconWrapper>
        <SearchIcon fontSize="small" />
      </SearchIconWrapper>
    </SearchContainer>
  );
};

export default SearchBar; 