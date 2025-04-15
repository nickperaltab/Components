import { styled } from '@mui/material';
import React from 'react';

interface ToggleProps {
  checked: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
}

const ToggleTrack = styled('div')<{ checked: boolean; disabled?: boolean }>(
  ({ theme, checked, disabled }) => ({
    position: 'relative',
    width: '44px',
    height: '24px',
    borderRadius: '12px',
    cursor: disabled ? 'not-allowed' : 'pointer',
    transition: 'all 0.2s ease',
    backgroundColor: disabled
      ? checked
        ? '#A8C6F0' // Disabled On
        : '#D1D5DB' // Disabled Off
      : checked
      ? '#0066FF' // Enabled On
      : '#64748B', // Enabled Off

    '&:hover': {
      backgroundColor: !disabled && (checked ? '#0052CC' : '#475569'),
    },

    '&:focus-within': {
      outline: '2px solid #0066FF',
      outlineOffset: '2px',
    },
  })
);

const ToggleHandle = styled('div')<{ checked: boolean; disabled?: boolean }>(
  ({ checked, disabled }) => ({
    position: 'absolute',
    top: '2px',
    left: checked ? '22px' : '2px',
    width: '20px',
    height: '20px',
    borderRadius: '50%',
    backgroundColor: '#FFFFFF',
    transition: 'left 0.2s ease',
    boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.1)',
  })
);

const HiddenInput = styled('input')({
  position: 'absolute',
  width: '100%',
  height: '100%',
  opacity: 0,
  cursor: 'inherit',
  margin: 0,
  padding: 0,
});

export const Toggle: React.FC<ToggleProps> = ({
  checked,
  onChange,
  disabled = false,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!disabled && onChange) {
      onChange(event.target.checked);
    }
  };

  return (
    <ToggleTrack checked={checked} disabled={disabled}>
      <HiddenInput
        type="checkbox"
        checked={checked}
        onChange={handleChange}
        disabled={disabled}
      />
      <ToggleHandle checked={checked} disabled={disabled} />
    </ToggleTrack>
  );
}; 