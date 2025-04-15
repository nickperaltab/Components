import { styled } from '@mui/material';

const Container = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  padding: 0,
  gap: '8px',
});

const TextBlock = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  padding: 0,
  width: '100%',
  '& .heading': {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: '0 0 4px',
    width: '100%',
    fontFamily: 'Source Sans Pro',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '14px',
    lineHeight: '20px',
    color: '#0F1B31',
  },
  '& .paragraph': {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: '0 0 4px',
    width: '100%',
    fontFamily: 'Source Sans Pro',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '14px',
    lineHeight: '20px',
    color: '#2A394A',
  }
});

const LinkList = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  padding: 0,
  gap: '8px',
  width: '100%',
  '& .title': {
    width: '100%',
    fontFamily: 'Source Sans Pro',
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: '24px',
    lineHeight: '32px',
    color: '#2A394A',
  }
});

const StyledLink = styled('a')({
  width: '100%',
  fontFamily: 'Source Sans Pro',
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: '14px',
  lineHeight: '20px',
  color: '#0D71C8',
  textDecoration: 'none',
  cursor: 'pointer',
  '&:hover': {
    textDecoration: 'underline',
  }
});

interface TextSectionProps {
  subtitle?: string;
  paragraph?: string;
  title?: string;
  links?: Array<{
    text: string;
    href: string;
  }>;
}

export const TextSection = ({ subtitle, paragraph, title, links }: TextSectionProps) => {
  return (
    <Container>
      {(subtitle || paragraph) && (
        <TextBlock>
          {subtitle && <div className="heading">{subtitle}</div>}
          {paragraph && <div className="paragraph">{paragraph}</div>}
        </TextBlock>
      )}
      
      {(title || links) && (
        <LinkList>
          {title && <div className="title">{title}</div>}
          {links?.map((link, index) => (
            <StyledLink 
              key={index} 
              href={link.href}
              style={{ display: index > 2 ? 'none' : 'block' }}
            >
              {link.text}
            </StyledLink>
          ))}
        </LinkList>
      )}
    </Container>
  );
}; 