import React, { useState } from 'react';
import { styled } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { Tabs } from './Tabs';
import { Button } from './Button';

const Overlay = styled('div')({
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 1000,
});

const Modal = styled('div')({
  backgroundColor: '#FFFFFF',
  borderRadius: '8px',
  width: '100%',
  maxWidth: '600px',
  maxHeight: '90vh',
  overflow: 'auto',
  position: 'relative',
});

const Header = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '16px 24px',
  borderBottom: '1px solid #E2E8F0',
});

const CloseButton = styled('button')({
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  padding: '8px',
  color: '#64748B',
  '&:hover': {
    color: '#1A1A1A',
  },
});

const Content = styled('div')({
  padding: '24px',
});

const InputGroup = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
  marginBottom: '24px',
});

const Label = styled('label')({
  fontSize: '14px',
  fontWeight: 500,
  color: '#1A1A1A',
});

const Input = styled('input')({
  padding: '12px',
  border: '1px solid #CBD5E1',
  borderRadius: '4px',
  fontSize: '16px',
  '&:focus': {
    outline: 'none',
    borderColor: '#3B82F6',
  },
});

const Footer = styled('div')({
  display: 'flex',
  justifyContent: 'flex-end',
  gap: '12px',
  padding: '16px 24px',
  borderTop: '1px solid #E2E8F0',
});

interface SignatureModalProps {
  onClose: () => void;
  onSubmit: (data: { name: string }) => void;
}

export const SignatureModal: React.FC<SignatureModalProps> = ({
  onClose,
  onSubmit,
}) => {
  const [activeTab, setActiveTab] = useState('type');
  const [name, setName] = useState('');

  const handleSubmit = () => {
    onSubmit({ name });
  };

  const tabItems = [
    { id: 'type', label: 'Type' },
    { id: 'draw', label: 'Draw' },
  ];

  return (
    <Overlay onClick={onClose}>
      <Modal onClick={(e) => e.stopPropagation()}>
        <Header>
          <Tabs
            items={tabItems}
            value={activeTab}
            onChange={(value) => setActiveTab(value)}
          />
          <CloseButton onClick={onClose}>
            <CloseIcon />
          </CloseButton>
        </Header>

        <Content>
          <InputGroup>
            <Label>Full name</Label>
            <Input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your full name"
            />
          </InputGroup>
        </Content>

        <Footer>
          <Button 
            variant="outlined" 
            onClick={onClose}
          >
            Cancel
          </Button>
          <Button 
            variant="filled" 
            onClick={handleSubmit}
          >
            {activeTab === 'type' ? 'Add signature' : 'Save'}
          </Button>
        </Footer>
      </Modal>
    </Overlay>
  );
}; 