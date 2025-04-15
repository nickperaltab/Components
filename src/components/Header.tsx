import React from 'react';
import { styled } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

const HeaderContainer = styled('div')({
  position: 'relative',
  width: '100%',
  height: '48px',
  background: '#FFFFFF',
  borderBottom: '1px solid #E2E8F0',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0 16px',
});

const TitleSection = styled('div')({
  display: 'flex',
  alignItems: 'center',
  gap: '4px',
  cursor: 'pointer',
  '&:hover': {
    opacity: 0.9,
  },
});

const Title = styled('h1')({
  fontFamily: 'Inter, sans-serif',
  fontSize: '16px',
  fontWeight: 500,
  color: '#1A1A1A',
  margin: 0,
});

const IconsSection = styled('div')({
  display: 'flex',
  alignItems: 'center',
  gap: '16px',
});

const IconButton = styled('button')({
  width: '32px',
  height: '32px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: 'none',
  background: 'transparent',
  borderRadius: '6px',
  cursor: 'pointer',
  padding: 0,
  color: '#666666',
  '&:hover': {
    background: '#F5F5F5',
  },
  '& svg': {
    width: '20px',
    height: '20px',
  },
});

const Avatar = styled('div')({
  width: '32px',
  height: '32px',
  borderRadius: '50%',
  overflow: 'hidden',
  cursor: 'pointer',
  '& img': {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
});

interface HeaderProps {
  title?: string;
  onTitleClick?: () => void;
  onSearchClick?: () => void;
  onAddClick?: () => void;
  onHelpClick?: () => void;
  onAvatarClick?: () => void;
  avatarSrc?: string;
}

export const Header: React.FC<HeaderProps> = ({
  title = 'Title',
  onTitleClick,
  onSearchClick,
  onAddClick,
  onHelpClick,
  onAvatarClick,
  avatarSrc = 'https://via.placeholder.com/32',
}) => {
  return (
    <HeaderContainer>
      <TitleSection onClick={onTitleClick}>
        <Title>{title}</Title>
        <KeyboardArrowDownIcon sx={{ fontSize: 20, color: '#666666' }} />
      </TitleSection>
      
      <IconsSection>
        <IconButton onClick={onSearchClick}>
          <SearchIcon />
        </IconButton>
        <IconButton onClick={onAddClick}>
          <AddIcon />
        </IconButton>
        <IconButton onClick={onHelpClick}>
          <HelpOutlineIcon />
        </IconButton>
        <Avatar onClick={onAvatarClick}>
          <img src={avatarSrc} alt="User avatar" />
        </Avatar>
      </IconsSection>
    </HeaderContainer>
  );
}; 