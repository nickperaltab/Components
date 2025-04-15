import React from 'react';
import { styled } from '@mui/material';

const Container = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
});

const Title = styled('h2')({
  margin: 0,
  fontSize: '20px',
  fontWeight: 600,
  color: '#1A1A1A',
  fontFamily: 'Inter, sans-serif',
});

const Box = styled('div')<{ isEmpty?: boolean }>(({ isEmpty }) => ({
  border: isEmpty ? '2px dashed #CBD5E1' : '1px solid #CBD5E1',
  borderRadius: '4px',
  padding: '24px',
  minHeight: '120px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: isEmpty ? 'center' : 'flex-start',
  justifyContent: isEmpty ? 'center' : 'flex-start',
  gap: '8px',
  cursor: 'pointer',
  '&:hover': {
    borderColor: '#94A3B8',
  },
}));

const EmptyText = styled('span')({
  color: '#3B82F6',
  fontSize: '16px',
  fontWeight: 500,
  textAlign: 'center',
});

const SignatureName = styled('div')({
  fontFamily: 'Caveat, cursive',
  fontSize: '32px',
  color: '#1A1A1A',
  marginBottom: '8px',
});

const SignatureDate = styled('div')({
  fontSize: '14px',
  color: '#1A1A1A',
  marginBottom: '16px',
});

const SignatureId = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: '4px',
  '& label': {
    fontSize: '14px',
    color: '#1A1A1A',
    fontWeight: 500,
  },
  '& span': {
    fontSize: '14px',
    color: '#64748B',
    fontFamily: 'monospace',
  },
});

const EditLink = styled('a')({
  color: '#3B82F6',
  fontSize: '14px',
  textDecoration: 'none',
  cursor: 'pointer',
  '&:hover': {
    textDecoration: 'underline',
  },
});

interface SignatureBoxProps {
  signature?: {
    name: string;
    date: string;
    id: string;
  };
  onEdit?: () => void;
  onClick?: () => void;
}

export const SignatureBox: React.FC<SignatureBoxProps> = ({
  signature,
  onEdit,
  onClick,
}) => {
  const isEmpty = !signature;

  return (
    <Container>
      <Title>Signature</Title>
      <Box isEmpty={isEmpty} onClick={onClick}>
        {isEmpty ? (
          <EmptyText>Add a signature</EmptyText>
        ) : (
          <>
            <SignatureName>{signature.name}</SignatureName>
            <SignatureDate>{signature.name} {signature.date}</SignatureDate>
            <SignatureId>
              <label>ID:</label>
              <span>{signature.id}</span>
            </SignatureId>
            <EditLink onClick={(e) => {
              e.stopPropagation();
              onEdit?.();
            }}>
              Edit signature
            </EditLink>
          </>
        )}
      </Box>
    </Container>
  );
}; 