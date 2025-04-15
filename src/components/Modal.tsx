import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, IconButton, Typography, Box, styled } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { Button } from './Button';

export interface ModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
}

const StyledDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialog-paper': {
    borderRadius: '8px',
    maxWidth: '480px',
    width: '100%',
    margin: '16px',
    boxShadow: '0px 4px 6px -2px rgba(0, 0, 0, 0.05), 0px 10px 15px -3px rgba(0, 0, 0, 0.10)',
  },
}));

const StyledDialogTitle = styled(DialogTitle)({
  padding: '24px',
  paddingBottom: '0',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
});

const StyledDialogContent = styled(DialogContent)({
  padding: '16px 24px',
  '&.MuiDialogContent-root': {
    paddingTop: '16px',
  },
});

const StyledDialogActions = styled(DialogActions)({
  padding: '16px 24px',
  gap: '12px',
});

export const Modal: React.FC<ModalProps> = ({
  open,
  onClose,
  title,
  children,
  primaryButtonText = 'Yes',
  secondaryButtonText = 'No',
  onPrimaryClick,
  onSecondaryClick,
}) => {
  return (
    <StyledDialog
      open={open}
      onClose={onClose}
      aria-labelledby="modal-title"
    >
      <StyledDialogTitle id="modal-title">
        <Typography variant="h6" component="h2" sx={{ fontWeight: 500 }}>
          {title}
        </Typography>
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 16,
            top: 16,
            color: '#111827',
          }}
        >
          <CloseIcon />
        </IconButton>
      </StyledDialogTitle>
      <StyledDialogContent>
        {children}
      </StyledDialogContent>
      <StyledDialogActions>
        <Button
          variant="outlined"
          onClick={onSecondaryClick || onClose}
        >
          {secondaryButtonText}
        </Button>
        <Button
          variant="filled"
          onClick={onPrimaryClick}
        >
          {primaryButtonText}
        </Button>
      </StyledDialogActions>
    </StyledDialog>
  );
};

export default Modal; 